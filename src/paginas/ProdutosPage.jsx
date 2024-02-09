import { ListaProdutos } from "../componentes/ListarProdutos";
import { NavBar } from "../componentes/Navbar";

function ProdutosPage(){
    return (
        <>
        <NavBar/>
        <div>
           <ListaProdutos/>
        </div>
        </>
    );
}

export {ProdutosPage};