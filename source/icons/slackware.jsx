import * as React from "react"; 
	
export default function SlackwareIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Slackware" data-type="icon fatcow-icon" {...props} />
}