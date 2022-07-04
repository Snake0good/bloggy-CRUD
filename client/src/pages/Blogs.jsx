import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import { useNavigate } from "react-router-dom"
import Footer from "../components/Footer"

function Blogs() {
    const [blogs, setBlogs] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const navigate = useNavigate()

    // get all blogs and display
    const fetchBlogs = () => {
        fetch("http://localhost:3001/api/blogs")
        .then((response) => response.json())
        .then((data) => {
            setBlogs(data)
            setIsLoading(false)
            console.log(data._id)
        })
        .then((data) => console.log(data))
    };
    
    useEffect( () => {
        fetchBlogs();
    }, []);

    // delete the blog
    const deleteBlog = async (id) => {
        await fetch(`http://localhost:3001/api/blogs/${id}`, {
            method: 'DELETE', 
            headers: {
                'Content-Type': 'application/json'
            }
        })

        // refresh the blogs
        fetchBlogs()
    }

    // edit a blog post
    const editBlog = async (id, name, title, text) => {
        navigate('/editBlog', 
        {
            state: {
                id: id,
                name: name,
                title, title, 
                text: text
            }
        })
    }
    
    // view the full blog page
    const viewBlog = (id, name, title, text) => {
        navigate('/fullPage', 
        {
            state: {
                id: id,
                name: name,
                title, title, 
                text: text
            }
        })
    }

    return (
        <div className="bg-indigo-100">
            <Navbar />

            <div className="pt-20">

                <h1 className="text-5xl text-center p-5">All Blogs</h1>
                <div className="m-3 min-h-screen sm:flex sm:flex-wrap sm:content-start">

                    { isLoading ? <h1 className="text-3xl">Loading your blogs... </h1> : null }

                    {blogs && blogs.map(blog => (
                        <div className="flex flex-col mb-5 w-full p-4 h-64 sm:w-96 border-2 border-indigo-500 shadow-xl rounded-xl bg-white relative sm:mr-5" key={ blog._id }
                        >
                            <h1 
                                className="text-xl font-bold hover:text-indigo-600 cursor-pointer hover:underline"
                                onClick={() => viewBlog(blog._id, blog.name, blog.title, blog.text)}
                            >{ blog.title }</h1>
                            <h2 className="text-md"><span className="font-bold">Author:</span> { blog.name }</h2>
                            <p
                                className="cursor-pointer hover:text-indigo-900"
                                onClick={() => viewBlog(blog._id, blog.name, blog.title, blog.text)}
                            > { blog.text.length > 300 ? `${blog.text.substring(0, 300)}...` : blog.text }</p>
                            <div className="absolute right-8 flex space-x-3">
                                <FaTrashAlt 
                                    className="text-red-300 text-xl cursor-pointer hover:text-red-900"
                                    onClick={() => deleteBlog(blog._id)}
                                />
                                <FaEdit 
                                    className="text-indigo-300 text-xl cursor-pointer hover:text-indigo-900"
                                    onClick={() => {
                                        editBlog(blog._id, blog.name, blog.title, blog.text)
                                        console.log(blog._id)
                                    }}    
                                />
                            </div>
                        </div>
                    ))}
                </div>
            <Footer />
            
            </div>
        </div>

    )
}
export default Blogs