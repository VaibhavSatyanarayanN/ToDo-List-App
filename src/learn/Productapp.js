import React ,{useState, useEffect}from "react"
import axios from "axios"

export default function Product(){
    const url ="https://mockapi.io/projects/61b7ef2a64e4a10017d18d0a/api/v1/articles/4"
    const [product,setProduct]=useState(null)

    useEffect(() => {
        axios.get(url).then(
            response => {
                setProduct(response.data)
            }
        )
    }, [url])
    

    return (
        <div>
            <p>this is product page</p>
        </div>  
    )
}