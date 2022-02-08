import * as React from "react"; 
	
export default function CupSilverIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDE4OUEyRDE1NDhCMTFFMUJDMjBDMkMwN0RDQkE4QjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDE4OUEyRDI1NDhCMTFFMUJDMjBDMkMwN0RDQkE4QjgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEMTg5QTJDRjU0OEIxMUUxQkMyMEMyQzA3RENCQThCOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEMTg5QTJEMDU0OEIxMUUxQkMyMEMyQzA3RENCQThCOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ps7mAvIAAAXZSURBVHjatFdbaBRX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" alt="CupSilver" data-type="icon fatcow-icon" {...props} />
}