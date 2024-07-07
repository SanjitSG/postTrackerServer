import User from "../models/userModal.js";

export const createUser = (req, res) => {
  const { username } = req.body;

  const newUser = new User({ username })
    .save()
    .then(() => {
      res.status(201).json({ success: true, message: "User created successfully", data: username });
    })
    .catch(
      (err) => {
        console.log(err);
        return res.status(400).json({ success: false, message: err });
      }
      //   res.status(409).json({
      //   success: false,
      //   message: `Username with username ${JSON.stringify(err.keyValue.username)} already exists.`,
      // })
    );
};

export const getAllUsers = (req, res) => {
  User.find()
    .then((users) => {
      res.status(200).json({ success: true, users: users });
    })
    .catch((err) => console.log(err));
};
