import '../component_css/Card.css';

const Card = ({ id, name, type, base_experience }) => {
    return (
        <div className="Card">
            <span className="Card-name">{name}</span>
            <div>
                <img className="Card-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
            </div>
            <span className="Card-type">Type: {type}</span>
            <span className="Card-exp">EXP: {base_experience}</span>
        </div>
    )
}

export default Card;