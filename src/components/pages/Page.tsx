import React from 'react';
import {PagesType} from "../../datastate/datastate";
import {useParams} from "react-router-dom";
import {Error404} from "./Error404";

type PropsType = {
    pages: Array<PagesType>
}

export const Page = (props: PropsType) => {

    const params = useParams()
    const pageNumber = Number(params.id)

    return (
        <div>
            {!!props.pages[pageNumber] ? (
                <div>
                    <div>{props.pages[pageNumber].about}</div>
                    <div>{props.pages[pageNumber].heading}</div>
                </div>
            ) : (
                <Error404/>
            )}
        </div>
    );
};