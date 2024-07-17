
import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/Navbar'

interface Blog{
  id: number
  title: string
  description: string
  author: string
}

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [blogs, setBlogs] = useState<Blog[]>([])
  const fetchData = async () => {
    setIsLoading(true)
    const resp = await fetch('http://localhost:3001/blogs',)
    const data = await resp.json()
    setBlogs(data)
    setIsLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <NavBar />

     <div className="bg-slate-900 h-screen w-screen">
     {isLoading ? <div className="text-center text-white">Loading...</div> : <div className="text-center">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {blog.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {blog.description}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {blog.author}
              </p>
            </div>
          </div>
        ))}
      </div>}
     </div>
    </>
  )
}

export default App
