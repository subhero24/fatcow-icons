import * as React from "react"; 
	
export default function FlowerIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Flower" data-type="icon fatcow-icon" {...props} />
}