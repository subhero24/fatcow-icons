import * as React from "react"; 
	
export default function UserTrooperCaptainIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTUwRURFNDM1NDEzMTFFMUFERkFCM0NCNEY1MkM1QjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTUwRURFNDQ1NDEzMTFFMUFERkFCM0NCNEY1MkM1QjAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBNTBFREU0MTU0MTMxMUUxQURGQUIzQ0I0RjUyQzVCMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNTBFREU0MjU0MTMxMUUxQURGQUIzQ0I0RjUyQzVCMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtXkew0AAAabSURBVHjaxFcLbBRV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" alt="UserTrooperCaptain" data-type="icon fatcow-icon" {...props} />
}