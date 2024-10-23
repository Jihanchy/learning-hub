
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {

  return (
    <>
    <Header></Header>
    <div className='grid grid-cols-3 w-9/12 mx-auto pt-3 grid grid-cols-3'>
    <Blogs></Blogs>
    </div>
    </>
  )
}

export default App
