import * as React from "react"; 
	
export default function EmotionKnightIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NENENkMzOUQ5NEFGMTFFMkFGRDA4MUZDRTJFRTFGNTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NENENkMzOUU5NEFGMTFFMkFGRDA4MUZDRTJFRTFGNTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0Q0Q2QzM5Qjk0QUYxMUUyQUZEMDgxRkNFMkVFMUY1MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0Q0Q2QzM5Qzk0QUYxMUUyQUZEMDgxRkNFMkVFMUY1MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqlOGOgAAAhoSURBVHjanFd7bFt3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" alt="EmotionKnight" data-type="icon fatcow-icon" {...props} />
}