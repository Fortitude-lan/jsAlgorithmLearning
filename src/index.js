import React from 'react';
import "../assets/css/global.less"
import 'antd/dist/antd.css';
import Router from './plugins/router/index'
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Router />)