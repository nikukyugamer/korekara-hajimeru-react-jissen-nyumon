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

const root = ReactDOM.createRoot(document.getElementById('root'));

const title = <p>メンバー募集中！</p>
const body = <p>ようこそ、WINGプロジェクトへ！</p>

root.render(
  <React.StrictMode>
    <ListTemplate src={books}>
      {/* 呼び出し元配下のテンプレートを「テンプレートを返す関数」化する */}
      {/* レンダープロップス */}
      {elem => (
        <>
          <dt>
            <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
              {elem.title} ({elem.price}円)
            </a>
          </dt>
          <dd>{elem.summary}</dd>
        </>
      )}
    </ListTemplate>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
