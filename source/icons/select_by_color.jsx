import * as React from "react"; 
	
export default function SelectByColorIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="SelectByColor" data-type="icon fatcow-icon" {...props} />
}