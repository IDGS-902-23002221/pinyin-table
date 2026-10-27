import Tabla from './pages/TablaVocabulario'
import { useAuth } from './auth/AuthContext'
import { NavLink, Link, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Perfil from './pages/Perfil'
import Login from './pages/Login'

function App() {
  const { autenticado, usuario, logout} = useAuth()
  return (
    <>
    <div>
      <nav >
        <h1> Rick and morty  </h1>
        <NavLink to="/">Inicio</NavLink>
        <br />
        <NavLink to="/galeria">Galeria</NavLink>
        <br />
        <NavLink to="/perfil">Perfil</NavLink>
        <br />
        {autenticado ? (
          <>
            <span> Hola, {usuario}</span>
            <button onClick={logout}>Salir de la sesion</button>
          </>
        ):
        (
          <Link to="/login">Entrar a la sesion</Link>
        )
      }
    </nav>
    </div>

    <div>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/galeria" element={<Tabla/>}/>
        <Route path="/perfil" element={<Perfil/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>


    </>
  )
}

export default App
