import React, { Fragment, useRef, useState } from "react";

const Reservas = () => {

    const form = useRef();

    const [datos, setDatos] = useState({
        nombre:'',
        email:'',
        teléfono:'',
        opción:'',
        personas:'',
        día:'',
        hora:''
    });

    const handleChange = (event) => {
        setDatos({
            ...datos,  
            [event.target.name] : event.target.value
        });
    }

    const enviarDatos = (event) => {  
        event.preventDefault();
        console.log(datos)
        form.current.reset();
    }

    return (
        <div className="container-fluid-5">
            <h3 className="reservas-t">Reservas</h3>
            <Fragment>
                <div className="row">
                    <div className="col-md-12">
                        <div className="well well-sm">
                            <form className="form-horizontal" method="post" ref={form} onSubmit={enviarDatos}>

                                <div className="form-group">
                                    <span className="col-md-1 col-md-offset-2 text-center"></span>
                                    <div className="col-md-4">
                                        <input
                                            name="nombre" 
                                            onChange={handleChange}
                                            type="text"                                           
                                            placeholder="Nombre"
                                            className="form-control"
                                             />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <span className="col-md-1 col-md-offset-2 text-center"></span>
                                    <div className="col-md-4">
                                        <input                                       
                                            name="email"
                                            onChange={handleChange}
                                            type="text"                                            
                                            placeholder="E-mail"
                                            className="form-control" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <span className="col-md-1 col-md-offset-2 text-center"></span>
                                    <div className="col-md-4">
                                        <input
                                            name="teléfono"
                                            onChange={handleChange}                                            
                                            type="number"
                                            placeholder="Teléfono"
                                            className="form-control" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <span className="col-md-1 col-md-offset-2 text-center"></span>
                                    <div className="col-md-4">
                                        <select  
                                        name="opción"
                                        onChange={handleChange} 
                                        className="form-select" 
                                        aria-label="Default">
                                            <option defaultValue>Sucursal</option>
                                            <option value="1">La Plata, Avenida 7, esquina 60</option>
                                            <option value="2">La Plata, Avenida 7, esquina 40</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <span className="col-md-1 col-md-offset-2 text-center"></span>
                                    <div className="col-md-4">
                                        <input
                                            name="personas"
                                            onChange={handleChange}                                            
                                            type="number"
                                            placeholder="Número de personas"
                                            className="form-control" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <span className="col-md-1 col-md-offset-2 text-center"></span>
                                    <div className="col-md-4">
                                        <input
                                            name="día"
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="dd/mm/aaaa"
                                            className="form-control" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <span className="col-md-1 col-md-offset-2 text-center"></span>
                                    <div className="col-md-4">
                                        <input
                                            name="hora"
                                            onChange={handleChange}
                                            type="time"
                                            placeholder=""
                                            className="form-control" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-md-1 text-center">
                                        <button type="submit" className="btn btn-outline-light btn-reservas">Confirmar</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        </div>
    );
}

export default Reservas; 