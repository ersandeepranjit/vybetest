import { Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from './constants/Paths';
import VybeRoutes from './VybeRoute';


// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();



const vybeRouter = Router();

// Get MarketCap
vybeRouter.get(
  Paths.Vybe.GetMarketCap,
  VybeRoutes.getTokenSupply,
);

vybeRouter.get(
  Paths.Vybe.GetBalance,
  VybeRoutes.getWalletBalance,
);

vybeRouter.get(
  Paths.Vybe.GetPerformance,
  VybeRoutes.getPerformanceSample,
);

apiRouter.use(Paths.Vybe.Base, vybeRouter);


// **** Export default **** //

export default apiRouter;
