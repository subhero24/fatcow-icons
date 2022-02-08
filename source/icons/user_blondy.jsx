import * as React from "react"; 
	
export default function UserBlondyIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="UserBlondy" data-type="icon fatcow-icon" {...props} />
}