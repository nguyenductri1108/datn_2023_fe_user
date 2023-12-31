import { Box, useMediaQuery } from '@chakra-ui/react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import PageWrapper from '../components/common/Wrapper/PageWrapper';
import Banner from '../components/pages/Home/Banner';
import BookCarousel from '../components/pages/Home/BookCarousel';
import SachHayMoiNgay from '../components/pages/Home/TitleCarousel';
import { useCheckMobile } from '../utils/hooks/useCheckMobile';
import axios from 'axios';
import { axiosGet } from '../services';

export default function Home() {
  const isMobile = useCheckMobile();
  const [isLargerThanBanner] = useMediaQuery('(min-width: 1220px)');
  const [commonBooks, setCommonBooks] = useState<Array<any>>([]);
  const [comicBooks, setComicBooks] = useState<Array<any>>([]);
  const [novelBooks, setNovelBooks] = useState<Array<any>>([]);

  const getCommonBooks = async () => {
    const res = await axiosGet('books');
    if (res.books) {
      setCommonBooks(res.books);
    }
  };

  const getBooksByCategory = async (
    category: string,
    setData: Dispatch<SetStateAction<any[]>>,
  ) => {
    const res = await axiosGet('books/getbooks', {
      category,
    });
    if (res.data) {
      setData(res.data);
    }
  };

  useEffect(() => {
    getCommonBooks();
    getBooksByCategory('truyentranh', setComicBooks);
    getBooksByCategory('tieuthuyet', setNovelBooks);
  }, []);

  const [images, setImages] = useState([
    '/images/carousel/banner/Banner1.jpg',
    '/images/carousel/banner/Banner2.jpg',
    '/images/carousel/banner/Banner3.jpg',
    '/images/carousel/banner/Banner4.jpg',
    '/images/carousel/banner/Banner5.jpg',
  ]);

  return (
    <PageWrapper title='Book Website'>
      <Banner images={images} />

      <BookCarousel
        imgTitle='/images/category/SachHay.jpg'
        link='/category'
        title='Sách hay mỗi ngày'
        books={commonBooks}
      ></BookCarousel>
      <BookCarousel
        imgTitle='/images/category/truyentranh.jpg'
        link='/category/truyentranh'
        title='Thế giới truyện tranh'
        books={comicBooks}
      ></BookCarousel>
      <BookCarousel
        imgTitle='/images/category/tieuthuyet.jpg'
        link='/category/tieuthuyet'
        title='Những tiểu thuyết nên đọc'
        books={novelBooks}
      ></BookCarousel>
    </PageWrapper>
  );
}
