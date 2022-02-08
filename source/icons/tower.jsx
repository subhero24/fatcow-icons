import * as React from "react"; 
	
export default function TowerIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Tower" data-type="icon fatcow-icon" {...props} />
}