import * as React from "react"; 
	
export default function CalendarLinkIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="CalendarLink" data-type="icon fatcow-icon" {...props} />
}