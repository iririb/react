import { useState } from 'react'

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'New Journey', body: 'Not start yet...', author: 'Ghost writer', id: 1 },
        { title: 'New Journey2', body: 'Not start yet2...', author: 'Ghost writer', id: 2 },
        { title: 'New Journey3', body: 'Not start yet3...', author: 'Ghost writer', id: 3 }
    ])
    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>

                </div>
            ))}
        </div>
    );
}

export default Home;