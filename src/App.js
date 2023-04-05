import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllCharacters from './components/AllCharacters';
import OneCharacter from './components/OneCharacter';
import RickandMortyLogo from './RickandMortyLogo.png'

function App() {
  return (
    <div className="App">
      <img src={RickandMortyLogo} alt='Logotipo Rick and Morty' className='logo'/>
      <h1>Characters List</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllCharacters/>}></Route>
          <Route path='/character/:id' element={<OneCharacter/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
