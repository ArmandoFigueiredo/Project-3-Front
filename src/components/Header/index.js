export function Header (){
    return(
        <header>
            <div>
            <h1>Book App</h1>
            <a href="/"> Home </a>
            <a href="/book/create"> Novo Livro </a>
            </div>

            <div>
            <h3>Bem-vindo, Usuário</h3>
            <a href="/signup">Sair</a>
            </div>
        </header>
    )
}