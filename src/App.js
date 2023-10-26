// import logo from './logo.svg';
import { Route, Routes } from 'react-router';
import './App.css';
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Shops from './Pages/Shops';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Searchbar from './Pages/Searchbar';
import SingleProductDetail from './Pages/SingleProductDetail';
import Wishlist from './Pages/CartandWishlist/Wishlist';
import Latestpost from './Pages/LatestPost/Latestpost';
import Cartpage from './Pages/CartandWishlist/Cartpage';
import Checkout from './Pages/CartandWishlist/Checkout';

function App() {
  return (
    <div>
     <Layout>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/about' element={ <About/>}/>
        <Route path='/shops' element={ <Shops/>}/>
        <Route path='/cart' element={ <Shops/>}/>
        <Route path='/blogs' element={ <Blogs/>}/>
        <Route path='/blogs/:id' element={ <Latestpost/>}/>
        <Route path='/contact' element={ <Contact/>}/>
        <Route path='/login' element={ <Login/>}/>
        <Route path='/search' element={ <Searchbar/>}/>
        <Route path='/shops/:id' element={ <SingleProductDetail/>}/>
        <Route path='/wishlist/:id' element={ <Wishlist/>}/>
        <Route path='/cart/:id' element={ <Cartpage/>}/>
        <Route path='/checkout/:id' element={ <Checkout/>}/>
      </Routes>
    
     </Layout>

    </div>
  );
}

export default App;
