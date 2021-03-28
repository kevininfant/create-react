import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as  AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import {MdControlPoint } from "react-icons/md";
import { TiPlus } from "react-icons/ti";
export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome size="27" />,
    cName: 'nav-text'
  },
 
  {
    title: 'Students Details',
    path: '/students',
    icon: <MdControlPoint size="27" />,
    cName: 'nav-text'
  },
  {
    title: 'Add Students',
    path: '/register',
    icon: <TiPlus size="27" />,
    cName: 'nav-text'
  },
  {
    title: 'Update Reports',
    path: '/studentupdate',
    icon: <IoIcons.IoIosPaper size="27" />,
    cName: 'nav-text'
  },
  {
    title: 'Send Reports',
    path: '/userupdate',
    icon: <IoIcons.IoIosPaper size="27" />,
    cName: 'nav-text'
  },
 
];