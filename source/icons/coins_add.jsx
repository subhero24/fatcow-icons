import * as React from "react"; 
	
export default function CoinsAddIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="CoinsAdd" data-type="icon fatcow-icon" {...props} />
}