import React from "react";
import Title from "./Components/Title";
import Body from "./Components/Body";
import About from "./Components/About";
import { Outlet, createBrowserRouter } from "react-router-dom";
import ContactUs from "./Components/Contactus";
import Menu from "./Components/Menu";
import ThemeProvider from "./Components/ThemeProvider";
 import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Components/Cart";


const App = () => {
  return(
    <Provider store={appStore }>
    <ThemeProvider>
          <div >
          <Title />  
          <Outlet /> 
          </div>
      </ThemeProvider>
    </Provider>
        
  );
  
}

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path:"/contact",
        element:<ContactUs />
      },
      {
        path:"/restaurants/:resId",
        element:<Menu />
      },
      {
        path:"/cart",
        element:<Cart />

      }
      
    ],
  }
])


export default App;