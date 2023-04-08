import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPhotos } from './galleryState'
import './App.css'
import "@fontsource/oswald";

function App() {
  const dispatch=useDispatch()
  const photos = useSelector(state => state.gallery.photos)

  useEffect(()=>{
    dispatch(getPhotos())
  },[dispatch])

  return (
    <div className="App">
      <h1>RANDOM PHOTO GALLERY</h1>
      <p>A small photo gallery made with Redux Toolkit & Redux Thunk</p>
      <hr />
      <div className='Gallery'>
        {
          photos.map(photo => <img key={photo.id} alt={photo.author} src={photo.download_url} width="400" height="400" />)
        }
      </div>
      <button>VIEW MORE</button>
    </div>
  )
}

export default App
