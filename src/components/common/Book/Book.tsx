import { Box, BoxProps, Icon, Text } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { useCheckMobile } from '../../../utils/hooks/useCheckMobile';
import { ImPriceTag } from 'react-icons/im';
import { numberWithCommas } from '../../../utils/number';
export interface BookProps {
  title: string;
  description: string;
  price: number;
  imgUrl: string;
  oprice?: number;
  ContainerProps?: BoxProps;
}

const Book: React.FC<PropsWithChildren<BookProps>> = ({
  ContainerProps,
  description,
  price,
  title,
  oprice,
  imgUrl,
}) => {
  const isMobile = useCheckMobile();

  return (
    <>
      <Box
        width={isMobile ? '275px' : '360px'}
        maxWidth='100%'
        p='15px'
        display='flex'
        flexDirection='column'
        alignItems='center'
        bgColor='default'
        // bgColor='white'
        // border='1px solid #ED64A6'
        backdropFilter='blur(8px)'
        rowGap={3}
        borderRadius='10px 10px 40px 10px'
        {...ContainerProps}
      >
        <img
          style={{
            height: '200px',
            width: '100%',
            objectFit: 'cover',
            borderRadius: '10px 10px 40px 10px',
          }}
          src={imgUrl}
        />
        <Text
          color='primary'
          fontWeight='500'
          fontSize='18px'
          textAlign='center'
          fontFamily='stylish'
        >
          {title}
        </Text>
        <Box px='20px'>
          <Text
            color='primary'
            fontWeight='600'
            fontSize='14px'
            textAlign='center'
            fontFamily='stylish'
          >
            {description}
          </Text>
        </Box>
        <Box>
          <Text fontFamily='stylish' fontSize='18px' justifyContent='center'>
            {numberWithCommas(price)}
          </Text>
          {!!oprice && (
            <Text
              textDecoration='line-through'
              fontSize='12px'
              textAlign='center'
              fontStyle='italic'
              fontWeight={600}
            >
              {numberWithCommas(oprice)}
            </Text>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Book;
