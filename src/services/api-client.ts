import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'9c4287f8c0ef401eafaae541c5458dc0'
    }
})