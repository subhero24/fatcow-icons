import * as React from "react"; 
	
export default function EmotionCoolIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUU1QUZDODc1NTVDMTFFMTk2NDFFRTlBODNENzkxRkMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUU1QUZDODg1NTVDMTFFMTk2NDFFRTlBODNENzkxRkMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1RTVBRkM4NTU1NUMxMUUxOTY0MUVFOUE4M0Q3OTFGQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1RTVBRkM4NjU1NUMxMUUxOTY0MUVFOUE4M0Q3OTFGQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PouNu30AAAksSURBVHjanFcLkFNn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" alt="EmotionCool" data-type="icon fatcow-icon" {...props} />
}