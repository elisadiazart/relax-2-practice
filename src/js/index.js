// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { THEMES } from './constants';

const selectElement= document.getElementById('themes')
const listElement = document.getElementById('list-container')

const printList = (selectedOption)=> {
    listElement.innerHTML= ''
    if(selectedOption === 'default') return
    const fragment = document.createDocumentFragment()
    THEMES[selectedOption].forEach(element => {
        const newLi = document.createElement('li')
        newLi.textContent= element
        fragment.append(newLi)
    });
    listElement.append(fragment)
}

selectElement.addEventListener('change', e => {
    printList(e.target.value)
})


