
import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
  return (
    <div className='bg-gray-300 mt-5 text-2xl p-4 rounded-2xl'>
        <h3>{bookmark.title}</h3>
    </div>
  )
}

Bookmark.propTypes = {
    bookmark:PropTypes.array
}

export default Bookmark