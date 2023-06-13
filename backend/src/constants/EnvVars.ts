/**
 * Environments variables declared here.
 */

/* eslint-disable node/no-process-env */


export default {
  NodeEnv: (process.env.NODE_ENV ?? ''),
  Port: (process.env.PORT ?? 0),
  SolanaRpcUrl: 'https://solana-mainnet.rpc.extrnode.com/',
  PriceApi: 'https://price.jup.ag/v4/price?ids=',
  BullishSPL :  [{
    name: "SynesisOne",
    symbol:"SNS",
    address: "SNSNkV9zfG5ZKWQs6x4hxvBRV6s8SqMfSGCtECDvdMd"
  },
  {
    name: "soLink",
    symbol:"LINK",
    address: "CWE8jPTUYhdCTZYWPTe1o5DFqfdjzWKc9WKz6rSjQUdG"
  },
  {
    name: "Boo Network",
    symbol:"BOO",
    address: "boooCKXQn9YTK2aqN5pWftQeb9TH7cj7iUKuVCShWQx"
  },
  {
    name: "Terra Classic",
    symbol:"LUNC",
    address: "F6v4wfAdJB8D8p77bMXZgYt8TDKsYxLYxH5AFhUkYx9W"
  },
  {
    name: "Audius",
    symbol:"AUDIO",
    address: "9LzCMqDgTKYz9Drzqnpgee3SGa89up3a247ypMj2xrqM"
  }],
  WalletAddresses:[
    "9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM",
    "7mhcgF1DVsj5iv4CxZDgp51H6MBBwqamsH1KnqXhSRc5",
    "5tzFkiKscXHK5ZXCGbXZxdw7gTjjD1mBwuoFbhUvuAi9",
    "3yFwqXBfZY4jBVUafQ1YEXw189y2dN3V5KQq9uzBDy1E",
    "FWznbcNXWQuHTawe9RxvQ2LdCENssh12dsznf4RiouN5",
    "5MfwpEF6XPBDaBBGsiEviNe8sMeF7DZCdQeC5mdrP1pt",
    "95sLqoB3vKrDkVrpi6WtVv3CxbCDRD9WyLLDWffhF3KN",
    "9uyDy9VDBw4K7xoSkhmCAm8NAFCwu4pkF6JeHUCtVKcX",
    "39yVrkFPfp6CB2tbeP5MJiBe65uDWAkckkzbKoSnS6hk",
    "BKCmHSoUSDSr5gBU63isx3tUBov9msCn3xBBUu9SDa3Q"
  ],
  CookieProps: {
    Key: 'ExpressGeneratorTs',
    Secret: (process.env.COOKIE_SECRET ?? ''),
    // Casing to match express cookie options
    Options: {
      httpOnly: true,
      signed: true,
      path: (process.env.COOKIE_PATH ?? ''),
      maxAge: Number(process.env.COOKIE_EXP ?? 0),
      domain: (process.env.COOKIE_DOMAIN ?? ''),
      secure: (process.env.SECURE_COOKIE === 'true'),
    },
  },
  Jwt: {
    Secret: (process.env.JWT_SECRET ??  ''),
    Exp: (process.env.COOKIE_EXP ?? ''), // exp at the same time as the cookie
  },
} as const;
