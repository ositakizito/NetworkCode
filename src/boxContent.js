import { Link } from "react-router-dom";
export default function BoxContent(){

    return(
       
        <div className="flex-container">
            <div className="container">
               <Link to="/reviewMTN" style={{textDecoration: 'none'}}>
               <div className="inner-box">
                    <>MTN</>
                </div>
               </Link>
            </div>
            <div className="container">
            <Link to="/reviewAirtel" style={{textDecoration: 'none'}}>
               <div className="inner-box">
                    <>AIRTEL</>
                </div>
               </Link>
            </div>
            <div className="container">
            <Link to="/reviewMobile" style={{textDecoration: 'none'}}>
               <div className="inner-box">
                    <>9 MOBILE</>
                </div>
               </Link>
            </div>
            <div className="container">
            <Link to="/reviewGlo" style={{textDecoration: 'none'}}>
               <div className="inner-box">
                    <>GLO</>
                </div>
               </Link>
            </div>
             
        </div>
    );
}