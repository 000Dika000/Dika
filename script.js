// & Elementi presi da html

// & Cambio pagina
const itMyLifePage = document.querySelector('.page1It')
const itMyFuturePage = document.querySelector('.page2It')
const itSocialPage = document.querySelector('.page3It')

const enMyLifePage = document.querySelector('.page1En')
const enMyFuturePage = document.querySelector('.page2En')
const enSocialPage = document.querySelector('.page3En')


const pages = document.querySelectorAll('.page')


const homeButton = document.querySelector('.home-button')
const screenSection = document.querySelector('#screenIt')
const settingsButton = document.querySelector('.settings-button')

// & Cambio tema
const container = document.querySelector('.container')

const themeButtons = document.querySelectorAll('.icon-theme')

const itDarkTheme = document.querySelector('.dark-themeIt')
const itWhiteTheme = document.querySelector('.white-themeIt')

const enDarkTheme = document.querySelector('.dark-themeEn')
const enWhiteTheme = document.querySelector('.white-themeEn')
const body = document.querySelector('body')

const themeSwitch = document.getElementById('switch')
const images = document.querySelectorAll('.theme-image')


// & Cambia lingua
const itLenguageIt = document.querySelector('.itIta')
const itLenguageEn = document.querySelector('.itEng')

const enLenguageIt = document.querySelector('.enIta')
const enLenguageEn = document.querySelector('.enEng')

const lenguages = document.querySelectorAll('.lenguage')



// & Cambio pagina
function pageChanger(clickedElement) {
    // Rimuove la classe 'selected' da tutte le pagine
    for (const element of pages) {
        element.classList.remove('selected');
    }

    // Aggiunge la classe 'selected' solo all'elemento cliccato
    if (clickedElement != homeButton) {
        clickedElement.classList.add('selected');
    }

    if (clickedElement == itMyLifePage || clickedElement == enMyLifePage) {
        screenSection.className = 'myLife'
    }
    if (clickedElement == itMyFuturePage || clickedElement == enMyFuturePage) {
        screenSection.className = 'myFuture'
    }
    if (clickedElement == itSocialPage || clickedElement == enSocialPage) {
        screenSection.className = 'social'
    }
    if (clickedElement == homeButton) {
        screenSection.className = "home";
    }
    if (clickedElement == settingsButton) {
        screenSection.className = 'settings';
    }
}

// Aggiunge l'evento di click a ciascun elemento della lista 'pages'
for (const element of pages) {
    element.addEventListener('click', function () {
        // Chiama la funzione pageChanger passando l'elemento cliccato
        pageChanger(element);
    });
}


// & Cambio tema

for (const element of themeButtons) {
    element.addEventListener('click', function () {
        // chiama la funzione per cambiare lingua
        if (screenSection.id == 'screenIt') {
            itThemeChanger(element);
        }
        if (screenSection.id == 'screenEn') {
            enThemeChanger(element)
        }
    });
}

function itThemeChanger(element) {
    if (element == itDarkTheme) {
        container.classList.remove('light-theme')
        body.classList.remove('light-theme')

        enDarkTheme.classList.add('selected')
        element.classList.add('selected');

        enWhiteTheme.classList.remove('selected')
        itWhiteTheme.classList.remove('selected')

        changeImages("dark")
    }
    if (element == itWhiteTheme) {
        container.classList.add('light-theme')
        body.classList.add('light-theme')

        enWhiteTheme.classList.add('selected')
        element.classList.add('selected');

        enDarkTheme.classList.remove('selected')
        itDarkTheme.classList.remove('selected')

        changeImages("light")
    }

}
function enThemeChanger(element) {
    if (element == enDarkTheme) {
        container.classList.remove('light-theme')
        body.classList.remove('light-theme')

        itDarkTheme.classList.add('selected')
        element.classList.add('selected')

        itWhiteTheme.classList.remove('selected')
        enWhiteTheme.classList.remove('selected')

        changeImages("dark")
    }
    if (element == enWhiteTheme) {
        container.classList.add('light-theme')
        body.classList.add('light-theme')

        itWhiteTheme.classList.add('selected')
        element.classList.add('selected')

        itDarkTheme.classList.remove('selected')
        enDarkTheme.classList.remove('selected')

        changeImages("light")
    }
}
function changeImages(theme) {

    images.forEach((img) => {
        if (theme === "light") {
            img.src = img.src.replace("dark", "white"); // Cambia 'dark' in 'white'
        } else if (theme === "dark") {
            img.src = img.src.replace("white", "dark"); // Cambia 'white' in 'dark'
        }
    });
}



// & Cambio lingua

function itLenguageChanger(selectedLenguage) {
    // itLenguageIt.classList.add('selected');

    if (selectedLenguage == itLenguageIt) {
        screenSection.id = 'screenIt' // cambia id dello screen
    }
    if (selectedLenguage == itLenguageEn) {
        screenSection.id = 'screenEn'
    }
}
function enLenguageChanger(selectedLenguage) {
    // enLenguageEn.classList.add('selected');

    if (selectedLenguage == enLenguageIt) {
        screenSection.id = 'screenIt' // cambia id dello screen
    }
    if (selectedLenguage == enLenguageEn) {
        screenSection.id = 'screenEn'
    }
}

for (const element of lenguages) {
    element.addEventListener('click', function () {
        // chiama la funzione per cambiare lingua
        if (screenSection.id == 'screenIt') {
            itLenguageChanger(element);
        }
        if (screenSection.id == 'screenEn') {
            enLenguageChanger(element)
        }
    });
}




