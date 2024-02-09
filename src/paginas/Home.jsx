import { ListaProdutos } from "../componentes/ListarProdutos";
import { NavBar } from "../componentes/Navbar";
import CarouselAnuncios from "../componentes/Carrousel";

function Home(){
    
    return(
        <>
        <NavBar/>
        <CarouselAnuncios/>
        <ListaProdutos/>
        </>
    );


}

export {Home};