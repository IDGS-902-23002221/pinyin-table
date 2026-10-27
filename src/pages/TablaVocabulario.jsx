// imports 

import { useEffect, useState } from "react";
import cargarPersonajes from '../data/pinyin';
import FilaPersonaje from "./FilaPalabra";

import "../styles/tabla.css"


// funcion tabla 
function Tabla(){
    const [personajes, setPersonajes] = useState([]);


    useEffect(() => {
        cargarPersonajes().then(setPersonajes);
    }, []);

    return(
        <>
            <div className="tabla-contenedor">
                <table className="tabla">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Estado</th>
                            <th>Especie</th>
                            <th>Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {personajes.map((personaje) => (
                            <FilaPersonaje
                                key={personaje.id}
                                name={personaje.name}
                                status={personaje.status}
                                species={personaje.species}
                                image={personaje.image}
                            />
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    );
}
export default Tabla;
