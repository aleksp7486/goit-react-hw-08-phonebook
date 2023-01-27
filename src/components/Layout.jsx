import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';
import { Box } from './Box';

const Layout = () => {
  return (
    <Box m="auto" p={4} maxWidth="500px">
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default Layout;
