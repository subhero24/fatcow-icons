import * as React from "react"; 
	
export default function ControllerDeleteIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="ControllerDelete" data-type="icon fatcow-icon" {...props} />
}