import * as React from "react"; 
	
export default function ClockLinkIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="ClockLink" data-type="icon fatcow-icon" {...props} />
}