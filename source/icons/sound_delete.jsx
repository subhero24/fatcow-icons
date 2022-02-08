import * as React from "react"; 
	
export default function SoundDeleteIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="SoundDelete" data-type="icon fatcow-icon" {...props} />
}