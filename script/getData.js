export const getData = {
    url: 'database/dataBase.json',
    get(process) {
        fetch(this.url)
            .then((response) => response.json())
            .then((data) => console.log(data));
    }
};

getData.get(console.log);