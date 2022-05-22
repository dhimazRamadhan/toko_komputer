import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Customers',
    path: '/customer',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/product',
    icon: <IoIcons.IoIosCube />,
    cName: 'nav-text'
  },
  {
    title: 'Transaction',
    path: '/transaksi',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/support',
    icon: <IoIcons.IoMdExit />,
    cName: 'nav-text'
  }
];