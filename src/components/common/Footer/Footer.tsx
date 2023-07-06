import { Box, Divider, SimpleGrid } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import Sec1 from './Sec1';
import Sec2 from './Sec2';
import { BiReset, BiSolidSmile, BiSolidTruck } from 'react-icons/bi';
interface Props {}

const Footer: React.FC<PropsWithChildren<Props>> = ({}) => {
  return (
    <>
      <Box
        bgColor='white'
        borderTop='1px solid black'
        p={4}
        display='flex'
        justifyContent='center'
        id='footer'
      >
        <Box>
          <Sec1 />
          <Divider height={1}></Divider>
          <Sec2
            list={[
              {
                title: '3 Ngày miễn phí đổi trả',
                description: 'Đổi trả hàng miễn phí trong 3 ngày',
                icon: <BiReset />,
              },
              {
                title: 'Dịch vụ tốt nhất',
                description: 'Chăm sóc khách hàng tận tình',
                icon: <BiSolidSmile />,
              },
              {
                title: 'Miễn phí vận chuyển',
                description: 'Giao hàng miễn phí toàn quốc',
                icon: <BiSolidTruck />,
              },
            ]}
          />
          <Box></Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
