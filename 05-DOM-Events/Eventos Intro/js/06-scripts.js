const cardDiv = document.querySelector('.card');
const infoCard = document.querySelector('.info');
const titleCard = document.querySelector('.titulo');

cardDiv.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the event from bubbling up to parent elements
    console.log("Click en la card");
});
infoCard.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the event from bubbling up to parent elements
    console.log("Click en info");
});
titleCard.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the event from bubbling up to parent elements
    console.log("Click en título");
});