import { Box } from '@chakra-ui/react';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
interface Props {}

const AppWrapper: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(headerRef.current?.clientHeight ?? 0);
  }, []);

  return (
    <>
      <Box
        height='fit-content'
        minHeight='100vh'
        bgColor={'bgBody'}
        display='flex'
        flexDirection={'column'}
      >
        <Header ref={headerRef} />
        <Box height={`${height}px`} />
        {children}
        <Box mt={10} flexGrow={1} />
        <Footer />
      </Box>
    </>
  );
};

export default AppWrapper;
