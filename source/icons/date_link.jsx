import * as React from "react"; 
	
export default function DateLinkIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="DateLink" data-type="icon fatcow-icon" {...props} />
}