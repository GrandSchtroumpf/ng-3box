import { Component } from '@angular/core';
import { ThreeBox } from './3box/3box.service';


@Component({
  selector: 'app-root',
  template: '<p>3Box and Angular</p>'
})
export class AppComponent {

  constructor(private threebox: ThreeBox) {}

  /**
   * Open a box then add it to the list of opened boxes
   */
  public openBox() {
    this.threebox.openBox();
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
