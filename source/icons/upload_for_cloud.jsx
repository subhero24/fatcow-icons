import * as React from "react"; 
	
export default function UploadForCloudIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTY5MTY2QkU1OUJFMTFFMkI2OUFDMDI5N0M0QTI5MEUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTY5MTY2QkY1OUJFMTFFMkI2OUFDMDI5N0M0QTI5MEUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNjkxNjZCQzU5QkUxMUUyQjY5QUMwMjk3QzRBMjkwRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxNjkxNjZCRDU5QkUxMUUyQjY5QUMwMjk3QzRBMjkwRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoYMmOsAAAS4SURBVHja7FZdbJNlFD7v99PfzZWsG7LNOea2bjGlGSJLQBdFLzRxuBkDAUkwZtmNsIVxYUIMd1zKQtYMQ+Yyw4gOIrL5g8QfZMkg80KNvcB1E6QaM6awlXZtv3/PedsuxYgdRMJNv+ak7fe95zzPOed5z/sxy7LgQV6sQKBA4IETuBenQ4eCq+rqmgYFQXwlG4YxBqapn56dvdx54MCbC/eLAOvrG36strZupqmxBqoqvWBiBXXNgKWlFEQi1yHy+58wN3etvqdn9y+4Pm95xbtB7+l52xsIbPhtyzPNUFbmASYAZm2CoRscqdjtBE9JEcSW9O6qqurg1NREIl9M4S7wJb//yfcafdVgd9pAFBhIsgTYBrCwjiZ+dCRjs0tQuaYUAoGNQ+TzfxJwSpK0taKiDAwsuYGlTwvY5A8twwLDQBK6CWtWl4Is29rIJ29W+Z4PDo6dxCw7TBPBUGi6riOwyOUjySK2gCFwGtwwDG4CVkbTdPK3o8XuVYTy0NB4ZMMTjz9cWVnGhRaLJ8Ful9EkcDrtMHD0FI/wxusdEI8nIJlIAREVRREmL/0IqVRiyuFwttAOsSxzrLOz/VWMq6+EgNTfP3r66afWt9XVP8KFlkwokECjTAn8w9GzsH//rhdp8eHDI2dffmkLJFMqX4t44HLbgTpUVOSCWCwB3//wM8zPz7+zd++Ot9DFyKcBpygKbRWYuWkYy7uJAptIYPTkFwTeirfCZL29u1rHP/sWMxe4Lko8RVDqLYHycg/3kbElTQ01IEpSF653/JsG5GBw9CeEaKQ/qqpMWVhKTdFxi6Uz0rAFxOPTzy9Ab+9rBH4VbT7jr+7bt7MV+k5MPP/cZgSUgaefLj3XBcO2CEwofvfoR3Hd0C/v2bM9gH4atUA+cuREyO/3+datawAlpUEoFAaXywVerwdsNjFTKAbjn3wNlG0OuJohYEMrR1uL7ZjYvu0F3J4Cr5yCSSSWkiCIEnhWuXlCodA0hGd+ne7u3umnVS5UsW99cxP2VsYyMni0pgocDjvEYymIRpN8yn351aU7gUPmN927SmvGxi8gqIK9J1801I7H4wI36kKSGNQ31NLO8RE2tcBGwlJx21C7VVXHcmtgcDHhfEfGNG41TYWBgVMTlBlZV1eHPbcCx459rJAAyXRdg2gsjnqxePl1mg/4rSS15fi0jvyIADMtAxZuxvhoVVM6Vzu1MHtSWvi8paWZA9MWu3jxO7rtziHgRt3Apk0bOSAFp9KTvwVpOSzciIHskHGIZZPlG4ERATO6uHD+WmTuWc9DxaAZaUfKPnvxQFxMjP9WFI0LN3dm0D0aUmTU+9tPeQtu4QwRsJWoRLgVjWNrb54nbNKAMjISPDg9PQNJRcEMJeyTxDPNNZr5ZAzLlGF/28WVzoTldbm+2XgM76tINByehePHgwcJmyqQjESuXBke7t/W3r77g/QJad1xcFJlEonY5D+OWmtx8cbkuXPfbE63zfqvwWucOfP+DsIk7GydaTisRqsgZeY5H6jGf6FFcuZ8MVo1mncF5wsd0X+gXUdLsRxqtgy4nCcApZci9jlzXcqcfI4VvORoGRLqSl5YCm/FBQIFAvf9+luAAQCQeWtAGuPU2wAAAABJRU5ErkJggg==" alt="UploadForCloud" data-type="icon fatcow-icon" {...props} />
}