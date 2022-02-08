import * as React from "react"; 
	
export default function MonitorErrorIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="MonitorError" data-type="icon fatcow-icon" {...props} />
}