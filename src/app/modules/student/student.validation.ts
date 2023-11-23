import Joi from 'joi';

const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .required()
    .max(20)
    .pattern(/^[A-Z][a-z]*$/, 'First name should start with a capital letter'),
  middleName: Joi.string().trim(),
  lastName: Joi.string()
    .trim()
    .required()
    .pattern(/^[A-Za-z]+$/, 'Last name is not valid'),
});

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().trim().required(),
  fatherCoNO: Joi.string().trim().required(),
  fatherOccupation: Joi.string().trim().required(),
  motherName: Joi.string().trim().required(),
  motherCoNo: Joi.string().trim().required(),
  motherOccupation: Joi.string().trim().required(),
});

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().trim().required(),
  occupation: Joi.string().trim().required(),
  contactNo: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().required(),
  name: userNameValidationSchema.required(),
  gender: Joi.string().valid('male', 'female', 'others').required(),
  dateOfBirth: Joi.string().trim(),
  email: Joi.string().email().required(),
  contactNo: Joi.string().required(),
  emergencyContact: Joi.string().trim().required(),
  bloodGroup: Joi.string().valid('A+', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'),
  guardian: guardianValidationSchema.required(),
  localGuardian: localGuardianValidationSchema.required(),
  profileImg: Joi.string().required(),
  isActive: Joi.string().valid('active', 'blocked').default('active'),
});

export default studentValidationSchema;
