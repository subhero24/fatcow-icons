import * as React from "react"; 
	
export default function FtpIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="Ftp" data-type="icon fatcow-icon" {...props} />
}