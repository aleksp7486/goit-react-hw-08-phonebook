import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu';
import Navigation from 'components/Navigation';
import { useAuth } from 'hooks/useAuth';

import { Box } from 'components/Box';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box
      as="header"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={4}
      pt={2}
      pb={2}
      borderBottom="1px solid black"
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Box>
  );
};

export default AppBar;
