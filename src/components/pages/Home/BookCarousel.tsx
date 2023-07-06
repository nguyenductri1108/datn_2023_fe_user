import { PropsWithChildren } from 'react';
import Book, { BookProps } from '../../common/Book/Book';
import Carousel from '../../common/Carousel/Carousel';
import { CustomNavigatorProps } from '../../common/Carousel/types';
import { Box } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import TitleCarousel from './TitleCarousel';
interface Props {
  title: string;
  books: BookProps[];
}

const BookCarousel: React.FC<PropsWithChildren<Props>> = ({ books, title }) => {
  return (
    <>
      <Box display='flex' justifyContent='center' mt={5}>
        <TitleCarousel title={title} />
      </Box>
      <Box mt={5} />
      <Carousel
        itemShown={3.5}
        ContainerProps={{
          height: 'fit-content',
        }}
        spacing={5}
        CustomNavigator={CustomNavigator}
      >
        {books.map((book, index) => (
          <Book key={index} {...book}></Book>
        ))}
      </Carousel>
    </>
  );
};

export default BookCarousel;

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
