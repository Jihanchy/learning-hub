import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";
const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    const {id,author,hashtags,title,author_img,reading_time,posted_date,cover} = blog
    return (
        <div className="col-span-1 mb-7 space-y-2">
            <img 
            className="w-full
             rounded-md h-72 object-cover"
            src={cover} alt="" />

            <div className="flex  justify-between items-center">
                <div className="flex gap-3 items-center">
                    <img className="rounded-full w-11 h-11 object-cover" src={author_img} alt="" />
                    <div className="">
                        <p className="text-xl font-bold">{author}</p>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <p>{reading_time} min read</p>
                    <button  onClick={() => handleAddToBookmark(blog)}><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h3 className='text-3xl font-bold'>{title}</h3>
            <p className='space-x-2 text-sm'>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <p onClick={()=>handleMarkAsRead(reading_time,id)} className='underline font-sm text-base text-purple-500'>Mark as read</p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
};
export default Blog;