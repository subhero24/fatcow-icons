import * as React from "react"; 
	
export default function SportIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Sport" data-type="icon fatcow-icon" {...props} />
}