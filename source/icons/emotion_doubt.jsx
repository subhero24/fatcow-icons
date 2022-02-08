import * as React from "react"; 
	
export default function EmotionDoubtIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjNDOUVFNzI1NTY0MTFFMUE0Rjc5NkJGQTA2MTk2REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjNDOUVFNzM1NTY0MTFFMUE0Rjc5NkJGQTA2MTk2REMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGM0M5RUU3MDU1NjQxMUUxQTRGNzk2QkZBMDYxOTZEQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGM0M5RUU3MTU1NjQxMUUxQTRGNzk2QkZBMDYxOTZEQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsoYdRcAAAb3SURBVHjatFdrbBRV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" alt="EmotionDoubt" data-type="icon fatcow-icon" {...props} />
}