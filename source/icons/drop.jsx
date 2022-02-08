import * as React from "react"; 
	
export default function DropIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Drop" data-type="icon fatcow-icon" {...props} />
}