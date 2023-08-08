import React, { PropsWithChildren, useEffect } from 'react';
import { axiosGet } from '../../services';
import { useDispatch } from 'react-redux';
import { saveDataUser } from '../../redux/reducers/userSlice';

interface Props {}

const CheckUser: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  const dispatch = useDispatch();

  const getUserData = async () => {
    if (localStorage.getItem('accessToken')) {
      const res = await axiosGet('auth/user');
      dispatch(saveDataUser(res.data));
      console.log(res.data);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return <>{children}</>;
};

export default CheckUser;
