import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../api/api"

export function Form(){
    const[title, setTitle]=useState("")
    const[author, setAuthor]=useState("")
    const[releaseYear, setReleaseYear]=useState("")
    const[genre, setGenre]=useState("")
    const[coverImage, setCoverImage]=useState("")
    const[synopsis, setSynopsis]=useState("")
    const navigate = useNavigate()
    const handleClick=async(e)=>{
        e.preventDefault()
        const url="/api/1.0/book"
        const body={title, author, releaseYear, genre, coverImage, synopsis}
        const res=await api.post(url, body)
        console.log(res)
        if (res.status===201){
            navigate("/")
        }
    }
    return(
        <form>
            <h2>Novo Livro</h2>
            <label>Titulo
            <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}}/></label>
            <label>Autor
            <input type="text" value={author} onChange={(e) => {setAuthor(e.target.value)}}/></label>
            <label>Ano de Lançamento
            <input type="text" value={releaseYear} onChange={(e) => {setReleaseYear(e.target.value)}}/></label>
            <label>Genero
            <input type="text" value={genre} onChange={(e) => {setGenre(e.target.value)}}/></label>
            <label>Imagem da Capa
            <input type="file" value={coverImage} onChange={(e) => {setCoverImage(e.target.value)}}/></label>
            <label>Sinopse
            <input type="textArea" value={synopsis} onChange={(e) => {setSynopsis(e.target.value)}}/></label>
            <button onClick={handleClick}> Salvar </button>
        </form>
    )
}