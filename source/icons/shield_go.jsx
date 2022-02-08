import * as React from "react"; 
	
export default function ShieldGoIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="ShieldGo" data-type="icon fatcow-icon" {...props} />
}