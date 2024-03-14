import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="w-1/3 bg-[#1111110D] p-5 ml-3"> 
            <h2 className='text-2xl font-bold'>Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.object.isRequired,
}
export default Bookmarks;