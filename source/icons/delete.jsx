import * as React from "react"; 
	
export default function DeleteIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Delete" data-type="icon fatcow-icon" {...props} />
}