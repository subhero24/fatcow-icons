import * as React from "react"; 
	
export default function SupportIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Support" data-type="icon fatcow-icon" {...props} />
}