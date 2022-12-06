import { useContext } from "react"
import { AuthContext } from "../../contexts/authContext"

export function Header (){
    const{loggedInUser} = useContext(AuthContext)
    return(
        <header>
            <div>
            <h1>Book App</h1>
            <a href="/"> Home </a>
            <a href="/book/create"> Novo Livro </a>
            </div>

            <div>
            <h3>Bem-vindo, {loggedInUser?loggedInUser.user.name:"Usuário"}</h3>
            <a href="/login">Sair</a>
            </div>
        </header>
    )
}