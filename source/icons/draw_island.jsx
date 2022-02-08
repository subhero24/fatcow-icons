import * as React from "react"; 
	
export default function DrawIslandIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="DrawIsland" data-type="icon fatcow-icon" {...props} />
}