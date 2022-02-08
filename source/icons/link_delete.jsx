import * as React from "react"; 
	
export default function LinkDeleteIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="LinkDelete" data-type="icon fatcow-icon" {...props} />
}