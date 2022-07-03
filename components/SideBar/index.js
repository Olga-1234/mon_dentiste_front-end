import Link from 'next/link';
import { useEffect } from 'react';

import style from './style.module.css';


import React, { useState } from 'react';

//import react pro sidebar components
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent
} from 'react-pro-sidebar';

//import icons from react icons
import { FaList, FaRegHeart } from 'react-icons/fa';
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle, FiUsers, } from 'react-icons/fi';
import { RiPencilLine } from 'react-icons/ri';
import { TbBuildingHospital, TbClipboardList } from 'react-icons/tb';
import {FcSurvey} from "react-icons/fc"


//import sidebar css from react-pro-sidebar module and our custom css
import 'react-pro-sidebar/dist/css/styles.css';

const Header = () => {
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false);

    //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
        //condition checking to change state from true to false and vice versa
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };
    const [state, setState] = useState({ roles: [] });
    useEffect(() => {
        setState({ roles: localStorage.getItem('roles').split(',') });
        console.log(localStorage.getItem('roles').split(','));
        //  console.log(localStorage)
    }, []);
    return (
        <>
            <div className={`${style.fixed}`}>
                {/* collapsed props to change menu size using menucollapse state */}
                <ProSidebar className={style.header} collapsed={menuCollapse}>
                    <SidebarHeader>
                        <div className={style.logotext}>
                            {/* small and big change using menucollapse state */}
                            <p>{menuCollapse ? '  D' : 'Dentiste'}</p>
                        </div>
                        <div className={style.closemenu} onClick={menuIconClick}>
                            {/* changing menu collapse icon on click */}
                            {menuCollapse ? <FiArrowLeftCircle /> : <FiArrowRightCircle />}
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={true} icon={<FiHome />}>
                                {state.roles.indexOf('admin') > -1 && (
                                    <Link href="/" passHref>
                                        <a>Home</a>
                                    </Link>
                                )}
                            </MenuItem>

                            <MenuItem icon={<TbClipboardList />}>
                                <Link href="/AdminPage" passHref>
                                    <a aria-current="page">Rendez-vous</a>
                                </Link>
                            </MenuItem>
                            <MenuItem  icon={<RiPencilLine />}>
                                <Link href="/AdminPage/articles" passHref>
                                    <a aria-current="page">Articles</a>
                                </Link>
                            </MenuItem>
                            <MenuItem icon={<TbBuildingHospital />}>
                                {state.roles.indexOf('admin') > -1 && (
                                    <Link href="/AdminPage/cabinet" passHref>
                                        <a>Cabinet</a>
                                    </Link>
                                )}
                            </MenuItem>
                            <MenuItem icon={<FiUsers />}>
                                {state.roles.indexOf('admin') > -1 && (
                                    <Link href="/AdminPage/utilisateur" passHref>
                                        <a>Users</a>
                                    </Link>
                                )}
                            </MenuItem>
                        </Menu>
                    </SidebarContent>
                    <SidebarFooter>
                        <Menu iconShape="square">
                            <MenuItem icon={<FiLogOut />}>
                                <Link href="/login" passHref><a>Logout</a></Link>
                            </MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
};

export default Header;
