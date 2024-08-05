const mongoose = require('mongoose');
const faker = require('faker');
const bcrypt = require('bcrypt');
const User = require('./models/user'); // Ensure the path is correct
const Post = require('./models/post'); // Ensure the path is correct
require('dotenv').config(); // Load environment variables

const NUM_USERS = 10;
const NUM_POSTS = 1000;
const TEST_USER = {
  full_name: 'Marco P',
  email: 'marco@gmail.com',
  password: 'mypssword',
};

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected');
    seedDatabase();
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });

async function seedDatabase() {
  try {
    await User.deleteMany({});
    await Post.deleteMany({});

    const users = [];

    // Create test user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(TEST_USER.password, salt);
    const testUser = new User({
      full_name: TEST_USER.full_name,
      email: TEST_USER.email,
      password: hashedPassword,
    });
    await testUser.save();
    users.push(testUser);

    // Create random users
    for (let i = 0; i < NUM_USERS; i++) {
      const user = new User({
        full_name: faker.name.findName(),
        email: faker.internet.email(),
        password: 'password123', // Use a simple password for all users
      });
      users.push(user);
    }

    for (const user of users) {
      await user.save();
    }

    // Randomly create friend connections
    for (let i = 0; i < users.length; i++) {
      for (let j = i + 1; j < users.length; j++) {
        if (Math.random() > 0.5) { // Randomly decide if users are friends
          users[i].friends.push(users[j]._id);
          users[j].friends.push(users[i]._id);
        }
      }
    }

    for (const user of users) {
      await user.save();
    }

    // Create posts
    const posts = [];
    for (let i = 0; i < NUM_POSTS; i++) {
      const randomUserIndex = Math.floor(Math.random() * users.length);
      const message = faker.lorem.paragraph().slice(0, 300); // Ensure message is within 300 characters
      const post = new Post({
        title: faker.lorem.sentence(),
        message: message,
        post_author: users[randomUserIndex]._id,
        date_created: faker.date.recent(),
        is_private: Math.random() > 0.5, // Randomly decide if the post is private
      });
      posts.push(post);
    }

    for (const post of posts) {
      await post.save();
    }

    console.log('Database seeded successfully');
    process.exit();
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
}
