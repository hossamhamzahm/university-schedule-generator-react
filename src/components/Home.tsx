import { NavLink } from "react-router-dom";

export default function Home(){
    return <>
        <div className=" text-center mt-0">
            <h1 className="display-4 text-center mb-5">
                <code>&#60;</code> Welcome <code>To</code> Gadwelooh <code>/&#62;</code>
            </h1>
            
            <div className="card-body mt-5">
                <p className="card-text fs-5 mb-4">Go to <code>/courses</code> and select your desired courses to schedule generation.</p>
                <NavLink to="/courses" className="btn btn-lg btn-outline-primary">Start Adding Courses</NavLink>
            </div>
        </div>
    </>
}