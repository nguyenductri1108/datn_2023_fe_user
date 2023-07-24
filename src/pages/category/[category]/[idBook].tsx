import {
  Box,
  BoxProps,
  Button,
  Divider,
  Heading,
  Image,
  Input,
  Text,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { PropsWithChildren, forwardRef, useMemo, useState } from 'react';
import BreadCrumbFC from '../../../components/common/BreadCrumb';
import PageWrapper from '../../../components/common/Wrapper/PageWrapper';
import ImageDetail from '../../../components/pages/DetailBook/ImageItem';
import ModalImg from '../../../components/pages/DetailBook/Modal';
import { getCategoryFromPath } from '../../../constants/category';
import BookCarousel from '../../../components/pages/Home/BookCarousel';
import QuantityChoosing from '../../../components/common/QuantityChoosing/QuantityChoosing';

const DetailBook = () => {
  const router = useRouter();

  const category = router.query.category;

  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [images, setImages] = useState([
    '/images/anhDa/SachTriThuc/lckt1.jpg',
    '/images/anhDa/SachTriThuc/dnt2.jpg',
    '/images/anhDa/SachTriThuc/dnt1.jpg',
    '/images/carousel/bg1.jpg',
    '/images/carousel/bg1.jpg',
    '/images/carousel/bg1.jpg',
    '/images/carousel/bg1.jpg',
    '/images/carousel/bg1.jpg',
    '/images/carousel/bg1.jpg',
    '/images/carousel/bg1.jpg',
  ]);
  const [showingIndexImage, setShowingIndexImage] = useState<number>(0);

  const IndexShow = useMemo(() => {
    return isLargerThan800 ? 3 : 2;
  }, [isLargerThan800]);

  return (
    <PageWrapper>
      <Box mt={10}>
        <BreadCrumbFC
          TreeLink={[
            {
              title: 'Trang chủ',
              path: '/',
            },
            {
              title: 'Danh mục',
              path: '/category',
            },
            {
              title: getCategoryFromPath(category).title,
              path: `/category/${category}`,
            },
          ]}
        ></BreadCrumbFC>
      </Box>
      <Divider mt={5} mb={5}></Divider>

      <Box
        display={isLargerThan800 ? 'flex' : 'block'}
        columnGap={6}
        height={'fit-content'}
        background={'white'}
        border={'1px solid rgba(0, 0, 0, 0.3)'}
      >
        <Box flex={1} bgColor={'default'} padding={3}>
          <Box
            height={'500px'}
            display={'flex'}
            flexDirection={'column'}
            rowGap={5}
          >
            <Box
              flex={3}
              display={'flex'}
              justifyContent={'center'}
              maxHeight={'70%'}
              border={'1px solid black'}
              height={'100%'}
            >
              <Image
                src={images[showingIndexImage]}
                objectFit={'contain'}
                maxWidth={'100%'}
              ></Image>
            </Box>
            <Box
              flex={1}
              maxHeight={'20%'}
              width={'100%'}
              display={'flex'}
              justifyContent={'space-between'}
              border={'1px solid gray'}
              padding={1}
              columnGap={2}
            >
              {images.map((image, index) => {
                if (index > IndexShow) return;
                if (index === IndexShow) {
                  return (
                    <Box
                      key={index}
                      flexBasis={'25%'}
                      position={'relative'}
                      border={'1px solid #d0d0d0ff'}
                      display={'flex'}
                      justifyContent={'center'}
                    >
                      <Image
                        src={image}
                        objectFit={'contain'}
                        height={'100%'}
                      ></Image>
                      <Box
                        bgColor={'#f5f5f508'}
                        position={'absolute'}
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        onClick={onOpen}
                        _hover={{
                          cursor: 'pointer',
                        }}
                      >
                        <Text
                          color={'default'}
                          margin={'auto'}
                          textShadow={'0 0 3px white'}
                          fontSize={'2xl'}
                        >
                          {' '}
                          +{images.length - IndexShow - 1}
                        </Text>

                        <ModalImg
                          isOpen={isOpen}
                          onClose={onClose}
                          imgArr={images}
                        ></ModalImg>
                      </Box>
                    </Box>
                  );
                }

                return (
                  <ImageDetail
                    key={index}
                    index={index}
                    showingIndexImage={showingIndexImage}
                    imgUrl={image}
                    setShowingIndexImage={setShowingIndexImage}
                    ContainerProps={{
                      flexBasis: isLargerThan800 ? '25%' : '33.3333%',
                    }}
                  ></ImageDetail>
                  // <Box
                  //   key={index}
                  //   flexBasis={'25%'}
                  //   border={'1px solid #d0d0d0ff'}
                  //   display={'flex'}
                  //   justifyContent={'center'}
                  //   onClick={e => {
                  //     setShowingIndexImage(index);
                  //   }}
                  // >
                  //   <Image
                  //     src={image}
                  //     objectFit={'contain'}
                  //     height={'100%'}
                  //   ></Image>
                  // </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
        <Box
          flex={1}
          height={'500px'}
          mt={isLargerThan800 ? '0px' : '12px'}
          p={'3'}
          display={'flex'}
          flexDirection={'column'}
        >
          <Text
            as={'h2'}
            fontSize={'2xl'}
            fontWeight={'bold'}
            color={'red.500'}
          >
            Truyện tranh Doraemon tập 12{' '}
          </Text>
          <Text as={'h3'} fontSize={'xl'}>
            {' '}
            bởi Fujiko F.Fujio
          </Text>

          <Text as={'h3'} fontSize={'lg'}>
            Nhà xuất bản : Alphabook
          </Text>

          <Box>
            <Box
              display={'flex'}
              columnGap={5}
              alignItems={'center'}
              flexWrap={'wrap'}
            >
              <Text as={'h2'} textDecoration={'line-through'} fontSize={'3xl'}>
                30.000đ
              </Text>
              <Text as={'h1'} fontSize={'5xl'} color={'red.500'}>
                20.000đ
              </Text>
            </Box>
          </Box>

          <Box
            display={'flex'}
            alignItems={'center'}
            columnGap={3}
            flexWrap={'wrap'}
          >
            <Text as={'h3'} fontSize={'xl'}>
              Số lượng
            </Text>
            <QuantityChoosing
              ContainerProps={{
                width: '150px',
              }}
            ></QuantityChoosing>
          </Box>
          <Box display={'flex'} flexWrap={'wrap'} mt={5} columnGap={3}>
            <Button color={'red.500'}>Mua ngay</Button>
            <Button color={'red.500'}>Thêm vào giỏ hàng </Button>
          </Box>
          <Heading as='h3' size='md' mt={3}>
            Mô tả sách
          </Heading>
          <Box overflow={'auto'} mt={3}>
            <Text>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
              massa egestas mollis varius; dignissim elementum. Mollis tincidunt
              mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit
              parturient habitant pharetra rutrum gravida porttitor eros
              feugiat. Mollis elit sodales taciti duis praesent id. Consequat
              urna vitae morbi nunc congue. Lorem ipsum odor amet, consectetuer
              adipiscing elit. Ac purus in massa egestas mollis varius;
              dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros
              enim, nisi ligula ornare. Hendrerit parturient habitant pharetra
              rutrum gravida porttitor eros feugiat. Mollis elit sodales taciti
              duis praesent id. Consequat urna vitae morbi nunc congue.Lorem
              ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa
              egestas mollis varius; dignissim elementum. Mollis tincidunt
              mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit
              parturient habitant pharetra rutrum gravida porttitor eros
              feugiat. Mollis elit sodales taciti duis praesent id. Consequat
              urna vitae morbi nunc congue.
            </Text>
          </Box>
        </Box>
      </Box>

      <Box mt={5}>
        <BookCarousel
          title='Sách cùng chủ đề'
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
          title='Có thể bạn sẽ thích'
          books={Array(7).fill({
            imgUrl: images[1],
            description: 'Truyện tranh',
            title: 'Doraemon',
            price: 20_000,
            oprice: 30000,
            id: '123',
          })}
        ></BookCarousel>
      </Box>
    </PageWrapper>
  );
};

export default DetailBook;
