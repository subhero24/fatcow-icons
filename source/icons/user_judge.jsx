import * as React from "react"; 
	
export default function UserJudgeIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTVBNDNFRUQ1NDA2MTFFMUE0NjdFM0M4NjRBRUZFN0MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTVBNDNFRUU1NDA2MTFFMUE0NjdFM0M4NjRBRUZFN0MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNUE0M0VFQjU0MDYxMUUxQTQ2N0UzQzg2NEFFRkU3QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxNUE0M0VFQzU0MDYxMUUxQTQ2N0UzQzg2NEFFRkU3QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuKjkiwAAAWNSURBVHjarFfrbxRVFP/Nzmx3tu0OtEhLtdLwCDa0vANB+GR8fJB/wdAAUUMgJk38JBIRDUYRMcSEKASDf4iB+ggfwKYg0C4qoiVb+mC3u93nvPydu7tN2RQ6tXs3JzNz7z3n/O553bOa7/uQoWkaAgz93DfnzxuGsZ/vkSoPRRQdx/7hvaOHD/PTDSJoVm9AANqJjz9d39beHm9sbERb20pYlgVdD6FQKCKdySD5OMX3PMYSiQ0nPvrwD9ERBICBYKNBlHd0dKCr60WEQrpggue5BB6CHgrBjEQwOTUle+Mkk1QMIjgUxOynz3x9KtYcw+quToS0MktI8whEU1YIkcSCTU1NEAudOXvulPDVC4BJwUc6XuiAruniK5S9FZr9aRVQMh0xIwLkSMUK9QHQ0NAQaYxG4dFvPLSoVKcO0fREVfG2psDpuo6wEY7UC4D++emvjolQn/I9zyvrEsVU5vOZzRbxOJVBoeTA9XwS92g+vvjy7LEgblgoCM2Wlpb+nk0b4dgOUqkUg83k6XWk0zNITc+gMzaFbisNz3Vwd6oTa9a8BNcuYXh4pJ/8x0nZpQCIin89x0We6dbgJHB/LILWZhvLzBJ2b0jyiAWUSi4BFrCO82l7PWwCqKR1dKkAtHR6+vbg4M0ejz7Y2+3grVfSQMFBqegosxdLgO34tICPRFJD/K8hGLqPfC57uxKXS3KBH4vFenbs2EZFDn4eimPL2hTffZ7ah13yeFpXkUYXDCefx8u7NhFMCXfujPQsVIwCWUAi3XHkpEWV96Ay1/Y4x6dbJo/kE4Csu2rvrAuWbAFMT4sLhnp8ylpleUqh7RIAn45bBeEQgIvlxmP8NjjEygjkyi5A3VxQYhYM3owzIKdJBCIWIIklxAIeT55yWrCbLnCd4C4ILcYFBo/2KM2awDvAq5Dve6pAFT1TrYsLCozMSsleugvS6bRygcjyQxH8k5hBu1WU8sirtFwV/344joHro+jctRXcq0o1b8b6uICFqGfLll5GvY2hW3G0NeWQTOVJWUxMJTExmUQ2k0Zmckw1Bjt3blcxEY//WZ8s0A1DBVquUFCC27rfRHH4J2SSt2GZDozlvAXX9qKr+ygGhqUolVgXHAhfEBc8rSHR+/r6TvIO+GBj72a0t69CPl/A9u3bsGPb5qcKuzF4E9dv3EAzr+XxR2P4/daQgP/s8uXLx2s7pWd1ROFDhw7+29xsta+k4onxSSQSD3HhwrewYrEFfZqmO/r730csZmElO6cJAslkpu9cuvT9Vi7btQBqs8A4cODAFVEes1oQHxnB+PiYcsHAlauBWqerVwaUqx5RsfCLHCu2bKPInc/ltQAa2XDuWba8FffuDaseT1JNKtx3Fy9if99BPHjwYF7FMi/rF7gvm82q9BR+kWNRHjunPSL/WQC0ffv27ZbgSaWSKpiqpVbMFQ6HWRWTePudd3Hy5CdPCJFvmZd12Sf7q7wiR+QZTFuRXxuYc02im6bZzYYL2VxuVvETEcs44R78eu0aXn3tddV8SEMapnCZl3VpWuYO+c6wa45GTdnTzakfSc58AAyiXycq8zShlFbpeERoLZAwGxKDCiXvyz2ipt6lJM8FK3w+AeTzOUQiDWKddRWdznwuMKLR6BtS3zOM5OpFMzo6qp5SjqukbkCvXILlOd/6LB8pOzOj7g2RXxuIcz/CDMAuqXgFFh1BL/dAVbg6jb9gYVMnF6ryCUDbtlEs2rSC0SV6ngbAIGM0l8vzKs2pVluiX4KoCijoEABVPs/zVUbweiYAK/osC/hMn19aW629K1b0otpPzBcDQUGU+XwVKuXMcGZqs2BuJZQyt5r03CL+si1miKIk6T4pNV8pNipdrBnkEvmfo1Tpku3F/juuvzkqev8TYADp5UIvGgtLDwAAAABJRU5ErkJggg==" alt="UserJudge" data-type="icon fatcow-icon" {...props} />
}