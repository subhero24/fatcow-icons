import * as React from "react"; 
	
export default function PillGoIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="PillGo" data-type="icon fatcow-icon" {...props} />
}