import { useNavigate, useLocation } from "react-router";
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import menuList from '../plugins/router'
const { Sider } = Layout;


 export default function SideMenu(props) {
    let navigate = useNavigate();
    let location = useLocation();
    const selectKeys = [location.pathname];
    const openKeys = ["/" + location.pathname.split("/")[1]]
    console.log(openKeys);
    return (
        <Sider trigger={null} collapsible collapsed={props.collapsed}>
            <Menu
                theme="dark"
                mode="inline"
                selectedKeys={selectKeys}
                defaultOpenKeys={openKeys}
                items={menuList}
                onClick={(e) => {
                    navigate(e.key)
                }}
            />
        </Sider>
    )
}
