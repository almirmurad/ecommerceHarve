import { Col, Container, Row } from "react-bootstrap";
import { CardProduto } from "./CardProdutos";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../_service/api";


function ListaProdutos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        buscarProdutos()
    }, [])

    async function buscarProdutos(){
        try {
            const response = await api.get("/productlistbyremark/home");
            setProdutos(response.data);            

        } catch (error) {
            mensagemDeErro('Erro ao buscar produto');
        }
    }

    function mensagemDeErro(mensagem = "Mensagem de erro") {
        toast.error(mensagem, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={12} >
                        <h2>Lista de Produtos</h2>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    {produtos.map((produto, index) => {
                        return (
                            <Col md={3}>
                                <CardProduto
                                    idProduto={produto.id}
                                    nome={produto.title}
                                    preco={produto.price}
                                    linkImagem={produto.image}
                                    descricao={produto.category}
                                />
                            </Col>
                        );
                    }

                    )}
                </Row>

            </Container>
            
        </>
    );


}

export { ListaProdutos };