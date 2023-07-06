import { SearchIcon } from '@chakra-ui/icons';
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';
interface Props {
  setFocus: Dispatch<SetStateAction<boolean>>;
}

const Autocomplete: React.FC<PropsWithChildren<Props>> = ({ setFocus }) => {
  const [input, setInput] = useState('');

  return (
    <>
      <InputGroup width={'100%'}>
        <Input
          type='text'
          value={input}
          placeholder='Search for your book'
          onChange={e => {
            setInput(e.target.value);
          }}
          onFocus={e => {
            setFocus(true);
          }}
          onBlur={e => {
            setFocus(false);
          }}
        />
        <InputRightElement>
          <IconButton
            aria-label='Search'
            icon={<SearchIcon color={input ? 'black.400' : 'gray.300'} />}
            backgroundColor={'transparent'}
            _hover={{
              cursor: 'pointer',
            }}
          ></IconButton>
        </InputRightElement>
      </InputGroup>
    </>
  );
};

export default Autocomplete;
