import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  CheckboxGroup,
  Divider,
} from '@chakra-ui/react';
import { categories } from '../../../constants/category';
import { PropsWithChildren } from 'react';

interface Props {
  categorySelected: Array<string>;
  setCategorySelected: React.Dispatch<React.SetStateAction<Array<string>>>;
}

const SideBarCategory: React.FC<PropsWithChildren<Props>> = ({
  setCategorySelected,
  categorySelected,
}) => {
  return (
    <Card>
      <CardHeader>Danh mục</CardHeader>
      <Divider></Divider>
      <CardBody>
        <CheckboxGroup
          value={categorySelected}
          onChange={e => {
            console.log(categories, e);
            setCategorySelected(e as Array<string>);
          }}
          colorScheme='blackAlpha'
        >
          <Box display={'flex'} flexDirection={'column'} rowGap={2}>
            {categories.map((item, index) => {
              return (
                <Box>
                  <Checkbox value={item.path}>{item.title}</Checkbox>
                </Box>
              );
            })}
          </Box>
        </CheckboxGroup>
      </CardBody>
    </Card>
  );
};

export default SideBarCategory;
