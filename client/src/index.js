import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Createblogs from './pages/Createblogs';
import Editblogs from './pages/Editblog';
import Fullpage from './pages/Fullpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route index path='/' element={<Home />}></Route>
      <Route path ='/blogs' element={<Blogs />}></Route>
      <Route path ='/createBlog' element={<Createblogs />}></Route>
      <Route path ='/editBlog' element={<Editblogs />}></Route>
      <Route path ='/fullPage' element={<Fullpage />}></Route>
    </Routes>
  </Router>
);
