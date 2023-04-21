import { api } from "./lib/axios";
import { useState } from "react";
import { Products } from "./pages/products";
import { GlobalStyles } from "./styles/global";
import { Header } from "./pages/header";

// interface Product {
//   id: number;
//   nome: string;
//   descricao: string;
//   preco: number;
//   imagem?: string;
// }

// const [nome, setNome] = useState("");
//   const [descricao, setDescricao] = useState("");
//   const [preco, setPreco] = useState(0);

// const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//   event.preventDefault();

//   const newProduct: Product = {
//     id: 23232,
//     nome: nome,
//     descricao: descricao,
//     preco: preco
//   };

//   api.post("/products", newProduct)
//     .then(response => {
//       console.log(response);
//     })
//     .catch(error => {
//       console.log(error);
//     });
//   };

export function App () {

  return (
   <>
    <GlobalStyles/>
    <Header ShoppingCartLength={}/>
    <Products/>
   </>
  )
}


