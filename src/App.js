import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'

import RootPage from "./routes/RootPage";
import HomePage from "./routes/HomePage";
import ErrorPage from "./routes/ErrorPage";

import Burgers from "./components/Burgers/Burgers";
import Pizzas from './components/Pizza/Pizza';
import Kebabs from "./components/Kebab/Kebab";
import Other from "./components/Other/Other";
import Drinks from './components/Drinks/Drinks';

import store from "./store";

const router = createBrowserRouter([
  { path: '/', element: <RootPage />, children: [
    { index: true, element: <HomePage /> },
    { path: '/burger', element: <Burgers /> },
    { path: '/pizza', element: <Pizzas /> },
    { path: '/kebab', element: <Kebabs/> },
    { path: '/other', element: <Other /> },
    { path: '/drinks', element: <Drinks /> },
  ], errorElement: <ErrorPage /> }
 
])
function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  )
}

export default App;
