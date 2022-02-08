import * as React from "react"; 
	
export default function LogicFunctionsIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUEyOUY2ODgxMDdBMTFFM0E4OTZENUU4MzhGNTA1QTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUEyOUY2ODkxMDdBMTFFM0E4OTZENUU4MzhGNTA1QTkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBQTI5RjY4NjEwN0ExMUUzQTg5NkQ1RTgzOEY1MDVBOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBQTI5RjY4NzEwN0ExMUUzQTg5NkQ1RTgzOEY1MDVBOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhFDweAAAAXhSURBVHjarFdrbFRF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" alt="LogicFunctions" data-type="icon fatcow-icon" {...props} />
}