import { Box, Icon, Text } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { ImBooks } from 'react-icons/im';
interface Props {
  title: string;
}

const TitleCarousel: React.FC<PropsWithChildren<Props>> = ({ title }) => {
  const color = 'pink.400';

  return (
    <>
      <Box display='flex' columnGap={3} alignItems='center' color='primary'>
        <Icon fontSize={24}>
          <ImBooks />
        </Icon>
        <Text fontFamily='stylish' fontSize={24}>
          {title}
        </Text>
        <Icon fontSize={24}>
          <ImBooks />
        </Icon>
      </Box>
    </>
  );
};

export default TitleCarousel;
