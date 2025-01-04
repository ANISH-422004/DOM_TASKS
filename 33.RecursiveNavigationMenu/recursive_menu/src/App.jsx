import React from 'react'
import MenuList from './Components/MenuList';

const App = () => {

const menuData = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "details",
        children: [
          {
            label: "Location",
            to: "location",
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Account",
        to: "account",
      },
      {
        label: "Security",
        to: "security",
        children: [
          {
            label: "Login",
            to: "login",
          },
          {
            label: "Register",
            to: "register",
          },
        ],
      },
    ],
  },
];

/// approach is to pahale show kardo all one uder another by recursive process // then contion lagao kab dikahana hai on click [e state change karke ---> conditional rendering

  return (
    <div className='w-full h-screen text-slate-800 flex justify-center items-center' >
    
      <MenuList list={menuData} />

    </div>
  )
}

export default App