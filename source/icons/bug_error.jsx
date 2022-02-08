import * as React from "react"; 
	
export default function BugErrorIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="BugError" data-type="icon fatcow-icon" {...props} />
}