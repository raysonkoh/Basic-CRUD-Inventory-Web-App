class Item {
    constructor(id,name,qty,type) {
        this.id = id;
        this.name = name;
        this.qty = qty;
        this.type = type;
    }
}

class Inventory {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItem(id=-1,name=-1) {
        if (id !== -1) {
            this.items = this.items.filter(ele => ele.id !== id);
        } else if (name !== -1) {
            this.items = this.items.filter(ele => ele.name !== name);
        }
    }

    updateItem(qty,id=-1, name=-1) {
        if (id !== -1) {
            const item = this.items.find(el => el.id === id);
            item.qty = qty;
        } else if (name !== -1) {
            const item = this.items.find(el => el.name === name);
            item.qty = qty;
        }
    }
}


const renderAddForm = () => {
    document.querySelector('.form').innerHTML = '';
    document.querySelector('.row').innerHTML = '';

    const markup = `
        <input type="text" id="name" placeholder="Name of Product" class="input-name">
        <input type="number" id="qty" placeholder="Quantity of Product" class="input-qty">
        <select class="input-type">
            <option value="laptop">Laptop</option>
            <option value="desktop">Desktop</option>
            <option value="mobile">Mobile</option>
            <option value="tablet">Tablet</option>
        </select>
        <button type="button" class="submit">Submit</button>
    `
    document.querySelector('.form').insertAdjacentHTML('afterbegin',markup);
}

const renderUpdateForm = () => {
    document.querySelector('.form').innerHTML = '';
    document.querySelector('.row').innerHTML = '';

    const markup = `
        <input type="text" id="name" placeholder="Name or ID of Product" class="input-name">
        <input type="number" id="qty" placeholder="Quantity of Product" class="input-qty">
        <select class="input-type">
            <option value="id">ID</option>
            <option value="name">Name</option>
        </select>
        <button type="button" class="submit">Submit</button>
    `
    document.querySelector('.form').insertAdjacentHTML('afterbegin',markup);
}

const renderRemoveForm = () => {
    document.querySelector('.form').innerHTML = '';
    document.querySelector('.row').innerHTML = '';

    const markup = `
        <input type="text" id="name" placeholder="Name or ID of Product" class="input-name">
        <select class="input-type">
            <option value="id">ID</option>
            <option value="name">Name</option>
        </select>
        <button type="button" class="submit">Submit</button>
    `
    document.querySelector('.form').insertAdjacentHTML('afterbegin',markup);
}

const renderForm = (target) => {
    if (target === 'btn-add'){
        renderAddForm();
    } else if (target ==='btn-update') {
        renderUpdateForm();
    } else if  (target ==='btn-remove') {
        renderRemoveForm();
    }

}

const submitAddController = () => {
    const name = document.querySelector('.input-name').value;
    id += 1;
    const qty = parseInt(document.querySelector('.input-qty').value);
    const type = document.querySelector('.input-type').value;
    inventory.addItem(new Item(id,name,qty,type));
    // document.querySelector('.form').innerHTML = '';

}

const submitUpdateController = () => {
    const val = document.querySelector('.input-name').value;
    const selector = document.querySelector('.input-type').value;
    const qty = parseInt(document.querySelector('.input-qty').value);
    console.log(val,selector,qty);
    if (selector === 'id') {
        inventory.updateItem(qty,parseInt(val));
    } else if (selector ==='name') {
        inventory.updateItem(qty,-1,val);
    }
    // document.querySelector('.form').innerHTML = '';

}


const submitRemoveController = () => {
    const val = document.querySelector('.input-name').value;
    const selector = document.querySelector('.input-type').value;
    if (selector === 'id') {
        inventory.removeItem(parseInt(val));
    } else if (selector ==='name') {
        inventory.removeItem(-1,val);
    }
    // document.querySelector('.form').innerHTML = '';

}

const renderRow = (item,index) => {
    console.log('renderrow');
    if (index === 0) {
        const init_markup = `
        <section class="row-id">ID</section>
        <section class="row-name">NAME</section>
        <section class="row-qty">QUANTITY</section>
        <section class="row-type">TYPE</section>
        `
        document.querySelector('.row').insertAdjacentHTML('beforeend',init_markup);
        document.querySelector('.row').classList.add('.highlight');
    }
    const markup_id = `<section>${item.id}</section>`;
    document.querySelector('.row-id').insertAdjacentHTML('beforeend',markup_id);

    const markup_name = `<section>${item.name}</section>`;
    document.querySelector('.row-name').insertAdjacentHTML('beforeend',markup_name);

    const markup_qty = `<section>${item.qty}</section>`;
    document.querySelector('.row-qty').insertAdjacentHTML('beforeend',markup_qty);

    const markup_type = `<section>${item.type}</section>`;
    document.querySelector('.row-type').insertAdjacentHTML('beforeend',markup_type);

}

const renderRows = () => {
    console.log('renderrows');
    document.querySelector('.row').innerHTML = '';
    document.querySelector('.form').innerHTML = '';
    if (inventory.items.length === 0){
        console.log('empty inventory');
    }
    inventory.items.forEach(renderRow);
}

let id = 0;
const inventory = new Inventory();
// const init = () => {
//     let id = 0;
//     const inventory = new Inventory();
// }
// init();


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

document.querySelector('.btn-1').addEventListener('click', renderRows);