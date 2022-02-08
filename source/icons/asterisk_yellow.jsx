import * as React from "react"; 
	
export default function AsteriskYellowIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="AsteriskYellow" data-type="icon fatcow-icon" {...props} />
}