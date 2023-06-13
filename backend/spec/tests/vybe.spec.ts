import supertest, { SuperTest, Test, Response } from 'supertest';
import { defaultErrMsg as ValidatorErr } from 'jet-validator';
import insertUrlParams from 'inserturlparams';

import app from '@src/server';

import HttpStatusCodes from '@src/constants/HttpStatusCodes';
import FullPaths from '@src/routes/constants/FullPaths';

import { TReqBody } from 'spec/support/types';


// **** Variables **** //

// Paths
const {
  GetMarketCap
} = FullPaths.Vybe;

// StatusCodes
const {
  OK,
  CREATED,
  NOT_FOUND,
  BAD_REQUEST,
} = HttpStatusCodes;



// **** Tests **** //

describe('VybeRouter', () => {

  let agent: SuperTest<Test>;

  // Run before all tests
  beforeAll((done) => {
    agent = supertest.agent(app);
    done();
  });

  describe(`"GET:${GetMarketCap}"`, () => {

    const callApi = () => agent.get(GetMarketCap);

    // Success
    it('should return a JSON object with 5 tokens  and a status code ' + 
    `of "${OK}" if the request was successful.`, (done) => {
      // Call API
      callApi()
        .end((_: Error, res: Response) => {
          expect(res.status).toBe(OK);
          expect(res.body?.data?.length).toBe(5);
          done();
        });
    });
  });
});
