import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdAssignmentAdd } from "react-icons/md";
import { MdDinnerDining } from "react-icons/md";
import { IoManOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { CiUser } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import './Nav.css'
function Navbar() {
    const [burger , setburger] = useState(false)
    const handleburger = ()=>{
           setburger(!burger)
    }
  return (
   <>
      <nav>
          <div className={burger ? 'active_burger' : 'burger'} onClick={handleburger}>
             <div></div>
             <div></div>
             <div></div>
          </div>
         <div className={burger ? 'left_nav_active' : 'left_nav'}>
               <div className="logo"><h2>RestroDineTech</h2></div>
               <div className="pages">
                  <ul>
                  <IconContext.Provider
              value={{
                color: "rgb(82, 5, 101)",
                className: "global-class-name",
                size: "1.4em"
              }}
            >
                    <Link to ='/dashboard'><li>
                        <span>
                        <LuLayoutDashboard />
                         <p>Dashboard</p>
                        </span>
                     </li></Link> 
                     <Link to ='/addmenu'><li>
                        <span>
                        <MdAssignmentAdd />
                         <p>Add Menu</p>
                        </span>
                     </li></Link> 
                     <Link to ='/dashboard'><li>
                        <span>
                        <MdDinnerDining />
                         <p>Orders</p>
                        </span>
                     </li></Link> 
                     <Link to ='/dashboard'><li>
                        <span>
                        <IoManOutline />
                         <p>Service Request</p>
                        </span>
                     </li></Link> 
                     </IconContext.Provider>
                  </ul>
                  
               </div>
          </div>
             <div className="search_bar">
                <span>
                <CiSearch />
                <input type="text" placeholder='Search'/>
                </span>
             </div>
             <IconContext.Provider
              value={{
                color: "#ae50c6",
                className: "global-class-name",
                size: "1.4em"
              }}
            >  <div className="right_nav">
                  <div className="notification">
                    <span>
                    <IoMdNotificationsOutline />
                    
                    </span>
                  </div>
                  <div className="profile">
                    <span>
                    <CiUser />
                    </span>
                  </div>
             </div></IconContext.Provider>
          
      </nav>
   </>
  )
}

export default Navbar