/*
 * @Description: 
 * @Author: wanghexing
 * @Date: 2022-06-15 16:02:38
 * @LastEditors: wanghexing
 * @LastEditTime: 2022-06-16 11:39:06
 */
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
const { Header, Sider, Content } = Layout;

const menuList=[
    {
        key: '1',
        // icon: <UserOutlined />,
        label: '队列',
        children:[
            {
                key: '2',
                // icon: <VideoCameraOutlined />,
                label: 'nav 2',
            },
            {
                key: '3',
                // icon: <UploadOutlined />,
                label: 'nav 3',
            },
        ]
    },
    {
        key: '2',
        icon: <VideoCameraOutlined />,
        label: 'nav 2',
    },
    {
        key: '3',
        icon: <UploadOutlined />,
        label: 'nav 3',
    },
]



export default function index() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" >Algorithm</div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={menuList}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                >
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    
                </Content>
            </Layout>
        </Layout>
    )


}
