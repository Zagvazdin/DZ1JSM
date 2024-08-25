const musicCollection = {
    albums: [
        { title: "The Dark Side of the Moon", artist: "Pink Floyd", year: "1973" },
        { title: "Thriller", artist: "Michael Jackson", year: "1982" },
        { title: "Back in Black", artist: "AC/DC", year: "1980" },
    ],
    [Symbol.iterator]: function() {
        let index = 0;
        const albums = this.albums;

        return {
            next: () => {
                if (index < albums.length) {
                    return { value: albums[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};


for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
}

const chefs = new Map([
    ["Виктор", "Пицца"],
    ["Ольга", "Суши"],
    ["Дмитрий", "Десерты"],
]);


const dishes = new Map([
    ["Пицца 'Маргарита'", "Виктор"],
    ["Пицца 'Пепперони'", "Виктор"],
    ["Суши 'Филадельфия'", "Ольга"],
    ["Суши 'Калифорния'", "Ольга"],
    ["Тирамису", "Дмитрий"],
    ["Чизкейк", "Дмитрий"],
]);


const orders = new Map();


function addOrder(client, dish) {
    if (!orders.has(client)) {
        orders.set(client, []);
    }
    orders.get(client).push(dish);
}


addOrder("Алексей", "Пицца 'Пепперони'");
addOrder("Алексей", "Тирамису");
addOrder("Мария", "Суши 'Калифорния'");
addOrder("Мария", "Пицца 'Маргарита'");
addOrder("Ирина", "Чизкейк");


for (const [client, dishes] of orders) {
    console.log(`${client} заказал: ${dishes.join(", ")}`);
}
