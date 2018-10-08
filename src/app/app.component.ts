import { Component, OnInit } from '@angular/core';
import * as Threebox from '3box';
import Web3 from 'web3';
import { ThreeBox } from './3box/3box.service';

declare const web3: Web3;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-threebox';
  account: string;
  provider: any;
  box: any;

  constructor(private threebox: ThreeBox) {}

  async ngOnInit() {
    const localWeb3: Web3 = new Web3(web3.currentProvider);
    const accounts = await localWeb3.eth.getAccounts();
    this.account = accounts[0];
    this.provider = localWeb3.currentProvider;
    this.box = await Threebox.openBox(this.account, this.provider);
  }

  async setAddress(address: string) {
    Threebox.getProfile(address)
      .then(profile => console.log({profile}));
  }

  async getProfile() {
    this.box.public.all()
      .then(profile => console.log({profile}));
  }

  async openBox() {

  }

  setPublicName() {
    const isSet = this.box.public.set('name', 'Name from b2e');
    console.log({isSet});
  }

  getPublicName() {
    this.box.public.get('name')
      .then(name => console.log({name}));
  }

  setPrivateName() {
    this.box.private.set('name', 'bob');
  }

  getPrivateName() {
    this.box.private.get('name')
      .then(name => console.log({name}));
  }
}
