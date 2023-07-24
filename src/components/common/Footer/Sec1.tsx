import { Box, Icon, Text } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { ImBooks } from 'react-icons/im';
interface Props {}

const Sec1: React.FC<PropsWithChildren<Props>> = () => {
  return (
    <>
      <Box display={'flex'} justifyContent={'center'}>
        <Text
          fontFamily='stylish'
          color='red.500'
          fontSize='32px'
          display='flex'
          alignItems='center'
          columnGap={2}
          fontWeight={600}
        >
          <ImBooks />
          The BookLib
        </Text>
      </Box>
    </>
  );
};

export default Sec1;
