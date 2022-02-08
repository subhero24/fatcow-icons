import * as React from "react"; 
	
export default function RubyLinkIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="RubyLink" data-type="icon fatcow-icon" {...props} />
}