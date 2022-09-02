

const sideMenu = document.querySelector('aside'); 
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#btn-close');
const themeToggler = document.querySelector('.theme-toggler');

//------------open menubar-------------------------------------
menuBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'block';
})

//---------------------------close menu bar------------------------------------------
closeBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'none';
})

//---------------------------themeToggler------------------------------------------



themeToggler.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})


//---------------------------fill orders in table------------------------------------------

//orders.forEach(order => {
    //const tr = document.createElement('tr');
    //const trContent ='
   
    //<td>${orders.production}</td>
    //<td>${orders.productionNumber}</td>
    //<td>${orders.paymentStatus}</td>
    //<td class="${orders.shipping === 'declined ? 'danger' : order.shipping === 'pendant' ? 'warning' : 'primary'}">${orders.shipping}</td>
    //<td class="primary">Details</td>
    //';

    //tr.innerText = trContent;
    //document.querySelector('table tbody').appendChild(tr);
//}) 