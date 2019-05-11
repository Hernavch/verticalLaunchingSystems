const router = require("express").Router();
const bookRoutes = require("./books");
const postRoutes = require('./posts');
const userRoutes = require('./users');

// Book routes
router.use('/posts', postRoutes);
router.use('/users', userRoutes);


// Book routes
router.use("/books", bookRoutes);

module.exports = router;
