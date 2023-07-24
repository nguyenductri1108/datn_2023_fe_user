import { isArray } from 'util';

export const categories: Array<{ title: string; path: string }> = [
  {
    title: 'Truyện tranh',
    path: 'truyentranh',
  },
  {
    title: 'Văn học',
    path: 'vanhoc',
  },
  {
    title: 'Kinh tế',
    path: 'kinhte',
  },
  {
    title: 'Tri thức',
    path: 'trithuc',
  },
  {
    title: 'Tiểu thuyết',
    path: 'tieuthuyet',
  },
  {
    title: 'Kỹ năng sống',
    path: 'kinangsong',
  },
  {
    title: 'Ngoại ngữ',
    path: 'ngoaingu',
  },
  {
    title: 'Tham khảo',
    path: 'thamkhao',
  },
  {
    title: 'Từ điển',
    path: 'tudien',
  },
];

export const getCategoryFromPath: (path: string | string[] | undefined) => {
  isValid: boolean;
  title: string;
  path: string;
} = path => {
  let res = {
    isValid: false,
    path: '',
  };
  if (!path) {
    return Object.assign(res, { title: 'Danh mục không tồn tại' });
  }
  let category = categories.find(item => item.path === path);
  if (category) {
    return Object.assign(res, {
      title: category.title,
      isValid: true,
      path: category.path,
    });
  }
  return Object.assign(res, { title: 'Danh mục không tồn tại' });
};

export const getPathFromCategory: (category: string) => string = category => {
  return categories.find(item => item.title === category)?.path || 'null';
};
