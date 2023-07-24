import { PropsWithChildren } from 'react';
import PageWrapper from '../../components/common/Wrapper/PageWrapper';
import { Box, Divider, Heading } from '@chakra-ui/react';
import BreadCrumbFC from '../../components/common/BreadCrumb';
import StepperFC from '../../components/common/Stepper/Stepper';

interface Props {}

const SetAddress: React.FC<PropsWithChildren<Props>> = ({}) => {
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
              title: 'Địa chỉ nhận hàng',
              path: '/set-address',
            },
          ]}
        ></BreadCrumbFC>
      </Box>

      <Box mt={5} display={'flex'} justifyContent={'center'}>
        <Heading>Thông tin nhận hàng</Heading>
      </Box>

      <Divider mt={5} mb={5}></Divider>
      <Box mt={5}>
        <StepperFC stepIndex={1}></StepperFC>
      </Box>
    </PageWrapper>
  );
};

export default SetAddress;
