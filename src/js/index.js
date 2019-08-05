import Inventory from './models/Inventory';
import Item from './models/Item';
import {renderForm} from './views/renderForms';
import {renderRow} from './views/renderRow';

const state = {};

const submitAddController = () => {
    console.log(state);
    const name = document.querySelector('.input-name').value;
    state.id += 1;
    const qty = parseInt(document.querySelector('.input-qty').value);
    const type = document.querySelector('.input-type').value;
    state.inventory.addItem(new Item(state.id,name,qty,type));
    // document.querySelector('.form').innerHTML = '';

}

const submitUpdateController = () => {
    const val = document.querySelector('.input-name').value;
    const selector = document.querySelector('.input-type').value;
    const qty = parseInt(document.querySelector('.input-qty').value);
    if (selector === 'id') {
        state.inventory.updateItem(qty,parseInt(val));
    } else if (selector ==='name') {
        state.inventory.updateItem(qty,-1,val);
    }
    // document.querySelector('.form').innerHTML = '';

}


const submitRemoveController = () => {
    const val = document.querySelector('.input-name').value;
    const selector = document.querySelector('.input-type').value;
    if (selector === 'id') {
        state.inventory.removeItem(parseInt(val));
    } else if (selector ==='name') {
        state.inventory.removeItem(-1,val);
    }
    // document.querySelector('.form').innerHTML = '';

}

window.addEventListener('load', () => {
    state.inventory = new Inventory();
    state.inventory.readStorage();
    if (state.inventory.items.length > 0) {
        state.id = Math.max(...state.inventory.items.map(ele => ele.id));
    } else {
        state.id = 0;
    }
})



document.querySelector(".btn").addEventListener('click',e => {
    var target = e.target.classList.value;
    renderForm(target);

    if (target ==='btn-add') {
        document.querySelector('.submit').addEventListener('click', submitAddController);
    } else if (target ==='btn-update') {
        document.querySelector('.submit').addEventListener('click', submitUpdateController);
    } else if (target ==='btn-remove') {
        document.querySelector('.submit').addEventListener('click', submitRemoveController);
    }
})

document.querySelector('.get').addEventListener('click', () => {
    document.querySelector('.row').innerHTML = '';
    document.querySelector('.form').innerHTML = '';
    if (state.inventory.items.length > 0){
        state.inventory.items.forEach(renderRow);

    } else {
        alert('empty inventory');

    }

});

document.querySelector('.clear').addEventListener('click',() => {
    localStorage.clear();
    state.inventory.readStorage();
    state.id = 0;
})