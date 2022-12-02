import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { api } from "../../api/api";
import { useParams } from "react-router-dom";

export function BookDetails(){
    const[book, setbook]=useState({title:"", author:"", releaseYear:"", genre:"", synopsis:"", coverImage:""})
    const{id}= useParams()
    useEffect(() => {
        api.get(`/api/1.0/book/${id}`).then((res) => {
          setbook(res.data)
        })       
      },[])
    return(
        <div>
            <Header/>
            <section>
                <img src={book.coverImage}></img>
                <button>Editar</button>
                <button>Deletar</button>
            </section>
            <p><strong>Titulo Do Livro: </strong>{book.title}</p>
            <p><strong>Autor: </strong>{book.author}</p>
            <p><strong>Ano de Lançamento: </strong>{book.releaseYear}</p>
            <p><strong>Genero: </strong>{book.genre}</p>
            <p><strong>Sinopse: </strong>{book.synopsis}</p>
        </div>
    )
}