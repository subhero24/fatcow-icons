import * as React from "react"; 
	
export default function GroupGoIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="GroupGo" data-type="icon fatcow-icon" {...props} />
}