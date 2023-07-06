import {
  Box,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  Link,
  SimpleGrid,
} from '@chakra-ui/react';
import { PropsWithChildren, forwardRef } from 'react';
import { PhoneIcon } from '@chakra-ui/icons';
import { addHashToUrl, scrollToId, scrollToTop } from '../../../utils/dom';
import Router from 'next/router';
import Autocomplete from './Autocomplete';
import { useState } from 'react';
import NextLink from 'next/link';
import { InferGetServerSidePropsType } from 'next';
import { categories } from '../../../constants/category';

interface Props {}

// eslint-disable-next-line react/display-name
const Header = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
  ({}, _ref) => {
    const [isSearchFocus, setIsSearchFocus] = useState(false);

    return (
      <>
        <Box
          ref={_ref}
          p={3}
          px={5}
          position='fixed'
          top={0}
          left={0}
          width='100%'
          height='65px'
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          backdropFilter='blur(10px)'
          bgColor='#ffffffb3'
          zIndex={1200}
          boxShadow={'0 3px 5px rgba(57, 63, 72, 0.3)'}
          columnGap={10}
        >
          <Box display='flex' alignItems='baseline' columnGap={5}>
            <Text
              fontSize='24px'
              fontFamily='stylish'
              color={'pink.800'}
              fontWeight={600}
              cursor='pointer'
              onClick={() => {
                console.log(Router);
                // Router.push('/');
              }}
            >
              <NextLink href={'/'}>The BookLib</NextLink>
            </Text>

            <Popover placement='top-start' trigger='hover'>
              <PopoverTrigger>
                <NextLink href={'/category'}>Danh mục</NextLink>
              </PopoverTrigger>
              <PopoverContent width={'400px'}>
                <PopoverHeader fontWeight='semibold'>
                  Danh mục sản phẩm
                </PopoverHeader>
                <PopoverBody>
                  <Box display={'flex'} flexWrap={'wrap'} rowGap={2}>
                    {categories.map((item, index) => {
                      return (
                        <Box key={index} flexBasis={'50%'}>
                          <NextLink href={`/category/${item.path}`}>
                            {item.title}
                          </NextLink>
                        </Box>
                      );
                    })}
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>

          <Box
            transition={'all 0.3s'}
            flexGrow={isSearchFocus ? 1 : 0}
            maxWidth={'500px'}
          >
            <Autocomplete setFocus={setIsSearchFocus}></Autocomplete>
          </Box>

          <Box display='flex' alignItems='center' columnGap={2}>
            <PhoneIcon
              color='primary'
              boxSize={4}
              position='relative'
              top='2px'
            />
            <Text
              fontSize='16px'
              fontWeight={600}
              fontStyle='italic'
              cursor='pointer'
              onClick={() => {
                addHashToUrl('contact');
              }}
            >
              Liên hệ
            </Text>
          </Box>
        </Box>
      </>
    );
  },
);

export default Header;
