import { IToken } from '@src/models/Vybe';
import 'supertest';


declare module 'supertest' {

  export interface Response  {
    headers: Record<string, string[]>;
    body: {
      error: string;
      data: IToken[];
    };
  }
}