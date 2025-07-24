const { body } = require('express-validator');
const postValidationRules = () => [
  body('title').notEmpty(),
  body('content').isLength({ min: 10 }),
];


