import * as React from "react"; 
	
export default function SubversionIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjQ2ODY4QUQ1OTVEMTFFMkIwMUM4QUFCQkUyQTlCQzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjQ2ODY4QUU1OTVEMTFFMkIwMUM4QUFCQkUyQTlCQzEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NDY4NjhBQjU5NUQxMUUyQjAxQzhBQUJCRTJBOUJDMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2NDY4NjhBQzU5NUQxMUUyQjAxQzhBQUJCRTJBOUJDMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlfBMTQAAAanSURBVHjatFfbcxN1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" alt="Subversion" data-type="icon fatcow-icon" {...props} />
}