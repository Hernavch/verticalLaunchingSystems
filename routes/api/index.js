const router = require("express").Router();
const bookRoutes = require("./books");
const postRoutes = require('./posts');
const userRoutes = require('./users');
const careerRoutes = require('./career');

// Book routes
router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/career', careerRoutes);



// Book routes
router.use("/books", bookRoutes);

module.exports = router;
