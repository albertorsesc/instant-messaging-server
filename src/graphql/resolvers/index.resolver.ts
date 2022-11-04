import merge from 'lodash.merge';
import userResolvers from './user.resolver';

const resolvers = merge(
  {},
  userResolvers,
);

export default resolvers;