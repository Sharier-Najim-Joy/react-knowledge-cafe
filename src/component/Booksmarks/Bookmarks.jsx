import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="w-1/3 bg-[#1111110D] p-5 ml-3"> 
           <div className='bg-[#6047EC1A] rounded-xl p-7 mb-4 border-2 border-[#6047EC]'>
           <h3 className='text-[#6047EC] font-bold text-2xl text-center'>Spent time on read : {readingTime} min</h3>
           </div>
            <h2 className='text-2xl font-bold'>Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.object.isRequired,
    readingTime:PropTypes.number
}
export default Bookmarks;