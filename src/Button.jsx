function Button({cor,frase,contador,atualiza}){
    function clickMouse(){
        
      atualiza(contador+1)
    }
    
    return(
        <button style={{background: cor}} onClick={clickMouse}>
        {frase} {contador} 
        </button>
    );
}
export default Button;