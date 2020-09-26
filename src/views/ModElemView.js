import React, { Fragment } from 'react'
import MaterForm from '../components/MaterForm'
import {crearMateriales} from '../services/MaterialesServices'

export default function ModElemView() {

    const createMater = async (objMater) => {
        let creacion = await crearMateriales(objMater);
    }

    return (
        <Fragment>
            <MaterForm createMater={createMater}/>
        </Fragment>
    )
}
