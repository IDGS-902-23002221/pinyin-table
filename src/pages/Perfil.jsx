import { useAuth } from "../auth/AuthContext";

export default function perfil(){
    const {usuario} = useAuth()

    return(
        <>
            <h1>Cuenta de {usuario}</h1>
            <h2> holis {usuario} este es tu perfil</h2>
        </>
    )
}