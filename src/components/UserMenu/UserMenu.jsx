import { useDispatch } from 'react-redux';
import { MdLogout } from 'react-icons/md';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Box } from 'components/Box';
import { Name, Btn } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());
  return (
    <Box display="flex" alignItems="center">
      <Name>{user.name}</Name>
      <Btn onClick={handleLogOut}>
        <span>
          <MdLogout />
        </span>
        Logout
      </Btn>
    </Box>
  );
};

export default UserMenu;
