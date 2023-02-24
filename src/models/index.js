// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Bracket } = initSchema(schema);

export {
  Bracket
};