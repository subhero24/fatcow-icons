import * as React from "react"; 
	
export default function HourglassDeleteIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="HourglassDelete" data-type="icon fatcow-icon" {...props} />
}