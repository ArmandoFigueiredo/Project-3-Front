import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { api } from "../../api/api";
import { Link, useParams, useNavigate } from "react-router-dom";
import image from "../../images/book.jpg"

export function BookDetails(){
    const[book, setbook]=useState({title:"", author:"", releaseYear:"", genre:"", synopsis:"", coverImage:""})
    const{id}= useParams()

    const navigate= useNavigate()
    const handleDelete=(id) => {
        api.delete(`/api/1.0/book/${id}`).then((res) => {
            console.log(res);
            navigate("/")
          })
    }

    useEffect(() => {
        api.get(`/api/1.0/book/${id}`).then((res) => {
          setbook(res.data)
        })       
      },[])
    return(
        <div>
            <Header/>
            <section>
                <img src={book.coverImage || image}></img>
                <Link to={`/book/edit/${id}`}>Editar</Link>
                <Link to={`/book/delete/${id}`}>Deletar</Link>
            </section>
            <p><strong>Titulo Do Livro: </strong>{book.title}</p>
            <p><strong>Autor: </strong>{book.author}</p>
            <p><strong>Ano de Lançamento: </strong>{book.releaseYear}</p>
            <p><strong>Genero: </strong>{book.genre}</p>
            <p><strong>Sinopse: </strong>{book.synopsis}</p>
        </div>
    )
}