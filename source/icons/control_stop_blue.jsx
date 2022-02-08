import * as React from "react"; 
	
export default function ControlStopBlueIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="ControlStopBlue" data-type="icon fatcow-icon" {...props} />
}