import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPagina from "./components/Login"
import CadastroPagina from "./components/Cadastro"
import HojePagina from "./components/Hoje"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPagina/>}/>
                <Route path="/cadastro" element={<CadastroPagina/>}/>
                <Route path="/hoje" element={<HojePagina/>}/>
            </Routes>
        </BrowserRouter>
    )
}

