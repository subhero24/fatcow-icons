import * as React from "react"; 
	
export default function GreenIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Green" data-type="icon fatcow-icon" {...props} />
}