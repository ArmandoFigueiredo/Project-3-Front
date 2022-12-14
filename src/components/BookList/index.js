import { Link, useNavigate } from "react-router-dom";
import { api } from "../../api/api.js"
import image from "../../images/book.jpg"
import "./style.css"

export function BookList({books}){    
    const handleDelete=(id) => {
        api.delete(`/api/1.0/book/${id}`).then((res) => {
            console.log(res);
            window.location.reload()
          })
    }
    
    return(
        <section className="container">
        {books.map((book) => (
            <div className="bookItem">
            <div className="image" style={{backgroundImage: `url (${book.coverImage || image})`}}></div>             
                <h4>{book.title}</h4>
                <h5>{book.author}</h5>
                <p>{book.releaseYear}</p>
                <div className="flexrow">
                    <Link to={`/book/${book._id}`}>Ver Detalhes</Link>
                    <Link to={`/book/edit/${book._id}`}>Editar</Link>
                    <Link className="delete" to={`/book/delete/${book._id}`}>Deletar</Link>
                </div>
            </div>
        ))}
        </section>
    )
}