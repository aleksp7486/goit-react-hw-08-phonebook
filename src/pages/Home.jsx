import { Box } from 'components/Box';
import { ReactComponent as PhonebookImage } from 'images/phonebook.svg';

const Home = () => {
  return (
    <Box
      display="grid"
      gridTemplateRow="1fr 1fr"
      gridGap="20px"
      justifyContent="center"
      textAlign="center"
    >
      <h1>Phonebook</h1>
      <PhonebookImage />
    </Box>
  );
};

export default Home;
