import axios from "axios";

const baseUrl = "http://localhost:5000/api/"

// eslint-disable-next-line
export default {

    dRegjistrim(url = baseUrl + 'dregjistrims/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    }
}