import * as React from "react"; 
	
export default function ComputerErrorIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="ComputerError" data-type="icon fatcow-icon" {...props} />
}