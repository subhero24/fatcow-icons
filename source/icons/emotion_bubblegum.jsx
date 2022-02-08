import * as React from "react"; 
	
export default function EmotionBubblegumIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEE0RTY1RkI1NTY1MTFFMTkyRENCNUJGMzlBMkUxQTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEE0RTY1RkM1NTY1MTFFMTkyRENCNUJGMzlBMkUxQTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowQTRFNjVGOTU1NjUxMUUxOTJEQ0I1QkYzOUEyRTFBNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowQTRFNjVGQTU1NjUxMUUxOTJEQ0I1QkYzOUEyRTFBNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnBuV2IAAAglSURBVHjanFcNbFPX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" alt="EmotionBubblegum" data-type="icon fatcow-icon" {...props} />
}