import ld from "../images/loader.jpg";
import "../css/Loader.css";
function Loader()
{
    return(
        <>
        <div className="load">
            <img src={ld} alt="this"/>
        </div>
        </>
    )
}
export default Loader;