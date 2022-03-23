

    var data = [
    {
        imgUrl:"https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FBAN14.png",
        name:"Banana Robusta",
        unit:"1kg",
        price:"$20",
        // strikedOffPrice:"$95.00"
    },{
        imgUrl:"https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FBAN24.png",
        name:"Banana Elaichi / Yellaki",
        unit:"1kg",
        price:"$35.00",
        // strikedOffPrice:"$100.00"
    },{
        imgUrl:"https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FCHI13.png",
        name:"Chikoo",
        unit:"1kg",
        price:"$22",
        // strikedOffPrice:"$100.00"
    },
    {
        imgUrl:"https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FGRA42.png",
        name:"LGrapes Green",
        unit:"1kg",
        price:"$98",
        // strikedOffPrice:"$100.00"
        
    },
    {
        imgUrl:"https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/233/original/data?1609860341",
        name:"Grapes Black",
        unit:"500 g",
        price:"$158",
        // strikedOffPrice:"$95.00"
    },{
        imgUrl:"https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/247/original/data?1612371028",
        name:"Banana Nendran",
        unit:"500 g",
        price:"$54",
        // strikedOffPrice:"$100.00"
    },{
        imgUrl:"https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/369/original/data?1622631944",
        name:"Guava White Indian",
        unit:"2 Pcs",
        price:"$35",
        // strikedOffPrice:"$100.00"
    },
    {
        imgUrl:"https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/260/original/data?1612450264",
        name:"Banana Raw ",
        unit:"500 g",
        price:"$30",
        // strikedOffPrice:"$100.00"
        
    },
    {
        imgUrl:"https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/248/original/data?1612379941",
        name:"Banana Red",
        unit:"500 g",
        price:"$51",
        // strikedOffPrice:"$95.00"
    },{
        imgUrl:"https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/395/original/data?1625917064",
        name:"Baby Orange",
        unit:"500 g",
        price:"$226",
        // strikedOffPrice:"$100.00"
    },{
        imgUrl:"https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/395/original/data?1625917064",
        name:"Mosambi (Sweet Lime)",
        unit:"1 kg",
        price:"$62",
        // strikedOffPrice:"$100.00"
    },
    {
        imgUrl:"https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FCOC1.png",
        name:"Coconut",
        unit:"1 pc",
        price:"$32",
        // strikedOffPrice:"$100.00"
        
    },
    {
        imgUrl:"https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FMUS1.png",
        name:"Musk Melon",
        unit:"1 pc",
        price:"$78",
        // strikedOffPrice:"$95.00"
    },{
        imgUrl:"https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/117/original/data?1616765390",
        name:"Watermelon",
        unit:"1 pc",
        price:"$91",
        // strikedOffPrice:"$100.00"
    },{
        imgUrl:"https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/338/original/data?1620150734",
        name:"Orange Imported",
        unit:"2 Pcs",
        price:"$61",
        // strikedOffPrice:"$100.00"
    },
    {
        imgUrl:"https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FORA13.png",
        name:"Orange Nagpur",
        unit:"500 g",
        price:"$38",
        // strikedOffPrice:"$100.00"
        
    },
    {
        imgUrl:"https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/319/original/data?1614711143",
        name:"Orange Kinnow",
        unit:"1 Kg",
        price:"$80",
        // strikedOffPrice:"$95.00"
    },{
        imgUrl:"https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FAPP53.png",
        name:"Apple Royal Gala",
        unit:"4 pcs",
        price:"$162",
        // strikedOffPrice:"$100.00"
    },{
        imgUrl:"https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/244/original/data?1613050070",
        name:"Wood Apple",
        unit:"1 Pc",
        price:"$62",
        // strikedOffPrice:"$100.00"
    },
    {
        imgUrl:"https://fraazo-master.s3.ap-south-1.amazonaws.com/products/FAPP81.png",
        name:"Apple Ber Fruit",
        unit:"250 g",
        price:"$20",
        // strikedOffPrice:"$100.00"

    }



    
]

// variable = imgUrl, name, price, strikedOffPrice
// console.log(data)
var cart =JSON.parse(localStorage.getItem("addCartItem")) ||[];
displayItems(data);
function displayItems(data){

    document.querySelector("#container").textContent = "";


data.map(function(elem){
    // console.log(elem)
    var mainDiv = document.createElement('div')
    var img= document.createElement("img");
    img.setAttribute('src', elem.imgUrl);
    
    var para= document.createElement('p')
    para.textContent=elem.name;
    
    var unit=document.createElement('p')
    unit.textContent=elem.unit;

    var smallDiv= document.createElement('div')
    var price = document.createElement('p')
    price.textContent=elem.price;

    var buttom=document.createElement("button")
    buttom.textContent="ADD"

    button.addEventListener("click", function(){
        addCart(elem)
    })
        
    

    var anchor=document.createElement('a')
    anchor.setAttribute('href',buttom.anchor)
    // var striked = document.createElement('p')
    // striked.textContent=elem.strikedOffPrice
    smallDiv.append(price,buttom,anchor);
    mainDiv.append (img,para, unit,smallDiv);
    document.getElementById("container").append(mainDiv);
    
});
}
function addCart(elem){
     console.log(elem) 
     cart.push(elem)   
     localStorage.setItem('addCartItem',JSON.stringify(cart));
}

