/*
 * @Description: 路由
 * @Author: wanghexing
 * @Date: 2021-12-24 15:02:47
 * @LastEditors: wanghexing
 * @LastEditTime: 2022-06-17 17:22:56
 */
import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom' //HashRouter|# BrowserRouter|无#
import SubApp from './subApp'
import menuList from '../plugins/router'
export default function AppEntry() {
    return (
        <HashRouter>
            <Routes>
                <Route path='/*' element={<SubApp />} />
            </Routes>
        </HashRouter>
    )
}