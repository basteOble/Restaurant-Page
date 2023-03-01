import { home, foods, contact } from './data';
import './styles.css';

function activeTab(tab) {
    const tabs = document.querySelectorAll('button');

    tabs.forEach(tab => {
        if (tab !== this) {
            tab.classList.remove('activeTab');
        }
    })
    tab.classList.add('activeTab')
}

function clearMain() {
    const main = document.querySelector('main');
    main.className = '';
    main.innerHTML = '';
    return main
}

function loadHome() {
    const head = document.createElement('p');
    head.textContent = "Kain Tayo!";
    head.classList.add('homeHeader')

    const orderNow = document.createElement('button');
    orderNow.textContent = 'Order now'
    orderNow.classList.add('orderNow')

    orderNow.addEventListener('click', () => {
        activeTab(document.querySelectorAll('button')[1]);
        loadMenu();
    })

    const open = document.createElement('div');
    const timeImg = document.createElement('img');
    timeImg.src = '../src/img/clock.png'
    const hours = document.createElement('div');
    open.append(timeImg, hours)
    for (let times of home.time){
        const time = document.createElement('p');
        time.textContent = times;
        hours.append(time)
    }
    open.classList.add('homeInfo')

    const location = document.createElement('div')
    const pin = document.createElement('img');
    pin.src = '../src/img/pin.png';
    const address = document.createElement('p');
    address.textContent = home.location;
    location.append(pin, address)
    location.classList.add('homeInfo')

    timeImg.classList.add('icon');
    pin.classList.add('icon')

    clearMain().append(head, orderNow, open, location)
}

function loadMenu() {
    const main = clearMain();

    for (let food of foods) {
        const card = document.createElement('div');

        const foodName = document.createElement('p');
        foodName.textContent = food.name;

        const foodDesc = document.createElement('p');
        foodDesc.textContent = food.desc;

        const foodPrice = document.createElement('p');
        foodPrice.textContent = food.price;

        card.append(foodName, foodDesc, foodPrice)
        card.classList.add('card')

        main.append(card)
    }
   main.classList.add('menu');
}

function loadContact() {
    const phone = document.createElement('p');
    phone.textContent = `Phone: ${contact.phone}`;

    const email = document.createElement('p');
    email.textContent = `Email: ${contact.email}`;

    const messageUs = document.createElement('p');
    messageUs.textContent = 'Message us:';

    const div = document.createElement('div')

    const form = document.createElement('form')

    const nameLabel = document.createElement('label')
    nameLabel.textContent = 'Name:'

    const name = document.createElement('input');
    name.type = 'text';

    const emailLabel = document.createElement('label')
    emailLabel.textContent = 'Email:'

    const messageLabel = document.createElement('label')
    messageLabel.textContent = 'Message:'

    const formEmail = document.createElement('input');
    formEmail.type = 'email';

    const message = document.createElement('textarea');

    const submit = document.createElement('button');
    submit.textContent = 'Submit'
    submit.type = 'submit';

    form.append(nameLabel, name, emailLabel, formEmail, messageLabel, message, submit);

    div.append(form);

    const main = clearMain()
    main.append(phone, email, messageUs, div)
    main.classList.add('contact')
}

export { loadHome, loadMenu, loadContact, activeTab }