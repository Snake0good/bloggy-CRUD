import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="bg-indigo-800 text-indigo-100">
        <div className="p-5 flex justify-around">
            <div className='flex flex-col justify-center'>
                <h1 className="text-3xl">Bloggy</h1>
                <p className='text-sm text-indigo-400'>A Goody WebDev Company</p>
            </div>

            <div className='flex flex-col space-y-2 text-center'>
                <Link className='hover:text-purple-400' to='/'>Home</Link>
                <Link className='hover:text-purple-400' to='/blogs'>All Posts</Link>
                <Link className='hover:text-purple-400' to='/createBlog'>Create Blog</Link>
            </div>
        </div>

        <div className="w-full pt-5 flex space-x-5 justify-center">
            <a className='flex place-items-center hover:text-purple-400' href="https://www.jacobegood.com">My Website</a>
            <a className="flex place-items-center text-3xl hover:text-purple-400" href="https://www.linkedin.com/in/jacobegood/"><FaLinkedin/></a>
            <a className="flex place-items-center text-3xl hover:text-purple-400" href="https://twitter.com/jacobegood"><FaTwitterSquare /></a>
            <a className="flex place-items-center text-3xl hover:text-purple-400" href="https://github.com/Snake0good"><FaGithubSquare /></a>
            <a className='flex place-items-center hover:text-purple-400' href="https://www.jacobegood.com">Personal Blog</a>
        </div>
        <p className='text-indigo-400 p-5 text-center'>© Copyright. All rights reserved.</p>
    </div>
  )
}
export default Footer