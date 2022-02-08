import * as React from "react"; 
	
export default function DomainTemplateIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="DomainTemplate" data-type="icon fatcow-icon" {...props} />
}