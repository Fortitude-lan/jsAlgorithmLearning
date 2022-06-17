/*
 * @Description: 
 * @Author: wanghexing
 * @Date: 2022-06-15 16:02:38
 * @LastEditors: wanghexing
 * @LastEditTime: 2022-06-17 17:31:09
 */
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout } from 'antd';
import React, { useState } from 'react';
import { SideMenu } from 'components'
import { RoutList } from 'components'
import Footer from '../plugins/footer'
import Top from '../plugins/header'
const { Header, Content } = Layout;

export default function SubApp() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <Top />
            <Layout>
                <SideMenu collapsed={collapsed} />
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
                        <RoutList/> 
                    </Content>
                </Layout>
            </Layout>
            <Footer />
        </div >
    )
}
