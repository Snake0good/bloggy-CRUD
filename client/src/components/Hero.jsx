import blog from '../images/blog_post.svg'
import publish from '../images/publish.svg'
import typewriter from '../images/typewriter.svg'
import blogPost from '../images/add_post.svg'
import todoList from '../images/to_list.svg'
import personalNotes from '../images/personal_notes.svg'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className="w-full sm:[400px] sm:flex sm:flex-col">
        <div className="w-full p-6 sm:p-12 flex flex-col h-full place-content-center justify-center text-center">
            <h1 className="text-5xl">Be a hero... BLOG</h1>
            <p className="text-xl mt-5">Don't be a wimp. Do what you <span className="decoration-indigo-500 underline">MUST</span></p>
        </div>
        <div className="p-2 space-y-4 sm:flex sm:flex-col">
          <div className='sm:w-full sm:flex sm:h-96 mt-5 mb-5 '>
            <img className="bg-white w-full p-2 object-cover sm:m-5 rounded-xl sm:w-1/3 sm:object-contain sm:shadow-xl" src={ blog } alt="beauty" />
          
            <div className='mt-5 sm:m-0 flex flex-col sm:justify-center sm:w-2/3 sm:p-5'>
              <h1 className='text-center text-3xl sm:text-4xl'>Teamwork. Easy.</h1>
              <p className='p-5 text-lg'>Selfies semiotics you probably haven't heard of them, fingerstache tacos plaid blue bottle af mixtape put a bird on it meggings. Health goth plaid edison bulb bushwick kitsch whatever marfa polaroid hashtag. Chia humblebrag kombucha tumblr meh yr praxis meditation. Yes plz seitan typewriter 8-bit, brooklyn yuccie hashtag poke blog man bun migas lomo DIY.</p>
              <Link className='hover:text-indigo-100 hover:bg-indigo-600 text-center w-32 p-3 bg-indigo-200 border-2 border-indigo-600 rounded-lg ease-in duration-200 self-center' to='/createBlog'>Get Started</Link>
            </div>
          </div>
          <div className='sm:w-full sm:flex sm:h-96 sm:flex-row-reverse'>
            <img className="bg-white w-full p-2 object-cover sm:m-5 rounded-xl sm:w-1/3 sm:object-contain sm:shadow-xl" src={ publish } alt="beauty" />
            <div className='mt-5 sm:m-0 flex flex-col sm:justify-center sm:w-2/3 sm:p-5'>
              <h1 className='text-center text-3xl sm:text-4xl'>Checking on Progress</h1>
              <p className='p-5 text-lg'>Plaid put a bird on it pickled you probably haven't heard of them vegan portland keffiyeh. Succulents leggings trust fund gluten-free organic dreamcatcher, single-origin coffee keytar. Brooklyn food truck biodiesel franzen, vegan cliche gentrify lo-fi seitan taiyaki etsy subway tile taxidermy.</p>
              <Link className='hover:text-indigo-100 hover:bg-indigo-600 text-center w-32 p-3 bg-indigo-200 border-2 border-indigo-600 rounded-lg ease-in duration-200 self-center' to='/createBlog'>Learn More</Link>

            </div>
            
          </div>
          <div className='sm:w-full sm:flex sm:h-96'>
            <img className="bg-white w-full p-2 object-cover sm:m-5 rounded-xl sm:w-1/3 sm:object-contain sm:shadow-xl" src={ typewriter } alt="beauty" />
          
            <div className='mt-5 sm:m-0 flex flex-col sm:justify-center sm:w-2/3 sm:p-5'>
              <h1 className='text-center text-3xl sm:text-4xl'>Words to Page</h1>
              <p className='p-5 text-lg'>Typewriter humblebrag taxidermy kombucha, kitsch seitan occupy whatever lyft wolf man braid affogato. Swag letterpress banjo fanny pack twee pour-over banh mi. Knausgaard intelligentsia tonx migas, DSA master cleanse chicharrones. Truffaut four loko iceland scenester artisan XOXO copper mug neutra banh mi squid lo-fi.</p>

            </div>
          </div>
          <div className='sm:w-full sm:flex sm:h-96 sm:flex-row-reverse'>
            <img className="bg-white w-full p-2 object-cover sm:m-5 rounded-xl sm:w-1/3 sm:object-contain sm:shadow-xl" src={ todoList } alt="beauty" />
            <div className='mt-5 sm:m-0 flex flex-col sm:justify-center sm:w-2/3 sm:p-5'>
              <h1 className='text-center text-3xl sm:text-4xl'>Mark it Off</h1>
              <p className='p-5 text-lg'>Single-origin coffee bespoke microdosing gluten-free farm-to-table flannel. Skateboard +1 ramps pok pok before they sold out you probably haven't heard of them hexagon next level tbh authentic migas beard organic iPhone. Poutine fam portland four loko, pabst forage sustainable. Actually kogi yes plz mumblecore pug. Humblebrag typewriter kitsch selfies iceland. Chillwave everyday carry palo santo thundercats ramps migas. </p>

            </div>
          </div>
          <div className='sm:w-full sm:flex sm:h-96'>
            <img className="bg-white w-full p-2 object-cover sm:m-5 rounded-xl sm:w-1/3 sm:object-contain sm:shadow-xl" src={ personalNotes } alt="beauty" />
          
            <div className='mt-5 sm:m-0 flex flex-col sm:justify-center sm:w-2/3 sm:p-5'>
              <h1 className='text-center text-3xl sm:text-4xl'>Access for All</h1>
              <p className='p-5 text-lg'>Williamsburg glossier before they sold out vaporware. Unicorn narwhal chia, kombucha organic taiyaki cornhole YOLO synth umami austin sartorial migas chambray. Polaroid marfa tofu pitchfork farm-to-table scenester church-key beard small batch. Vice tattooed tumeric enamel pin quinoa, glossier beard stumptown chia heirloom brunch hoodie selfies. </p>
            </div>
          </div>

          <div className='sm:w-full sm:flex sm:h-96 sm:flex-row-reverse'>
            <img className="bg-white w-full p-2 object-cover sm:m-5 rounded-xl sm:w-1/3 sm:object-contain sm:shadow-xl" src={ blogPost } alt="beauty" />
            <div className='mt-5 sm:m-0 flex flex-col sm:justify-center sm:w-2/3 sm:p-5'>
              <h1 className='text-center text-3xl sm:text-4xl'>Make it Reality</h1>
              <p className='p-5 text-lg'>Typewriter polaroid marfa tofu pitchfork farm-to-table scenester church-key beard small batch. Vice tattooed tumeric enamel pin quinoa, glossier beard stumptown chia heirloom brunch hoodie selfies. Williamsburg glossier before they sold out vaporware. Unicorn narwhal chia, kombucha organic taiyaki cornhole YOLO synth umami austin sartorial migas chambray. </p>
            </div>
          </div>
        </div>
    </div>
  )
}
export default Hero