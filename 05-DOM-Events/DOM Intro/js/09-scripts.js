// Create Elements
console.info("--8 Create Elements--");
const newLink = document.createElement('a'); // create a new link element
newLink.textContent = 'New Link'; // set the text content of the link
newLink.href = '#'; // set the href attribute of the link
document.querySelector('.navegacion').appendChild(newLink); // append the new link to the navigation
const navigation = document.querySelector('.navegacion');
navigation.insertBefore(newLink,navigation.children[1]); // append the new link to the navigation