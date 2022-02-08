import * as React from "react"; 
	
export default function TelephoneAddIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="TelephoneAdd" data-type="icon fatcow-icon" {...props} />
}