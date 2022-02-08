import * as React from "react"; 
	
export default function UpdateIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Update" data-type="icon fatcow-icon" {...props} />
}