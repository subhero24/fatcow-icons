import * as React from "react"; 
	
export default function CakeIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Cake" data-type="icon fatcow-icon" {...props} />
}