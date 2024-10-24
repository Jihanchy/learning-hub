import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {author,hashtags,title,author_img,reading_time,posted_date,cover} = blog
    return (
        <div className="col-span-1 mb-4 space-y-4">
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
                <div>
                    <p>{reading_time} min read</p>
                </div>
            </div>
            <h3 className='text-3xl font-bold'>{title}</h3>
            <p className='space-x-2'>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
};
export default Blog;