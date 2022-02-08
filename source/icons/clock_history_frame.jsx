import * as React from "react"; 
	
export default function ClockHistoryFrameIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="ClockHistoryFrame" data-type="icon fatcow-icon" {...props} />
}