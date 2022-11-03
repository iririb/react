import { useState, useEffect } from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    //     below writing style mean get the data and call it blogs
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            { error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!!!" />}
        </div>
    );
}

export default Home;