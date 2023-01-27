import { BsFillPersonPlusFill } from 'react-icons/bs';
import { Formik, Form } from 'formik';
import { InputWrap, Label, Input, Btn, Error } from './ContactForm.styled';
import * as yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const onFormSubmit = ({ name, number }, { resetForm }) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    if (contacts.find(contact => contact.number === number)) {
      alert(`Number ${number} already exists`);
      return;
    }
    const newContact = {
      name,
      number,
    };
    dispatch(addContact(newContact));
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
          <Label htmlFor="name">Name:</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Enter name"
            required
          />
          <Error name="name" component="p" />
        </InputWrap>

        <InputWrap>
          <Label htmlFor="number">Number: </Label>
          <Input
            type="tel"
            name="number"
            id="number"
            placeholder="Enter phone number"
            required
          />
          <Error name="number" component="p" />
        </InputWrap>

        <Btn type="submit">
          <span>
            <BsFillPersonPlusFill />
          </span>
          Add contact
        </Btn>
      </Form>
    </Formik>
  );
};

export default ContactForm;
