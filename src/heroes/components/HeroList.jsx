import { useMemo } from "react"
import { getHeroesByPublisher } from "../helpers"
import { HeroCard } from "./HeroCard"


export const HeroList = ({publisher}) => {

    const heroesPublisher = useMemo (() => getHeroesByPublisher(publisher), [publisher])

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroesPublisher.map(hero => (
                <HeroCard 
                    key={hero.id}
                    {...hero}
                />
            ))
            }
        </div>
    )
}
