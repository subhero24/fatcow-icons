import * as React from "react"; 
	
export default function PartyHatIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUZDOEMwMkU1OEZCMTFFMjhCOUI5MTNBMUM3RkM3NjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUZDOEMwMkY1OEZCMTFFMjhCOUI5MTNBMUM3RkM3NjIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBRkM4QzAyQzU4RkIxMUUyOEI5QjkxM0ExQzdGQzc2MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBRkM4QzAyRDU4RkIxMUUyOEI5QjkxM0ExQzdGQzc2MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtBYkmkAAAZiSURBVHjatFdpbBRl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" alt="PartyHat" data-type="icon fatcow-icon" {...props} />
}