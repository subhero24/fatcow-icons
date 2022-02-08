import * as React from "react"; 
	
export default function OutlookViewSettingIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzU1RjI4MzYxMEExMTFFM0FDMEREOTQ3ODZDODg5OEQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzU1RjI4MzcxMEExMTFFM0FDMEREOTQ3ODZDODg5OEQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozNTVGMjgzNDEwQTExMUUzQUMwREQ5NDc4NkM4ODk4RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozNTVGMjgzNTEwQTExMUUzQUMwREQ5NDc4NkM4ODk4RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjN+nlYAAAdhSURBVHjarFd7bFPn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" alt="OutlookViewSetting" data-type="icon fatcow-icon" {...props} />
}