import * as React from "react"; 
	
export default function ToxicIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Toxic" data-type="icon fatcow-icon" {...props} />
}