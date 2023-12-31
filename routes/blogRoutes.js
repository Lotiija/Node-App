const express = require('express');
const blogController = require('../controllers/blogController')

const router = express.Router();

//blog routes
router.get('/', blogController.blog_index);

// Post rquests
router.post('/', blogController.blog_create_post);

//create page
router.get('/create', blogController.blog_create_get);

// Get request with id
router.get('/:id', blogController.blog_details);

router.delete('/:id', blogController.blog_delete);


module.exports = router;