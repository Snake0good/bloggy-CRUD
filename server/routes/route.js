const router = require('express').Router()

const controller = require('../controllers/userController')

// get the page?
router.get('/api/blogs', controller.getAllBlogs)

// post a blog
router.post('/api/blogs', controller.postBlog)

// reads a blog
router.get('/api/blogs/:id', controller.readBlog)

// update a blog
router.put('/api/blogs/:id', controller.updateBlog)

// delete a blog
router.delete('/api/blogs/:id', controller.deleteBlog)


module.exports = router