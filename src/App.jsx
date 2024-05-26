import { useState } from 'react'
import './App.css'
import Header from './Header'
import { karakterler } from './Data'
import Karakter from './Karakter'
import './css/Karakter.css';

function App() {


  return (
    <div>
      <Header />
      <div className="karakter-main">
        {
          karakterler?.map((karakter) => (
            <Karakter key={karakter.id} karakter={karakter} />
          ))
        }

      </div>


    </div>
  )
}

export default App
