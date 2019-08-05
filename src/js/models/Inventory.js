export default class Inventory {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
        this.persistData();
    }

    removeItem(id=-1,name=-1) {
        if (id !== -1) {
            this.items = this.items.filter(ele => ele.id !== id);
        } else if (name !== -1) {
            this.items = this.items.filter(ele => ele.name !== name);
        }
        this.persistData();
    }

    updateItem(qty,id=-1, name=-1) {
        if (id !== -1) {
            const item = this.items.find(el => el.id === id);
            item.qty = qty;
        } else if (name !== -1) {
            const item = this.items.find(el => el.name === name);
            item.qty = qty;
        }
        this.persistData();
    }

    persistData() {
        localStorage.setItem('items',JSON.stringify(this.items));
    }

    readStorage() {
        const storage = JSON.parse(localStorage.getItem('items'));
        if (storage) {
            this.items = storage;
        } else {
            this.items = [];
        }
    }
}