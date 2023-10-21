import { Dog } from "./Dog"

/* eslint-disable react/prop-types */
export const DogList = ({ pupies }) => {
    return (
        <article className="hugs">
            {
                pupies.map((pupie) => (
                    <Dog key={pupie.id} pupies={pupie} />
                ))
            }
        </article>
    )
}
