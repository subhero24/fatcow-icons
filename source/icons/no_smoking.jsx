import * as React from "react"; 
	
export default function NoSmokingIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODg3MDkyNTI1NDhCMTFFMTk1ODVGQjAxRkNDNTMyMTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODg3MDkyNTM1NDhCMTFFMTk1ODVGQjAxRkNDNTMyMTkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4ODcwOTI1MDU0OEIxMUUxOTU4NUZCMDFGQ0M1MzIxOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4ODcwOTI1MTU0OEIxMUUxOTU4NUZCMDFGQ0M1MzIxOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpY+f+0AAAmeSURBVHjavFd5dBT1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" alt="NoSmoking" data-type="icon fatcow-icon" {...props} />
}