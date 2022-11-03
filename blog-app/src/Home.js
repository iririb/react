import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'New Journey', body: 'Not start yet...', author: 'Ghost writer', id: 1 },
        { title: 'New Journey2', body: 'Not start yet2...', author: 'Ghost writer', id: 2 },
        { title: 'New Journey3', body: 'Not start yet3...', author: 'Ghost writer', id: 3 },
        { title: 'New Journey someone1', body: 'Not start yet3...', author: 'someone', id: 4 },
        { title: 'New Journey someone2', body: 'Not start yet3...', author: 'someone', id: 5 }
    ])

    const [name, setName] = useState('namedesu')

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    // useEffect ran for each render
    // adding [] as second parameter will prevent useEffect to trigger for second and next render
    useEffect(() => {
        console.log('useEffect ran')
        console.log(name)
    }, [name])
    // adding above state into second argument will run the useEffect when state mentioned triggered

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!!!" handleDelete={handleDelete} />
            <button onClick={() => setName('newnamedesu')}>Change name</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;