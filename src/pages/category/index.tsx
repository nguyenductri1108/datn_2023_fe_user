import { Box, Select, SimpleGrid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Book from '../../components/common/Book/Book';
import BreadCrumbFC from '../../components/common/BreadCrumb';
import PageWrapper from '../../components/common/Wrapper/PageWrapper';
import SideBarCategory from '../../components/pages/Category/SideBar';
import { categories } from '../../constants/category';
import { axiosGet, axiosPost } from '../../services';

const Category = () => {
  const [sortOptions, setSortOptions] = useState<SORT_OPTIONS | string>(
    SORT_OPTIONS.MOST_COMMON,
  );

  const categoryPaths = categories.map(item => item.path);

  const [categorySelected, setCategorySelected] = useState<
    typeof categoryPaths
  >([]);

  const [dataBooks, setDataBooks] = useState<Array<any>>([]);

  const getBooksFiltered = async (
    categories: string[],
    sortOptions: string | SORT_OPTIONS,
  ) => {
    console.log(categories, sortOptions);
    axiosPost('books/filter', {
      categories,
      sortOptions: sortOptions.toString(),
    })
      .then(res => {
        console.log(res);
        if (res.data) {
          setDataBooks(res.data.books);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBooksFiltered(categorySelected, sortOptions);
  }, [categorySelected, sortOptions]);

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
            {dataBooks.map((item, index) => {
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
