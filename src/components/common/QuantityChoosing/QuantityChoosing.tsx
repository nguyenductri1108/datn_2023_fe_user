import { Box, BoxProps, Button, Input } from '@chakra-ui/react';
import { PropsWithChildren, forwardRef, useState } from 'react';
interface PropsQuantityChildren {
  ContainerProps?: BoxProps;
  setState: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
}

const QuantityChoosing = forwardRef<
  HTMLInputElement,
  PropsWithChildren<PropsQuantityChildren>
>(({ ContainerProps, setState, limit }, _ref) => {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <Box display={'flex'} width={'200px'} {...ContainerProps}>
      <Button
        flex={1}
        onClick={() => {
          if (quantity > 1)
            setQuantity(prev => {
              setState(prev - 1);
              return prev - 1;
            });
        }}
        isDisabled={quantity <= 1}
      >
        -
      </Button>
      <Input
        flex={2}
        type='number'
        value={quantity}
        onChange={e => {
          if (Number(e.target.value) < 0) setQuantity(1);
          setQuantity(Number(e.target.value));
        }}
        width={'20'}
        ref={_ref}
      ></Input>
      <Button
        flex={1}
        onClick={() => {
          setQuantity(prev => {
            setState(prev + 1);
            return prev + 1;
          });
        }}
        isDisabled={quantity >= limit}
      >
        +
      </Button>
    </Box>
  );
});

export default QuantityChoosing;
