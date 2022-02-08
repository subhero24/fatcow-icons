import * as React from "react"; 
	
export default function ManageSslHostsIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkY0MUIyNTA3NkNEMTFFMkExRDQ4M0RBOTJFQTA1MDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkY0MUIyNTE3NkNEMTFFMkExRDQ4M0RBOTJFQTA1MDYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2RjQxQjI0RTc2Q0QxMUUyQTFENDgzREE5MkVBMDUwNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2RjQxQjI0Rjc2Q0QxMUUyQTFENDgzREE5MkVBMDUwNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pu+54pUAAAcqSURBVHjatFcJbFRF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" alt="ManageSslHosts" data-type="icon fatcow-icon" {...props} />
}