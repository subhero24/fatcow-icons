import * as React from "react"; 
	
export default function FilterAddIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="FilterAdd" data-type="icon fatcow-icon" {...props} />
}