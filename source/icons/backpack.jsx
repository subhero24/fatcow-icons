import * as React from "react"; 
	
export default function BackpackIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Backpack" data-type="icon fatcow-icon" {...props} />
}