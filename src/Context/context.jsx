import { createContext, useState } from "react";
import runChat from "../Components/Config/Gemini";

export const Context = createContext();
const ContextProvider = (props) => {

    const [input, setinput] = useState("")
    const [recentprompt, setrecentprompt] = useState('')
    const [prevPrompts, setprevPrompts] = useState([])
    const [showresult, setshowresult] = useState(false)
    const [loading, setloading] = useState(false)
    const [resultdata, setresultdata] = useState("")
    const delaypara=(index,nextword)=>{
        setTimeout(function (){
            setresultdata(prev=>prev+nextword)
        },75*index);

    }
    const onsent = async (prompt) => {

        setresultdata("")
        setloading(true)
        setshowresult(true)
        setrecentprompt(input)
        const response = await runChat(input)
        let responsearry=response.split("**")
        let newresponse;
        for(let i=0;i<responsearry.length;i++){
            if(i===0||i%2 !==1){
                newresponse+=responsearry
            }
            else{
                newresponse+="<b>"+responsearry[i]+"</b>";
            }
        }
        let newResponse2=newresponse.split("*").join("<br>")
        let newresponseArray=newResponse2.split("");
        for(let i=0; i<newresponseArray.length;i++){
            const nextword=newresponseArray[i];
            delaypara(i,nextword+" ")
        }
        // setresultdata(newResponse2)
        setloading(false)
        setinput("")
    }

    const Contextvalue = {
        prevPrompts,
        setprevPrompts,
        onsent,
        setrecentprompt,
        recentprompt,
        showresult,
        loading,
        resultdata,
        input,
        setinput


    }
    return (
        <Context.Provider value={Contextvalue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider