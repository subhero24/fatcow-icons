import * as React from "react"; 
	
export default function ProhibitionButtonIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDI5MUVERjM1OEZFMTFFMjk4NkFFMzMzQ0NDNjc2RTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDI5MUVERjQ1OEZFMTFFMjk4NkFFMzMzQ0NDNjc2RTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMjkxRURGMTU4RkUxMUUyOTg2QUUzMzNDQ0M2NzZFNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMjkxRURGMjU4RkUxMUUyOTg2QUUzMzNDQ0M2NzZFNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuB2WWUAAAbZSURBVHjatFdrbBRV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" alt="ProhibitionButton" data-type="icon fatcow-icon" {...props} />
}