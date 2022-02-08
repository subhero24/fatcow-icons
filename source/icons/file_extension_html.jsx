import * as React from "react"; 
	
export default function FileExtensionHtmlIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="FileExtensionHtml" data-type="icon fatcow-icon" {...props} />
}