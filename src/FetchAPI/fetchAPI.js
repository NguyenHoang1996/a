export const GET = 'GET'
export const POST = 'POST'
export const IMAGE = 'POST'
const SERVER = 'http://103.252.1.5:'
const PORT = '8089/SocialPlaceServer/Action/'

const USER_AGENT = 'Mozilla/5.0'
const ACCEPT_LANGUAGE = 'en-US,en;q=0.5'
const ACCEPT = 'application/json,text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
const CONTENT_TYPE = 'application/json; charset=UTF-8'
const CONNECTION = 'keep-alive'

const HEADERS = {
    'User-Agent': USER_AGENT,
    'Accept': ACCEPT,
    'Accept-language': ACCEPT_LANGUAGE,
    'Connection': CONNECTION,
    'Content-Type': CONTENT_TYPE
}


export async function FetchAPI(id, JsonData, method) {
    var url = SERVER + PORT + id + '';
    console.log("url", url)
    // method GET
    if (method === GET) {
        return new Promise((resolve, reject) => {
            var response = window.fetch(url, {
                method: GET,
                headers: HEADERS,
                body: JsonData
            })

            response.then(res => {
                if (res.ok) {
                    res.json().then(resolve).catch(reject)
                } else {
                    reject(res)
                }
            })
                .catch(reject)
        })
    }

    //method POST
    if (method === POST) {
        //url += POST
        console.log("do post",url,JsonData);
        return new Promise((resolve, reject) => {
            let response = window.fetch(url, {
                method: POST,
                body: JsonData
            })
            console.log(response)
            response.then(res => {
                console.log(response)
                if (res.ok) {
                    console.log("Res.ok",res)
                    res.json().then(resolve).catch(reject)
                } else {
                    console.log("Res.fail")
                    reject(res)
                }
            })
                .catch(reject)
        })
    }

    //method POST IMAGE
    if (method === IMAGE) {
        //url += DELETE
        url = SERVER + '8089/SocialPlaceServer/' + id;
        return new Promise((resolve, reject) => {
            var response = window.fetch(url, {
                method: POST,
                body: JsonData
            })
            response.then(res => {
                if (res.ok) {
                    res.json().then(resolve).catch(reject)
                } else {
                    reject(res)
                }
            })
                .catch(reject)
        })
    }
}
