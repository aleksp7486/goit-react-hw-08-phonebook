import { Item, Text, Icon, Phone, Btn } from './ContactList.styled';
import { BsFillPersonFill, BsFillPersonXFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
// import { useMemo } from 'react';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <Item key={name} id={id}>
            <Icon>
              <BsFillPersonFill />
            </Icon>
            <Text>
              {name}:<Phone>{number}</Phone>
            </Text>
            <Btn onClick={() => dispatch(deleteContact(id))}>
              <BsFillPersonXFill />
            </Btn>
          </Item>
        );
      })}
    </ul>
  );
};

export default ContactList;
