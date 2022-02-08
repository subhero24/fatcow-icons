import * as React from "react"; 
	
export default function PeacockIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Peacock" data-type="icon fatcow-icon" {...props} />
}