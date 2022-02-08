import * as React from "react"; 
	
export default function MaskIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUE4OTMyNzJBNzVBMTFFMThGM0RFMDg4MTU1NzcxRUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUE4OTMyNzNBNzVBMTFFMThGM0RFMDg4MTU1NzcxRUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxQTg5MzI3MEE3NUExMUUxOEYzREUwODgxNTU3NzFFQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxQTg5MzI3MUE3NUExMUUxOEYzREUwODgxNTU3NzFFQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkaIN20AAAatSURBVHjarFdpbFRV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" alt="Mask" data-type="icon fatcow-icon" {...props} />
}