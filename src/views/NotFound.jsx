import { Link } from "react-router-dom"


export const NotFound = () => {

    return (
        <div className="fondo-not-found">
            <div className="centrado-found">
                <img src="/src/images/ramadan-fasting.png" alt="" />
                <h1>404 Not Found</h1>
                <Link className="btn" to={"/recetas"}>Voler</Link>
            </div>
        </div>
    )
}
