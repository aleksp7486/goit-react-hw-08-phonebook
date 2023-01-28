import { Item, Text, Icon, Phone } from './ContactList.styled';
import { BsFillPersonFill, BsFillPersonXFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import Button from 'components/Button';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <Item key={name} id={id}>
            <Text>
              <Icon>
                <BsFillPersonFill />
              </Icon>
              {name}:<Phone>{number}</Phone>
            </Text>
            <Button
              type="button"
              icon={BsFillPersonXFill}
              handelClick={() => dispatch(deleteContact(id))}
            />
          </Item>
        );
      })}
    </ul>
  );
};

export default ContactList;
