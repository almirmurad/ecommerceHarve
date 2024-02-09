function ComponenteCompetencia(props) {
    return (
     
            <div
                style={{
                    background: "#FFF",
                    color: "#000",
                    width: "280px",
                    height:"200px",
                    padding: "2%",
                    border: "1px solid #000",
                    borderRadius:"10px",
                    boxShadow:"1px 1px 10px #CCC"
                }}>
                <img src={props.img} alt="" width="100px" />
                <div>{props.nome}</div>
                <div>{props.descricao}</div>
            </div>
     

    );
}

export { ComponenteCompetencia };