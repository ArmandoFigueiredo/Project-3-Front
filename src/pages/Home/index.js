import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api/api";
import { BookList } from "../../components/BookList";
import { Header } from "../../components/Header";
import "./style.css"

const testeBooks = [
  {title:"senhor dos aneis", author:"desconhecido", releaseYear:"2000", coverImage:"https://www.shortandtweet.com/images/short-and-tweet-default-book-cover.jpg"},
  {title:"senhor dos aneis", author:"desconhecido", releaseYear:"2000", coverImage:"https://www.shortandtweet.com/images/short-and-tweet-default-book-cover.jpg"},
]
export function Home() {
  const[books, setbooks] = useState([])
  useEffect(() => {
    api.get("/api/1.0/book").then((res) => {
      setbooks(res.data)
    })
    // setbooks(testeBooks)
  },[])
  return (
    <div><Header/><BookList books={books}/>    
    </div>
  );
}
