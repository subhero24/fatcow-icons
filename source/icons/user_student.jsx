import * as React from "react"; 
	
export default function UserStudentIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="UserStudent" data-type="icon fatcow-icon" {...props} />
}