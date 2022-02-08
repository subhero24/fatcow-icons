import * as React from "react"; 
	
export default function UserBuddhistIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzE1MDI4MzY1NDBDMTFFMUEwMjM5NUE0RjQ2NDk5Q0IiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzE1MDI4Mzc1NDBDMTFFMUEwMjM5NUE0RjQ2NDk5Q0IiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MTUwMjgzNDU0MEMxMUUxQTAyMzk1QTRGNDY0OTlDQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3MTUwMjgzNTU0MEMxMUUxQTAyMzk1QTRGNDY0OTlDQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvCMH1IAAAZBSURBVHjaxFd5bBRl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" alt="UserBuddhist" data-type="icon fatcow-icon" {...props} />
}