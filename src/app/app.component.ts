import { WEB3 } from './web3';
import { Component, OnInit, Inject } from '@angular/core';
import { ThreeBox } from './3box/3box.service';

@Component({
  selector: 'app-root',
  template: '<p>3Box and Angular</p>'
})
export class AppComponent implements OnInit {

  constructor(
    @Inject(WEB3) private web3,
    private threebox: ThreeBox
  ) {}

  async ngOnInit() {
    // Get the current accounts in our provider
    const accounts = await this.web3.eth.getAccounts();

    // Wait to open a box
    await this.openBox(accounts[0]);

    // Launch in parallel setters then getters
    Promise.all([
      this.setPrivateProfile('name', 'francois'),
      this.setPublicProfile('name', 'grandschtroumpf')
    ]).then(() => Promise.all([
      this.getPrivateProfile('name'),
      this.getPublicProfile('name')
    ])).then(([privateName, publicName]) => {
      console.log(privateName); // francois
      console.log(publicName);  // grandschtroumpf
    });
  }

  /** Open a box and update the current box open in the service */
  public openBox(address?: string) {
    return this.threebox.openBox(address);
  }

  /** Set a public key in your profile */
  public setPublicProfile(key: string, value: string) {
    return this.threebox.box.public.set(key, value);
  }

  /** Get a public key in your profile */
  public getPublicProfile(key: string) {
    return this.threebox.box.public.get(key);
  }

  /** Set a private key in your profile */
  public setPrivateProfile(key: string, value: string) {
    return this.threebox.box.private.set(key, value);
  }

  /** Get a private key in your profile */
  public getPrivateProfile(key: string) {
    return this.threebox.box.private.get(key);
  }

  /**
   * Get the profile of an address
   * @param address the address to get the profile from.
   */
  public getProfile(address: string) {
    this.threebox.getProfile(address)
      .then(profile => console.log({profile}));
  }
}
