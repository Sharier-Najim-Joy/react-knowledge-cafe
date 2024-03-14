import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Booksmarks/Bookmarks'
import Header from './component/Header/Header'

function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const [readingTime,setReadingTime]=useState(0);
  const handleAddToBookmark=blog=>{
    // console.log('adding bookmark')
    console.log(blog)
    const newBookmark=[...bookmarks,blog]
    setBookmarks(newBookmark);
    
  }
  const handleMarkAsRead=(id,time)=>{
    setReadingTime(readingTime+time)
    // remove the read blog from bookmark
    const remainingBooksMark=bookmarks.filter(bookmark=>bookmark.id !==id);
    setBookmarks(remainingBooksMark)
  }
  return (
    
    <>
      <Header></Header>
      <div className='container mx-auto md:flex'>
      <Blogs 
      handleAddToBookmark={handleAddToBookmark}
      handleMarkAsRead={handleMarkAsRead}
      ></Blogs>

      <Bookmarks 
      bookmarks={bookmarks}
      readingTime={readingTime}
      ></Bookmarks>
      </div>
    </>
  )
}

export default App
