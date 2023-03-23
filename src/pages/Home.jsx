import React, {useState} from "react";
import Register from "../components/Register";

export default function Home(){

    const [selectedValue, setSelectedValue] = useState("");

    const handleSelectChange = (value) => {
        setSelectedValue(value);
        console.log(selectedValue);
    };

    return(
        <>
            <Register />
        </>
    )
}