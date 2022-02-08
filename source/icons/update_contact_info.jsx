import * as React from "react"; 
	
export default function UpdateContactInfoIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEQxNjUyRDA3NkI2MTFFMkI4NzRCOTQ0QzAwN0NCQkMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEQxNjUyRDE3NkI2MTFFMkI4NzRCOTQ0QzAwN0NCQkMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowRDE2NTJDRTc2QjYxMUUyQjg3NEI5NDRDMDA3Q0JCQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowRDE2NTJDRjc2QjYxMUUyQjg3NEI5NDRDMDA3Q0JCQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PleEYrwAAAeBSURBVHjavFcLUJTlGn7+y8Iul0gtMKy4lWZe8AACjkEzkk5KsAsKejQ76ZkzTcfpdM901M5opZ7OSNdxsilNVDSiZRcRHRk8ykkBE0ETLDwhmrJylRCRdXf/837f/++6S6Q559Sn73yX99/vvT/vhwBAtlgsxYIgpLtcLvzWQxRFKIpSajQaTbR1sLNgq9Wq/J6DyWNymXCZSO+2vPlsC8gTfK0M0lz4Hy3n9ykKoiIjoMnTE/XK3ndLsgyRFCAl1R9oyrAfspVA7nMro7lS3Qs31Bt8xvZMIL9TUX5mk+x9oiMFTp48iRnTHxvSiv37yzExNpavS6wWREVF832JtRiRkdFcURdR7KRJsBabERUdw4WPnzCBz0PlmI8CMilwyWbj6+K3/obGyr18PTZ1JkzL34PNdgl/iJeh0EXZs+d4LDRlzeYWu93MzrKIz86YUKfTqdn880CKvhkqQZRVnRoOlmFZ4TZOjbTmfOJJ5HpJkvBV0Zc4UV+H+rrjdK+o7mnNqL6ulgsvKvyC81m4GEmieHMPSJL6IRvDwu+nInHwUOmDQzS+4In93Hl/5BYpWnxzcueqXuAxV2OdO3c+3ztdDp/8uIkCEpF6NCktEw0H/sXXyaaFKl+U+TcszjsLdmD0mDF0qYsLTExMQsGO7XjgwQeRED8ZLc0tuCfsXhLuRGCQAQOOgVsrINLl/v467Cnbi5KqM1j6+jJ+/sG6tegesRd+xGNhAl365FN/4mnMhLOLmfUL6YxbT//HT3wYsSsEzJlsxEpjMYQrIuzOgZvngCwK8KM47y3bAwMJ+77xFCe2ZmeMJ1MY2Hdbt2xGddUR1FQf4Wfbt23F0epqfFNTg2NHv+H3+ZN5fT9ZsNo8GwFBftDr9LfwAMXXnbmMSkt3e2qa7dnM65to0aJFaly5xQIWP/0XSLpB1tGnT6a8hM2VG0iJOViV9SUGo5w8ODlGjhyJjIwMHmvvwUopLCzMo6g7WQmdIOtEsBL/7OCr2H9qM05f7IROUqtO0IXAmJiD4mOFWGPOwcqsQgQYgob2ABsTCDRiCVyEQTXrRjRGTLlNmzYhIS4Jk5PikFe0BHUdFiTGJGN1zkqy3A99LvKeIqH3ajsa2gqRnbSAlNiOdaW5mP/w+z5wGGo2my+ZTCaqOodmoaAmmzbcgt2eYjxWsmys3z0PdkcXspPT0XH1a7T11ZK37HAo5zm/75rqCRaOceHzsOSTndj95w6MiryLubNN9sZtt9vZ/rMvynBdCIRO6cPi3JmeGmc6MwXZ2HxoKa452pA1JQ3ftq/H5YFWML0YW9AiJOs5OHIlimp3Ym5SLpXmdd8qcMfTk2SsUYtBeHxaKp/dPDX2Kt/W0wxL7T8xK3ki6jvXohetZAHQeA4opyLYQSi+xaoqIPoD310A7pYWYGn6LjQ1nfHNAUowG/XokWqzUEBVRaUViogRbBZRYjHDqaiWsAweHTMe+SeWYFrCWNjsB2GX+9DwPXCsHng02oiF4+bBoI/C30uTIRkI1k+TbpfT8XTKx2ht6UJ8bPKAtwec3d3dx326pFppqP7BqfYP4caLgOH+iGGhqDizH5HROvSgERWHyWOXpmBj9mk8n7ILSfcbMSYsifIAOHWWhLTPovOdcNEDaGPVU3jOEu7/2FqcYg2Yw/5QL6JPiyqVitP9fB5qTF4FZVdbgPLCHijbKtd4zvP25Sjxb0C5eEFREmh+bessD+/zr5crH+6boXR0FijT13M0uJOFQHL36ZZz53msdbLacHr77Xxubb2I6w4XD4FIHgi+IwAxoXdi3XuXkRmbiQXTV/DX3WprBu69owY6UQ1V2SsKBn4Curo7sWb3LMKLXixL/wCHvn3G3Zn9ZG84DjAYOIO1zYh7huGHpjpEjxoOvb8eOp3iQTCZ6rzg2e4bbyma3yw2YnjgAWQmFuCTw5k4210FW8s5VDVvxeHmUsxPzoQpfjmONq/C8Qv/gb0HFazCfYDIEGDQIFTAI3ExSImP4VbzhsP+eUHoNbudEtSPrALetmYhOGAf0sa/ja6rTQij7v1OxRQEGwIxblQE8qYuQwAh4r/P/BVdfRdxnCCCUugdusYue5dhUGDgbT8211iyERxkwdQHXsSBppeREPECVppe4p5kSjtddth6y9F+5SgEKtND3wFPjF2Bkpo3qTbQz5x4d35+vjkkJGTqr/27gAMSNaDk+EeR8ekwvLs4Gw22r3w85EZygQMceK8orwUeGj4Hz6Xkt48IN0xgSCho73N6/uCuoXrDLYYc9zyWPzEDqVGjqJ7VBxQXqOEVmHMbqRRPEE78eBIf120Ba4ntRHSKHkETatDe6bf7/PdnvSTlNWxIm4bUyPvUCz43sweu6gWKQOcVG8qPfISNxOog6mYtgugq0XVZ+/OoV6PbHax59Ff+Ay+SsLw08sToKEIXSsx9SzGTJRkRQ70eok5tvsay/xfb8W0Op2YRDq0nJYA8vwykympPa9Z4Dk3ogPb9bzIkLYfi0lbgSOYGjhihv+aHwv9ZieFE4dqj67zbO7+XAvBKaAYs/VoO3HT8V4ABAI9nrqO4qA3UAAAAAElFTkSuQmCC" alt="UpdateContactInfo" data-type="icon fatcow-icon" {...props} />
}