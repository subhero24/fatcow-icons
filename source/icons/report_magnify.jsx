import * as React from "react"; 
	
export default function ReportMagnifyIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="ReportMagnify" data-type="icon fatcow-icon" {...props} />
}