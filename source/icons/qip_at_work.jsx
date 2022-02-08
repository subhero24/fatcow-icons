import * as React from "react"; 
	
export default function QipAtWorkIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="QipAtWork" data-type="icon fatcow-icon" {...props} />
}