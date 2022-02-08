import * as React from "react"; 
	
export default function BellLinkIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="BellLink" data-type="icon fatcow-icon" {...props} />
}