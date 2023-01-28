import { InputWrap, Label, Input, Error } from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import Button from 'components/Button';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Mail is required'),
  password: yup
    .string()
    .required('No password provided.')
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  const onFormSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(
      register({
        name: name,
        email: email,
        password: password,
      })
    );
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onFormSubmit}
    >
      <Form noValidate>
        <InputWrap>
          <Label htmlFor="regName">Username</Label>
          <Input
            type="text"
            name="name"
            id="regName"
            placeholder="Enter name"
          />
          <Error name="name" component="p" />
        </InputWrap>
        <InputWrap>
          <Label htmlFor="regEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="regEmail"
            placeholder="Enter email"
          />
          <Error name="email" component="p" />
        </InputWrap>
        <InputWrap>
          <Label htmlFor="regPass">Password</Label>
          <Input
            type="password"
            name="password"
            id="regPass"
            placeholder="Enter password"
          />
          <Error name="password" component="p" />
        </InputWrap>

        <Button title="Register" />
      </Form>
    </Formik>
  );
};

export default RegisterForm;
