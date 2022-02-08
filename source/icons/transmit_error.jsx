import * as React from "react"; 
	
export default function TransmitErrorIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="TransmitError" data-type="icon fatcow-icon" {...props} />
}