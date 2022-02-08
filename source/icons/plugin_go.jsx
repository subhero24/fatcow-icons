import * as React from "react"; 
	
export default function PluginGoIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="PluginGo" data-type="icon fatcow-icon" {...props} />
}