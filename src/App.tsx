import { api } from "./lib/axios";
import { useEffect, useState } from "react";
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

interface ShppingCartProps {
    id: string
    image: string
    name: string
    value: number 
}
export function App () {
  const [shoppingCart, setShoppingCart] = useState<ShppingCartProps[]>([])
  let quantityInShoppingCart = shoppingCart.length

  function shoppingCartList(childInfo: any) {
    setShoppingCart(childInfo)
   
  }
  useEffect(() => {
 
    quantityInShoppingCart = shoppingCart.length
  }, [shoppingCart])
  return (
   <>
    <GlobalStyles/>
    <Header childInfo={quantityInShoppingCart}/>
    <Products values={shoppingCartList}/>
   </>
  )
}


