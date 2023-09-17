import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";

import RootPage from "./routes/RootPage";
import HomePage from "./routes/HomePage";
import ErrorPage from "./routes/ErrorPage";

import Burgers from "./components/Burgers/Burgers";
import Pizzas from './components/Pizza/Pizza';
import Kebabs from "./components/Kebab/Kebab";

const router = createBrowserRouter([
  { path: '/', element: <RootPage />, children: [
    { index: true, element: <HomePage /> },
    { path: '/burger', element: <Burgers /> },
    { path: '/pizza', element: <Pizzas /> },
    { path: '/kebab', element: <Kebabs/> },
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
