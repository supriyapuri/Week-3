const { Router } = require("express");
const router = Router();

router.use("/books", require('./books'));
router.use("/authors", require('./authors'));
// router.use("/authors/:authorId/books", require('./books'));

module.exports = router;