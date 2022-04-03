import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
    const [cart, setCart] = useState([])

    useEffect( () => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedeProduct = products.find(product => product.id === id);
            if(addedeProduct){
                const quantity = storedCart[id];
                addedeProduct.quantity = quantity;
                savedCart.push(addedeProduct);
            }
            setCart(savedCart);
        }
    }, [products]);

    return [cart, setCart];
}

export default useCart;