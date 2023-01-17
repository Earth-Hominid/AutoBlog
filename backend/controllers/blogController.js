// Get blogs
// GET api/blogs
// Private access

const getBlogs = (req, res) => {
  res.status(200).json({ message: 'Get blogs' });
};

// Create blog
// Post api/blogs
// Private access

const setBlog = (req, res) => {
  res.status(200).json({ message: 'Create blog entry' });
};

// Update blog
// PUT api/blogs
// Private access

const updateBlog = (req, res) => {
  res.status(200).json({ message: `Blog ${req.params.id} updated` });
};

// Delete blog
// Delete api/blogs
// Private access

const deleteBlog = (req, res) => {
  res.status(200).json({ message: `Blog ${req.params.id} deleted` });
};

module.exports = {
  getBlogs,
  setBlog,
  updateBlog,
  deleteBlog,
};
