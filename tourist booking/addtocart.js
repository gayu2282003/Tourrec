const product=[
    {
        id:0,
        image:'p1.jpg',
        title:'Umbrella',
        price:100,
    },
    {
        id:1,
        image:'p2.png',
        title:'Water Bottle',
        price:60,
    },
    {
        id:2,
        image:'p3.webp',
        title:'Towel',
        price:250,

    },
    {
        id:3,
        image:'p4.jpg',
        title:'Soap',
        price:45,

    },
    {
        id:4,
        image:'p5.jpeg',
        title:'Tooth Brush',
        price:35,

    },
    {
        id:5,
        image:'p6.jpg',
        title:'Snacks',
        price:100,

    },
    {
        id:6,
        image:'p7.webp',
        title:'Hiking Shoes',
        price:2500,

    },
    {
        id:7,
        image:'p8.jpg',
        title:'Tent',
        price:1500,

    },
    {
        id:8,
        image:'p9.jpg',
        title:'camera',
        price:1500,

    },
    {
        id:9,
        image:'p10.jpg',
        title:'Sweater',
        price:1500,

    },
    {
        id:10,
        image:'p11.jpg',
        title:'First Aid Kit',
        price:1500,

    },
    {
        id:11,
        image:'p12.jpg',
        title:'Torch',
        price:150

    },
    {
        id:12,
        image:'p13.jpg',
        title:'Coolers',
        price:150,

    },
    {
        id:13,
        image:'p14.jpg',
        title:'Cosmetics',
        price:1500,

    },
    {
        id:14,
        image:'p15.jpg',
        title:'Shampoo',
        price:15,

    }


];
const categories=[...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML=categories.map((item)=>
{
    var{image,title,price}=item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>Rs: ${price}.00</h2>`+
                "<button onclick='addtocart("+(i++)+")'>Add to Cart</button>"+
            `</div>
        </div>`
    )
        

    }
).join('')

var cart=[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a,1);
    displaycart();
}
function displaycart(a){
    let j=0,total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML="Your Cart is Empty";
        document.getElementById("total").innerHTML="Rs"+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML=cart.map((items)=>
        {
            var{image,title,price}=items;
            total=total+price;
            document.getElementById("total").innerHTML="Rs "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:15px;'>${title}</p>
                <h2 style='font-size:15px;'>Rs: ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"
                
        );
        }).join('');
    }
}