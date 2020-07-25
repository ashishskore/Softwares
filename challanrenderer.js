const rendereripc = require("electron").ipcRenderer;
const printButton = document.getElementById('print-pdf');
printButton.addEventListener('click',event => {
    printButton.style.display = "none";
    rendereripc.send('print-to-pdf');
})
rendereripc.on('write-pdf',event =>{
    document.getElementById('welcome').innerHTML = 'Welcome Ashish';
})