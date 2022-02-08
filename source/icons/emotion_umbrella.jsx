import * as React from "react"; 
	
export default function EmotionUmbrellaIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTgxNzI1OEE5NEIwMTFFMkI4NTlDODFBNkE5RkMwMEQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTgxNzI1OEI5NEIwMTFFMkI4NTlDODFBNkE5RkMwMEQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5ODE3MjU4ODk0QjAxMUUyQjg1OUM4MUE2QTlGQzAwRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5ODE3MjU4OTk0QjAxMUUyQjg1OUM4MUE2QTlGQzAwRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pu61+MYAAAlKSURBVHjapFd5bFT3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" alt="EmotionUmbrella" data-type="icon fatcow-icon" {...props} />
}