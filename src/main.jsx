import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './styles/login.css';
import './styles/recipes.css';
import './styles/404.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from './views/Login.jsx';
import { UserProvider } from './context/UserContext.jsx';
import { PrivateRoute } from './navigation/PrivateRoute.jsx';
import 'animate.css';
import { NotFound } from './views/NotFound.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/recetas",
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    )
  },
  {
    path: "*",
    element: <NotFound />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>,
)
