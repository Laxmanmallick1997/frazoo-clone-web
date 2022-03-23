
    var data = [
        {
            imgUrl:"https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/169/original/data?1599847670",
            name:"Celery (Hydroponics)",
            unit:"150-200g",
            price:"$107",
            // strikedOffPrice:"$95.00"
        },{
            imgUrl:"https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/170/original/data?1599847734",
            name:"Baby Spinach (Hydroponics)",
            unit:"100 g",
            price:"$75",
            // strikedOffPrice:"$100.00"
        },{
            imgUrl:"https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/000/631/original/data?1635766646",
            name:"Mixed lettuce (Hydroponics)",
            unit:"1 Punnet (Approx 100g)",
            price:"$60",
            // strikedOffPrice:"$100.00"
        },
        {
            imgUrl:"https://s3.ap-south-1.amazonaws.com/fraazo-prod/products/product_images/000/003/103/original/data?1639301565",
            name:"Kale Curly (Aquaponics)",
            unit:"Approx 200g",
            price:"$129",
            // strikedOffPrice:"$100.00"
            
        }
        ]
    
    // variable = imgUrl, name, price, strikedOffPrice
    // console.log(data)
    
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
        var anchor=document.createElement('a')
        anchor.setAttribute('href',buttom.anchor)
        // var striked = document.createElement('p')
        // striked.textContent=elem.strikedOffPrice
        smallDiv.append(price,buttom,anchor);
        mainDiv.append(img,para, unit,smallDiv);
        document.getElementById("container").append(mainDiv);
        
    });