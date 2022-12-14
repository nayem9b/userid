
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Cards from './Components/Cards/Cards';

import Navbar from './Components/Navbar/Navbar';
import ImageSearch from './Components/ImageSearch/ImageSearch';
import Footer from './Components/Footer/Footer';
import Userprofile from './Components/User-Profile/Userprofile';



function App() {

  const[ images, setImages]= useState([])
  const[ isLoading, setIsLoading]= useState(true)
  const[ term, setTerm]= useState('')

   useEffect(()=>{
    fetch('tree.json')
    .then( res => res.json())
    .then(data => {
      setImages(data.hits);
      isLoading(false)
    })
    .catch(err => console.log(err))

   },[term])

  return (
    <div className="App">
          <Navbar></Navbar>
          <ImageSearch searchText={(text) => setTerm(text)}></ImageSearch>
         
         
      <div className='container'>
        
        <div className='grid sm:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-4'>
          { 
            images.map( image => <Cards key={image.id} image={image}></Cards>)
          }
        </div>

      </div>
      <Footer></Footer>
     
    </div>
  );
}

export default App;
