import * as React from "react"; 
	
export default function ReportEditIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="ReportEdit" data-type="icon fatcow-icon" {...props} />
}