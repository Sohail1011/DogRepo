/* eslint-disable react/prop-types */

import '../style/Dog.css';

export const Dog = ({ pupies }) => {
    return (
        <section className="card">
            <div className="information">
                <h2>{pupies.name}</h2>
                <h3>{pupies.telefono}</h3>
                <address>{pupies.pais}</address>
                <p>{pupies.descripcion}</p>
            </div>
            <div className="profile">
                <img src={pupies.img} alt={pupies.name} />
            </div>
        </section>
    )
}
