
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

const [bookmarks, setBookmarks] = useState([])

const handleAddToBookmark = (blog) => {
  const newBookmarkList = [...bookmarks, blog]
  setBookmarks(newBookmarkList)
}
const [readingTime,setReadingTime] = useState(0)

const handleMarkAsRead = (readTime,id) => {
  const totalRead = readingTime + readTime
  setReadingTime(totalRead)
  // remove from bookmark
  const remaining = bookmarks.filter(bookmark => bookmark.id !== id)
  setBookmarks(remaining)
}

  return (
    <>
    <Header></Header>
    <div className='w-10/12 md:w-8/12 gap-4 mx-auto pt-3 grid grid-cols-3'>
    <Blogs 
    handleMarkAsRead={handleMarkAsRead}
    handleAddToBookmark={handleAddToBookmark}></Blogs>
    <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
    </div>
    </>
  )
}

export default App
