import * as React from "react"; 
	
export default function RadioactivityIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Radioactivity" data-type="icon fatcow-icon" {...props} />
}