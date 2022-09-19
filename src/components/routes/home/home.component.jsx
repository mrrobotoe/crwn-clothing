import { Outlet } from 'react-router-dom';
import { categories } from '../../../data';
import Directory from '../../directory/directory.component';

const Home = () => {
  
  return (
    <>
      <Directory />
      <Outlet />
    </>
  );
};

export default Home;
