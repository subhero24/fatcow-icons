import * as React from "react"; 
	
export default function PedestalIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzA1MDFDMzI1OEZCMTFFMkJDQkNFNDIyNzI5RjdGMjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzA1MDFDMzM1OEZCMTFFMkJDQkNFNDIyNzI5RjdGMjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MDUwMUMzMDU4RkIxMUUyQkNCQ0U0MjI3MjlGN0YyMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3MDUwMUMzMTU4RkIxMUUyQkNCQ0U0MjI3MjlGN0YyMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoFzSjcAAAcTSURBVHjanFdrjFxl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" alt="Pedestal" data-type="icon fatcow-icon" {...props} />
}