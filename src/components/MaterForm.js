import React, { Fragment, useContext, useState } from "react";
import "./css/MaterForm.css";
import { OperacionContext } from "../context/OperacionContext";
import Swal from 'sweetalert2'

export default function MaterForm({createMater}) {
  const { operacion } = useContext(OperacionContext);
  const typeOperation = operacion;

  const [value, setValue] = useState({
    mater_nombre: "",
    mater_categoria: "",
    mater_subcategoria: "",
    mater_descripcion: "",
    mater_stock: 0,
  });

  const actualizarInput = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const manejarSubmit = (e) => {
    e.preventDefault();
    createMater(value);

    Swal.fire({
      icon: "success",
      title: "Producto creado correctamente",
      showConfirmButton: false,
      timer: 2000
  })
  };

  return (
    <div className="mt-3 d-flex justify-content-center">
      <div className="col-sm-6 ">
        <h1 className="d-flex justify-content-center">{`${typeOperation} Elemento`}</h1>
        <form className="mt-4 ">
          <div className="form-group row">
            <label className="col-sm-3">Nombre</label>
            <input
              type="text"
              className="form-control col-sm-8"
              id="mater_nombre"
              name="mater_nombre"
              value={value.mater_nombre}
              onChange={(e) => {
                actualizarInput(e);
              }}
            ></input>
          </div>
          <div className="form-group row">
            <label className="col-sm-3">Categoria</label>
            <input
              type="text"
              className="form-control col-sm-8"
              id="mater_categoria"
              name="mater_categoria"
              value={value.mater_categoria}
              onChange={(e) => {
                actualizarInput(e);
              }}
            ></input>
          </div>
          <div className="form-group row">
            <label className="col-sm-3">Subcategoria</label>
            <input
              type="text"
              className="form-control col-sm-8"
              id="mater_subcategoria"
              name="mater_subcategoria"
              value={value.mater_subcategoria}
              onChange={(e) => {
                actualizarInput(e);
              }}
            ></input>
          </div>
          <div className="form-group row">
            <label className="col-sm-3">Descripción</label>
            <input
              type="text"
              className="form-control col-sm-8"
              id="mater_descripcion"
              name="mater_descripcion"
              value={value.mater_descripcion}
              onChange={(e) => {
                actualizarInput(e);
              }}
            ></input>
          </div>
          {typeOperation === "Crear" ? (
            <div className="form-group row">
              <label className="col-sm-3">Stock</label>
              <input
                type="number"
                className="form-control col-sm-8"
                id="mater_stock"
                name="mater_stock"
                value={value.mater_stock}
                onChange={(e) => {
                  actualizarInput(e);
                }}
              ></input>
            </div>
          ) : (
            <Fragment></Fragment>
          )}
          <div className="d-flex justify-content-center">
            <button type="submit button" className="btn btn-primary mr-3 " onClick={(e) => {manejarSubmit(e)}}>
              {typeOperation}
            </button>
            <button type="button" className="btn btn-danger ml-3">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
