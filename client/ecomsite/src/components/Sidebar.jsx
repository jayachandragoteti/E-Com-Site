import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
//import { IconContext } from 'react-icons/lib';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
//import Divider from '@material-ui/core/Divider';

const Nav = styled.div`
  
  height: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 1rem;
  font-size: 1.5rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration:none;
`;

const SidebarNav = styled.nav`
  background: #f5f5f5;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const useStyles = makeStyles((theme) => ({
  threebar: {
    color:'#fff',
  },
  cross:{
    color:'#000',
    position:'relative',
    
  },
  iconcross:{
    position:'relative',
    left:'10rem',
    top:'0.3rem',
  },
  title: {
    color:'#000',
    marginTop:'10px',
    textDecoration:'none',

  },
  sideebyside:{
    margin:0,
  },
}));

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const classes = useStyles();
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      
        <Nav >
          <NavIcon to='#' className={classes.threebar}>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar} className={classes.sideebyside}>
          <SidebarWrap className={classes.cat}>
          
            <NavIcon to='#' className={classes.cross}>
              <AiIcons.AiOutlineClose onClick={showSidebar} className={classes.iconcross}/>
              <Typography className={classes.title} variant="h4" noWrap>
           E-com
          </Typography>
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
          
        </SidebarNav>
  
    </>
  );
};

export default Sidebar;