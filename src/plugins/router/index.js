/*
 * @Description: 
 * @Author: wanghexing
 * @Date: 2022-06-15 16:02:38
 * @LastEditors: wanghexing
 * @LastEditTime: 2022-06-20 15:15:14
 */
import React from 'react'
import Queue from 'src/app/queue/bfs'
import Home from 'src/app/home/home'
import Dynamic from 'src/app/dynamic'
import Greedy from 'src/app/greedy'
// import asyncComponent from "utils/asyncComponent";
// const Home = asyncComponent({
//     loader: () => import("../../app/home")
// });

const menuList = [
    {
        label: 'Home',
        path: '/home',
        key: '/home',
        element: <Home/>,
        icon: ''
    },
    {
        label: '队列',
        path: '/queue',
        key: '/queue',
        icon: '',
        children: [
            {
                label: 'BFS',
                path: '/queue/bfs',
                key: '/queue/bfs',
                element: <Queue/>,
                icon: '',
            },
            {
                label: 'nav 3',
                path: '/queue/b',
                key: '/queue/b',
                icon: '',
            },
        ]
    },
    {
        label: '动态规划',
        path: '/dynamic',
        key: '/dynamic',
        element: <Dynamic/>,
        icon: '',
    },
    {
        label: '贪心算法',
        path: '/greedy',
        key: '/greedy',
        element: <Greedy/>,
        icon: '',
    },
]
export default menuList
