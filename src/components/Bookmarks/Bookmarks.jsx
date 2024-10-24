import PropTypes from "prop-types";
import Bookmark from "./Bookmark/Bookmark";
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="shadow-md p-2 bg-slate-100 rounded-md">
            <div className="p-4 rounded-md bg-gradient-to-r from-violet-200 to-violet-300 border-">
                <p className="">Reading time: {readingTime}</p>
            </div>
            <h1 className="text-2xl">Bookmarks{bookmarks.length}</h1>
            {
                bookmarks.map((bookmark,idx) => <Bookmark key={
                    idx}
                    bookmark={bookmark}
                    ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime:PropTypes.number
}
export default Bookmarks;