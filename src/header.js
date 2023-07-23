import { Link } from "react-router-dom";
export default function Header(){

    return(
        <div className="header">
            <div className="header-name">
            <Link to='/' style={{color: 'white',fontSize:'20px',textDecoration: 'none'}}>NETWORK CODE</Link>
            </div>
            <div className="header-icon">
                <Link to='/about' style={{color: 'white',fontSize:'25px'}}><i className="fa fa-ellipsis-v"></i></Link>
            </div>
        </div>
    );
}