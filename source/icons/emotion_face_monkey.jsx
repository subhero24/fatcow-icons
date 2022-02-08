import * as React from "react"; 
	
export default function EmotionFaceMonkeyIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Mzg3NzA0Rjc1NTdEMTFFMTk2QTNGN0VBNzA3MDA1RTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Mzg3NzA0Rjg1NTdEMTFFMTk2QTNGN0VBNzA3MDA1RTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozODc3MDRGNTU1N0QxMUUxOTZBM0Y3RUE3MDcwMDVFNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozODc3MDRGNjU1N0QxMUUxOTZBM0Y3RUE3MDcwMDVFNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pu52nxUAAAf3SURBVHjazFdZbFxn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" alt="EmotionFaceMonkey" data-type="icon fatcow-icon" {...props} />
}