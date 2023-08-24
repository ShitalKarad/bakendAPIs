import Joi from '@hapi/joi';
import HttpStatus  from 'http-status-codes';
export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(4).optional()
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message:`${error}`
    });
  } else {
    next();
  }
};

