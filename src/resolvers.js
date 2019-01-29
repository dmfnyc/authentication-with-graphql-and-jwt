const users = [
  {
    id: '1',
    firstName: 'Maurice',
    lastName: 'Moss',
    email: 'maurice@moss.com',
    password: 'abcdefg',
  },
  {
    id: '2',
    firstName: 'Jen',
    lastName: 'Barber',
    email: 'jen@barber.com',
    password: 'qwerty',
  },
  {
    id: '3',
    firstName: 'Roy',
    lastName: 'Trenneman',
    email: 'roy@trenneman.com',
    password: 'imroy',
  },
];

const resolvers = {
  Query: {
    currentUser: (obj, args, context) => users.find(user => context.session.userId === user.id),
  },
  Mutation: {
    login: (obj, args, context) => {
      const { email, password } = args;
      const matchingUser = users.find(user => user.password === password && user.email === email);
      context.session.update(matchingUser);
      return matchingUser;
    },
  },
};

export default resolvers;
