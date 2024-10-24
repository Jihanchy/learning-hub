import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmark,handleMarkAsRead}) => {

    const [blogs,setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="col-span-2 ">
            {
                blogs.map(blog => <Blog
                     key={blog.id}
                      blog={blog}
                      handleMarkAsRead={handleMarkAsRead}
                     handleAddToBookmark={handleAddToBookmark}></Blog>)
            
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func
};
export default Blogs;