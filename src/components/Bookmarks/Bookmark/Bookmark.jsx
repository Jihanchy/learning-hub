import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    return (
        <div className='bg-slate-50 rounded-md p-3 mb-2'>
        <h1 className='text-lg'>{bookmark.title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
};

export default Bookmark;