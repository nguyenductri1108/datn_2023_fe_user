import { PropsWithChildren } from 'react';
import PageWrapper from '../../components/common/Wrapper/PageWrapper';
import {
  Box,
  Button,
  Divider,
  Heading,
  Img,
  ListItem,
  OrderedList,
  Text,
} from '@chakra-ui/react';
import BreadCrumbFC from '../../components/common/BreadCrumb';
import StepperFC from '../../components/common/Stepper/Stepper';
import { useRouter } from 'next/router';

interface Props {}

const PayingPage: React.FC<PropsWithChildren<Props>> = ({}) => {
  const router = useRouter();

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
              title: 'Đơn hàng',
              path: '/',
            },
            {
              title: 'Thanh toán',
              path: `/${router.query.orderId}/paying`,
            },
          ]}
        ></BreadCrumbFC>
      </Box>

      <Box mt={5} display={'flex'} justifyContent={'center'}>
        <Heading>Thanh toán</Heading>
      </Box>

      <Divider mt={5} mb={5}></Divider>
      <Box mt={5}>
        <StepperFC stepIndex={2}></StepperFC>
      </Box>

      <Box bgColor={'white'} borderRadius={'4px'} mt={10}>
        <Box p={6} display={'flex'}>
          <Box
            flexBasis={'50%'}
            padding={3}
            display={'flex'}
            justifyContent={'center'}
            flexDirection={'column'}
          >
            <Text fontSize={'32px'}>
              Quét mã dưới để thanh toán cho đơn hàng số {'      '}
              <span style={{ color: 'red', fontSize: '32px' }}>1231323</span>
            </Text>
            <Img src='/images/QrPay/QrCode.png' />
          </Box>

          <Box
            flexBasis={'50%'}
            padding={3}
            display={'flex'}
            justifyContent={'center'}
            flexDirection={'column'}
          >
            <Text fontSize={'48px'}>Chuyển khoản</Text>
            <OrderedList>
              <ListItem fontSize={'24px'}>
                Vào ứng dụng ngân hàng của bạn trên điện thoại và chọn chức năng
                quét mã QR trong đó
              </ListItem>
              <ListItem fontSize={'24px'}>Quét mã QR bên trái</ListItem>
              <ListItem fontSize={'24px'}>Nhập số tiền bạn cần chuyển</ListItem>
              <ListItem fontSize={'24px'}>
                Nội dung chuyển tiền{' '}
                <span style={{ color: 'red', fontSize: '24px' }}>1231323</span>
              </ListItem>
            </OrderedList>
          </Box>
        </Box>

        <Box display={'flex'} justifyContent={'center'} paddingBottom={'24px'}>
          <Button
            onClick={() => {}}
            variant={'solid'}
            colorScheme='green'
            type='submit'
          >
            Hoàn thành
          </Button>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default PayingPage;
