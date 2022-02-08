import * as React from "react"; 
	
export default function CactusIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Cactus" data-type="icon fatcow-icon" {...props} />
}