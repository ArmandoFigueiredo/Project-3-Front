import { useContext } from "react"
import { AuthContext } from "../../contexts/authContext"
import "./style.css"

export function Header (){
    const{loggedInUser} = useContext(AuthContext)
    return(
        <header className="headerSection">
            <div className="flexrow">
            <h1>
            <a href="/"> Book App </a>
            </h1>        
            <a href="/book/create"> Novo Livro </a>
            </div>

            <div className="flexrow">
            {loggedInUser?<h3>{loggedInUser.user.name}</h3>:<><a href="/signup">Sign Up</a><a href="/login">Login</a></>}            
            <a href="/login">Sair</a>
            </div>
        </header>
    )
}