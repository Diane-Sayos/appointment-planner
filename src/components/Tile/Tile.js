
const Tile = ({ name, description }) => {
    return (
        <section className="tile-container">
            <p className="tile-title">{name}</p>
            {Object.values(description).map((value, index) => (
                <p key={index} className="tile">{value}</p>
            ))}
        </section>
    )
};

export default Tile;