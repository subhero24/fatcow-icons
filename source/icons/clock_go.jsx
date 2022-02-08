import * as React from "react"; 
	
export default function ClockGoIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="ClockGo" data-type="icon fatcow-icon" {...props} />
}