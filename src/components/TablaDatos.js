import React, { Fragment, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { traerMateriales } from "../services/MaterialesServices";
import { OperacionContext} from '../context/OperacionContext'
import Loading from '../components/Loading'
import {Form, Button,input, NavDropdown,Jumbotron,Container} from 'react-bootstrap';

export default function TablaDatos() {

  const [Materiales, setMateriales] = useState([]);
  const [cargando, setCargando] = useState(true);

  const {operacion, operacionModificar} = useContext(OperacionContext);

  const materialesObtenidos = async () => {
    let data = await traerMateriales();
    setMateriales(data);
    setCargando(false)
  };

  useEffect(() => {
    materialesObtenidos();
  }, []);

  return (
    <Fragment>
      
      <Jumbotron fluid   >
  <Container>
    <h3>Lista De Productos Registrados</h3>
    <p>
      Se muestra la lista de Productos creados en el sistema
    </p>
  </Container>
</Jumbotron>




      <Link className="btn btn-primary" to="/crear" onClick={()=>{operacionModificar('Crear')}}>Crear Nuevo Elemento</Link>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>N°</th>
            <th>Nombre</th>
            <th>Categoria</th>
            <th>Subcategoria</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {Materiales.map(
            (
              {
                mater_nombre,
                mater_categoria,
                mater_subcategoria,
                mater_stock,
              },
              id
            ) => (
              <tr key={id}>
                <th>{id + 1}</th>
                <th>{mater_nombre}</th>
                <th>{mater_categoria}</th>
                <th>{mater_subcategoria}</th>
                <th>{mater_stock}</th>
                <th>
                  <Link className="btn btn-outline-info btn-sm" to="/modificar" onClick={()=>{operacionModificar('Modificar')}}>
                    <i className="fas fa-pen-alt" ></i>
                  </Link>
                  <button className="btn btn-outline-danger btn-sm ml-2" >
                    <i className="fas fa-trash" ></i>
                  </button>
                </th>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Fragment>
  );
}
