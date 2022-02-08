import * as React from "react"; 
	
export default function StopwatchFinishIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="StopwatchFinish" data-type="icon fatcow-icon" {...props} />
}