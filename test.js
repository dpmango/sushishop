var axios = require('axios')

axios.get('http://sushi.endy.pro/api/banners').then(function (data) {
    console.log(data.data)
})