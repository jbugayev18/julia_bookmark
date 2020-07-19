'use strict'; 
// 1. this will fetch a random dog image with input defualt at 3. //

// function getRandomDogImage({
//     fetch ('https://dog.ceo/api/breeds/image/random/3')
//     .then(response => response.json())
//     .then(responseJson => console.log(response.json));

// function watchForm(){
//     $('form').submit(event => {
//         event.preventDefault(); 
//         getRandomDogImage(); 
//     }); 
// }

// $(function(){
//     console.log('App loaded!Waiting for submit!'); 
//     watchForm(); 
// }); 

//2. Loading the images to the DOM after the user chooses to displau between 1 and 50 random dog images
// function getRandomDogImage({
//     fetch ('https://dog.ceo/api/breeds/image/random/3')
//     .then(response => response.json())
//     .then(responseJson =>
//         displayResults(responseJson))
//     .catch(error => alert('Something went wrong. Try again')); 

//     function displayResults(responseJson); 
//     //add new images with the existing image 
//     $('.results-img').addWith(
//       `<img src="${responseJson.message}" class="results-img">`
//     )
//     //display the results section
//     $('.results').removeClass('hidden');
//   }
  
// function watchForm(){
//     $('form').submit(event => {
//         event.preventDefault(); 
//         getRandomDogImage(); 
//     }); 
// }

// $(function(){
//     console.log('App loaded!Waiting for submit!'); 
//     watchForm(); 
// }); 

// function getRandomDogImage(){
//     fetch('https://dog.ceo/api/breed/hound/images/random')
//     .then(responseJson =>
//         displayResults(responseJson))
//     .catch(error => alert('Something went wrong. Try again')); 

// }

// function displayResults(responseJson); 
//     //replace existing image with new image
//     $('.results-img').replaceWith(
//       `<img src="${responseJson.message}" class="results-img">`
//     )
//     //display the results section
//     $('.results').removeClass('hidden');
//   }
  
// function watchForm(){
//     $('form').submit(event => {
//         event.preventDefault(); 
//         getRandomDogImage(); 
//     }); 
// }

// $(function(){
//     console.log('App loaded!Waiting for submit!'); 
//     watchForm(); 
// });