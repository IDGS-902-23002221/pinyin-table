// guardar todo js dentro de una variable usando 
// fetch await, url

const URL_RICK = "https://rickandmortyapi.com/api/character"

const clave = "personajes-tabla:personajes:v1"

// aqui se guarda la copia en memoria
let personaje = null; 

function leerCache(){
    try{
        const datos = JSON.parse(localStorage.getItem(clave));

        return Array.isArray(datos) ? datos : null; 
    }catch{return null}
}
// funcion asincrona de cargarPalabras, no recibe nada 
async function cargarPersonajes(){
    // si ya existe valor en la variable de palabras, regresa ese valor, no vuelva a pedir el fecth 
    if(personaje) return personaje
    personaje = leerCache()
    if(personaje) return personaje
    // si no, has la peticion en una variable res 
    // usa await fectch a la varible que contiene la url 
    const res = await fetch(URL_RICK)

    // asigna la respuesta json a la variable palabras
    const data = await res.json()

    // la API devuelve { info, results }: nos interesa el array
    personaje = data.results
    try{ localStorage.setItem(clave, JSON.stringify(personaje))
    }catch{}

    return personaje
} 
export default cargarPersonajes;
