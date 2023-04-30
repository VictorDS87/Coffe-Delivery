import { Route, Routes, BrowserRouter} from 'react-router-dom'
import { Products } from './pages/products'
import { useEffect, useState } from 'react'
import { Header } from './pages/header'
import { Purchase } from './pages/purchasePage'

interface ShppingCartProps {
    id: string
    image: string
    name: string
    value: number 
    amount: number
}
export function Router() {
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
            <Header childInfo={quantityInShoppingCart}/>
            <Routes>     
                <Route path="/" element={<Products values={shoppingCartList}/>} />
                <Route path="/purchase" element={<Purchase  shoppingCart={shoppingCart}/>} />
            </Routes>
        </>
    )
}