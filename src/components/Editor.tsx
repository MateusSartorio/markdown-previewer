import React, { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

interface EditorProps {
    code: string;
    changeCode: (code: string) => any;
}

export const Editor = ({ code, changeCode }: EditorProps) => {

    const handleChange = (event: any): void => {
        processCode(event.target.value);
    }

    const processCode = (code: string): void =>  {
        changeCode(code);
    }

    useEffect(() => {
        processCode(code);
    }, []);

    return(
        <div id="editor-div">
            <div className="generic-header"><p> <FontAwesomeIcon icon={faFreeCodeCamp}/> Editor</p></div>

            <textarea id="editor" onChange={handleChange} spellCheck="false" defaultValue={code} />
        </div>
    )
}