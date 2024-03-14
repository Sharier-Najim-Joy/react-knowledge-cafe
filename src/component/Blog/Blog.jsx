import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    const {id,title,cover,author,author_img,reading_time,posted_date,hashtags}=blog
    // console.log(blog)
    return (
        <div className='mb-14'>
            <img className='rounded-xl mb-5 max-h-[500px] w-full object-cover' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <img className='size-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h4 className='text-2xl font-bold'>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex '> 
                    <p>{reading_time} min read</p>
                    <button 
                    onClick={()=>handleAddToBookmark(blog)}
                    className='text-2xl ml-4'
                    ><CiBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold my-5'>{title}</h2>
              <p>
              {
            hashtags.map((hash,index)=><span key={index}><a  className='mr-2 text-lg font-medium text-[#111111]'>#{hash}</a></span>)
               }
              </p>
              <button className='mt-5 underline text-purple-700' onClick={() =>handleMarkAsRead(id,reading_time)}>Mark as read</button>
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func
}
export default Blog;