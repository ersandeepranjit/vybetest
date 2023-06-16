import { IToken,IAddress } from '@src/models/Vybe';
import EnvVars from "@src/constants/EnvVars";
import Web3 from '../util/Web3';
import axios from 'axios';
import { PublicKey, LAMPORTS_PER_SOL, PerfSample } from '@solana/web3.js';


async function getTokenSupply(): Promise<IToken[]> {

  const tokenPrices:any = await getPriceForTokens();
  const newToken: any[] = Object.keys(tokenPrices?.data.data).map(async (tokenAddress:any) =>{
    const tokenResponse: any =  await Web3.getTotalSupply(tokenAddress as PublicKey); 
    let priceResponse =  tokenPrices?.data.data[tokenAddress];
    let tempToken:IToken = {};
    tempToken.address = tokenAddress;
    tempToken.symbol = priceResponse.mintSymbol;
    tempToken.totalSupply = tokenResponse?.value?.uiAmount as number;
    tempToken.marketCapital = tempToken.totalSupply * priceResponse.price;
    return tempToken;
  });
  return Promise.all(newToken);

}


function getPriceForTokens(): Promise<Response> {
const tokenAddress : string[] =  EnvVars.BullishSPL.map(token=>token.address);
return axios.get(`${EnvVars.PriceApi+tokenAddress?.join(",")}`);
}

function getWalletBalance():Promise<IAddress[]>{

  const walletBalance:any[] = EnvVars.WalletAddresses.map(async (wallet:any)=>{
    const walletResponse: any =  await Web3.getAddressBalance(wallet as PublicKey); 
    const tempWallet:any  = {};
    tempWallet.address = wallet;
    tempWallet.balance = walletResponse/LAMPORTS_PER_SOL;  
    return tempWallet as IAddress;
  });
  return Promise.all(walletBalance);
}

function getPerformanceSample():Promise<PerfSample[]>{

    return Web3.getPerformanceSample(); 
}




// **** Export default **** //

export default {
  getTokenSupply,
  getWalletBalance,
  getPerformanceSample
} as const;
