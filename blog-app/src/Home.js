import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            })
            .then((data)=>{
                setBlogs(data)
            })
    }, [])

    return (
        <div className="home">
            {/* we need to check blogs whether it's null or not else it will become error due to map function cannot handle null object the first application initilize */}
            {blogs && <BlogList blogs={blogs} title="All Blogs!!!"/>}
        </div>
    );
}

export default Home;