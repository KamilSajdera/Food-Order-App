import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootPage from "./routes/RootPage";
import HomePage from "./routes/HomePage";
import ErrorPage from "./routes/ErrorPage";

import Burgers from "./components/Burgers/Burgers";
import Pizzas from './components/Pizza/Pizza';
import Kebabs from "./components/Kebab/Kebab";
import Other from "./components/Other/Other";

const router = createBrowserRouter([
  { path: '/', element: <RootPage />, children: [
    { index: true, element: <HomePage /> },
    { path: '/burger', element: <Burgers /> },
    { path: '/pizza', element: <Pizzas /> },
    { path: '/kebab', element: <Kebabs/> },
    { path: '/other', element: <Other /> },
  ], errorElement: <ErrorPage /> }
 
])
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;
