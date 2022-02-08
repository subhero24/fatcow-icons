import * as React from "react"; 
	
export default function MailServerSettingIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,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" alt="MailServerSetting" data-type="icon fatcow-icon" {...props} />
}