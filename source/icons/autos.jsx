import * as React from "react"; 
	
export default function AutosIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Autos" data-type="icon fatcow-icon" {...props} />
}