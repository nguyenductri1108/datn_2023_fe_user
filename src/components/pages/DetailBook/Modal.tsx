import {
  Box,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { PropsWithChildren, useState } from 'react';
import ImageDetail from './ImageItem';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  imgArr: Array<string>;
}

const ModalImg: React.FC<PropsWithChildren<Props>> = ({
  isOpen,
  onClose,
  imgArr,
}) => {
  const [showingIndexImage, setShowingIndexImage] = useState<number>(0);

  // const [images, setImages] = useState([
  //   '/images/anhDa/SachTriThuc/lckt1.jpg',
  //   '/images/anhDa/SachTriThuc/dnt2.jpg',
  //   '/images/anhDa/SachTriThuc/dnt1.jpg',
  //   '/images/carousel/bg1.jpg',
  //   '/images/carousel/bg1.jpg',
  //   '/images/carousel/bg1.jpg',
  //   '/images/carousel/bg1.jpg',
  //   '/images/carousel/bg1.jpg',
  //   '/images/carousel/bg1.jpg',
  //   '/images/carousel/bg1.jpg',
  // ]);

  const IndexShow = 3;

  return (
    <Modal size={'3xl'} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent height={'500px'}>
        <ModalHeader>Ảnh ({imgArr.length})</ModalHeader>
        <ModalCloseButton />
        <ModalBody
          mt={4}
          display={'flex'}
          height={'100%'}
          alignItems={'flex-start'}
        >
          <Box
            flex={2}
            display={'flex'}
            justifyContent={'center'}
            border={'1px solid black'}
            height={'400px'}
          >
            <Image
              src={imgArr[showingIndexImage]}
              objectFit={'contain'}
              maxWidth={'100%'}
            ></Image>
          </Box>
          <Box
            flex={1}
            height={'400px'}
            border={'1px solid gray'}
            overflow={'auto'}
          >
            <Box
              display={'flex'}
              justifyContent={'flex-start'}
              padding={1}
              columnGap={2}
              rowGap={2}
              flexWrap={'wrap'}
            >
              {imgArr.map((image, index) => {
                return (
                  <ImageDetail
                    key={index}
                    index={index}
                    showingIndexImage={showingIndexImage}
                    imgUrl={image}
                    setShowingIndexImage={setShowingIndexImage}
                    ContainerProps={{
                      flexBasis: '45%',
                      height: '80px',
                    }}
                  ></ImageDetail>
                );
              })}
            </Box>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalImg;
