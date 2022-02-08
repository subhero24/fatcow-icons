import * as React from "react"; 
	
export default function MetroIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Metro" data-type="icon fatcow-icon" {...props} />
}