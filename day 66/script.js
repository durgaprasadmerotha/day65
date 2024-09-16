const h1 = document.querySelector("h1");

window.addEventListener('keypress', (e) => {
    console.log('code: ',e.code);
    console.log('value: ',e.key);

})
window.addEventListener('keyup', (e) => {
    console.log('code: ',e.code);
    console.log('value: ',e.key);

})

window.addEventListener('keydown', (e) => {
    console.log('code: ',e.code);
    console.log('value: ',e.key);

})






