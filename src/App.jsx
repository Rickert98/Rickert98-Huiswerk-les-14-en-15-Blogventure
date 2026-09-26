/* =================== Imports ====================================================================================== */
import './App.css'
import {Routes, Route} from 'react-router-dom'


/* ============================ Pages =============================================================================== */
import Home from './pages/home/home.jsx'
import AllPosts from './pages/all-posts/all-posts.jsx'
import NewPost from './pages/new-post/new-post.jsx'
import NotFound from './pages/not-found/not-found'
import BlogpostDetail from './pages/blogpost-detail/blogpost-detail.jsx'

/* ============================ Components ========================================================================== */
import Navigation from './components/nav/navigation'


/* ============================ Images ============================================================================== */
import logo from './assets/logo-white.png'


/* =================== Functions  =================================================================================== */
/* ============================ App ================================================================================= */

function App() {
    return (
        <>
            {<Navigation/>}
            <div className="page-container">
                <img src={logo} alt="Company logo"/>
                <h1>Begin hier met het maken van jouw blog-applicatie!</h1>
            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/all-posts" element={<AllPosts/>}/>
                <Route path="/new-post" element={<NewPost/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/all-posts/:id" element={<BlogpostDetail/>}/>
            </Routes>
        </>
    )
}

export default App
