import * as React from "react"; 
	
export default function ReportGoIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="ReportGo" data-type="icon fatcow-icon" {...props} />
}