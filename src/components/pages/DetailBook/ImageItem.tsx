import { Box, BoxProps, Image } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

interface Props {
  index: number;
  ContainerProps?: BoxProps;
  showingIndexImage: number;
  setShowingIndexImage: React.Dispatch<React.SetStateAction<number>>;
  imgUrl: string;
}

const ImageDetail: React.FC<PropsWithChildren<Props>> = ({
  imgUrl,
  ContainerProps = {
    flexBasis: '25%',
  },
  setShowingIndexImage,
  index,
  showingIndexImage,
}) => {
  return (
    <>
      <Box
        border={
          index === showingIndexImage
            ? '3px solid #b0b0b0ff'
            : '1px solid #d0d0d0ff'
        }
        display={'flex'}
        justifyContent={'center'}
        {...ContainerProps}
        onClick={() => setShowingIndexImage(index)}
      >
        <Image src={imgUrl} objectFit={'contain'} height={'100%'}></Image>
      </Box>
    </>
  );
};

export default ImageDetail;
