import * as React from "react"; 
	
export default function EmotionWhatIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjYyNDhDODE1NTcwMTFFMUEyODg4NDU4NDExMDU2QzkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjYyNDhDODI1NTcwMTFFMUEyODg4NDU4NDExMDU2QzkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCNjI0OEM3RjU1NzAxMUUxQTI4ODg0NTg0MTEwNTZDOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCNjI0OEM4MDU1NzAxMUUxQTI4ODg0NTg0MTEwNTZDOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Puq7TmIAAAcESURBVHjatFcLbFNl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" alt="EmotionWhat" data-type="icon fatcow-icon" {...props} />
}