import * as React from "react"; 
	
export default function ZoomSelectionIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="ZoomSelection" data-type="icon fatcow-icon" {...props} />
}