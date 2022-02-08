import * as React from "react"; 
	
export default function RoutingTurnArroundLeftIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="RoutingTurnArroundLeft" data-type="icon fatcow-icon" {...props} />
}