import PropTypes from "prop-types"

// props: 
// hanzi, level, pinyin, tanslation
function FilaPalabra({hanzi, level, pinyin, translations}){
    return(
        <tr>
            <td>{hanzi}</td>
            <td>{level}</td>
            <td>{pinyin}</td>
            <td>{translations.slice(0,2).join(', ')}</td>
        </tr>
    );
}

FilaPalabra.propTypes = {
    hanzi: PropTypes.string.isRequired,
    pinyin: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
    translations: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilaPalabra;
