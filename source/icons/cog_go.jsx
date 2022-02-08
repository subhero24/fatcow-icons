import * as React from "react"; 
	
export default function CogGoIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="CogGo" data-type="icon fatcow-icon" {...props} />
}