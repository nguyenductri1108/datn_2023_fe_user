import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { type } from 'os';
import { PropsWithChildren } from 'react';

type BreadcrumbData<T> = {
  title: T;
  path: T;
};

interface Props {
  TreeLink: Array<BreadcrumbData<string>>;
}

const BreadCrumbFC: React.FC<PropsWithChildren<Props>> = ({ TreeLink }) => {
  return (
    <Breadcrumb>
      {TreeLink.map((item, index) => {
        return (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink href={item.path}>{item.title}</BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};

export default BreadCrumbFC;
