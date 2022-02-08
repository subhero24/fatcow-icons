import * as React from "react"; 
	
export default function StyleIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Style" data-type="icon fatcow-icon" {...props} />
}