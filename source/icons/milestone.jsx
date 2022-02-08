import * as React from "react"; 
	
export default function MilestoneIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Milestone" data-type="icon fatcow-icon" {...props} />
}