import * as React from "react"; 
	
export default function EmotionSmileIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="EmotionSmile" data-type="icon fatcow-icon" {...props} />
}