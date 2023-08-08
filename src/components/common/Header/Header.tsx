import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Router, { useRouter } from 'next/router';
import { PropsWithChildren, forwardRef, useState } from 'react';
import { categories } from '../../../constants/category';
import { addHashToUrl } from '../../../utils/dom';
import Autocomplete from './Autocomplete';

import { PiShoppingCartDuotone } from 'react-icons/pi';
import Link from 'next/link';
import { FormikProvider, useFormik } from 'formik';
import FormikControl from '../Formik/FormikControl';
import { axiosPost } from '../../../services';
import { toast } from 'react-toastify';

interface Props {}

interface ButtonLinkProps {
  label: string;
  fontweight?: any;
  setLogIn?: React.Dispatch<React.SetStateAction<boolean>>;
}

type formErrorSignIn = {
  username?: string;
  password?: string;
};

type signInValue = {
  username: string;
  password: string;
};

const ButtonLinkSignUp: React.FC<ButtonLinkProps> = ({ label, fontweight }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const validate = (values: signInValue) => {
    const errors: formErrorSignIn = {};
    if (!values.username) {
      errors.username = 'Required';
    }

    if (!values.password) {
      errors.password = 'Required';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (value, { resetForm }) => {
      axiosPost('auth/register', value)
        .then(res => {
          toast.success('Đăng kí thành công');
          resetForm();
          onClose();
        })
        .catch(error => {
          toast.error(error.response.data.message);
          console.log(error.response.data.message);
        });
    },
    validate,
  });

  return (
    <Button backgroundColor={'#ffffffb3'} onClick={onOpen}>
      <Text textDecoration={'underline'} fontWeight={fontweight}>
        {label}
      </Text>

      {
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Đăng ký</ModalHeader>
            <ModalCloseButton />
            <Box p={6}>
              <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                  <ModalBody>
                    <FormikControl
                      control='input'
                      type='text'
                      name='username'
                      label='Tài khoản'
                    ></FormikControl>

                    <FormikControl
                      control='input'
                      type='password'
                      name='password'
                      label='Password'
                    ></FormikControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme='blue' mr={3} type='submit'>
                      Đăng ký
                    </Button>
                  </ModalFooter>
                </form>
              </FormikProvider>
            </Box>
          </ModalContent>
        </Modal>
      }
    </Button>
  );
};

const ButtonLinkSignIn: React.FC<ButtonLinkProps> = ({
  label,
  fontweight,
  setLogIn,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const validate = (values: signInValue) => {
    const errors: formErrorSignIn = {};
    if (!values.username) {
      errors.username = 'Required';
    }

    if (!values.password) {
      errors.password = 'Required';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: (value, { resetForm }) => {
      axiosPost('auth/login', value)
        .then((res: any) => {
          toast.success('Đăng nhập thành công');
          if (setLogIn) setLogIn(true);
          localStorage.setItem('accessToken', res.data.accessToken);
          onClose();
        })
        .catch(error => {
          console.log(error);
          toast.error(error.response?.data?.message);
        });
    },
    validate,
  });

  return (
    <Button backgroundColor={'#ffffffb3'} onClick={onOpen}>
      <Text textDecoration={'underline'} fontWeight={fontweight}>
        {label}
      </Text>

      {
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Đăng nhập</ModalHeader>
            <ModalCloseButton />
            <Box p={6}>
              <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                  <ModalBody>
                    <FormikControl
                      control='input'
                      type='text'
                      name='username'
                      label='Tài khoản'
                    ></FormikControl>

                    <FormikControl
                      control='input'
                      type='password'
                      name='password'
                      label='Password'
                    ></FormikControl>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme='blue' mr={3} type='submit'>
                      Đăng nhập
                    </Button>
                  </ModalFooter>
                </form>
              </FormikProvider>
            </Box>
          </ModalContent>
        </Modal>
      }
    </Button>
  );
};

// eslint-disable-next-line react/display-name
const Header = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(
  ({}, _ref) => {
    const [isSearchFocus, setIsSearchFocus] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const router = useRouter();

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
              color={'red.500'}
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

          {!isLogin ? (
            <Box display={'flex'} columnGap={'24px'}>
              <ButtonLinkSignIn setLogIn={setIsLogin} label='Sign In' />
              <ButtonLinkSignUp label='Sign Up' />
            </Box>
          ) : (
            <Box display='flex' alignItems='center' columnGap={5}>
              <Box
                position={'relative'}
                onClick={() => {
                  router.push('/cart');
                }}
              >
                <IconButton
                  color={'red.500'}
                  bgColor={'white'}
                  borderRadius={'999px'}
                  size={'lg'}
                  aria-label='Xem giỏ hàng'
                  fontSize='30px'
                  icon={<PiShoppingCartDuotone />}
                ></IconButton>
                <Box
                  width={'20px'}
                  height={'20px'}
                  position={'absolute'}
                  top={0}
                  right={0}
                  borderRadius={'999px'}
                  backgroundColor={'red.500'}
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Text color={'white'}>1</Text>
                </Box>
              </Box>

              <Menu>
                <MenuButton>
                  <Box display={'flex'} alignItems={'center'} columnGap={3}>
                    <Avatar
                      name='Dan Abrahmov'
                      src='https://bit.ly/dan-abramov'
                    />
                    <Text
                      fontSize='16px'
                      fontWeight={600}
                      cursor='pointer'
                      onClick={() => {
                        addHashToUrl('contact');
                      }}
                    >
                      Xin chào, Trí
                    </Text>
                  </Box>
                </MenuButton>
                <MenuList>
                  <MenuItem>Đơn hàng của tôi</MenuItem>
                  <MenuItem>Cài đặt địa chỉ</MenuItem>
                  <Divider></Divider>
                  <MenuItem>Đăng xuất</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          )}
        </Box>
      </>
    );
  },
);

export default Header;
