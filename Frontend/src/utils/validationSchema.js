import * as Yup from 'yup';

export const personalInfoSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().matches(/^[0-9]{10}$/, 'Invalid phone number'),
});

export const educationSchema = Yup.array().of(
  Yup.object().shape({
    institution: Yup.string().required('Required'),
    degree: Yup.string().required('Required'),
    startYear: Yup.number().required('Required'),
    endYear: Yup.number()
      .min(Yup.ref('startYear'), 'End year must be after start year'),
  })
);