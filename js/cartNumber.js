
let cards = document.querySelectorAll('.icon-cross');

for ( let i=0; i < cards.length ; i++){
    cards[i].addEventListener('click', () =>{
        cardNumbers(products[i]);
    })


}
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cardNumbers');

    if(productNumbers){
    document.querySelector('.cartt span').textContent = productNumbers ;
    }

}

function cardNumbers(product){
    let productNumbers = localStorage.getItem('cardNumbers');
    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cardNumbers', productNumbers + 1);
        document.querySelector('.cartt span').textContent = productNumbers + 1;
      //  console.log(productNumbers)

    }else{
        localStorage.setItem('cardNumbers',  1);
        document.querySelector('.cartt span').textContent = 1;

    }

    setItem(product);

}

onLoadCartNumbers();

