import { useState , useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null)

    useEffect(()=>{
        fetch('http://localhost:8080/blogs')
        .then(res =>{
            return res.json();
        })
        .then((data)=>{
            setBlogs(data)
        })
    },[])

    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All blogs!" />}
            {/* <BlogList blogs={blogs.filter((blog)=> blog.author === 'mario' )} title="Mario's blogs!" /> */}
            {/* <button onClick={()=>{setName("lugui")}}>Change the name</button> */}
        </div>
    )
}

export default Home;