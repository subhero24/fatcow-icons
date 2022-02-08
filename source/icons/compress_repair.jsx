import * as React from "react"; 
	
export default function CompressRepairIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDQ5NkRBODYxMDk5MTFFM0I4QzY5NzdERUY4Q0Q1MUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDQ5NkRBODcxMDk5MTFFM0I4QzY5NzdERUY4Q0Q1MUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NDk2REE4NDEwOTkxMUUzQjhDNjk3N0RFRjhDRDUxQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NDk2REE4NTEwOTkxMUUzQjhDNjk3N0RFRjhDRDUxQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpO96QQAAAevSURBVHjaxFd9cBTl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" alt="CompressRepair" data-type="icon fatcow-icon" {...props} />
}