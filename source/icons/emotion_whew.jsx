import * as React from "react"; 
	
export default function EmotionWhewIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDUyMjdCRUI5NEFFMTFFMkFBMzFGMzU2MTAwNkM0MTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDUyMjdCRUM5NEFFMTFFMkFBMzFGMzU2MTAwNkM0MTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowNTIyN0JFOTk0QUUxMUUyQUEzMUYzNTYxMDA2QzQxMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowNTIyN0JFQTk0QUUxMUUyQUEzMUYzNTYxMDA2QzQxMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmqwIEQAAAdASURBVHjanFd9TFVl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" alt="EmotionWhew" data-type="icon fatcow-icon" {...props} />
}