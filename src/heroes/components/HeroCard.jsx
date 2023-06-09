import { Link } from "react-router-dom"

   /* const CharactersByHero = ({alter_ego, characters}) => {
        if(alter_ego === characters) return(null);
        return <p>{characters}</p>
    } */

export const HeroCard = ({
    id, 
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    const heroImageUrl = `/heroes/${ id }.jpg`;
        //const charactersByHero = (<p>{characters}</p>)
    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">

                    <div className="col-4">
                        <img src={heroImageUrl} className="card-img" alt={superhero} />
                    </div>

                    <div className="col-8 ">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">Alter Ego: {alter_ego}</p>
                            {/* {(alter _ego !== characters) && charactersByHero*/}
                            {/* <CharactersByHero characters={characters} alter_ego={alter-ego}*/}
                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>
                            <Link to={`/hero/${id}`} className="text-muted">
                                <small>More info...</small> 
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
