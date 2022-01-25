import Cards from "./Cards";
import '../Css/Cards.css'




export default function CardNumber(props){ //Run on arr from Product and send to Cards
    const letitrun=props.arrvideos.map((per)=><Cards test={per}/>)
    return (
        <div className="divcard" >
        {letitrun}
        </div>
        );
}
