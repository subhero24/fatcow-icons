import * as React from "react"; 
	
export default function BankIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Bank" data-type="icon fatcow-icon" {...props} />
}