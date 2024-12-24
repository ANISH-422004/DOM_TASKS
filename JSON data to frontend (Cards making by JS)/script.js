// console.log(axios);
let data ;
async function getdata(){
    data = await axios.get('https://fakestoreapi.com/products')
    let products =  data.data
    console.log(products);
    let clutter = ""
    products.forEach(element => {
        clutter+=` 
           <div class="card">
                <img src=${element.image} alt="">
                <h1>${element.title}</h1>
                <h3>Price: $${element.price}</h3>



            </div> `
        
    });
    document.querySelector("main").innerHTML = clutter

}
getdata()






