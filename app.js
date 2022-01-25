
const form = document.querySelector('form');
// const retrieve = document.querySelector('#button');


// const retrieveData = () => {
// let inputItem = document.getElementById('retrieve').value;
// let printOut = window.localStorage.getItem(inputItem);
// let para = document.createElement('paragraph');
// let details = document.createTextNode(printOut);
// para.appendChild(details);
// let event = document.getElementById('knew');
// event.appendChild(para)
// }


const dataInfo = () => {
    let firstName = document.getElementById('first_name').value;
    let lastName = document.getElementById('last_name').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let phoneNumber = document.getElementById('phone_number').value;
    let password = document.getElementById('password').value;


    const userInfo = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        address: address,
        phoneNumber: phoneNumber,
    }

    window.localStorage.setItem(password,JSON.stringify(userInfo));

    JSON.parse(window.localStorage.getItem(userInfo));

}


// retrieve.addEventListener('submit', e => {
//     e.preventDefault();
//     console.log('kjfhdg')
//     retrieveData();
//     retrieve.reset();
// });

form.addEventListener('submit', e => {
    e.preventDefault();
    dataInfo();
    form.reset();
});




