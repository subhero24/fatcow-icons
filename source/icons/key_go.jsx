import * as React from "react"; 
	
export default function KeyGoIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="KeyGo" data-type="icon fatcow-icon" {...props} />
}