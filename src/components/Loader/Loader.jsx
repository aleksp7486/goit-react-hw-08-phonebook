import { LineWave } from 'react-loader-spinner';
import { Box } from 'components/Box';

const Loader = () => {
  return (
    <Box display="flex" justifyContent="center">
      <LineWave color="#6AAB9C" />
    </Box>
  );
};

export default Loader;
