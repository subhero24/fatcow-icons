import * as React from "react"; 
	
export default function ResellerAccountTemplateIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="ResellerAccountTemplate" data-type="icon fatcow-icon" {...props} />
}