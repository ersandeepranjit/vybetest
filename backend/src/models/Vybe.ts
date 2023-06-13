// **** Variables **** //

import { PublicKey } from "@solana/web3.js";


// **** Types **** //

export interface IRpcResponse {
 jsonrpc:string;
 result:any;
 id:number
}

export interface IToken {
  id?: number;
  name?: string;
  totalSupply: number;
  address: PublicKey;
  symbol: string;
  marketCapital: number;

}
export interface IAddress {
  
  address:string;
  balance:number;

}


