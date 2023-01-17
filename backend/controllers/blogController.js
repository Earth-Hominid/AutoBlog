const asyncHandler = require('express-async-handler');

// Get blogs
// GET api/blogs
// Private access

const getBlogs = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get blogs' });
});

// Create blog
// POST api/blogs
// Private access

const setBlog = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  res.status(200).json({ message: 'Create blog entry' });
});

// Update blog
// PUT api/blogs/:id
// Private access

const updateBlog = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Blog ${req.params.id} updated` });
});

// Delete blog
// DELETE api/blogs/:id
// Private access

const deleteBlog = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Blog ${req.params.id} deleted` });
});

module.exports = {
  getBlogs,
  setBlog,
  updateBlog,
  deleteBlog,
};
