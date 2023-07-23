export default function Card(props){

    return(
        <div className="card">
           <div className="card-content">
            { props.children }
           </div>
        </div>
    );
}