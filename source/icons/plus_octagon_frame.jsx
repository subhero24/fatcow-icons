import * as React from "react"; 
	
export default function PlusOctagonFrameIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTA3RjE5NTY1OEZCMTFFMkEwRTY4MjJCMjdBREVGMUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTA3RjE5NTc1OEZCMTFFMkEwRTY4MjJCMjdBREVGMUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFMDdGMTk1NDU4RkIxMUUyQTBFNjgyMkIyN0FERUYxRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFMDdGMTk1NTU4RkIxMUUyQTBFNjgyMkIyN0FERUYxRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhR1zn4AAAYQSURBVHjapFdrbBRV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" alt="PlusOctagonFrame" data-type="icon fatcow-icon" {...props} />
}