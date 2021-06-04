import React, { Fragment, useEffect, useState } from "react";
import { store } from "../../firebaseconf";

/* CLASS IMPORTS */
import {Product} from './classes/Product'
import {User} from './classes/User'

export const TopContent = () => {

  // CONSTANTES
  const [productoCliente, setProductoCliente] = useState([]);
  const [clientes, setClientes] = useState([]);

  //funciones 
  const actualizarState = async(id) => {
  //let { docs } = await store.collection
  console.log(id)
  }

useEffect(() => {
  
  const obtenerCliente = async() => {
    let { docs } = await store.collection('users').get()
    setClientes([

      docs.map(item => ({
        nuevoCliente: new User(
          item.data().email,
          item.data().myOrders,
          item.data().name,
          item.data().photoURL,
          item.data().uid
        )
      }))

    ])
  }


  obtenerCliente()

function consulta(id, prueba){
	
	let nombre = ""
	prueba.map(item => {
		if(id === item.data().uid){
			 nombre = item.data().name
		}

	})
	return nombre
}

	const obtenerProducto = async() => {
		let { docs } = await store.collection('documents').where("status", "!=", "completado").get();
    let prueba = await store.collection('users').get()
    // console.log(docs[0].id)
    // console.log(prueba.docs[0].data())
    let auxNombre;

    //console.log(item.data().userOwner.id)

      for (let j = 0; j < prueba.docs.length; j++) {
        // console.log(prueba.docs[j].id)
        // console.log(prueba.docs[j].data().name)
      }

		setProductoCliente([  

			docs.map((item) => ({
					nuevoProducto: new Product(
						item.data().color,
						item.data().document,
						item.data().name,
						item.data().status,
						item.data().total,
						item.data().type,
						consulta(item.data().userOwner.id, prueba.docs),
            item.id

					)
				}
				))
		])
	}

  

	obtenerProducto()
  
	}, [])


  return (
    <Fragment>
      {/* <!-- Top content --> */}
      <div
        className="top-content section-container overflow-hidden"
        id="top-content"
      >
        <div className="container">
          <div className="row">
            <div className="col col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <h1 className="wow fadeIn">
                Ordenes - <strong>CopyCenter Evelyn</strong>
              </h1>
              <div className="table-wrapper-scroll-y my-custom-scrollbar">

                {
				productoCliente  ? (
                  <table className="table table-bordered table-striped table-dark mb-0">
                    <thead>
                      <tr>
                        <th scope="col">Cliente</th>
                        <th scope="col">Documento</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Total</th>
                        <th scope="col">Actualizar Estado</th>
                      </tr>
                    </thead>
                    <tbody>

					{
						productoCliente.map( item => (
                item.map(elemento => (
                  <tr>
								<th scope="row">{elemento.nuevoProducto.dataxd}</th>
							  <td><a href={elemento.nuevoProducto.docLink} target="_blank">{elemento.nuevoProducto.name}</a></td>
							  <td>{elemento.nuevoProducto.type}</td>
							  <td>Q{elemento.nuevoProducto.total}</td>
                <td><a href="##" className="btn btn-info">hey</a></td>
							</tr>
                ))
							))
					}
                    </tbody>
                  </table>
                ) : (
                  <span className="text-white">
                    <strong>No hay pedidos!</strong>
                  </span>
                )}
              </div>

			  <div className="buttons wow fadeInUp mt-4">
                <a
                  className="btn btn-primary btn-customized scroll-link"
                  href="#section-1"
                  role="button"
                >
                  <i className="fas fa-boxes"></i> Inventario
                </a>
                <a
                  className="btn btn-primary btn-customized-2 scroll-link"
                  href="#section-3"
                  role="button"
                >
                  <i className="fas fa-pencil-alt"></i> Agregar en Inventario
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
