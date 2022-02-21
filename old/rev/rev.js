let image = [
    'house1.jpg', 'house2.jpg', 'house3.jpg'
]
let counter = 1
function slideshow(e){
e.src = image[counter]
for (let i = 0; i <= image.length; i++){
if (counter == image.length){
    counter = 0
}
else{
    counter = counter++ 
}
}

}