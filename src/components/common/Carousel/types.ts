import { BoxProps } from '@chakra-ui/react';

export interface CarouselProps {
  itemShown: number;
  spacing?: number;
  index?: number;
  autoScroll?: boolean;
  autoScrollInterval?: number;
  CustomNavigator?: React.FC<CustomNavigatorProps>;
  ContainerProps?: BoxProps;
}

export interface CustomNavigatorProps {
  index: number;
  setIndex: (index: number) => void;
}
