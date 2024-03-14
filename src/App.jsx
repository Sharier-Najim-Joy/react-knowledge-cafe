import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Booksmarks/Bookmarks'
import Header from './component/Header/Header'

function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const handleAddToBookmark=blog=>{
    // console.log('adding bookmark')
    console.log(blog)
    const newBookmark=[...bookmarks,blog]
    setBookmarks(newBookmark);
  }
  return (
    
    <>
      <Header></Header>
      <div className='container mx-auto md:flex'>
      <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
