import { useState } from "react";

function Sayname(props){

    const[nome, setNome] = useState(); 

    function alteraNome(event) 
    {
            setNome(event.target.value);
    }
    return(
       <div>
           <input type="text" onChange={alteraNome}/>

           { nome &&  <p> Bom dia {nome} </p>}
        
       </div>
    )
    }
export default Sayname;