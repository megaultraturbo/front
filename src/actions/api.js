import axios from "axios";

const baseUrl = "https://localhost:7025/api/v2.0/";
const getAll = "https://localhost:7025/api/v2.0/book/GetAllBooks";


/* export default {
    Book(url=baseUrl + 'book/'){
        return{
            fetchAll : () => axios.get(getAll),
            fetchById :id => axios.get(url+id),
            create :newRecord => axios.post(url, newRecord),
            // hindus ma put zamiast patch
            update :(id, updateRecord) => axios.patch(url+'edit/'+id,updateRecord),
            delete :id => axios.delete(url+'delete/'+id)
        }
    }
}; */
export default {

    Book(get = getAll){
        return{
            fetchAll : () => axios.get(get)
            //fetchById :id => axios.get(url+id),
            //create :newRecord => axios.post(url, newRecord),
            // hindus ma put zamiast patch
            //update :(id, updateRecord) => axios.patch(url+'edit/'+id,updateRecord),
            //delete :id => axios.delete(url+'delete/'+id)
        }
    }
};