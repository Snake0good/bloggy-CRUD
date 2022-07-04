import Navbar from "../components/Navbar"
import { useNavigate, useLocation } from 'react-router-dom'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'
import Footer from "../components/Footer";

function Fullpage() {
    const location = useLocation();

    const navigate = useNavigate()

    // delete the blog
    const deleteBlog = async (id) => {
        await fetch(`http://localhost:3001/api/blogs/${id}`, {
            method: 'DELETE', 
            headers: {
                'Content-Type': 'application/json'
            }
        })
        navigate('/blogs')
    }

    // edit a blog post
    const editBlog = async (id, name, title, text) => {

        navigate('/editBlog', 
        {
            state: {
                id: id,
                name: name,
                title: title, 
                text: text
            }
        })
    }
  return (
    <div>
        <Navbar />
        <div className="pt-20 p-3">
            <div className="absolute right-8 flex space-x-3">
                <FaTrashAlt 
                    className="text-red-300 text-xl cursor-pointer hover:text-red-900"
                    onClick={() => deleteBlog(location.state.id)}
                />
                <FaEdit 
                    className="text-indigo-300 text-xl cursor-pointer hover:text-indigo-900"
                    onClick={() => editBlog(location.state.id, location.state.name, location.state.title, location.state.text)}    
                />
            </div>

            <h1 className="text-4xl text-center"> { location.state.title } </h1>
            <h2 className="text-xl mt-3 mb-3"> By: <span className="font-bold">{ location.state.name }</span></h2>
            <p className="text-lg"> { location.state.text } </p>
        </div>

        <Footer />
    </div>
  )
}
export default Fullpage