import * as React from "react"; 
	
export default function BugAddIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="BugAdd" data-type="icon fatcow-icon" {...props} />
}