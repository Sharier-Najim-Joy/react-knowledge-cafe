import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {title,cover,author,author_img,reading_time,posted_date,hashtags}=blog
    console.log(blog)
    return (
        <div>
            <img className='rounded-xl' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <img className='size-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h4 className='text-2xl font-bold'>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <p>{reading_time} min read</p>
                </div>
            </div>
            <h2 className='text-4xl font-bold'>{title}</h2>
              <p>
              {
            hashtags.map((hash,index)=><span key={index}><a  className='mr-2 text-lg font-medium text-[#111111]'>#{hash}</a></span>)
               }
              </p>
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired
}
export default Blog;