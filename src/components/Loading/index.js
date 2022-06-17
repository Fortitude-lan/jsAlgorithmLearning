/*
 * @Description: 
 * @Author: wanghexing
 * @Date: 2021-11-17 11:35:17
 * @LastEditors: wanghexing
 * @LastEditTime: 2022-06-17 10:44:28
 */
'use strict';
import React from 'react';
import { Spin } from 'antd';
import QueueAnim from 'rc-queue-anim';

class _Loading extends React.Component {
    render() {
        const { children, pastDelay, error, isLoading } = this.props;

        if (error) {
            return (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        position: 'relative'
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%'
                        }}
                    >
                        Error!
                    </div>;
                </div>
            );
        } else if (pastDelay) {
            return (
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        position: 'relative'
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%'
                        }}
                    >
                        <Spin />
                    </div>
                </div>
            );
        }

        if (children && !isLoading) {
            return (
                <QueueAnim
                    style={{
                        height: '100%',
                        width: '100%'
                    }}
                    duration={800}
                >
                    <div
                        key="page"
                        style={{
                            height: '100%',
                            width: '100%'
                        }}
                    >
                        {children}
                    </div>
                </QueueAnim>
            );
        }
        return null;
    }
}

export default _Loading;
