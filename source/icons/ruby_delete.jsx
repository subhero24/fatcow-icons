import * as React from "react"; 
	
export default function RubyDeleteIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="RubyDelete" data-type="icon fatcow-icon" {...props} />
}