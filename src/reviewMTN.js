import Card from "./card";
import Header from "./header";
import { Link } from "react-router-dom";
export default function ReviewMtn(){

    return(
      <>
      <Header/>
          <div className="review">
          <Link to='/' style={{textDecoration: 'none',color:'#000'}}>
                <div style={{display:'flex', }}>
                <i className="fa fa-arrow-left" style={{padding:6}}></i>
                <p>MTN</p>
                </div>
             </Link>
           <Card>
             <div className="review-space">
                  <div className="both-names-num">
                      <div className="review-names">
                          <p> Account balance</p>
                      </div>
                      <div className="review-num">
                          <p>*310#</p>
                      </div>
                  </div>
  
             </div>
           </Card>
           
           <Card>
             <div className="review-space">
                  <div className="both-names-num">
                      <div className="review-names">
                          <p> Data Plan</p>
                      </div>
                      <div className="review-num">
                          <p>*312#</p>
                      </div>
                  </div>
  
             </div>
           </Card>
           
           <Card>
             <div className="review-space">
                  <div className="both-names-num">
                      <div className="review-names">
                          <p> Recharge Card</p>
                      </div>
                      <div className="review-num">
                          <p>*311#</p>
                      </div>
                  </div>
  
             </div>
           </Card>
           
           <Card>
             <div className="review-space">
                  <div className="both-names-num">
                      <div className="review-names">
                          <p> More Airtime</p>
                      </div>
                      <div className="review-num">
                          <p>*303#</p>
                      </div>
                  </div>
  
             </div>
           </Card>
           <Card>
             <div className="review-space">
                  <div className="both-names-num">
                      <div className="review-names">
                          <p> Data Balance</p>
                      </div>
                      <div className="review-num">
                          <p>*323#</p>
                      </div>
                  </div>
  
             </div>
           </Card>
           <Card>
             <div className="review-space">
                  <div className="both-names-num">
                      <div className="review-names">
                          <p> Mtn Share</p>
                      </div>
                      <div className="review-num">
                          <p>*321#</p>
                      </div>
                  </div>
  
             </div>
           </Card>
           <Card>
             <div className="review-space">
                  <div className="both-names-num">
                      <div className="review-names">
                          <p> NIN</p>
                      </div>
                      <div className="review-num">
                          <p>*996#</p>
                      </div>
                  </div>
  
             </div>
           </Card>
           <Card>
             <div className="review-space">
                  <div className="both-names-num">
                      <div className="review-names">
                          <p> Night Plan</p>
                      </div>
                      <div className="review-num">
                          <p>*406#</p>
                      </div>
                  </div>
  
             </div>
           </Card>
           <Card>
             <div className="review-space">
                  <div className="both-names-num">
                      <div className="review-names">
                          <p> Mtn Phone Number</p>
                      </div>
                      <div className="review-num">
                          <p>*123*1*1#</p>
                      </div>
                  </div>
  
             </div>
           </Card>
           
          </div>
      </>
    );
}