import Post from "../models/postModal.js";

//localhost:5000/posts/add | type:post
export const createPost = (req, res) => {
  const newPost = new Post(req.body)
    .save()
    .then(() => res.status(201).json({ success: true, message: "Post created successfully" }))
    .catch((err) => console.log(err));
};

//localhost:5000/posts | type:get
export const getAllPosts = (req, res) => {
  Post.find().then((posts) => {
    res.status(200).json({ success: true, data: posts });
  });
};

//localhost:5000/posts/:id | type:get
export const getSinglePost = (req, res) => {
  const { id } = req.params;

  Post.findById(id)
    .then((post) => {
      res.status(200).json({ success: true, data: post });
    })
    .catch((err) => console.log(err));
};

// localhost:5000/posts/:id | type:put
export const updatePost = (req, res) => {
  const { id } = req.params;
  const { username, description, duration, date } = req.body;

  Post.findByIdAndUpdate(id, { username, description, duration, date })
    .then(() => res.status(200).json({ success: true, message: "Post updated successfully" }))
    .catch((err) => console.log(err));
};

export const deletePost = (req, res) => {
  const { id } = req.params;
  Post.deleteOne({ _id: id })
    .then((deleteRes) =>
      res.status(200).json({ success: true, message: `deletedCount: ${deleteRes.deletedCount}` })
    )
    .catch((err) => console.log(err));
};
