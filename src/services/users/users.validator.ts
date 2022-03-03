import Joi from 'joi';

const schema = Joi.object().keys({
    name: Joi.string().trim().min(2).required(),
    email: Joi.string().email().trim().required(),
    password: Joi.string().min(6).required()
});
const joiOptions = { convert: true, abortEarly: false };


export default schema;
