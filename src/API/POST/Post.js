import Axios from 'axios'

export const postFunction = async(values) => {
    console.log(values)

    const submit = await Axios.post('http://localhost:5001/api/foods', values)
}

