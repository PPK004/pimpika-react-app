import { useParams } from "@remix-run/react";
export default function GetCard(){
    const myParams = useParams();

    return(
        <>
        You get cardId : {myParams.cardId}<br/>
        You get cardId : {myParams.title}<br/>
        </>
    );
}
;