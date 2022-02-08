import * as React from "react"; 
	
export default function ContrastDecreaseIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="ContrastDecrease" data-type="icon fatcow-icon" {...props} />
}