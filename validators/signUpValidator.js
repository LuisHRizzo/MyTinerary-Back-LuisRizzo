import joi from 'joi'
import joiPwd from 'joi-password-complexity'

const passwordComplexity = {
  min: 6,
  max: 100,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
  requirementCount: 3,
}

export const signUpSchema = joi.object({

  mail:joi.string().email().required().messages({
    'string.empty': 'Email cannot be empty',
    'any.required': 'Email is required',
    'string.email': 'Email must be a valid email address (e.g., user@example.com)',
  }),
  password:joiPwd(passwordComplexity),
  firstName:joi.string().min(2).max(30).messages({
    'string.min': 'Name must be at least 2 characters long',
    'string.max': 'Name cannot exceed 30 characters',
  }),
  lastName:joi.string().min(2).max(30).messages({
    'string.min': 'Name must be at least 2 characters long',
    'string.max': 'Name cannot exceed 30 characters',
  }),
  country:joi.string().min(2).max(30).messages({
    'string.min': 'Name must be at least 2 characters long',
    'string.max': 'Name cannot exceed 30 characters',
  }),
  photo:joi.string().uri().allow("").messages({
    'string.uri': 'Photo must be a valid URI',
  }),
  age:joi.number().messages({
    'number.base': 'Age must be a number',
  }),
  phone:joi.number().messages({
    'number.base': 'Phone number must be a number',
  }),
  verified:joi.boolean().messages({
    'boolean.base': 'Verified must be a boolean value',
  }),

})