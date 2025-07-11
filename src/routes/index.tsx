import { createBrowserRouter, RouterProvider } from 'react-router'
import DefaultLayout from '@/routes/layouts/Default'
import EmptyLayout from '@/routes/layouts/Empty'
import Home from '@/routes/pages/Home'
import About from '@/routes/pages/About'
import Movies from '@/routes/pages/Movies'
import MovieDetails from '@/routes/pages/MovieDetails'
import NotFound from '@/routes/pages/NotFound'
import SingIn from '@/routes/pages/SingIn'
import Todos from '@/routes/pages/Todos'
import { requiresAuth } from '@/routes/loaders/'

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/movies',
        element: <Movies />,
        loader: requiresAuth,
        children: [
          {
            path: '/movies/:movieId',
            element: <MovieDetails />
          }
        ]
      },
      {
        path: '/todos',
        element: <Todos />
      },
      {
        path: '/signin',
        element: <SingIn />
      }
    ]
  },
  {
    element: <EmptyLayout />,
    children: [
      {
        path: '*',
        element: <NotFound />
      }
    ]
  },
  {
    path: '/todos',
    element: <Todos />
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
