import * as React from "react"; 
	
export default function ArrowSwitchIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="ArrowSwitch" data-type="icon fatcow-icon" {...props} />
}