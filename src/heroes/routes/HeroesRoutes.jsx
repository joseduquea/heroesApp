import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage,HomePage, MarvelPage, SearchPage, HeroPage, DragonBallPage} from "../page"

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className="container">
            <Routes>
                <Route path="home" element={<HomePage/>}/>
                <Route path="marvel" element={<MarvelPage/>}/>
                <Route path="dc" element={<DcPage/>}/>
                <Route path="dragonball" element={<DragonBallPage/>}/>

                <Route path="search" element={<SearchPage/>}/>
                <Route path="/hero/:id" element={<HeroPage/>}/>
                <Route path="/*" element={<Navigate to="/home"/>}/> 
                {/* Si no encuentra una ruta acorde a la web por defecto te redirecciona al home */}
            </Routes>
        </div>
        
    </>
  )
}
  