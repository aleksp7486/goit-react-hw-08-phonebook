import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { MdLogin } from 'react-icons/md';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import Button from 'components/Button';
import { InputWrap, Label, Input, Error } from './LoginForm.styled';

const initialValues = {
  email: '',
  password: '',
};

const schema = yup.object().shape({
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

const LoginForm = () => {
  const dispatch = useDispatch();

  const onFormSubmit = ({ email, password }, { resetForm }) => {
    dispatch(
      logIn({
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
          <Label htmlFor="loginEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="loginEmail"
            placeholder="Enter email"
          />
          <Error name="email" component="p" />
        </InputWrap>
        <InputWrap>
          <Label htmlFor="loginPass">Password</Label>
          <Input
            type="password"
            name="password"
            id="loginPass"
            placeholder="Enter password"
          />
          <Error name="password" component="p" />
        </InputWrap>
        <Button title="Login" icon={MdLogin} />
      </Form>
    </Formik>
  );
};

export default LoginForm;
