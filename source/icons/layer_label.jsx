import * as React from "react"; 
	
export default function LayerLabelIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="LayerLabel" data-type="icon fatcow-icon" {...props} />
}