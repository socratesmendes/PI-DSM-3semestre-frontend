import React from 'react'
import { Header } from '../../components'
import { Link, Outlet } from 'react-router-dom'
import {
  PiListMagnifyingGlassBold,
  PiNotePencilFill,
  PiShoppingCartSimpleBold,
} from 'react-icons/pi'
import './style.css'

export const Home = () => {
  return (
    <main className="main-container">
      <Header />
      <section className="main-content">
        <div className="sidebar-left">
          <ul>
            <li>
              <PiNotePencilFill id="icon-size" />
              <Link to="/cadastro">CADASTROS</Link>
            </li>
            <li>
              <PiShoppingCartSimpleBold id="icon-size" />
              <Link to="/vendas">VENDAS</Link>
            </li>
            <li>
              <PiListMagnifyingGlassBold id="icon-size" />
              <Link to="/consulta">CONSULTA</Link>
            </li>
          </ul>
        </div>
        <div className="sidebar-right">
          <Outlet />
        </div>
      </section>
    </main>
  )
}
