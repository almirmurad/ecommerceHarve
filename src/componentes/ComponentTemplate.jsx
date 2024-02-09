function ComponentTemplate(props){
    return (
        <div className="wrap"
            style={{
                display:"flex",
                flexDirection:"column",
                height:"100vh",
                
            }}>
            <header className="cabecalho"
                style={{
                    backgroundColor:"#ccc",
                    height:"100px",
                    display:"flex",
                    justifyContent:"space-between",
                    alignItems:"center",
                    padding:"10px 50px",
                }}>
                <div style={{
                    maxWidth:"100px",
                }}>
                    <img src={props.logo} alt="" style={{
                        maxWidth:"100%",
                        height:"auto",
                    }}/>
                </div>
                {props.nav}
            </header>
            <div className="content">{props.children}</div>
            <footer style={{
                height:"300px",
                backgroundColor:"#ccc",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                fontWeight:"bold"
            }}>
                {props.info_foot}
            </footer>
        </div>
        

    );
}

export {ComponentTemplate};