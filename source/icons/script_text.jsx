import * as React from "react"; 
	
export default function ScriptTextIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Qzg4NzA0NjE1OTU2MTFFMkJFNzZCMUE1RDA1NzlGOTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Qzg4NzA0NjI1OTU2MTFFMkJFNzZCMUE1RDA1NzlGOTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDODg3MDQ1RjU5NTYxMUUyQkU3NkIxQTVEMDU3OUY5NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDODg3MDQ2MDU5NTYxMUUyQkU3NkIxQTVEMDU3OUY5NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiWUiGAAAAXVSURBVHjazFdrbBRV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" alt="ScriptText" data-type="icon fatcow-icon" {...props} />
}