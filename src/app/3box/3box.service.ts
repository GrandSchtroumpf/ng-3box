import { Inject, Injectable } from '@angular/core';
import { WEB3 } from '../web3';
import Web3 from 'web3';
import { BoxOptions, GetProfileOptions, Threebox } from './3box';
import * as ThreeboxFactory from '3box';

@Injectable({ providedIn: 'root' })
export class ThreeBox {

  constructor(@Inject(WEB3) private web3: Web3) {}

  /**
   * Opens the user space associated with the given address.
   * @param address An ethereum address.
   * @param options Optional parameters.
   * @returns The threeBox instance for the given address.
   */
  public openBox(address: string, options?: BoxOptions): Promise<Threebox> {
    if (!this.web3.currentProvider) { throw new Error('No web3 provider available'); }
    return ThreeboxFactory.openbox(address, this.web3.currentProvider, options) as Promise<Threebox>;
  }

  /**
   * Get the public profile of a given address.
   * @param address An Ethereum address.
   * @param options Optional parameters.
   * @returns A json object with the profile for the given address.
   */
  public getProfile(address: string, options?: GetProfileOptions): Promise<Object> {
    if (!this.web3.utils.isAddress(address)) { throw new Error(`This is not a valid address: ${address}`); }
    return ThreeboxFactory.getProfile(address, options);
  }
}

