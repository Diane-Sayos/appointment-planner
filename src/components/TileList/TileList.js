import Tile from "../Tile/Tile.js";


const TileList = ({ tiles }) => {
    return (
        <section className="tilelist">
            {tiles.map((tile, index) => {
                const {name, ...description } = tile;
                return <Tile key={index} name={name} description={description} />
            })}
        </section>
    )
};

export default TileList;