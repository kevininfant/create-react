import React, { useState,useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { Link } from 'react-router-dom';
import {MdControlPoint } from "react-icons/md";
import { TiPlus } from "react-icons/ti";
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import { VscGear} from "react-icons/vsc";
import { BsBoxArrowInRight } from "react-icons/bs";
import {getUser} from '../../ApiService'

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const [user,setUser]= useState({})
  const getUsers=async()=>{
    let result;
    try {
        result = await getUser();
    } catch (e) { }
    try {
        if (result.success) {
          setUser(result.user)
             console.log(result.user)    
        }
    } catch (e) { }
  }
  useEffect(() => {
    getUsers();
}, []);

  return (
    
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>

          <div className="Icon">
          <Link to='/' className='menu-bars'>
            <BsBoxArrowInRight />
          </Link>
          </div>
          <div className="profileIcon">
          <Link to='/profile' className='menu-bars'>
            <VscGear />
          </Link>
          </div>

        </div>
        <nav id="navHead" className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            
                {user.admin ?
                <div>
              <li className='nav-text'>
                  <Link to='./home'>
                  <AiIcons.AiFillHome size="27" />
                    <span>Home</span>
                  </Link>
                </li>
                <li className='nav-text'>
                  <Link to='./students'>
                  
                  <MdControlPoint size="27" />
                    <span>Students Details</span>
                  </Link>
                </li>
                <li className='nav-text'>
                  <Link to='./register'>
                  
                  <TiPlus size="27" />
                    <span>Students Register</span>
                  </Link>
                </li>
                <li className='nav-text'>
                  <Link to='./studentupdate'>
                  
                  <IoIcons.IoIosPaper size="27" />
                    <span>Update Reports</span>
                  </Link>
                </li>
                </div>:
                <div>
                  <li className='nav-text'>
                  <Link to='./home'>
                  <AiIcons.AiFillHome size="27" />
                    <span>Home Page</span>
                  </Link>
                </li>
                <li className='nav-text'>
                  <Link to='./userupdate'>
                  <IoIcons.IoIosPaper size="27" />
                    <span>Send Reports</span>
                  </Link>
                </li>
                  </div>}
            
            {/* {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })} */}
          </ul>
        </nav>
      </IconContext.Provider>
    
  );
}

export default Navbar;