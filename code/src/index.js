import { createRoot } from 'react-dom/client';
import './index.css';
import React from 'react';
import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />); // this renders the root in the component App

