import React from 'react';
import "../assets/css/global.less"
import 'antd/dist/antd.css';
import AppEntry from './components/appEntry'
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AppEntry />)