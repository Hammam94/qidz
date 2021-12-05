import { Routes, Route } from 'react-router';
import DashBoard from '../pages/DashBoard';
import NewItem from '../pages/NewItem';

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<DashBoard />}/>
      <Route path='/ambitie/new' element={<NewItem />}/>
    </Routes>
  );
};

export default {
  PageRoutes
};
