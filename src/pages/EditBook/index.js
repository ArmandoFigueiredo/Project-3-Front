import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { api } from "../../api/api";
import { useNavigate, useParams } from "react-router-dom";

export function EditBook(){
    const[book, setbook]=useState({title:"", author:"", releaseYear:"", genre:"", synopsis:"", coverImage:""})
    const{id}= useParams()
    useEffect(() => {
        api.get(`/api/1.0/book/${id}`).then((res) => {
          setbook(res.data)
        })       
      },[])
      
      const navigate = useNavigate()
      
      const handleClick= async(event) => {
        event.preventDefault()
        api.patch(`/api/1.0/book/${id}`, book).then((res) => {
            console.log(res)
            if (res.status===204){
              navigate("/")
            }          
          })
      }
    return(
        <div>
            <Header/>
            <form>
            <h2>Novo Livro</h2>
            <label>Titulo
            <input type="text" value={book.title} onChange={(e) => {setbook({...book,title:e.target.value})}}/></label>
            <label>Autor
            <input type="text" value={book.author} onChange={(e) => {setbook({...book,author:e.target.value})}}/></label>
            <label>Ano de Lançamento
            <input type="text" value={book.releaseYear} onChange={(e) => {setbook({...book,releaseYear:e.target.value})}}/></label>
            <label>Genero
            <input type="text" value={book.genre} onChange={(e) => {setbook({...book,genre:e.target.value})}}/></label>
            <label>Imagem da Capa
            <input type="file" value={book.coverImage} onChange={(e) => {setbook({...book,coverImage:e.target.value})}}/></label>
            <label>Sinopse
            <input type="textArea" value={book.synopsis} onChange={(e) => {setbook({...book,synopsis:e.target.value})}}/></label>
            <button onClick={handleClick}> Salvar </button>
        </form>
        </div>
    )
}