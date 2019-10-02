const { model: User } = require("./userModel");

exports.createUser = async userData => {
  try {
    const user = new User(userData);
    return await user.save();
  } catch (e) {
    console.log("user signup error:", e);
    throw e;
  }
};

exports.isUser = async ({ email, password }) => {
  try {
    console.log(email, password);
    const [user] = await User.find({ email });
    if (user) {
      console.log("user", user);
      const match = await user.comparePassword(password);
      if (match) {
        return user;
      }
    }
  } catch (e) {
    throw e;
  }
};
