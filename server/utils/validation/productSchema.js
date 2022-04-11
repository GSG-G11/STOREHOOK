const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string()
    .min(3)
    .required()
    .messages({
      'string.empty': 'Name cannot be empty',
      'string.min': 'Name must be more than 3 characters',
    }),
  description: Joi.string().min(1).rule({ message: 'Description cannot be empty' }).required(),
  image: Joi.string().min(1).rule({ message: 'Image cannot be empty' }).required(),
  categoryId: Joi.number().min(1).rule({ message: 'Category cannot be empty' }).required(),
  price: Joi.number()
    .min(1)
    .rule({ message: 'Price length must be more than 1' })
    .required(),
});
