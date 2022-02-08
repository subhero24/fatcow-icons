import * as React from "react"; 
	
export default function DrawRingIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="DrawRing" data-type="icon fatcow-icon" {...props} />
}