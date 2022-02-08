import * as React from "react"; 
	
export default function ImapServerIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjMwQzM0NkM3NkNEMTFFMkI2RTBDNUU4QjAzNDVDNjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjMwQzM0NkQ3NkNEMTFFMkI2RTBDNUU4QjAzNDVDNjkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCMzBDMzQ2QTc2Q0QxMUUyQjZFMEM1RThCMDM0NUM2OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCMzBDMzQ2Qjc2Q0QxMUUyQjZFMEM1RThCMDM0NUM2OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoSUPkcAAAa/SURBVHjarFdpTFRX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" alt="ImapServer" data-type="icon fatcow-icon" {...props} />
}