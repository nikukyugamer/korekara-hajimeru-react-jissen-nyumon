import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import books from './books'

import SelectStyle from './SelectStyle';
import StyledPanel from './StyledPanel';
import TitledPanel from './TitledPanel';
import ListTemplate from './ListTemplate';
import StateBasic from './StateBasic';
import StateParent from './StateParent';
import EventMouse from './EventMouse';
import EventError from './EventError';

const root = ReactDOM.createRoot(document.getElementById('root'));

const title = <p>メンバー募集中！</p>
const body = <p>ようこそ、WINGプロジェクトへ！</p>

root.render(
  <React.StrictMode>
    <EventMouse
      alt="ロゴ画像"
      beforeSrc="https://www.web-deli.com/image/linkbanner_l.gif"
      afterSrc="https://www.web-deli.com/image/home_chara.gif"
    />
    <EventError src="./images/_wings.jpg" alt="存在しないサンプル画像" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
