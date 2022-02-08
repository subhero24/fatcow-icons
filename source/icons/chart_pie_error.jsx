import * as React from "react"; 
	
export default function ChartPieErrorIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="ChartPieError" data-type="icon fatcow-icon" {...props} />
}