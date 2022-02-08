import * as React from "react"; 
	
export default function FreebsdIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Freebsd" data-type="icon fatcow-icon" {...props} />
}