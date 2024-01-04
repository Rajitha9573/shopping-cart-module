import './App.css';
import React, {useState, useEffect} from 'react';
{/* <img className="imgStyle"  key={value.id} src={value.images[0]} alt={value.title} /> */}





function App() {

   const [data, setData] = useState("");

   
   useEffect(() => {
    async function getData() {
      const response = await fetch(
        ` https://dummyjson.com/products`
      )
      let actualData = await response.json();
       setData(actualData.products)
      console.log(actualData.products) 
    }
    getData()
  }, [])
   
  
  
  return (
    <div className='headName'>
      <h1 className='allItems'>All Items</h1>
  
    <div className="App">
      
      
      {data && data.map((value) => {
    return (
      <>
      <div className='imgBox'>
        <img className="imgStyle"  key={value.id} src={value.images[0]} alt={value.title} /> 
        <h3 className='heading'>{value.title}</h3>
        <p>Price : ${value.price}</p>
        <button className='cart'>Add To Cart</button>
        </div>
        
      </>
    );
  })}
     

      
    </div>
    </div>
  );
  

  }
  


 export default App;
