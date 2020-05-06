import Axios from "axios";
import {setHeader} from '../index'

// "http://localhost:4444/api/users/upload-csv"

export default { 
  upload: (data)=> {
    let config={
      method:"POST",
      baseURL:"http://localhost:4444/api/users/upload-csv",
      headers : setHeader(),
      data
    }
    return Axios(config).then(res=>console.log(res))
  }
}