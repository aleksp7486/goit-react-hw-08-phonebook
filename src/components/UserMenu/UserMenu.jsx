import { useDispatch } from 'react-redux';
import { MdLogout } from 'react-icons/md';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Box } from 'components/Box';
import { Name } from './UserMenu.styled';
import Button from 'components/Button';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());
  return (
    <Box display="flex" alignItems="center">
      <Name>{user.name}</Name>
      <Button
        type="button"
        handelClick={handleLogOut}
        title="Logout"
        icon={MdLogout}
      />
    </Box>
  );
};

export default UserMenu;
