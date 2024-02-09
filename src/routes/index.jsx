import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListaProdutos } from "../componentes/ListarProdutos";
import { ComponenteNome } from "../componentes/componenteNome";
import { ProdutosPage } from "../paginas/ProdutosPage";
import { Home } from "../paginas/Home";
import { Login } from "../paginas/login";
import { Carrinho } from "../paginas/Carrinho";

export function RouteApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/nome" element={<ComponenteNome />} />
                <Route path="/produtos" element={<ProdutosPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/carrinho" element={<Carrinho />} />
            </Routes>
        </BrowserRouter>
    );
}