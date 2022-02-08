import * as React from "react"; 
	
export default function FileExtensionIsoIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="FileExtensionIso" data-type="icon fatcow-icon" {...props} />
}