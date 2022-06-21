import Titulo from "./Titulo";
import Buton from "./Buton";

function Novo(){
    return(
        <div className = "centro">

        <Titulo/>

            <div className="outro">
            <p className="c"> 01/06/2022 08:13 </p>
                 <p>NOTA A COMUNIDADE:
                      Bloqueio do orçamento da
                      Educação
                  </p>


            
             </div>

             <div className="outro">
             <p className="c"> 31/05/2022 12:35 </p>
                  <p>IFRO
                      publica edital para cadastro de 
                      Interesse de Remoção
                  </p>
                


             </div>

             <div className="outro">
             <p className="c"> 30/05/2022 09:54 </p>
                  <p>Parceria entre IFRO e UAB irá 
                    ampliar a oferta de cursos de pós-graduação e de Pedagogia
                  </p>
                
             </div>



             <div className="outro">
             <p className="c"> 25/05/2022 15:10 </p>
                  <p>Manutenção do Sistema SUAP 
                    acontece nesta sexta-feira (27)
                  </p>
                


             </div>
             <div className="outro">
             <p className="c"> 25/05/2022 15:10 </p>
                  <p>Pais e responsáveis por alunos podem ter acesso a 
                    informações estudantis pelo app IFRO Mobile
                  </p>
                
             </div>

          <Buton/>

        </div>
    )
}
export default Novo;