import * as solanaWeb3 from "@solana/web3.js";
import EnvVars from "@src/constants/EnvVars";


const connection = new solanaWeb3.Connection(EnvVars.SolanaRpcUrl, "confirmed");

const getTotalSupply = (tokenAddress:solanaWeb3.PublicKey):Promise< solanaWeb3.RpcResponseAndContext<solanaWeb3.TokenAmount>> =>{
  return connection.getTokenSupply(new solanaWeb3.PublicKey(tokenAddress));
}

const getAddressBalance = (address:solanaWeb3.PublicKey):Promise< number> =>{
  return connection.getBalance(new solanaWeb3.PublicKey(address));
}


const getPerformanceSample = ():Promise< solanaWeb3.PerfSample[]> =>{
  return connection.getRecentPerformanceSamples();
}

// **** Export Default **** //

export default {
  getTotalSupply,
  getAddressBalance,
  getPerformanceSample
} as const;
