import * as React from "react"; 
	
export default function JasonMaskIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDZBNjE5NjM1NEMxMTFFMUFDRUM5NEFFOTdBRUYzNEIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDZBNjE5NjQ1NEMxMTFFMUFDRUM5NEFFOTdBRUYzNEIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NkE2MTk2MTU0QzExMUUxQUNFQzk0QUU5N0FFRjM0QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NkE2MTk2MjU0QzExMUUxQUNFQzk0QUU5N0FFRjM0QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoPn2jcAAAdUSURBVHjapFdpbFRV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" alt="JasonMask" data-type="icon fatcow-icon" {...props} />
}