import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { FormPage } from './pages/forms/form';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Navbar } from './modules';
import { Error404 } from './pages/errors/Error404';
import { ErrorMobile } from './pages/errors/ErrorMobile';

const router = createBrowserRouter([
  {
    path: '/forms/:form_id',
    element: <FormPage></FormPage>,
  },
  {
    path: '/dashboard/:section?/:subsection?',
    element: <Dashboard />,
    errorElement: <Error404 />,
  },
]);

export default function App() {
  return (
    <div>
      <div className='hidden md:block'>
        <Navbar />
        <main className='pt-16'>
          <RouterProvider router={router} />
        </main>
      </div>
      <div className='block md:hidden'>
        <ErrorMobile></ErrorMobile>
      </div>
    </div>
  );
}
