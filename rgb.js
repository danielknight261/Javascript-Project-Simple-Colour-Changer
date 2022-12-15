// looks like this  "rgb(155, 102, 102)"

//so we must produce 3 random numbers 
//seperated by commas and open and close brakcets
//staring with RGB 
//Number range 0 - 255
//https://www.youtube.com/watch?v=EEKWX59l9MY

//  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ]
// // //Hex is made up of # then 6 characters from the Hex array

// const btn = document.getElementById("btn")
// const color = document.querySelector(".color");

// btn.addEventListener('click', function(){
//   let hexColor = "#";
//   for (let i = 0; i < 6; i++) {
//     hexColor += hex[getRandomNumber()];
//   }


//   color.textContent = hexColor;
//   document.body.style.backgroundColor = hexColor;
// })

// function getRandomNumber(){
//     return Math.floor(Math.random() * 255);
// }

const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return  Math.floor(Math.random() * (max - min +1)) +min;
}

const randomRGB = () => 
    [
    randomNumber(0,255),
    randomNumber(0,255),
    randomNumber(0,255)
    ]

    const btn = document.getElementById("btn");
    const color = document.querySelector(".color");

    btn.addEventListener('click', function(){
          const rgb = randomRGB()
          const content = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;

           color.textContent = content;
          document.body.style.backgroundColor = content;
    });
        //   for (let i = 0; i < 6; i++) {
        //     hexColor += hex[getRandomNumber()];
        //   }