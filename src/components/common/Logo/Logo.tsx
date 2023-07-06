import { PropsWithChildren } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

interface Props extends BoxProps {}

const Logo: React.FC<PropsWithChildren<Props>> = ({ ...props }) => {
  return (
    <Box
      width='100%'
      height='100%'
      borderRadius='50%'
      overflow='hidden'
      {...props}
    >
      <img
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
        src='/images/logo.jpg'
      />
    </Box>
  );
};

export default Logo;
