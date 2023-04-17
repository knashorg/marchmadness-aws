// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { NewBracket, Team, Bracket } = initSchema(schema);

export {
  NewBracket,
  Team,
  Bracket
};