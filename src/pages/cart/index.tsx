import {
  Box,
  Button,
  Divider,
  Heading,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import BreadCrumbFC from '../../components/common/BreadCrumb';
import StepperFC from '../../components/common/Stepper/Stepper';
import PageWrapper from '../../components/common/Wrapper/PageWrapper';

import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import { useState } from 'react';
import QuantityChoosing from '../../components/common/QuantityChoosing/QuantityChoosing';
import { numberWithCommas } from '../../utils/number';
import { useRouter } from 'next/router';

const Cart = () => {
  const [cartItemChoosing, setCartItemChoosing] = useState<string[]>([]);
  const router = useRouter();

  const [cartItems, setCartItems] = useState([
    {
      imgUrl: '/images/carousel/bg1.jpg',
      description: 'Truyện tranh',
      title: 'Doraemon tập 1',
      price: 20_000,
      oprice: 30000,
      id: '1',
    },
    {
      imgUrl: '/images/carousel/bg1.jpg',
      description: 'Truyện tranh',
      title: 'Doraemon tập 2',
      price: 20_000,
      oprice: 30000,
      id: '2',
    },
    {
      imgUrl: '/images/carousel/bg1.jpg',
      description: 'Truyện tranh',
      title: 'Doraemon tập 3',
      price: 20_000,
      oprice: 30000,
      id: '3',
    },
  ]);

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
              title: 'Giỏ hàng',
              path: '/cart',
            },
          ]}
        ></BreadCrumbFC>

        <Box display={'flex'} justifyContent={'center'}>
          <Heading>Giỏ hàng</Heading>
        </Box>
      </Box>
      <Divider mt={5} mb={5}></Divider>
      <Box mt={5}>
        <StepperFC stepIndex={0}></StepperFC>
      </Box>

      <Box bgColor={'white'} borderRadius={'4px'} mt={10}>
        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th></Th>
                <Th></Th>
                <Th>Tên sản phẩm</Th>
                <Th textAlign={'center'}>Số lượng</Th>
                <Th>Đơn giá</Th>
              </Tr>
            </Thead>
            <CheckboxGroup
              colorScheme='green'
              onChange={e => {
                console.log(e);
                setCartItemChoosing(e as string[]);
              }}
              value={cartItemChoosing}
            >
              <Tbody>
                {cartItems.map((item, index) => {
                  return (
                    <Tr key={index}>
                      <Td>
                        <Checkbox value={item.id}></Checkbox>
                      </Td>
                      <Th>
                        <Image src={item.imgUrl} height={'50px'}></Image>
                      </Th>
                      <Td>{item.title}</Td>
                      <Td display={'flex'} justifyContent={'center'}>
                        <QuantityChoosing
                          ContainerProps={{ width: '130px' }}
                        ></QuantityChoosing>
                      </Td>
                      <Td>{numberWithCommas(20000)}đ</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </CheckboxGroup>
          </Table>
        </TableContainer>

        <Box
          mt={5}
          display={'flex'}
          justifyContent={'flex-end'}
          columnGap={5}
          padding={'0 24px 24px 0'}
        >
          <Button
            onClick={() => {
              router.back();
            }}
            variant={'outline'}
          >
            Trở về
          </Button>
          <Button
            onClick={() => {
              router.push('/set-address');
            }}
            variant={'solid'}
            colorScheme='green'
          >
            Tiếp tục
          </Button>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default Cart;
