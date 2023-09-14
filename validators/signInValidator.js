import joi from 'joi'
import joiPwd from 'joi-password-complexity'

const passwordComplexity = {
    min: 6,
    max: 100,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 4,
}

export const signInSchema = joi.object({

    mail: joi.string().email().required().messages({
        'string.empty': 'Email cannot be empty',
        'any.required': 'Email is required',
        'string.email': 'Email must be a valid email address (e.g., user@example.com)',
    }),
    password: joiPwd(passwordComplexity),

})