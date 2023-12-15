import Tile from "../Tile/Tile.js";


const TileList = ({ contacts }) => {
    return (
        <section className="tilelist">
            {contacts.map((contact, index) => {
                const {name, ...description } = contact;
                return <Tile key={index} name={name} description={description} />
            })}
        </section>
    )
};

export default TileList;