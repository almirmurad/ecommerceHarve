import { useEffect, useState } from "react";

function ComponenteNome(){
    const [nome, setNome] = useState("SEU NOME");

    useEffect(()=>{
        if(nome == "SEU NOME")return
        alert(`o nome foi alterado para ${nome}`)

    },[nome])
    // Observação: o [] esta com a variavel nome, para gerar evento quando alterar o nome
    return (

        <div>
            <button onClick={()=>setNome("Murad")}>Sobrenome</button>
            <button onClick={()=>setNome("Almir")}>Nome</button>

            <p> Nome: {nome}</p>
        </div>

    );
}

export { ComponenteNome };


// function ComponenteNome(){//function sem default permite exportar varios componentes
//     //return entre parenteses pode ser retornadas mais de uma tag html
//     return (

//         <div className="top">
//             <p>Nome: Almir Murad</p>
//         </div>

//     );
// }


// //export entre chaves exporta vários componentes
// export { ComponenteNome };
