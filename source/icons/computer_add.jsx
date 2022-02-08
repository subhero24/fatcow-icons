import * as React from "react"; 
	
export default function ComputerAddIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="ComputerAdd" data-type="icon fatcow-icon" {...props} />
}