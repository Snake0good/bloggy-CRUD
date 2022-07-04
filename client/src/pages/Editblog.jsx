import { useState } from "react"
import Navbar from "../components/Navbar"
import { useNavigate, useLocation } from 'react-router-dom'
import Footer from "../components/Footer";

function Editblogs() {
    const location = useLocation();

    const [formData, setFormData] = useState({
        id: location.state.id,
        name: location.state.name, 
        title: location.state.title,
        text: location.state.text
    })

    const {id, name, title, text} = formData
    const navigate = useNavigate()


    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    // post the blog
    const domain = 'https://bloggy-crud.herokuapp.com/'
    const onSubmit = async (e) => {
        e.preventDefault()

        // await fetch(`http://localhost:3001/api/blogs/${id}`, {
        await fetch(`${domain}/api/blogs/${id}`, {
            method: 'PUT', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id,
                name,
                title,
                text
            })
        }).then(navigate("/blogs"))
    }

  return (
    <div>
        <Navbar />

        <div className="pt-20">
            <h1 className="text-3xl p-4">Edit your blog.</h1>
            <div className="w-full h-[700px] p-5">
                <form 
                    className="w-full h-full border-2 border-indigo-100 p-2 flex flex-col" 
                    onSubmit={onSubmit}>
                    <input
                        className="border-2 w-full p-2 text-xl"
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Post Title"
                        value={title} 
                        onChange={onChange}
                        />
                    <input
                        className="border-2 w-full p-2 mt-4 mb-4"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Author"
                        value={name} 
                        onChange={onChange}
                        />
                    <textarea
                        className="border-2 w-full p-2 h-96"
                        type="text"
                        name="text"
                        id="text"
                        placeholder="Blog Content"
                        value={text} 
                        onChange={onChange}
                        />
                    <button
                        className="m-4 w-32 h-12 bg-indigo-600 text-white self-end"
                        >
                        POST
                    </button>
                </form>
            </div>
        </div>

        <Footer />
    </div>
  )
}
export default Editblogs