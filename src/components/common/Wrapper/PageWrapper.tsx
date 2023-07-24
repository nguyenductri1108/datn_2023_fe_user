import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { PropsWithChildren } from 'react';
interface Props {
  title?: string;
  iconUrl?: string;
}

const PageWrapper: React.FC<PropsWithChildren<Props>> = ({
  title,
  iconUrl = '/images/logo.jpg',
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel='icon' href={iconUrl} />
      </Head>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        padding={'12px'}
      >
        <Box width='100%' maxWidth='1200px'>
          {children}
        </Box>
      </Box>
    </>
  );
};

export default PageWrapper;
