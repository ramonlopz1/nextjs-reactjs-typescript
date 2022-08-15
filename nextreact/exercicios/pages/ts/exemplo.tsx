import React from "react";
import Pessoa from '../../components/Pessoa'

export default function exemplo(props) {
    return <div>
        <Pessoa nome ="Ramon" idade={30}/>
        <Pessoa nome ="Maria"/>
    </div>
}