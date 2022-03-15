import React from 'react';
import Auth from './Navbar/Auth';
import { useRouteMatch } from 'react-router-dom';
import Navigation from './Navbar/Navigation';

function Navbar() {

  const searchRoute = useRouteMatch('/search')

  return (
    <nav className='h-[3.75rem] flex items-center justify-between px-8'>
        <Navigation />
        {
          searchRoute && (
            <div>Search bölümü</div>
          )
        }
        <Auth />
    </nav>
  )
}

export default Navbar