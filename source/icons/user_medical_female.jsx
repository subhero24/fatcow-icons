import * as React from "react"; 
	
export default function UserMedicalFemaleIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="UserMedicalFemale" data-type="icon fatcow-icon" {...props} />
}