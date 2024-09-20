
// // get element by class name
// let element = document.getElementsByClassName("first-tag");
// console.log(element);


// // get element by tag name
// let elements = document.getElementsByTagName("p");

// console.log(elements);


// // Selects the first element that matches a CSS selector

// let element = document.querySelector(".myclass");
// console.log(element)


// //  Selects all elements that match a CSS selector.
// let elements = document.querySelectorAll("div > p");

// console.log(elements);

// let newElement = document.createElement("span");

// newElement.a

// newElement.textContent = 'hello from dom'






// setTimeout(
//     () => document.getElementById("myId").setAttribute("class", "red")
// , 2000);



// setTimeout(
//     () => document.getElementById("myId").setAttribute("class", "green")
// , 3000);



// setTimeout(
//     () => document.getElementById("myId").removeAttribute("class")
// , 4000);


// element.append(newElement)



// var body = document.body;
// console.log(body);


// let data = {
//     x: 10,
//     y: 10,
//     width:50,
//     heigth:50,
//     fillStyle: "red"
// }

// const canvas = document.querySelector('canvas');
// const context = canvas.getContext("2d")



// function draw() {
//     context.fillStyle = data.fillStyle;
//     context.fillRect(data.x,data.y,data.width,data.heigth);
// }

// draw()

// const canvas = document.querySelector('canvas');
// const context = canvas.getContext("2d")


// let data = {
//     x: 10,
//     y: 10,
//     width:50,
//     heigth:50,
//     fillStyle: "red"
// }


// let Xdelat = 7;
// let Ydelta = 7;

// function update(){
//     if(data.x + data.width > canvas.width || data.x < 0) {
//         Xdelat *=-1
//     }
    

//     if(data.y + data.heigth > canvas.height || data.y < 0) {
//         Ydelta *=-1
//     }
//    data.y += Ydelta
//    data.x += Xdelat
// }
// function draw() {
//     context.clearRect(0,0,canvas.width,canvas.height)
//     context.fillStyle = data.fillStyle;
//     context.fillRect(data.x,data.y,data.width,data.heigth);
// }

// function loop(){
//     requestAnimationFrame(loop);


//     update()
//     draw();
// }

// loop();







// const canvas = document.querySelector('canvas');
// const context = canvas.getContext("2d")


// let data = {
//     xDelta:0,
//     x: 10,
//     y: 10,
//     width: 30,
//     height: 30

// }

// function update() {
//     data.x += data.xDelta;
// }

// function draw() {
//     context.clearRect(0,0,canvas.width,canvas.height)
//     context.fillRect(data.x,data.y,data.width,data.height)

// }


// function loop() {

//   requestAnimationFrame(loop);
//   update()
//   draw()

// }

// loop()


// document.addEventListener('keydown',function(evt){
//     if(evt.code === "ArrowRight"){

//         data.xDelta = 1
//     } else if(evt.code === "ArrowLeft"){
//         data.xDelta = -1
//     }
// })


// document.addEventListener("keyup",function(evt){
//     data.xDelta = 0
// })






// const canvas = document.querySelector('canvas');
// const context = canvas.getContext("2d");

// const backgorundImg = document.createElement("img");
// backgorundImg.src = "https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg?region=0,0,1920,1080"


// const heroImg = document.createElement("img")
// heroImg.src = "https://1001freedownloads.s3.amazonaws.com/vector/thumb/135655/nicubunu_Game_baddie_Ninja.png";


// const star = document.createElement("img");
// star.src = "https://blog.knife-depot.com/wp-content/uploads/2020/03/shuriken-676x676.png"

// let data = {
//     hero: {
//         xDelta:0,
//         yDelta:0,
//         x:10,
//         y:230,
//         width:100,
//         height:100,
//     },

//     bullets: []


// };




//  function update() {
//     data.hero.x += data.hero.xDelta
//     data.hero.y += data.hero.yDelta
     
//     data.bullets.forEach(function(bullet){
//         bullet.x += bullet.xDelta;
//     })
//     data.bullets = data.bullets.filter(function(bullet){
//         if(bullet.x > canvas.width) {
//             return false;
//         }
//         return true;
//     })
// }

//  function draw() {
//     context.drawImage(backgorundImg,0,0,canvas.width,canvas.height,)
//     context.drawImage(heroImg,data.hero.x, data.hero.y, data.hero.width, data.hero.height)

//     data.bullets.forEach(function(bullet){
//         context.drawImage(star,bullet.x,bullet.y,bullet.width,bullet.height)
       
//     })
// };


// function loop() {

//   requestAnimationFrame(loop);
//   update()
//   draw()

// };
// loop();


// document.addEventListener("keydown",function(evt){
//     if(evt.code === "ArrowRight"){
//         data.hero.xDelta = 1;
//     } else if(evt.code === "ArrowLeft"){
//         data.hero.xDelta = -1
//     } else {
//         data.bullets.push({
//             xDelta: 5,
//             x: data.hero.x + data.hero.width,
//             y:data.hero.y + data.hero.height/2,
//             width:20,
//             height:20
//         });

//     }


// });

// document.addEventListener("keyup",function(evt){
//     data.hero.xDelta = 0
// }); 





// const canvas = document.querySelector('canvas');
// const btn = document.querySelector('button');
// const context = canvas.getContext('2d')

// let data = {
//     balls: []
// }

// function update(){

// }

// function draw(){

// }

// function loop(){
//     requestAnimationFrame(loop);
//     update();
//     draw();
// }

// loop();

// function Ball() {
    
//    this.x = 100;    
//    this.y = 100;
//    this.r = 40;
//    this.xDelta = 1;
//    this.yDelta = 1;
//    this.update = function(){
//     this.x += this.xDelta
//     this.y += this.yDelta
    
//    }
// }


// btn.addEventListener('click',function(){
//     const ball = new Ball()
//     data.balls.push(ball)
// })