import { Link } from 'react-router-dom'
import { FaEdit } from 'react-icons/fa'

function Navbar() {
  return (
    <div className="w-full h-16 flex pl-8 pr-8 bg-indigo-800 text-indigo-100 justify-between place-items-center shadow-md fixed z-10">
        <h1 className='text-2xl flex place-items-center space-x-2 text-indigo-200 hover:underline'>
          <FaEdit />
          <Link to="/">Bloggy</Link>
        </h1>
        <ul className='flex space-x-8'>
            <li className='text-indigo-200 hover:underline'><Link to="/blogs">Blogs</Link></li>
            <li className='text-indigo-200 hover:underline'><Link to="/createBlog">Create a Blog</Link></li>
        </ul>
    </div>
  )
}
export default Navbar