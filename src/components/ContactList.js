import React,{useContext} from "react";
import Contactcard from "./ContactCard";
import { ContactContext } from "./Contactform";
import { Row } from "antd";

const Contactlist = () => {
    const {contacts,setContacts} = useContext(ContactContext);
    console.log("list",contacts)

    
    return (<>
       
    {
        contacts.length == 0 ?
         " "
         :
    <>
 
    
{
    contacts?.map(val=>
        <Contactcard val={val}/>
        )
}

</>
}

        </>)
}

export default Contactlist;