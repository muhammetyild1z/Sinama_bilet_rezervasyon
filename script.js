const contanier =document.querySelector('.contanier');
const count =document.querySelector('#count');
const amount =document.querySelector('#amount');
const movie =document.querySelector('#movie');
const seat =document.querySelectorAll('.seat:not(.reversed)');
contanier.addEventListener('click', function (e) {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('reseverd')) {
         
        e.target.classList.toggle('selected');
        price()        
    }
    
});
movie.addEventListener('change', function(e){

    price()  

});

function price(){
const selectedSeats=contanier.querySelectorAll('.seat.selected');
const selectedarr=[];
const seatsarr=[];
selectedSeats.forEach(function(seats){

    selectedarr.push(seats);

});
    seat.forEach(function(seat){

    seatsarr.push(seat);
});

let selectedSeatIndexs=selectedarr.map(function(seat){

    return seatsarr.indexOf(seat);
    
    
});




    let koltuksayi =selectedSeats.length;
   
    count.innerText=koltuksayi;
   
    if(movie.value==0){
        amount.innerText="lütfen bir film seçiniz.."
        count.innerText="";
    }
    else{
       
  amount.innerText="adet koltuk için hesaplanan ücret"+" "+koltuksayi*movie.value+"TL.";
  saveToLocalStorage(selectedSeatIndexs); 

}

 }
   
 function savelocal(indexs){
    localStorage.setItem('selectedSeats' ,JSON.stringify(indexs));
}
    
    
 