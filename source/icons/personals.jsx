import * as React from "react"; 
	
export default function PersonalsIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Personals" data-type="icon fatcow-icon" {...props} />
}