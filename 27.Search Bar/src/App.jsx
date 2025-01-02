import React, { useEffect, useState } from 'react'

const App = () => {
  const data = [
    // Products starting with 'A'
    { productName: "Apple", price: 50 },
    { productName: "Avocado", price: 80 },
    { productName: "Apricot", price: 70 },
    { productName: "Artichoke", price: 60 },
    { productName: "Asparagus", price: 90 },
    
    // Products starting with 'B'
    { productName: "Banana", price: 30 },
    { productName: "Blueberry", price: 100 },
    { productName: "Broccoli", price: 45 },
    { productName: "Breadfruit", price: 55 },
    { productName: "Bell Pepper", price: 35 },
    
    // Products starting with 'C'
    { productName: "Carrot", price: 20 },
    { productName: "Cucumber", price: 25 },
    { productName: "Cabbage", price: 18 },
    { productName: "Cauliflower", price: 28 },
    { productName: "Celery", price: 22 },
    
    // Products starting with 'D'
    { productName: "Date", price: 40 },
    { productName: "Dragonfruit", price: 120 },
    { productName: "Durian", price: 150 },
    { productName: "Dandelion Greens", price: 35 },
    { productName: "Dewberry", price: 50 },
    
    // Products starting with 'E'
    { productName: "Eggplant", price: 35 },
    { productName: "Elderberry", price: 150 },
    { productName: "Endive", price: 42 },
    { productName: "Edamame", price: 30 },
    { productName: "Escarole", price: 40 },
  ];
  const [filteredProducts, setfilteredProducts] = useState([...data])

  const [searchItem, setsearchItem] = useState("")

  const HandelChange = (e) =>  {
    setsearchItem(e.target.value)
  }
  console.log(searchItem);

  useEffect(() => {
    if (searchItem === "") {
      
      setfilteredProducts(data);
    } else {

      const productsToShow = data.filter((product) =>
        product.productName.toLowerCase().startsWith(searchItem.toLowerCase())
      );
      setfilteredProducts(productsToShow);
    }
  }, [searchItem]);


  
  return (
    <div className='w-full h-screen bg-gray-300 flex flex-col items-center gap-4 ' >
          <input calue="" onChange={(e)=>{HandelChange(e)}} className='h-5' placeholder='Search Product...' type="text" />

          <div id="showproducts" className='h-[30rem] w-64 bg-white shadow-md p-4 overflow-y-auto '>

            {filteredProducts.map((product)=>{
              return(
                <div className='w-full h-[5rem] bg-slate-500 rounded-lg flex justify-between p-4 my-1'>
                <div>
                <h1  className='text-gray-200'>Productname</h1>
                <h2>{product.productName}</h2>
                </div>
                <div>
                  <h1 className='text-gray-200'>price</h1>
                  <h2 >${product.price}</h2>
                </div>
            </div>
              )
            }) }

           </div>  

    </div>
  )
}

export default App