export const renderRow = (item,index) => {
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