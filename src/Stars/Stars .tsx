
import "./Starts.css";
import Star from "../Star/Star";

interface NumberStar {
    count: number
}

export default function Stars({ count }: NumberStar) {

    if (1 > count || count > 5) {
        return
    }

    const indexArr: number[] = new Array(count).fill(1);

     
    return (
        <ul className="card-body-stars u-clearfix">
            {indexArr.map((el, index) => (
                <li key={index}><Star/></li> 
    ))}
            <div>{count}</div>
        </ul>
    )

}