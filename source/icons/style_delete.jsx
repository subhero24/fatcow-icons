import * as React from "react"; 
	
export default function StyleDeleteIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="StyleDelete" data-type="icon fatcow-icon" {...props} />
}