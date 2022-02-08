import * as React from "react"; 
	
export default function UserAddIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="UserAdd" data-type="icon fatcow-icon" {...props} />
}