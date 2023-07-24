import { Box, Select, SimpleGrid } from '@chakra-ui/react';
import { useState } from 'react';
import Book from '../../components/common/Book/Book';
import BreadCrumbFC from '../../components/common/BreadCrumb';
import PageWrapper from '../../components/common/Wrapper/PageWrapper';
import SideBarCategory from '../../components/pages/Category/SideBar';
import { categories } from '../../constants/category';

const Category = () => {
  const [sortOptions, setSortOptions] = useState<SORT_OPTIONS | string>(
    SORT_OPTIONS.MOST_COMMON,
  );

  const categoryPaths = categories.map(item => item.path);

  const [categorySelected, setCategorySelected] = useState<
    typeof categoryPaths
  >([]);

  return (
    <PageWrapper>
      <Box mt={10}></Box>
      <Box display={'flex'} justifyContent={'space-between'}>
        <BreadCrumbFC
          TreeLink={[
            {
              title: 'Trang chủ',
              path: '/',
            },
            {
              title: 'Danh mục',
              path: '/category',
            },
          ]}
        ></BreadCrumbFC>

        <Select
          value={sortOptions}
          onChange={e => {
            console.log(e.target.value);
            setSortOptions(e.target.value);
          }}
          maxWidth={['200px', '350px']}
        >
          <option value={SORT_OPTIONS.MOST_COMMON}>Phổ biến nhất</option>
          <option value={SORT_OPTIONS.MOST_DISCOUNT}>Giá tốt nhất</option>
        </Select>
      </Box>
      <Box mt={4}></Box>
      <Box display={'flex'} columnGap={3}>
        <Box flex={1}>
          <SideBarCategory
            categorySelected={categorySelected}
            setCategorySelected={setCategorySelected}
          />
        </Box>
        <Box flex={4}>
          <SimpleGrid columns={4} spacing={3}>
            {Array(20)
              .fill({
                imgUrl: '/images/carousel/bg1.jpg',
                description: 'Truyện tranh',
                title: 'Doraemon',
                price: 20_000,
              })
              .map((item, index) => {
                return <Book key={index} {...item}></Book>;
              })}
          </SimpleGrid>
        </Box>
      </Box>
    </PageWrapper>
  );
};

export enum SORT_OPTIONS {
  MOST_COMMON,
  MOST_DISCOUNT,
}

export default Category;
