const users = [
  {
    id: '1',
    name: 'Chenyu',
    email: 'Chenyu@example.com',
    age: 27
  },
  {
    id: '2',
    name: 'Sam',
    email: 'Sam@example.com'
  },
  {
    id: '3',
    name: 'Cool Kid',
    email: 'cool_kid@example.com',
    age: 99
  }
];

const posts = [
  {
    id: '11',
    title: 'Hello World',
    body: 'Hello Hello Hello World World World!!!',
    published: true,
    author: '1'
  },
  {
    id: '12',
    title: 'World of Warcraft',
    body: 'Classic is not out yet but retail has been out for 14 years!',
    published: true,
    author: '1'
  },
  {
    id: '13',
    title: 'Diablo 4',
    body: 'wow',
    published: true,
    author: '2'
  }
];

const comments = [
  { id: '101', text: 'Awesome post!', author: '3', post: '13' },
  { id: '102', text: 'Bad post!', author: '3', post: '11' },
  { id: '202', text: 'I really like this', author: '2', post: '12' },
  { id: '203', text: 'I really hate this', author: '1', post: '13' }
];

const db = {
  users,
  posts,
  comments
};

export { db as default };
