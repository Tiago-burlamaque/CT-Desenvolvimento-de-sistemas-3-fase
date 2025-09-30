import { useEffect, useState } from "react"
import { useParams } from "react-router"


export const PostDetail = () => {
    const { id } = useParams()
    const [post, setPost] = useState("")

    useEffect(() => {
        fetch(`http://localhost:3000/posts/${id}`)
        .then(response => response.json())
        .then(data => 
            setPost(data))
    }, [id])
    
    return(
        <div className="p-4">
            
        <img src={post.image} alt="" />
        <h1 className="text-xl font-bold">{post.title}</h1>
        <p>{post.views}</p>
        <p>Description: {post.description}</p>

        </div>
    )
}
