import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import reportWebVitals from "./reportWebVitals";


import { createRoot } from 'react-dom/client';
const container:any = document.getElementById('root');
const root = createRoot(container);


export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

// 应用每次进入都会调用mount方法，通常我们在这里触发应用的渲染方法
// @ts-ignore
export async function mount(props) {
  console.log('[react16] props from main framework', props);
  root.render(
    <App/>
  )
}

// @ts-ignore
export async function unmount(props) {
  console.log('[react16] props from main framework', props);
  root.render(
    <App/>
  )
}

// @ts-ignore
export async function update(props) {
  console.log('update props', props);
}


// @ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  )
}






reportWebVitals()
