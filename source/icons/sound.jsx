import * as React from "react"; 
	
export default function SoundIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Sound" data-type="icon fatcow-icon" {...props} />
}