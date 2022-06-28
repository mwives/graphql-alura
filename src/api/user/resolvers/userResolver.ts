const users = [
  {
    name: "John Frusciante",
    active: true,
  },
  {
    name: "Dave Navarro",
    active: false,
  },
];

const userResolvers = {
  Query: {
    users() {
      return users;
    },
    firstUser() {
      return users[0];
    },
  },
};

export default userResolvers;
