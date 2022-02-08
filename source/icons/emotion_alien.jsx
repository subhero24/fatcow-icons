import * as React from "react"; 
	
export default function EmotionAlienIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjQ1QUIwQjg1NTc3MTFFMTk1RDZBQjVDOTgwMzRGNTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjQ1QUIwQjk1NTc3MTFFMTk1RDZBQjVDOTgwMzRGNTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCNDVBQjBCNjU1NzcxMUUxOTVENkFCNUM5ODAzNEY1NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCNDVBQjBCNzU1NzcxMUUxOTVENkFCNUM5ODAzNEY1NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PszYaUYAAAe7SURBVHjatFdrbBxX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" alt="EmotionAlien" data-type="icon fatcow-icon" {...props} />
}