import { useState } from "react";

function Condicional() {

    const [email, setEmail] = useState()
    const[userEmail,setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail(){
        setUserEmail(false)
    }

    return (
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                <input type="email" placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.value)}></input>
                <button onClick={enviarEmail}>Enviar e-mail</button>
            </form>
            {userEmail && (
                <div>
                    <p>O e-mail do usuário é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar E-mail</button>
                </div>
            )}
        </div>
    )
}
export default Condicional