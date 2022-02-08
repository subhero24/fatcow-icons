import * as React from "react"; 
	
export default function DebianIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Debian" data-type="icon fatcow-icon" {...props} />
}