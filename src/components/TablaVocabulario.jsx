// imports 

import { useEffect, useState } from "react";
import cargarPalabras from "../data/pinyin";
import FilaPalabra from "./FilaPalabra";

import "../styles/tabla.css"


// funcion tabla 
function Tabla(){
    const [palabras, setPalabras] = useState([]);
    const [nivel, setNivel] = useState(1);
    const [busqueda, setBusqueda] = useState('');

    useEffect(() => {
        cargarPalabras().then(setPalabras);
    }, []);

    const visibles = palabras
    .filter(p => p.level === nivel)
    .filter(p => {
        const texto = busqueda.toLowerCase();
        return(
            p.hanzi.includes(texto) ||
            p.pinyin.toLowerCase().includes(texto) ||
            p.translations.eng.join(" ").toLowerCase().includes(texto)
        );
    })
    .slice(0,20); 

    return(
        <>
            <select value={nivel} onChange={e => setNivel(Number(e.target.value))}>
                {[1,2,3,4,5,6].map(n => (
                    <option key={n} value={n}>HSK {n}</option>
                ))}
            </select>

            <input
                placeholder="Buscar hanzi, pinyin o traduccion"
                value={busqueda}
                onChange={e => setBusqueda(e.target.value)}
            />

            <div className="tabla-contenedor">
                <table className="tabla">
                    <thead>
                        <tr>
                            <th>Hanzi</th>
                            <th>Nivel</th>
                            <th>Pinyin</th>
                            <th>Traduccion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {visibles.map(p => (
                            <FilaPalabra
                                key={p.id}
                                hanzi={p.hanzi}
                                level={p.level}
                                pinyin={p.pinyin}
                                translations={p.translations.eng}
                            />
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    );
}
export default Tabla;