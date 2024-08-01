require("../mongodb_helper");
const User = require("../../models/user");

describe("User model", () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  it("has an email address", () => {
    const user = new User({
      full_name: "Someone Example",
      email: "someone@example.com",
      password: "password",
    });
    expect(user.email).toEqual("someone@example.com");
  });

  it("has a password", async () => {
    const user = new User({
      full_name: "Someone Example",
      email: "someone@example.com",
      password: "password",
    });

    await user.save();
    const isMatch = await user.comparePassword("password");
    expect(isMatch).toBe(true);
  });

  it("can list all users", async () => {
    const users = await User.find();
    expect(users).toEqual([]);
  });

  it("can save a user", async () => {
    const user = new User({
      full_name: "Someone Example",
      email: "someone@example.com",
      password: "password",
    });

    await user.save();
    const users = await User.find();
    expect(users[0].email).toEqual("someone@example.com");
    const isMatch = await users[0].comparePassword("password");
    expect(isMatch).toEqual(true);
  });
});
