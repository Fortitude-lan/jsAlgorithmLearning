/*
 * @Description: 
 * @Author: wanghexing
 * @Date: 2022-06-17 12:27:34
 * @LastEditors: wanghexing
 * @LastEditTime: 2022-06-17 17:36:16
 */
import React from 'react'
import { useRoutes } from 'react-router-dom'
import menuList from '../plugins/router'
export default function RouterList() {
    const routerList = useRoutes(menuList)
    return routerList

}