import * as React from "react"; 
	
export default function LinkEditIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="LinkEdit" data-type="icon fatcow-icon" {...props} />
}