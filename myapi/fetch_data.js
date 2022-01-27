const axios = require('axios');

const getData = async () => {
    const data = await axios.get("https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=boolean");
    console.log(data)
}

getData();