import Nav from "../nav";
import Assignment6 from "./a6";
import {Route, Routes} from "react-router";
import Assignment7 from "./a7";

function Labs() {
    return (
        <div>
            <label htmlFor="uname">Username</label><input id="uname" type="checkbox"/>
            <Nav/>
            <Routes>
                <Route index
                       element={<Assignment6/>}/>
                <Route path="a7"
                       element={<Assignment7/>}/>
            </Routes>
        </div>
    );
};

export default Labs;