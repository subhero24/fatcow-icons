import * as React from "react"; 
	
export default function NextFootnoteIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTQ4REQxMDIxMDEzMTFFMzhBRjBEMEQxMDhCMkE3QUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTQ4REQxMDMxMDEzMTFFMzhBRjBEMEQxMDhCMkE3QUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNDhERDEwMDEwMTMxMUUzOEFGMEQwRDEwOEIyQTdBRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxNDhERDEwMTEwMTMxMUUzOEFGMEQwRDEwOEIyQTdBRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpJvbi4AAAUzSURBVHjavFZ9TFtVFL/vtaWvr3YUhFomDP1D4A+nJBIwfKkRxrDzIzE41MgGWVSyaTZYJsGEMNxw0UTjTFz8RxGGRjBxc7YIqCvsI3GjA8bCNqaCbAhMGAT6Qdf2Pc8p95HyRtlImjYc3n333XvP7/7OOb97iSiKJIy/iNNPp4po2MYONszO3QHv2nADUGVb+x4LfA83AA+YQ94ZTgC3weyMrFO52oyCzYVGozFu3Ovx1DQ3Nx2ELiEwptu2l7nv5lUQhGNNjQ1F0PSu9H01BhQ63boyrBJWwe6Cd04e028avkqy2+3tOEYy6EsbuNj/qs/nm1j0wL60taT0JLT4c7kbJ6XJkJDYjliNAXVkZGQNUgY1Y0hKSo4aGrrqlMXUPjI8fDQv75mCqelZqd954YKtp7+/r7i0bIcV603BsNnwiEzvHkiBp4GOu4mbCMYAk7epIFnD82qO5wk8SUZmVimuJYvptM12/qwgiATHocHvFth1YGCU02iIBozXcBLb6PQqNWx7gjGgTElO2atgmBsRanW8P+BK5U54fII7lLHgFAWB8Bw4WRQ1/Ie54dBwS1Hz0rEz95oDXFR09GvX/vrziCpCNYc70ep0xsdTU6Nk40R/noFjjVYrMcDsq6p+YnfF3gqchzZ4ebByLUnI7tlT8SIPi1l+PvGbw+7owDbali0vVMrCsIgCAPBINYypP/TRhF6v7zEYDO9xHCdOjI8fMZ/4ySJjblUAKo32vm2Q3f0Y49Onur/0er0EDcJRvkI1LHLs8/nHVFftyzrV3VXS19tbB3nAbEhMLK87UH/t7Z27EpGdewHAAal5IyPDLdCetdl6hgCMy+lwkAWXi3vO9Pwj8oVYhiFOu53gGIxzm8Xc1fL9d63dXdYK7HM5nUQfqb8kHUCrAWBBXF53ulykuamxlUqnc+zG9R9c0IcWn5CwWy5gDAsAwAl+p1XwL9g/v3Z2/CLNA/A4hyd3UUK1SqWqwwlvvlU+xDDMUozp4gQy/hV4vEOzmmoNSxzzdj8TNDEx4ezIoDQv8AAKCiAx8SE9xPH+K1cu10Ds22g5IUvr3ijZbgZHOgClyc8vSOvsbLfinGfzNm1EoO6FBSIBln6FhaasBej316vH8zcFFxSAKjsnt5VK6hi8jwfs0gELDUCWZ+L3B4zGw9CXhiUYHR1djI5FmhhFRVsrBVH4gmUVj4IOHPb7hL9eW08lFa/liocLwgJ3HCzAREPz0cYdyADsfgB2nxxMs+kaK30hczO3LD8eP14PL6Ngk3IQEgC8nawHi6V1Pk+lcpqGII5quIZu1E3rWqB9HJ3nA1ugThSUYQdda4b2iysyQK9IUpIIdCEXBcDTEmLWeAfAdYT1H/4+LQo+Mv5+vvqOMIThUhplPNAufnzeLsbut4hyLQjHjUgFigjxEEi1KYfE1JrdgSCUIXSkjNtvPiYwrAkPJ6kqkGGP10d4CO6nf0yRQy8/RaqI2T1Va/KHgwmewWv+6TI+756rLEgntz0C8cK6AsDw4RNS8+uLMwTdCCJD3k2PIRUtVjJZU6gOJQPc6KyDfDs4DweTsDzZAUSMRkGQFwF44RVLG9aGEgBh7LNnzl2yZS0mtrh0Y8CTcnN6Bl5Q4X6pIB+Yz+Lunwwsw5CEAGwDWIxcYY11lrbi3Ez/S7P1DPmv1pQLzWHUh1Ay4KJqd1OmF1Esw5JYbQT5zHJymXO/JoRBBwwJBzvEB0ELoJ0DFh9YhqEMQVAhAnuYquzY0s7DCECSeULPhWVS/L8AAwCNkUlZcYAxFgAAAABJRU5ErkJggg==" alt="NextFootnote" data-type="icon fatcow-icon" {...props} />
}