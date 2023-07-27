import { PropsWithChildren } from 'react';
import PageWrapper from '../../components/common/Wrapper/PageWrapper';
import { Box, Divider, Heading } from '@chakra-ui/react';
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
    </PageWrapper>
  );
};

export default PayingPage;
