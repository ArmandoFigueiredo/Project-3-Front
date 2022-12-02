import { Link } from "react-router-dom";

export function BookList({books}){
    return(
        <section>
        {books.map((book) => (
            <div>
                <img src={book.coverImage}/>
                <h4>{book.title}</h4>
                <h5>{book.author}</h5>
                <p>{book.releaseYear}</p>
                <div>
                    <Link to={`/book/${book._id}`}>Ver Detalhes</Link>
                    <button>Editar</button>
                    <button>Deletar</button>
                </div>
            </div>
        ))}
        </section>
    )
}