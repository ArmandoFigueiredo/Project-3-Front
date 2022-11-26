import { useEffect } from "react";
import { useState } from "react";
import { api } from "../../api/api";
import { Header } from "../../components/Header";

export function Home() {
  const[books, setbooks] = useState([])
  useEffect(() => {
    api.get("/api/1.0/book").then((res) => {
      setbooks(res.data)
    })
  })
  return (
    <div><Header/></div>
  );
}
