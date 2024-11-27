import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key:'990c08a3d46a46b39b15f4645c33219b'
    }
})