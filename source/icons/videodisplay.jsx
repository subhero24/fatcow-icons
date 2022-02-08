import * as React from "react"; 
	
export default function VideodisplayIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Videodisplay" data-type="icon fatcow-icon" {...props} />
}