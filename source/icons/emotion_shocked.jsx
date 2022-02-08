import * as React from "react"; 
	
export default function EmotionShockedIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RURDNzdBOUU1NTY0MTFFMUFFMDE4NzEyMUZCNjQ2N0UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RURDNzdBOUY1NTY0MTFFMUFFMDE4NzEyMUZCNjQ2N0UiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFREM3N0E5QzU1NjQxMUUxQUUwMTg3MTIxRkI2NDY3RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFREM3N0E5RDU1NjQxMUUxQUUwMTg3MTIxRkI2NDY3RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlqPJ8MAAAfmSURBVHjanFd7cFTl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" alt="EmotionShocked" data-type="icon fatcow-icon" {...props} />
}