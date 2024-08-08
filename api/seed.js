const mongoose = require('mongoose');
const axios = require('axios');
const faker = require('faker');
const bcrypt = require('bcrypt');
const User = require('./models/user'); // Ensure the path is correct
const Post = require('./models/post'); // Ensure the path is correct
const Comment = require('./models/comments'); // Ensure the path is correct
const Like = require('./models/like'); // Ensure the path is correct
require('dotenv').config(); // Load environment variables

const NUM_USERS = 10;
const NUM_POSTS = 1000;
const NUM_COMMENTS = 3000; // Number of comments to create
const NUM_LIKES = 5000; // Number of likes to create
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

async function fetchProfileImage(retries = 5) {
  try {
    const response = await axios.get('https://thispersondoesnotexist.com', {
      responseType: 'arraybuffer'
    });
    return response.data;
  } catch (error) {
    if (retries > 0) {
      console.error('Error fetching profile image, retrying...', error);
      return fetchProfileImage(retries - 1);
    } else {
      console.error('Failed to fetch profile image after multiple attempts:', error);
      return null;
    }
  }
}

async function seedDatabase() {
  try {
    await User.deleteMany({});
    await Post.deleteMany({});
    await Comment.deleteMany({});
    await Like.deleteMany({}); // Delete existing likes

    const users = [];

    // Create test user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(TEST_USER.password, salt);
    const testUserProfileImage = await fetchProfileImage();
    const testUser = new User({
      full_name: TEST_USER.full_name,
      email: TEST_USER.email,
      password: hashedPassword,
      profile_image: testUserProfileImage
    });
    await testUser.save();
    users.push(testUser);

    // Create random users
    for (let i = 0; i < NUM_USERS; i++) {
      const profileImage = await fetchProfileImage();
      const user = new User({
        full_name: faker.name.findName(),
        email: faker.internet.email(),
        password: 'password123', // Use a simple password for all users
        profile_image: profileImage
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
      const message = faker.lorem.sentence().slice(0, 300); // Ensure message is within 300 characters
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

    // Create comments
    const comments = [];
    for (let i = 0; i < NUM_COMMENTS; i++) {
      const randomUserIndex = Math.floor(Math.random() * users.length);
      const randomPostIndex = Math.floor(Math.random() * posts.length);
      const comment = new Comment({
        post_id: posts[randomPostIndex]._id,
        message: faker.lorem.sentence().slice(0, 300), // Ensure message is within 300 characters
        author_id: users[randomUserIndex]._id,
        date_created: faker.date.recent(),
      });
      comments.push(comment);
      posts[randomPostIndex].comments.push(comment._id); // Add comment to post
    }

    for (const comment of comments) {
      await comment.save();
    }

    for (const post of posts) {
      await post.save();
    }

    // Create likes
    const likes = [];
    for (let i = 0; i < NUM_LIKES; i++) {
      const randomUserIndex = Math.floor(Math.random() * users.length);
      const randomPostIndex = Math.floor(Math.random() * posts.length);
      const like = new Like({
        post_id: posts[randomPostIndex]._id,
        author_id: users[randomUserIndex]._id,
      });
      likes.push(like);
      posts[randomPostIndex].likes.push(like._id); // Add like to post
    }

    for (const like of likes) {
      await like.save();
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
