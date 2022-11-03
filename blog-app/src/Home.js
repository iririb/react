import { useState } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'New Journey', body: 'Not start yet...', author: 'Ghost writer', id: 1 },
        { title: 'New Journey2', body: 'Not start yet2...', author: 'Ghost writer', id: 2 },
        { title: 'New Journey3', body: 'Not start yet3...', author: 'Ghost writer', id: 3 }
    ])
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!!!"/>
        </div>
    );
}

export default Home;