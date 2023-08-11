import { Box, Divider, Heading, Select, SimpleGrid } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SORT_OPTIONS } from '..';
import BreadCrumbFC from '../../../components/common/BreadCrumb';
import PageWrapper from '../../../components/common/Wrapper/PageWrapper';
import { getCategoryFromPath } from '../../../constants/category';
import Book from '../../../components/common/Book/Book';
import { axiosGet } from '../../../services';

const SpecificCategory = () => {
  const router = useRouter();
  const [sortOptions, setSortOptions] = useState<SORT_OPTIONS | string>(
    SORT_OPTIONS.MOST_COMMON,
  );
  const category = router.query.category;

  const title = getCategoryFromPath(router.query.category).title;

  const [dataBooks, setDataBooks] = useState([]);

  const getBooksByCategory = async (category: string) => {
    const res = await axiosGet('books/getbooks', {
      category,
    });
    if (res.data) {
      console.log(res.data);
      setDataBooks(res.data);
    }
  };

  useEffect(() => {
    let catReq;
    if (category) {
      if (Array.isArray(category)) catReq = category[0];
      else catReq = category;
    }
    getBooksByCategory(catReq as string);
  }, []);

  return (
    <PageWrapper>
      <Box mt={10} display={'flex'} justifyContent={'center'}>
        <Heading>{title}</Heading>
      </Box>
      <Divider mt={5} mb={5}></Divider>
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
            {
              title: title,
              path: `/category/${title}`,
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
      <Box mt={5}>
        <SimpleGrid columns={4} spacing={3}>
          {dataBooks.map((item: any, index) => {
            return <Book key={index} {...item}></Book>;
          })}
        </SimpleGrid>
      </Box>
    </PageWrapper>
  );
};

export default SpecificCategory;
