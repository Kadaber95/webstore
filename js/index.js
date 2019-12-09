 /*
const saleGuitars=[
    
{
    name: 'Gibson Acustic',
    description: 'The most highly customized Country Western in Gibson’s history.',
    code: 'SKU 001',
    brand: 'Gibson',
    raiting: '4.0',
    oldPrice: '250',
    price: '199.00',
    img: 'img/guitar01.jpg',
},

{
    name: 'Ibanez Electric',
    description: 'In designing the 2019 line of guitars, Ibanez was determined to restate their classic designs.',
    code: 'SKU 002',
    brand: 'Ibanez',
    raiting: '3.0',
    oldPrice: '320',
    price: '249.99',
    img: 'img/guitar02.jpg'
}
]
const guitars = [
      
    {
        name: 'Fender 2008',
        description: 'Over the decades, players have been continually inspired by the sound of a Strat.',
        code: 'SKU 003',
        brand: 'Fender',
        raiting: '4.0',
        price: '120.00',
        img: 'img/guitar03.jpg'

    },
    
    {
        name: 'Epiphone Red',
        description: 'Since its introduction almost 20 years ago, The Special-II has met the needs of countless musicians with its combination of Les Paul features, great tone and affordability.',
        code: 'SKU 004',
        brand: 'Epiphone',
        raiting: '4.0',
        price: '310.00',
        img: 'img/guitar04.jpg'
    },
    {
        name: 'B.C Rich Dark',
        description: 'Likes its namesake, the Warlock Extreme Chris Kael Electric Bass means business.',
        code: 'SKU 005',
        brand: 'B.C Rich',
        raiting: '4.0',
        price: '1200.00',
        img: 'img/guitar05.jpg'
    },
    {
        name: 'Jackson Snow',
        description: 'he Snow model was designed by Jackson in 1976 and was popular from the moment of its release.',
        code: 'SKU 006',
        brand: 'Jackson',
        raiting: '3.0',
        price: '560.00',
        img: 'img/guitar06.jpg'
    },
    {
        name: 'Ibanez Nucita',
        description: 'Ibanez guitars always did things their own way, bringing uniqueness and innovation to guitars in rock and many other styles.',
        code: 'SKU 007',
        brand: 'Ibanez',
        raiting: '4.0',
        price: '99.00',
        img: 'img/guitar02.jpg'
    },
    {
        name: 'Gibson Clasic',
        description: 'The J-45 Cutaway acoustic-electric is Gibson’s best-selling acoustic of all time.',
        code: 'SKU 008',
        brand: 'Gibson',
        raiting: '4.0',
        price: '3969.00',
        img: 'img/guitar01.jpg'
    },
    {
        name: 'Fender Neo',
        description: 'ombining the look of a classic fender jazz box with some rock-and-roll attitude, the ES-235 semi-hollowbody is ready for the spotlight.',
        code: 'SKU 009',
        brand: 'Fender',
        raiting: '3.0',
        price: '2559.00',
        img: 'img/guitar03.jpg'
    },
    {
        name: 'Les Paul',
        description: 'The J-45 Cutaway acoustic-electric is Gibson’s best-selling acoustic of all time.',
        code: 'SKU 010',
        brand: 'Epiphone',
        raiting: '4.0',
        price: '181.10',
        img: 'img/guitar04.jpg'
    }
]

/************* FUNCTIONS *************/


/*
function filterByPrice(guitars) {
    return guitars.price < 1500;
  }
  */



  function filterByPrice() {
    // Declare variables
    var guitars = document.getElementById('guitars')

    console.log('filterByPrice')
    
    var guitars
    guitars = document.getElementById('guitars')

    console.log(guitars)
/*
      document.getElementById('guitarBrand').addEventListener('change', event => checkBrand(event) )
  */  
  }

  function filterByBrand(value) {
    // Declare variables
    var guitars = document.getElementById('guitars')

    console.log('filterByBrand')
    
    var guitars
    guitars = document.getElementById('guitars')

    console.log(guitars)
/*
      document.getElementById('guitarBrand').addEventListener('change', event => checkBrand(event) )
  */  
  }

  /*
  function checkBrand(event) {
    const userIsLookingFor = event.target.value;
  
    const onlyMatchingBrands = courses.filter(prod => prod.brand == userIsLookingFor);
    renderCourses(onlyMatchingBrand);
  }
*/

filterByBrand()
filterByPrice()