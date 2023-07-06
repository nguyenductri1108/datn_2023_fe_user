import { useMediaQuery } from '@chakra-ui/react';

export const useCheckMobile = () => {
  const [isMobile] = useMediaQuery('(max-width: 600px)');
  return isMobile;
};
