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

export const renderForm = (target) => {
    if (target === 'btn-add'){
        renderAddForm();
    } else if (target ==='btn-update') {
        renderUpdateForm();
    } else if  (target ==='btn-remove') {
        renderRemoveForm();
    }

}