 import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from "./pages/Home"
import NotFound from './pages/NotFound';
import SearchItem from './pages/SearchItem';
import PostItem from './pages/PostItem';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
const HomePage = () => {
  useEffect(() => {
    document.title = 'Home';
  }, []);
  return <h2>Home Page</h2>;
};

const SearchItems = () => {
  useEffect(() => {
    document.title = 'Search Items';
  }, []);
  return <h2>Search Items Page</h2>;
};

const PostItems = () => {
  useEffect(() => {
    document.title = 'Post Items';
  }, []);
  return <h2>Post Items Page</h2>;
};
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchItem />} />
                <Route path="/post" element={<PostItem />} />
                <Route path='/sign-up' element={<Signup/>} />
                <Route path="/login" element={<Login/>} />
                <Route path='/profile' element={<Profile/>} />
                <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
