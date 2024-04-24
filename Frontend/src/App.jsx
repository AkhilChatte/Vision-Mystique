import React from 'react'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {VM2} from './assets';
import {Home, Create} from './pages';
const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between item-center bg-white sm:px-8 px-4 py-4 border-b-[#e6ebf4]'>
        <Link to="/">
          <img src={VM2} alt='logo' className='w-28 object-contain'/>
        </Link>

        <Link to="/Create" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
      </header>

      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Create" element={<Create />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App