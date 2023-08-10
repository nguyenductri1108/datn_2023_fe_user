import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  MenuItem,
  MenuList,
  Portal,
  useDisclosure,
} from '@chakra-ui/react';
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import useDebounce from '../../../hooks/useDebounce';
import { axiosGet } from '../../../services';

import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/react';
interface Props {
  setFocus: Dispatch<SetStateAction<boolean>>;
  isSearchFocus: boolean;
}

const InputSearch: React.FC<PropsWithChildren<Props>> = ({
  setFocus,
  isSearchFocus,
}) => {
  const [input, setInput] = useState<string>('');
  const { data } = useDebounce(input, 500);

  const [dataSearch, setDataSearch] = useState<Array<any>>([]);

  const getDataSearch = async (abortSignal: AbortSignal) => {
    const res = await axiosGet(
      'books/getbooks',
      { name: data, author: data },
      { signal: abortSignal },
    );
    console.log(res.data);
    setDataSearch(res.data);
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    getDataSearch(signal);

    return () => {
      controller.abort();
    };
  }, [data]);

  return (
    <>
      <Box>
        <InputGroup width={'100%'} position={'relative'}>
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

          {isSearchFocus ? (
            <Box
              position={'absolute'}
              style={{
                overflow: 'hidden',
                top: '100%',
                left: '0',
                backgroundColor: 'white',
                width: '100%',
                minHeight: '40px',
                borderRadius: '10px',
                boxShadow: '0 0 1px 1px rgba(0,0,0,0.3)',
              }}
            >
              {dataSearch.length ? (
                dataSearch.map(item => {
                  return (
                    <Box
                      _hover={{
                        backgroundColor: 'rgba(0,0,0,0.3)',
                        cursor: 'pointer',
                      }}
                      padding={2}
                      key={item._id}
                    >
                      {item.name}
                    </Box>
                  );
                })
              ) : (
                <Box padding={2} textAlign={'center'}>
                  Không có dữ liệu
                </Box>
              )}
            </Box>
          ) : (
            <></>
          )}
        </InputGroup>
      </Box>
    </>
  );
};

export default InputSearch;
