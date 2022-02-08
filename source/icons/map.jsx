import * as React from "react"; 
	
export default function MapIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Map" data-type="icon fatcow-icon" {...props} />
}