import * as React from "react"; 
	
export default function QipNotAvailableIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="QipNotAvailable" data-type="icon fatcow-icon" {...props} />
}