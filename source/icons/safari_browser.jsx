import * as React from "react"; 
	
export default function SafariBrowserIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="SafariBrowser" data-type="icon fatcow-icon" {...props} />
}