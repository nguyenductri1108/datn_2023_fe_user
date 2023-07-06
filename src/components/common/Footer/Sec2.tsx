import { Box, Icon, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { IconType } from 'react-icons/lib';
import colors from '../../../themes/colors';
interface Props {
  list: ItemFooter[];
}

interface ItemFooter<T = string> {
  title: T;
  description: T;
  icon: React.ReactElement<IconType>;
}

const Sec2: React.FC<PropsWithChildren<Props>> = ({ list }) => {
  return (
    <>
      <UnorderedList
        color='white'
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        columnGap={10}
        marginTop={3}
        flexWrap={'wrap'}
        rowGap={10}
      >
        {list.map((item, index) => (
          <ListItem
            key={index}
            fontSize='18px'
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            columnGap={4}
            padding='12px'
            backgroundColor='bgCardFooter'
            borderRadius={4}
            overflow={'hidden'}
            minWidth={'300px'}
          >
            <Icon fontSize={24} color={colors.primary}>
              {item.icon}
            </Icon>
            <Box>
              <Text as='b'>{item.title}</Text>
              <Text>{item.description}</Text>
            </Box>
          </ListItem>
        ))}
      </UnorderedList>
    </>
  );
};

export default Sec2;
