/**
 * Express router paths go here.
 */

import { Immutable } from '@src/other/types';


const Paths = {
  Base: '/api/v1',
  Vybe: {
    Base: '/vybe',
    GetMarketCap: '/get-market-cap',
    GetBalance:'/get-balance',
    GetPerformance:'/get-performance'
  },
};


// **** Export **** //

export type TPaths = Immutable<typeof Paths>;
export default Paths as TPaths;
