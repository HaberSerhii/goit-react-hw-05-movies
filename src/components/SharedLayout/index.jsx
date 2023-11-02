import { ButtonUp } from '../ButtonUp';
import Footer from '../Footer';
import Header from '../Header';
import { Loader } from '../Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ButtonUp />
      <Footer />
    </>
  );
};

export default SharedLayout;
