// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Team, Bracket } = initSchema(schema);

export {
  Team,
  Bracket
};