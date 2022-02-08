import * as React from "react"; 
	
export default function FileExtensionWmaIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="FileExtensionWma" data-type="icon fatcow-icon" {...props} />
}