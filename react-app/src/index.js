import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FirebaseContext from './context/firebase';
import { firebasa, FieldValue } from './lib/firebase';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <FirebaseContext.Provider value={{firebasa, FieldValue}}>
    <App />
    </FirebaseContext.Provider>,
//document.getElementById('root')
);