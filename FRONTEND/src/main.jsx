import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import AppContextProvider from './context/AppContext.jsx';

const clerkFrontendApi = "pk_test_ZmFtb3VzLWxhbXByZXktMTcuY2xlcmsuYWNjb3VudHMuZGV2JA";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkFrontendApi}>
      <BrowserRouter>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);
