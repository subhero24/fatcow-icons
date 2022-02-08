import * as React from "react"; 
	
export default function PriceComparisonIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="PriceComparison" data-type="icon fatcow-icon" {...props} />
}