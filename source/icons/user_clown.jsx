import * as React from "react"; 
	
export default function UserClownIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="UserClown" data-type="icon fatcow-icon" {...props} />
}