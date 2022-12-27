import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Note from './Components/Note';

const notes = [
  {
    key:1,
    title: "delegation",
    content: "gfheihiehfiepahfiopeahfpioeahfpieahfpiea"

  },
  {
    key:2,
    title: "loops",
    content: "gfheihiehfiepahfiopeahfpioeahfpieahfpiea"

  },
  {
    key:3,
    title: "array",
    content: "gfheihiehfiepahfiopeahfpioeahfpieahfpiea"

  },
  {
    key:4,
    title: "tree",
    content: "gfheihiehfiepahfiopeahfpioeahfpieahfpiea"

  },
  {
    key:5,
    title: "stack",
    content: "gfheihiehfiepahafaffiopeahfpioeahfpieahfpiea"

  },
  {
    key:6,
    title: "queue",
    content: "gfheihiehfiepahfiopeahfpioeahfpieahfpiea"

  }
]

function createNotes(notes){
  return <Note title= {notes.title} content= {notes.content}/>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    {notes.map(createNotes)}
    <Footer/>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
