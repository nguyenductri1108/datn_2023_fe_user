import { Box, useMediaQuery } from '@chakra-ui/react';
import { useState } from 'react';
import PageWrapper from '../components/common/Wrapper/PageWrapper';
import Banner from '../components/pages/Home/Banner';
import BookCarousel from '../components/pages/Home/BookCarousel';
import SachHayMoiNgay from '../components/pages/Home/TitleCarousel';
import { useCheckMobile } from '../utils/hooks/useCheckMobile';

export default function Home() {
  const isMobile = useCheckMobile();
  const [isLargerThanBanner] = useMediaQuery('(min-width: 1220px)');

  const [images, setImages] = useState([
    '/images/carousel/bg1.jpg',
    '/images/carousel/bg1.jpg',
    '/images/carousel/bg1.jpg',
    '/images/carousel/bg1.jpg',
    '/images/carousel/bg1.jpg',
  ]);

  return (
    <PageWrapper title='Book Website'>
      <Banner images={images} />

      <BookCarousel
        title='Sách hay mỗi ngày'
        books={Array(7).fill({
          imgUrl: images[1],
          description: 'Truyện tranh',
          title: 'Doraemon',
          price: 20_000,
          oprice: 30000,
          id: '123',
        })}
      ></BookCarousel>
      <BookCarousel
        title='Sách nổi bật trong tuần'
        books={Array(7).fill({
          imgUrl: '/images/carousel/bg1.jpg',
          description: 'Truyện tranh',
          title: 'Doraemon',
          price: 20_000,
          oprice: 30000,
          id: '123',
        })}
      ></BookCarousel>
    </PageWrapper>
  );
}
