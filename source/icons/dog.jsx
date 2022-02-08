import * as React from "react"; 
	
export default function DogIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Dog" data-type="icon fatcow-icon" {...props} />
}