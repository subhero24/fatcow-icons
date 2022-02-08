import * as React from "react"; 
	
export default function FilmPhotoIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkI5MDQ4OTA1NThEMTFFMTk2NTRBNTg1QjA3QzlDMjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkI5MDQ4OTE1NThEMTFFMTk2NTRBNTg1QjA3QzlDMjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQjkwNDg4RTU1OEQxMUUxOTY1NEE1ODVCMDdDOUMyMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQjkwNDg4RjU1OEQxMUUxOTY1NEE1ODVCMDdDOUMyMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pk55mm4AAAO0SURBVHja7FdNaBRJFP6qurqrekYTfyZRL15VVo1BQSUa8DdsBvzZXQURRMSDEBEUj+LBs6AEQfDgwZsnIxiMhAzsoiALCwuiV0VR2dE9mWS6e6a7fNXdE0fJzCSjJggWfLxX1TP1vnqvft5j+HbN2bunz891dCKXy8GREv+/L6JYLGJ4+J6k78F0f2ItGhO7d/cNKUfmbWlDOhJSOXAcRYaNlLAsC0EQIPB9eL4Xy8AP4JdjOfzgwf0DNE9FtEjArVTC/OYd2+C6EsrNwJVGKijlEhRs28bEZAleyYPnlVAqpSAihdHRvJmD8KFVAmrDCg9C+xgZ+RMuGZQEs3JFRCSR4szG+GSZjAZk1IPvGyKT2LqtF6s6yyjQHIZAsxCIs6d+v+tKp1/QiuwYInGx4NAa0BRFbmahThSZmEbgXOPZ63ZcOXkPwbiA9ni8A/REGW2/DCB8eh3OoX+W0b+KvJmrLYv3G+XS5VtbqoPnLgz2RqFGUGEYWDNGcWUEjoF9BZRDi4gwhJrDpwhPBhSKQGDCtwicdEby07qbhUDVGQ90quhk8bGSeOTTWKRZAiKUfGfpOGZMYIrqxfPHHlf1y5dOPzYfLBZh8MlOCB7FBgaHdsIifTZHS7R+7HUce8Z0YpAlbGd7rpvtgaYTsq+8VBoRYL/196zHd26NCIjckrYj80WAHz+862gmI098bwJfbkJ29GDvJsex92Uy7gXMQTMExMG9G4eUknkhxNRtN1fNhMDlnOUxT403uO3mjACbbwL4SeCHJqDr6HPwGrL4XTfvfZIRJe+8yYYsplv3wM3bY/ur+tUbQ1M6ZURT+vmL1/YbEybrObOugErEY5w5UEBIUn+lB/6bic4Yg0GSE6Q+qckJjM6ZjpEcdg3NkhyCs8+f8I78jq47bQuzPbVXsUhl3BfVvk0JaVoHSBEnpCYElGghCiNUQmMgjJOU6ZJSUFLavnYAESWl1h9JUmoILCSsJOQIUVrBONXcr46ORUs6/1rftQFvX7+ByrhEzMGa1ashbSpMGqTlPdu3Y2x0FH8/HIkJmBCUCC9NZxa34uJsRlExYqO7uwvZbJZkN3KdHeQZUxvUL0y8wEe7+nwPVEyBkGLGp8+y2KNXL573vHNdLFu+HP+S84SgMDl2w9IsoNIsjMqPqqe21XegNmzVjWz37em7v3T64vRX+l5Of2cW/D71+oeWi9O0tlM1i1hgNnQqa9s44V0qq/eVl4a+8i1fQrNBs8YTX4yblU/UK88/CjAAJEh6z6glK34AAAAASUVORK5CYII=" alt="FilmPhoto" data-type="icon fatcow-icon" {...props} />
}