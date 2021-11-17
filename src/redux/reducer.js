import axios from "axios";


const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
        'x-rapidapi-key': 'e3d0eac2d9msh920c58fae4c038dp15cc1bjsnbd62726fd6fe'
    }
};

const GET_USER = "GET_USER";
const GET_VIDEO = "GET_VIDEO";
const GET_TRENDS = "GET_TRENDS"
const AC = {
    getUserByNick(nick) {
        return ({type: GET_USER, payload: nick})
    },
    getVideoByUrl(url) {
        return ({type: GET_VIDEO, payload: url})
    },
    getTrends(trends) {
        return ({type: GET_TRENDS, payload: trends})
    }
};

export const getUser = (nick) => {
    return (dispatch) => {
        axios.request(options).then(function (response) {
            console.log(response.data);
            dispatch(AC.getData(response.data))
        }).catch(function (error) {
            console.error(error);
        });
    }
}
export const getTrends = () => {
    return (dispatch) => {
        const opt = {...options, url:'https://tiktok33.p.rapidapi.com/trending/feed?limit=40'}
        axios.request(opt).then(function (res) {
            console.log(res.data);
            dispatch(AC.getTrends(res.data))
        }).catch(function (error) {
            console.error(error);
        });
    }
}
export const getTrands = () => {
    return (dispatch) => {

    }
}
let initState = {
    trendVideos:[],
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case GET_TRENDS:
            return ({...state, trendVideos: action.payload});
    }
    return state;
};
export default reducer;
