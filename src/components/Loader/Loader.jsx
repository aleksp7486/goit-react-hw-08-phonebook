import { LineWave } from 'react-loader-spinner';
import { Box } from 'components/Box';

const Loader = () => {
  return (
    <Box display="flex" justifyContent="center">
      <LineWave color="#3b6d9a" />
    </Box>
  );
};

export default Loader;
