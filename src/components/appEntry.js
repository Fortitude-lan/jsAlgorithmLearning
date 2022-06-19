/*
 * @Description: 路由
 * @Author: wanghexing
 * @Date: 2021-12-24 15:02:47
 * @LastEditors: wanghexing
 * @LastEditTime: 2022-06-17 17:49:43
 */
import React from 'react'
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom' //HashRouter|# BrowserRouter|无#
import SubApp from './subApp'
import { useNavigate } from "react-router-dom";
export default function AppEntry() {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Navigate to="/home" />} />
                <Route path='/*' element={<SubApp />} />
            </Routes>
        </HashRouter>
    )
}
