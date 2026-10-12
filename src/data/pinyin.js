// guardar todo js dentro de una variable usando 
// fetch await, url

const URL_HSK = "https://raw.githubusercontent.com/LiudmilaLV/json_hsk/master/hsk.json"

// aqui se guarda la copia en memoria
let palabras = null; 

// funcion asincrona de cargarPalabras, no recibe nada 
async function cargarPalabras(){
    // si ya existe valor en la variable de palabras, regresa ese valor, no vuelva a pedir el fecth 
    if(palabras) return palabras

    // si no, has la peticion en una variable res 
    // usa await fectch a la varible que contiene la url 
    const res = await fetch(URL_HSK)

    // asigna la respuesta json a la variable palabras  
    palabras = await res.json()

    return palabras
} 
export default cargarPalabras;
