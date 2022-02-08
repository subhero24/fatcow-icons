import * as React from "react"; 
	
export default function CardCreditIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="CardCredit" data-type="icon fatcow-icon" {...props} />
}