import * as React from "react"; 
	
export default function ClockIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Clock" data-type="icon fatcow-icon" {...props} />
}