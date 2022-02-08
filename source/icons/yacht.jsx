import * as React from "react"; 
	
export default function YachtIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEVENThEQzE1NTgwMTFFMTg2OERGMTJGQjA3QjdGOEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEVENThEQzI1NTgwMTFFMTg2OERGMTJGQjA3QjdGOEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RUQ1OERCRjU1ODAxMUUxODY4REYxMkZCMDdCN0Y4QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RUQ1OERDMDU1ODAxMUUxODY4REYxMkZCMDdCN0Y4QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plk2aKYAAAZXSURBVHjavFdpbFRV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" alt="Yacht" data-type="icon fatcow-icon" {...props} />
}