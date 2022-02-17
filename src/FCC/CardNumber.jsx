import Cards from "./Cards";
import '../Css/Cards.css'




export default function CardNumber(props){ //Run on arr from Product and send to Cards
    const letitrun=props.arrvideos.map((per,index)=><Cards test={per} key={index}/>)
    return (
        <div className="divcard" >
        {letitrun}
        </div>
        );
}
