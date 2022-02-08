import * as React from "react"; 
	
export default function StyleGoIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="StyleGo" data-type="icon fatcow-icon" {...props} />
}