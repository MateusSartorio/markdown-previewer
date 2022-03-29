import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import Markdown from "marked-react";

import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark as theme} from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface PreviewerProps {
    code: string;
}

const renderer = {
    code: (snippet: any, lang: any) => {
        return <SyntaxHighlighter language="javascript" style={theme}>{snippet}</SyntaxHighlighter>
    }
}

export const Previewer = ({ code }: PreviewerProps) => {

    return(
        <div id="preview-div">
            <div className="generic-header"><p> <FontAwesomeIcon icon={faFreeCodeCamp}/> Previewer</p></div>

            <div id="preview">
                {<Markdown gfm={true} breaks={true} openLinksInNewTab={true} renderer={renderer}>{code}</Markdown>}
            </div>            
        </div>
    )
}