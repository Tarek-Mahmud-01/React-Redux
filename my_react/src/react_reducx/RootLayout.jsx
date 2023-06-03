import React from 'react'
import ReactDOM from 'react-dom'
 
import { Outlet } from "react-router-dom";
import NavScrollExample from './Navbar';
import { Provider } from 'react-redux'
import store from './cartStore';


const RootLayout=()=>{


    return(<>
           <Provider store={store}>
              <NavScrollExample/>
                <main>
                    <Outlet/>
                </main>
            </Provider>
        </>);
}
export default RootLayout;