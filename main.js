// let car = {
//     color : "red" ,
//     model : 2022 ,
//     track : "dsd" ,
//     price : 30000 ,


//     fullname : function () {
//         return this.color + " " +this.model + " " +this.track
//     }
// }


// document.getElementById('alaa').innerHTML = car.fullname();

















// document.addEventListener('DOMContentLoaded',function() {

//     document.querySelector('#red').onclick = function () {
//         document.querySelector('h1').style.color = "red" ;
//     }

//     document.querySelector('#green').onclick = function () {
//         document.querySelector('h1').style.color = "green" ;
//     }

//     document.querySelector('#blue').onclick = function () {
//         document.querySelector('h1').style.color = "blue"
//     }
// })











// document.addEventListener('DOMContentLoaded',function(){

//     document.querySelector('#submit').disabled = true;

//     document.querySelector('#task').onkeyup = function () {
//         if(document.querySelector('#task').value.length > 5){
//             document.querySelector('#submit').disabled =false;
//         }else{
//             document.querySelector('#submit').disabled = true;
//         }
//     }



//     document.querySelector('form').onsubmit = function () {
//         var task = document.querySelector('#task').value;
//         var li = document.createElement("li");
//         li.innerHTML= task;
    
    
    
//         document.querySelector('ul').appendChild(li)
//         document.querySelector('#task').value = " "
//         document.querySelector('#submit').disabled = true;
//         return false
//     }
// })



// document.addEventListener('DOMContentLoaded',function(){

// })




// let ahmed = {
//     name : 'ahmed helal',
//     age : 23,
//     address : 'sammnoud' ,


//     full : function () {
//         return this.name + this.address + this.age 
//     }
// }
// document.querySelector('#alaa').innerHTML = ahmed.full();







// let car = {
//     name : 'mercedes',
//     model : 2022 , 
//     color : " green ",
//     style : "modern",
//     speed : 1.2 ,



//     mama : function (){
//         return this.color + this.model 
//     }
// }
// document.querySelector('#alaa').innerHTML = car.mama()











// let a = document.querySelector('#ahmed') ;
// let b = document.querySelector('#red') ;
// let c = document.querySelector('#green') ;
// let d = document.querySelector('#blue') ;
// let x = document.querySelector('#black') ;

// document.addEventListener('DOMContentLoaded', function () {
//     b.onclick=function () {
//         a.style.color='red'
//     }

//     c.onclick=function () {
//         a.style.color='green'
//     }

//     d.onclick=function () {
//         a.style.backgroundColor= 'black'
//     }

//     x.onclick=function () {
//         a.style.backgroundColor= 'black'
//     }
    
    
// })
let x =     document.querySelector('#input')

document.addEventListener('DOMContentLoaded',function () {
    document.querySelector('#submit').disabled = true;
    document.querySelector('#input').onkeyup = function () {
        if(x.value.length > 5){
            document.querySelector('#submit').disabled = false;
        }else {
            document.querySelector('#submit').disabled = true;
        }
    }
})












