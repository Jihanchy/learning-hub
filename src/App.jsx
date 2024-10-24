
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmarks/Bookmark'
import Header from './components/Header/Header'

function App() {

  return (
    <>
    <Header></Header>
    <div className='w-9/12 gap-4 mx-auto pt-3 grid grid-cols-3'>
    <Blogs></Blogs>
    <Bookmark></Bookmark>
    </div>
    </>
  )
}

export default App
