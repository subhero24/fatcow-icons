import * as React from "react"; 
	
export default function SportShuttlecockIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="SportShuttlecock" data-type="icon fatcow-icon" {...props} />
}