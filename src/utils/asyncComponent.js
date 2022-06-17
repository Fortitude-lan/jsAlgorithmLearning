/*
 * @Description: 按需加载'react-loadable'
 * @Author: wanghexing
 * @Date: 2021-11-17 11:35:35
 * @LastEditors: wanghexing
 * @LastEditTime: 2022-06-17 15:09:31
 */
'use strict';

import React from 'react';
import Loadable from 'react-loadable';
import { Loading } from 'components';

export default function asyncComponent(opts) {
    return Loadable(
        Object.assign(
            {
                loading(props) {
                    return <Loading {...props} />;
                },
                delay: 200,
                timeout: 10000,
                render(loaded, props) {
                    return (
                        <Loading>
                            {React.createElement(loaded.default, props)}
                        </Loading>
                    );
                }
            },
            opts
        )
    );
}

// 按需加载写法（备用）
// export default function asyncComponent(importComponent) {
//     class AsyncComponent extends React.Component {
//         constructor(props) {
//             super(props);
//             this.state = {
//                 component: null
//             };
//         }
//         async componentDidMount() {
//             const { default: component } = await importComponent();
//             this.setState({ component });
//         }
//         render() {
//             const C = this.state.component;
//             return C ? <C {...this.props } /> : null;
//         }
//     }
//     return AsyncComponent;
// }
//
//
// 用法
// const NoticeType = asyncComponent(() => import('../pages/notice/noticeType'))
// const NoticeInfo = asyncComponent(() => import('../pages/notice/noticeInfo'))
