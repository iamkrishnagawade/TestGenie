import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import Routes from './Routes';
import GlobalStateProvider from './services/GlobalStateProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from "react-query";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GlobalStateProvider>
    <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </GlobalStateProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
