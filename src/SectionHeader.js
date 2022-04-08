import React from "react";

function SectionHeader(props) {
    return ( 
        <div className={"sectionHeader " + props.background}>
                <h1>{props.headline}</h1>
            </div>
     );
}

export default SectionHeader;