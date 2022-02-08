import * as React from "react"; 
	
export default function FruitLimeIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjM4QTEzNzRBNzQ0MTFFMUI0ODI5QUZERTkwNzlBRDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjM4QTEzNzVBNzQ0MTFFMUI0ODI5QUZERTkwNzlBRDgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MzhBMTM3MkE3NDQxMUUxQjQ4MjlBRkRFOTA3OUFEOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2MzhBMTM3M0E3NDQxMUUxQjQ4MjlBRkRFOTA3OUFEOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PueeXH8AAAhoSURBVHjanFd7bNVX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" alt="FruitLime" data-type="icon fatcow-icon" {...props} />
}