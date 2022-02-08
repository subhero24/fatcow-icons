import * as React from "react"; 
	
export default function ShortcutsIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUVFRjM4MDY3NkI2MTFFMkIxQTE4RjE3RUJBRTc1QzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUVFRjM4MDc3NkI2MTFFMkIxQTE4RjE3RUJBRTc1QzUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxRUVGMzgwNDc2QjYxMUUyQjFBMThGMTdFQkFFNzVDNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxRUVGMzgwNTc2QjYxMUUyQjFBMThGMTdFQkFFNzVDNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiOu5DQAAAZHSURBVHjarFdpbBVV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" alt="Shortcuts" data-type="icon fatcow-icon" {...props} />
}