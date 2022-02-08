import * as React from "react"; 
	
export default function BugGoIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="BugGo" data-type="icon fatcow-icon" {...props} />
}