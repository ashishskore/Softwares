const ipc = require("electron").ipcRenderer;

const loginButton = document.getElementById('login');
loginButton.addEventListener('click',event => {
    ipc.send('load-Delivery-challan');
})

