import * as React from "react"; 
	
export default function EmotionHotIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTJEMjBBMzk5NEIwMTFFMkE4OUI4RDg4Mzg3Q0FBMEEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTJEMjBBM0E5NEIwMTFFMkE4OUI4RDg4Mzg3Q0FBMEEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MkQyMEEzNzk0QjAxMUUyQTg5QjhEODgzODdDQUEwQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MkQyMEEzODk0QjAxMUUyQTg5QjhEODgzODdDQUEwQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqXsFRYAAAiwSURBVHjanFcJcFR3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" alt="EmotionHot" data-type="icon fatcow-icon" {...props} />
}