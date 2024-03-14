import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Booksmarks/Bookmarks'
import Header from './component/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <div className='container mx-auto md:flex'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
