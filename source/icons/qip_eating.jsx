import * as React from "react"; 
	
export default function QipEatingIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="QipEating" data-type="icon fatcow-icon" {...props} />
}