import * as React from "react"; 
	
export default function ToolbarAddIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDhCMEZBQTY1OUI2MTFFMkIyRTI5NjI3QTQ5RDlCMjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDhCMEZBQTc1OUI2MTFFMkIyRTI5NjI3QTQ5RDlCMjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEOEIwRkFBNDU5QjYxMUUyQjJFMjk2MjdBNDlEOUIyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEOEIwRkFBNTU5QjYxMUUyQjJFMjk2MjdBNDlEOUIyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpsopL8AAAP9SURBVHja7FdbbBRVGP7OzOxut1SuTQERIg9iTMTwUiihJC3xglxaUZAHDY1vhCj0iXDvAwQSGpUSkmqiiSX6QiCYSq2mJG0jDXKraeUBMQ297CIs15Z2dzuzM8P/n5nuJTTpVgfqA39yds7+5z/zf/93vnNmRti2jYk08RzAhAOgph2tO/OjLcRqy7RgP4OEiqpw5Q1bK9a8x74Xao432M/aOCfn1ugnhysfzXh1bI85EUJIFtycOZrLijSTch04dkJ6Pi4vwdxZM2DZ3gMI+NTkXy190NAtVH32odNP2DAM8ykwQD++1P8MAAnLRFS3JSWmZcnqPd8lIjNtBgDTsvHFt6ckTR+sXIbZBdPHDYBXWMgyhVuuKyZicrTl1FKoiAESxr5PnSUYjBmIDxtZL4BMrKhQFT80BXTNzM+aS1h81ZGeU0vrw6CoyMOYnGgRG5ZlZZ1cVTT4hB9/hppx8tIunLv+OwFyAdBtihcUYX3hQSycU5qc88QS8Nb45kSjHHy3dDFm5k8bcwmSyany2uYKtPx1HGsL38f65V8iGJgkY2LDQ+jo/g37f1qB0lc3YUdZnWQqDYCDZpg42rNlg+zf6Y9iiJZhLFOIdp+Sg8O/rML1SCP2baxB+NFFNHXtRmQwKmMK8nLx+qx1qKKxz+u34euWIAJaxWgMmOgKP0jVJrIRnIaroSb80deIXRsOoa23mhKHqBigttxhb+sZgYt9PxCQVlSWHUL16Z0onrooBUBVnExCVR0uRLbCU6CpAdR3VGFd0UZ03qrD/VhIilAXmXuffTzW+U8dyhd/hLbL3yUB2KaZCB37/ueXxrvlFajwq1Nxuec8VhYtQmvPNSRcxetp+uW+ajk7I/ToGkrmv4lQ9EISgF75Sfkauk6X9xy/+UoPojESbwfnrH77ySpq16Z8O84KRGJXoKRtQ1ZKN7Wb2ZOfYdP4aB80+iTNYxmzMKj3JitlACz1/v9yuqoEeyB+E0HaWXubBQyiIk4iPPKOU3nlr0I+9nyUlWP64+GkwBUPTnc7EUX7vfugpxyQGwDyqOX6UwHcl76AE8OxBs3huV4A0MNXcKTrhsOEnxL4NCfRiAVcH49xDMfyHGRuln9tXOuLJdtRU/AyypYWOrwaCT7aXZWqDgBW6flLQKQb9S2HsY11p3oAgMVvdbehPf81zLszgAVBonrKZKI8h155/I6yI7eB9g46YXvQ0FqN3eS6xae0FwxIHVKbQm3OK2+heN4SbPZPxhvJRyll0QfQ2XsBX/3dhHPkCbvCN70CMAJiknue5FPLc33yVYOf8NTuUiMJYsj1wUsAI/dj+QVdbYzcn7ngF4GYu+0n9mPk+afZ/wrAYwEGAG/I8gHQHNmbAAAAAElFTkSuQmCC" alt="ToolbarAdd" data-type="icon fatcow-icon" {...props} />
}