import { NavLink } from "react-router-dom";

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <NavLink className="navbar-brand" to="/home">Gadwelooh</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="courses">Courses</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="schedules">Schedules</NavLink>
                        </li>
                        {/* <li className="nav-item">
                        <NavLink className="nav-link" to="#">Pricing</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link disabled" to="#" tabIndex={-1} aria-disabled="true">Disabled</NavLink>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
