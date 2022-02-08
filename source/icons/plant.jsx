import * as React from "react"; 
	
export default function PlantIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Plant" data-type="icon fatcow-icon" {...props} />
}