import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import VybeService from '@src/services/VybeService';
import { IAddress, IToken } from '@src/models/Vybe';
import { IReq, IRes } from './types/express/misc';
import { NextFunction } from 'express';
import { PerfSample } from '@solana/web3.js';


// **** Functions **** //

async function getTokenSupply(_: IReq, res: IRes, next:NextFunction) {
  try{
    const tokenSupply: IToken[] = await VybeService.getTokenSupply();
    return res.status(HttpStatusCodes.OK).json({ data:tokenSupply });
  }
  catch(err){
    next(err);
  }
 
}

async function getWalletBalance(_: IReq, res: IRes, next:NextFunction) {
  try{
    const walletBalance: IAddress[] = await VybeService.getWalletBalance();
    return res.status(HttpStatusCodes.OK).json({ data:walletBalance });
  }
  catch(err){
    next(err);
  }
 
}

async function getPerformanceSample(_: IReq, res: IRes, next:NextFunction) {
  try{
    const performanceSample: PerfSample[] = await VybeService.getPerformanceSample();
    return res.status(HttpStatusCodes.OK).json({ data:performanceSample });
  }
  catch(err){
    next(err);
  }
 
}



// **** Export default **** //

export default {
  getTokenSupply,
  getWalletBalance,
  getPerformanceSample

} as const;
