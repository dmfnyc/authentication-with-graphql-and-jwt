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
    currentUser: () => null,
  },
  Mutation: {
    login: (obj, args, context) => {
      const { email, password } = args;
      return users.find(user => user.password === password && user.email === email);
    },
  },
};

export default resolvers;
