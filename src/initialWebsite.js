import './styles.css';
import { loadHome, activeTab, loadContact, loadMenu } from './loadTabs'

function createHeader() {
    const title = document.createElement('div');
    const container = document.createElement('div');
    const title1 = document.createElement('h1');
    const title2 = document.createElement('h5');
    const img = document.createElement('img');
    
    title.setAttribute('class', 'title')
    
    img.src = '../src/img/3starandthesun.png'
    title1.textContent = 'Kabayan';
    title2.textContent = 'FOODS';

    container.append(img, title1, title2)
    title.append(container)

    const nav = document.createElement('nav');
    const home = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');


    home.addEventListener('click', function() {
        activeTab(this);
        loadHome();
    });
    menu.addEventListener('click', function() {
        activeTab(this);
        loadMenu();
    });
    contact.addEventListener('click', function() {
        activeTab(this);
        loadContact();
    });

    nav.setAttribute('class', 'tabs')

    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';

    nav.append(home, menu, contact)

    const header = document.createElement('header');
    header.append(title, nav)

    return header
}   

function createFooter() {
    const footer = document.createElement('footer');
    const copyright = document.createElement('p');

    copyright.textContent = `Copyright © ${new Date().getFullYear()} basteOble`;

    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/basteOble";
  
    const githubIcon = document.createElement("i");
    githubIcon.classList.add('fab');
    githubIcon.classList.add('fa-github');

    githubLink.append(githubIcon);
    footer.append(copyright);
    footer.append(githubLink);

    return footer
}

function createMain() {
    const main = document.createElement('main');
    return main
}

function websiteBody() {
    const content = document.querySelector('#content');

    content.append(createHeader(), createMain(), createFooter())
    
    activeTab(document.querySelector('button'))
    loadHome();
}

export { websiteBody }