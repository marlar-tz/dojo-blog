import BlogList from './BlogList';
import useFetch from './usefetch';

const Home = () => {

    const { data, isPending, error } = useFetch('http://localhost:8080/blogs');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && <BlogList blogs={data} title="All blogs!" />}
            {/* <BlogList blogs={blogs.filter((blog)=> blog.author === 'mario' )} title="Mario's blogs!" /> */}
            {/* <button onClick={()=>{setName("lugui")}}>Change the name</button> */}
        </div>
    )
}

export default Home;