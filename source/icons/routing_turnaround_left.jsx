import * as React from "react"; 
	
export default function RoutingTurnaroundLeftIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="RoutingTurnaroundLeft" data-type="icon fatcow-icon" {...props} />
}