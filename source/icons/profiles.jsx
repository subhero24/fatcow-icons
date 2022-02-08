import * as React from "react"; 
	
export default function ProfilesIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Profiles" data-type="icon fatcow-icon" {...props} />
}