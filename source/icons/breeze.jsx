import * as React from "react"; 
	
export default function BreezeIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Breeze" data-type="icon fatcow-icon" {...props} />
}