const Query = {
  users(parent, args, { db }, info) {
    if (!args.query) {
      return db.users;
    } else {
      return db.users.filter(user => {
        return user.name.toLowerCase().includes(args.query.toLowerCase());
      });
    }
  },
  posts(parent, args, { db }, info) {
    if (!args.query) {
      return db.posts;
    } else {
      return db.posts.filter(post => {
        if (
          post.title.toLowerCase().includes(args.query.toLowerCase()) ||
          post.body.toLowerCase().includes(args.query.toLowerCase())
        ) {
          return true;
        }
      });
    }
  },
  comments(parent, args, { db }, info) {
    if (!args.query) {
      return db.comments;
    }
  },
  me() {
    return {
      id: "abc123",
      name: "Chenyu",
      email: "xyz@xyz.com",
      age: 27
    };
  },

  post() {
    return {
      id: "2222222",
      title: "Hello World",
      body: "Hello Hello World World!!!!",
      published: true
    };
  }
};

export default Query;
