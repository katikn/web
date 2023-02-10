import axios from "axios";

async function getData() {
    let result = await axios.get('http://localhost:3000/admin/get_padawans');
    return result;
}

export default getData;