import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className=''>
      <NavBar></NavBar>
      <div className='absolute top-0 w-full h-screen bg-indigo-300'>
        <img className='w-full h-full' src="/src/assets/heroImage.png" alt="" />
      </div>

      <div className='w-full h-screen bg-red-300'>
      </div>
    </div>
  )
}

export default App