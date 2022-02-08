import * as React from "react"; 
	
export default function MonitorDeleteIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="MonitorDelete" data-type="icon fatcow-icon" {...props} />
}