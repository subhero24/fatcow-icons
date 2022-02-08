import * as React from "react"; 
	
export default function ChartLineAddIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="ChartLineAdd" data-type="icon fatcow-icon" {...props} />
}