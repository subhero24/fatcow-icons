import * as React from "react"; 
	
export default function LifeVestIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="LifeVest" data-type="icon fatcow-icon" {...props} />
}