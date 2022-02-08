import * as React from "react"; 
	
export default function VideoModeIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="VideoMode" data-type="icon fatcow-icon" {...props} />
}