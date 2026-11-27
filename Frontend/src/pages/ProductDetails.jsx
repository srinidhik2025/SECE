import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductDetails = () => {

    const { id } = useParams()

    const [product, setProduct] = useState({})

    const getProduct = async () => {
        const response = await axios.get(
            `https://fakestoreapi.com/products/${id}`
        )

        setProduct(response.data)

        console.log(response.data)
    }

    useEffect(() => {
        getProduct()
    }, [id])

    return (
        <div>
            <h1>This is Product Details Page</h1>

            <h2>{product.title}</h2>

            <img
                src={product.image}
                alt={product.title}
                width="200"/>

            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            <p>Rating: {product.rating?.rate} ({product.rating?.count} reviews)</p>

        </div>
    )
}

export default ProductDetails