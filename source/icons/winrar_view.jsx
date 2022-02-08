import * as React from "react"; 
	
export default function WinrarViewIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="WinrarView" data-type="icon fatcow-icon" {...props} />
}