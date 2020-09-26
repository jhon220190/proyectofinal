import axios from 'axios'

const URL = "https://5f6a8d03d808b90016bc12c0.mockapi.io/materiales"

const traerMateriales = async () => {
    try {
        let {data} = await axios.get(URL);
        return data;
    } catch (error) {
        return error
    }
}

const crearMateriales = async (objMaterial) => {

    try {
        let cabecera = {
            'Content-type':'application/json'
        }
        let datos = await axios.post(URL, objMaterial, cabecera)
        return datos;
    } catch (error) {
        return error
    }
}

export {traerMateriales, crearMateriales}