import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { PropsWithChildren } from 'react';
import Carousel from '../../common/Carousel/Carousel';
import { Box } from '@chakra-ui/react';
import { useCheckMobile } from '../../../utils/hooks/useCheckMobile';
import { CustomNavigatorProps } from '../../common/Carousel/types';
interface Props {
  images: string[];
}

const Banner: React.FC<PropsWithChildren<Props>> = ({ images }) => {
  const isMobile = useCheckMobile();

  return (
    <>
      <Carousel
        itemShown={1}
        autoScroll
        ContainerProps={{
          height: isMobile ? '200px' : '500px',
          borderBottomRadius: '10px',
          overflow: 'hidden',
        }}
        autoScrollInterval={3}
        CustomNavigator={CustomNavigator}
      >
        {images.map((image, index) => (
          <img
            key={index}
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover',
            }}
            src={image}
          />
        ))}
      </Carousel>
    </>
  );
};

export default Banner;

const CustomNavigator = ({ index, setIndex }: CustomNavigatorProps) => (
  <Box
    width='100%'
    position='absolute'
    top='50%'
    left='50%'
    transform='translate(-50%, -50%)'
    display='flex'
    justifyContent='space-between'
  >
    <Box
      bgColor='bgBody'
      borderRadius='0px'
      p={2}
      backdropFilter='blur(8px)'
      color='white'
      borderRightRadius='50%'
      display='flex'
      alignItems='center'
      cursor='pointer'
      onClick={() => {
        setIndex(index - 1);
      }}
    >
      <ChevronLeftIcon color='primary' fontSize='20px' />
    </Box>
    <Box
      bgColor='bgBody'
      borderRadius='0px'
      p={2}
      backdropFilter='blur(8px)'
      color='white'
      borderLeftRadius='50%'
      display='flex'
      alignItems='center'
      cursor='pointer'
      onClick={() => {
        setIndex(index + 1);
      }}
    >
      <ChevronRightIcon color='primary' fontSize='20px' />
    </Box>
  </Box>
);
