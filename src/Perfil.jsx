import { useState } from 'react';
import Button from './Button'

function Perfil({nome,foto,idade}){
    const [numeroVisualizacoes, setNumeroVisualizacoes] = useState(0)
    function aumentarVisualizacoes(){

        setNumeroVisualizacoes(numeroVisualizacoes+1)
    }
    return(
        <div>
            <img src={foto} alt={nome}/>
            <p>Nome:{nome}</p>
            <p>Idade:{idade}</p>
            <Button 
             cor="#ff0000" 
            frase ="clique aqui"
            contador={numeroVisualizacoes}
            atualiza={setNumeroVisualizacoes}
            />
            <p>Contador de visitas: {numeroVisualizacoes}</p>
        </div>
    );
}
export default Perfil;