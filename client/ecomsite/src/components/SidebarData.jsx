  
import React from 'react';

import * as RiIcons from 'react-icons/ri';


export const SidebarData = [
  {
    title: 'Category1',
    path: '/category1',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'SubCategory1',
        path: '/category1/subcategory1',
      
       
      },
      {
        title: 'SubCategory2',
        path: '/category1/subcategory2',
       
      }
    ]
  },
  {
    title: 'Category2',
    path: '/category2',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />, 
    subNav: [
      {
        title: 'Subcategory1',
        path: '/category2/subcategory1',
        cName: 'subnav'
      },
      {
        title: 'Subcategory2',
        path: '/category2/subcategory2',
       
        cName: 'subnav'
      },
      {
        title: 'Subcategory3',
        path: '/category2/subcategory3',
       
      }
    ]
  },
  {
    title: 'Category3',
    path: '/category3',
    
  },
  {
    title: 'Category4',
    path: '/category4',
    
  },
  {
    title: 'Category5',
    path: '/category5',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Subcategory1',
        path: '/category5/subcategory1',
        
      },
      {
        title: 'Subcategory2',
        path: '/category5/subcategory2',
        
      }
    ]
  },
  {
    title: 'Category6',
    path: '/category6',
    
  }
];