import { createContext, useEffect, useState } from "react";

export const CarrinhoContext = createContext();

function CarrinhoContextProvider({children}){
    const [listarProdutosCarrinho, setListarProdutosCarrinho] = useState([]);

    useEffect(() => {
        buscarProdutosLocaStorage();
      }, []);
      function buscarProdutosLocaStorage() {
        const produtosLocalStorage = localStorage.getItem("carrinho_produtos");
    
        if (produtosLocalStorage) {
          const produtosProdutos = JSON.parse(produtosLocalStorage);
          setListarProdutosCarrinho(produtosProdutos);
        }
      }

    function salvarProdutos(lista){
        setListarProdutosCarrinho(lista);
        const listaDeProdutos = JSON.stringify(lista);
        localStorage.setItem("carrinho_produtos", listaDeProdutos);
    }

    const adicionarCarrinho = async(produto) => {
        const listaProdutosAtualizado = [produto, ...listarProdutosCarrinho];
        salvarProdutos(listaProdutosAtualizado);
    }

    function removerProduto(idProduto){
        const listaProdutosAtualizado = listarProdutosCarrinho.filter(
            (item)=>item.idProduto != idProduto
        );

        salvarProdutos(listaProdutosAtualizado);
    }



    return (
        <CarrinhoContext.Provider 
        value={{ listarProdutosCarrinho, adicionarCarrinho, removerProduto}}>
            {children}
        </CarrinhoContext.Provider>
    );
}

export default CarrinhoContextProvider;