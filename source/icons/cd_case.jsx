import * as React from "react"; 
	
export default function CdCaseIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="CdCase" data-type="icon fatcow-icon" {...props} />
}