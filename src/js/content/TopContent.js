import React, { Fragment, useEffect, useState } from "react";
import { store } from "../../firebaseconf";

/* CLASS IMPORTS */
import {Product} from './classes/Product'
import {User} from './classes/User'

export const TopContent = () => {

  // CONSTANTES
  const [productoCliente, setProductoCliente] = useState([]);
  const [clientes, setClientes] = useState([]);


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

const consulta = async(id, prueba) => {
	
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
						consulta(item.data().userOwner.id, prueba.docs)

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
              {/* <div className="description wow fadeInLeft">
			                		<p>
			                			A template with Sidebar Menu made with the Bootstrap 4 framework. Download the template or learn how to create it, step by step, on 
			                			<a href="https://azmind.com"><strong>AZMIND</strong></a>.
			                		</p>
			                	</div> */}
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
								<th scope="row">{console.log(elemento.nuevoProducto.userOwner)}</th>
							  <td><a href={elemento.nuevoProducto.docLink} target="_blank">{elemento.nuevoProducto.name}</a></td>
							  <td>{elemento.nuevoProducto.type}</td>
							  <td>Q{elemento.nuevoProducto.total}</td>
                <td></td>
							</tr>
                ))
							))
					}

						{/* <tr>
						  <th scope="row">Carlos V.</th>
						  <td>Informe Final</td>
						  <td>Empastado</td>
						  <td>Q52.00</td>
						</tr>
						<tr>
						  <th scope="row">Danilo J.</th>
						  <td>Proyecto de Investigación</td>
						  <td>Impresion simple</td>
						  <td>Q10.00</td>
						</tr>
						<tr>
						  <th scope="row">Devin S.</th>
						  <td>Exámenes de Segunda Unidad</td>
						  <td>Impresión simple</td>
						  <td>Q22.00</td>
						</tr>
						<tr>
						  <th scope="row">Sulma F.</th>
						  <td>Laboratorios</td>
						  <td>Impresión simple</td>
						  <td>Q20.00</td>
						</tr> */}
                    </tbody>
                  </table>
                ) : (
                  <span className="text-white">
                    <strong>No hay pedidos!</strong>
                  </span>
                )}
              </div>

			  <>
              {/*

								 
								<div className="container bg-dark mt-3 mb-4">
									<div className="row overflow-scroll">
										<div className="col">
											<strong>Cliente</strong>
										</div>
										<div className="col">
											<strong>Nombre</strong>
										</div>
										<div className="col">
											<strong>Tipo</strong>
										</div>
										<div className="col">
											<strong>Total</strong>
										</div>
									</div>

									<ul>
									{
									users ?
									(
										users.map( (item) => (
											<div className="row  overflow-auto">
													<div className="col container mt-1 overflow-hidden">
														<li>{item.name.stringValue}</li>
													</div>
													<hr/>
													<div className="col container mt-1 overflow-hidden">
														{/* {item.name.stringValue} *
													</div>
													<div className="col container mt-1 overflow-hidden">
														{/* {item.type.stringValue} *
													</div>
													<div className="col container mt-1 overflow-hidden">
														{/* {item.total.doubleValue} *
													</div>

													

												</div>
										)
										)
									)
									:
									(<span><strong>No se encontraron datos.</strong></span>)
								}
									</ul>
								</div>
								
								*/}
								</>
              
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
