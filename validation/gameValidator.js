import Joi from "joi";

const gameSchema = Joi.object({
  status: Joi.string().required(),
});

module.exports = { gameSchema };
