import axios from 'axios'
const query = 'http://hn.algolia.com/api/v1/search_by_date?query=nodejs'

class Algolia {
    all ( ) {
        return new Promise( (resolve,reject)  => {
            axios.get(query).then((response) => {
                resolve(response.data)
            }).catch((error) => {
                reject(error);
            });
        })
    }
}

export default new Algolia();