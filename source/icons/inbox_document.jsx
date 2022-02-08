import * as React from "react"; 
	
export default function InboxDocumentIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0QwNUI4MzRBNzQ1MTFFMTg0QjRDOUQ2QzIxMzI1NUMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0QwNUI4MzVBNzQ1MTFFMTg0QjRDOUQ2QzIxMzI1NUMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDRDA1QjgzMkE3NDUxMUUxODRCNEM5RDZDMjEzMjU1QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDRDA1QjgzM0E3NDUxMUUxODRCNEM5RDZDMjEzMjU1QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtdshMwAAATHSURBVHjavFddbFRFFP5m5t7b3S1FSYBuUaGNTSONP1FrMPEBKqJETciaYgLyYnwz+qAx+O6jD76KGIIPQCEbaRtjMCakGqWYUMEumCihLFQabatB+rd0e+8dz5m7t+62e3e3rXGas7u5d+Y733znzJlTgfLD+rynpxdCvKR9Hxq1DJ4lIIWA53l9r3Z1ddEDFyscDURAr3SMjY3p4ydPniYcVc2RFfE8RjjmR/bGTRJCVN8/zW9p3oJjJ07gwP792Ll9e+p4d3f6tX379tJrL2qdjHguQtmllAVTFSyYE86/nr2BxmQSO3fsSJES6UpKyGo7k1JAKUkmKpg08wLqAk1NyQUSz3V2prpPneqNUtuqRkAIVVMIwiltrQ+ip6+PY4KB8wMmHI7jvEyv4mRTyyAQBEERck0ESPrJyWl0PNlhrHj4QT7FlkegkASC5K2JANlsbhYzZIWsNF9Nycbwt1hRCGSNCpTEoXAqaikg1XNALoNAiSIC4VFeGYGCU0VJCIHVjQobsKLXyEIOrNb7v1jLU0A5hcWrJxBi1VqI1OG3nz4Uspb0vRoLFWDMchVxMQF19OCudH3cToU7N0m4CgtVZEzGXkxCljh//4V0os5KDV6dMOXVPORav8Ld81qDQViMydjso5hESEAdeW9XOm7LVOb6X5j4OwfbCtLDdmwom0hwQapx18pSZp1TF8SesRiTsdkH+wpJ8Id1+J1ne22l91zJTuC7zG+4PTULua7ZnOWRkVvY1LQJjm0tVDxRKE7lTClybtsYylzBjxcv4fexCXzz/QB+On8WN8en4FgCG++NbX1xW8sTX/yQTTNew5F3Oyc7dh8Ah0yZa9WHO5+Hm58DEhsw5jfh8UcfxoaN67nbiSwwfB9YRCAzdBm3/pjA/fY4/JlxWI4Dy3aM4B51WD4tH/zqGN74qH8tbyvmeS4aWx5D/9GDJLVj6kZQSmmyl8cju9/C4KUMWrY8gPatbRVP3FDmZ4zSrpsTt3H5zCeEZzMzow5DMl7n6x/SRj4zFxQTED71K/NzJA/H27IXCofmP9/Br2cP4aHn38TIqIMshQRRCpATaTlorr+DX77+GLFEPflWJpTB/eDDc7Xx5Qc9krDCi8+bm6ZksQnAXlR8LGhKouH+T9G67RWa60ILHVn/hW/hWv9p1MXXGOfFdZxVlYTAvnRxJTTS5GcpQYJsX1K76Zmm2I5c/NLsIkoBmESUqKtLmHxYconQOp/ynn2FEEUEZihRLCKgEHn7sG6aOm3fDXTTRc0Af0grEFWqyCbDl9r4KiXARqxsSwXxL1v/dfC4bS+c+54yCbqAwi9oXX70AnC1B9pUQFGudabwKeNrSQgwTwT4rIto9pImXptLQg0PBwRKzyA8kUQrFS1fVFBRC+OrVAHejEvVj+WvcHUqejf97QdwXXcJPONZlKxO+2Z4WlRsNdlXyH9BAenlzDHUiGzfTKHqaG/Gnem7S65pzvB71sQojyiRdbR3qpXGV4kC7NBGHvUxp2Ibxy4TNGfd2ngJTY2iPpTjXAWDfYWrmYCeys2f6zlz4Rnt62W0OeW76JqWkpTTOfdcISPQQLaZbH0tTep/NPgc/0k2IgpO44V/HMT/RID1ukuW+0eAAQAxFfNYfpiuqwAAAABJRU5ErkJggg==" alt="InboxDocument" data-type="icon fatcow-icon" {...props} />
}