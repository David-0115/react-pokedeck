import '../component_css/Pokedex.css';
import Card from './Card';

const Pokedex = ({ pokemon }) => {

    return (
        <div className="Pokedex">
            <h1 className="Pokedex-title">Pokedex</h1>
            <div className="Pokedex-Card-container">
                {pokemon.map(p => <Card id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />)}
            </div>
        </div>
    )
}

export default Pokedex;
