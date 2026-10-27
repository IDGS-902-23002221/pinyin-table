import PropTypes from "prop-types"

// props: 
// hanzi, level, pinyin, tanslation
// name, status, species, gender
function FilaPersonaje({name, status, species, image}){
    return(
        <tr>
            <td>{name}</td>
            <td>{status}</td>
            <td>{species}</td>
            <td>{image}</td>
        </tr>
    );
}

FilaPersonaje.propTypes = {
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default FilaPersonaje;
