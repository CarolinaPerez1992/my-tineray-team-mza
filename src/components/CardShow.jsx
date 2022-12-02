import React from "react";
import CommentsCard from "./CommentsCard";


export default function CardShow(props) {
    let { id } = props;
    console.log(id)
    return (
        <div>
            <CommentsCard eventId={id}></CommentsCard>
        </div>

    )
}