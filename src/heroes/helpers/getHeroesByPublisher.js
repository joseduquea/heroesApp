import { heroes } from "../data/heroesData";


export const getHeroesByPublisher = (publisher) => {
  
    const validPublisher = ['DC Comics', 'Marvel Comics', 'Shueisha'];
    if(!validPublisher.includes(publisher)) {
        throw new Error(`${publisher} dont Exist!`)
    }
    return heroes.filter(heroes => heroes.publisher === publisher)
}
