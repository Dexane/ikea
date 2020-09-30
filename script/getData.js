export const getGoods = {
    url: 'database/dataBase.json',
    get(process) {
        fetch(this.url)
    }
};

getGoods.get(console.log);