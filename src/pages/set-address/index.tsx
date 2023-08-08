import { PropsWithChildren } from 'react';
import PageWrapper from '../../components/common/Wrapper/PageWrapper';
import { Box, Button, Divider, Heading } from '@chakra-ui/react';
import BreadCrumbFC from '../../components/common/BreadCrumb';
import StepperFC from '../../components/common/Stepper/Stepper';
import { useRouter } from 'next/router';
import FormikControl from '../../components/common/Formik/FormikControl';
import { useFormik, FormikProvider } from 'formik';

interface Props {}

type formErorrType = {
  username?: string;
  email?: string;
  phoneNumber?: string;
  street?: string;
  ward?: string;
  district?: string;
  province?: string;
  detailAddress?: string;
};

type formValue = {
  username: string;
  email: string;
  phoneNumber: string;
  street: string;
  ward: string;
  district: string;
  province: string;
  detailAddress: string;
};

const SetAddress: React.FC<PropsWithChildren<Props>> = ({}) => {
  const router = useRouter();

  const validate = (values: formValue) => {
    const errors: formErorrType = {};
    if (!values.username) {
      errors.username = 'Required';
    } else if (values.username.length > 35) {
      errors.username = 'Must be 35 characters or less';
    }

    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = 'Required';
    } else if (!/^[0-9]{10}$/.test(values.phoneNumber)) {
      errors.phoneNumber = 'Wrong Format';
    }

    if (!values.detailAddress) {
      errors.detailAddress = 'Required';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      phoneNumber: '',
      street: '',
      ward: '',
      district: '',
      province: '',
      detailAddress: '',
    },
    onSubmit: value => {
      console.log(value);
    },
    validate,
  });

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

      <Box bgColor={'white'} borderRadius={'4px'} mt={10}>
        <Box p={6}>
          <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit}>
              <Box display={'flex'} flexWrap={'wrap'} columnGap={4}>
                <Box flexBasis={'49%'}>
                  <FormikControl
                    control='input'
                    type='text'
                    name='username'
                    label='Tên người nhận'
                  ></FormikControl>
                </Box>

                <Box flexBasis={'49%'}>
                  <FormikControl
                    control='input'
                    type='text'
                    name='email'
                    label='Email'
                  ></FormikControl>
                </Box>

                <Box flexBasis={'49%'}>
                  <FormikControl
                    control='input'
                    type='text'
                    name='phoneNumber'
                    label='Số điện thoại'
                  ></FormikControl>
                </Box>

                <Box flexBasis={'49%'}>
                  <FormikControl
                    control='input'
                    type='text'
                    name='street'
                    label='Đường'
                  ></FormikControl>
                </Box>

                <Box flexBasis={'49%'}>
                  <FormikControl
                    control='input'
                    type='text'
                    name='ward'
                    label='Xã/phường'
                  ></FormikControl>
                </Box>

                <Box flexBasis={'49%'}>
                  <FormikControl
                    control='input'
                    type='text'
                    name='district'
                    label='Quận/Huyện'
                  ></FormikControl>
                </Box>

                <Box flexBasis={'49%'}>
                  <FormikControl
                    control='input'
                    type='text'
                    name='province'
                    label='Tỉnh/Thành phố'
                  ></FormikControl>
                </Box>

                <Box flexBasis={'49%'}>
                  <FormikControl
                    control='input'
                    type='text'
                    name='detailAddress'
                    label='Địa chỉ cụ thể'
                  ></FormikControl>
                </Box>
              </Box>

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
                  type='submit'
                >
                  Tiếp tục
                </Button>
              </Box>
            </form>
          </FormikProvider>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export default SetAddress;
