import * as React from "react"; 
	
export default function TableTornIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjdDQ0RFNzU1NEMzMTFFMTkzNTg4QjBFMDM4OUI4NzMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjdDQ0RFNzY1NEMzMTFFMTkzNTg4QjBFMDM4OUI4NzMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyN0NDREU3MzU0QzMxMUUxOTM1ODhCMEUwMzg5Qjg3MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyN0NDREU3NDU0QzMxMUUxOTM1ODhCMEUwMzg5Qjg3MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt20QDUAAAU6SURBVHjavFfdbxRVFD93ZnZ3ul26XWIbTVRsiSkrb/jgi2CND4pABeUB46t/gYmBFELFKA08+KRvvpoQIoGy3W6IwTSUqA8NiWhslqYtiWgkGgrdfiy7O3M8537Mzuxu65YItzndmd/9OB/3d8+5IxARhBDO06fyl1Y9sa/qA/gITU3I/yif8BFxi8CYBZC0Mf/XyL6DBNWADaC2pevkBD6pxrpYJyt2tHEuey7b9QNkqsv2hvzh8RX4Br6GD+BDeo5rHzeDE+aXAV7NgdbFSkrGAIEmToIWsKyoAcKX7zYYnMagtUlcC5uC9V1yol4CnMOvaL7DvAh1Ie0fkh8r8C18SRwRetH2cVaKWIMjIV0tDdi2vVcGQYCIkNAiBt2ZvQ3bXnwB/BBL28XlH0Z1RQ3QWGcyIV+EiJ4ByybU9yDZGQP6CRjeLq7ILhr1hyOgmi1QDojqp5DK0FK/pAlqPe3jqPGGlUMGaNyxdfBD4yQveVvoX4xW9C21p5vC/ZDjYoMI3JyekQRs2AFakDA6HTeni0Qq42kUR0Nvwhi3QuMVCREGXsuuEwHdBrJ9gdd1/UJ6U5xZgB3Uz6RSRFXKZjTOCmKk1CW3mYQ//zIH/Tv6wfN8ZXSL1kTCdMrVC6vzaqbZHEpS3L0lLk92wlFjZFJBhTv0no5Rqj2WkwZcPbwTerpisFZV6d04JVoZYDpdQnjf+PVhDUzWkntq+lNkQeLomIxM7cwQxB0bOjSeGs6Bf2ZoL0970xovlHb1SUfYgITWFrMtWGs0gEFuPZQ17Y8uyufyF4dgxVdGcLdLiray8uFxgLMH93J0UvF84fvDL0GG+wmvjA7tIfgPOf/z/XtSfu5a+fR+GUnr4zFIujHoIkuW6klOBjlD8kqaikTH8XEG3mIRRy/j5PQc5n64hfkfZ3HqxgJ2nMhz/26Sfi27t54qYOaTQoB3j0wgi+nndZNqnlz3udPf8XNv2ACuFs+yEVqCxVmhR4NYkiHlGVKQqSsJ5iWGc0HV6zgx3tSvZUA7XTfg+dHAqt6uk3lkMUawd2EP2ai6knwwjxVye0BSIuGIJVXp1etOYFq9Z7TTXAXlhSTzzGdX7i0T61iIRNI48ob3dDtTQ+/Y3+7x/NyVd7OwxAylxvv5xoXfpCNX39sp8QodOz6eHXEbUsTowfO/0gnyAfW66ZECLH36dkLWbB2BXnMhKZMs1sgLT3noHLsceOASP5YrPt558BDnF8u4QPJnqYqFn2bxn9Ua/q7x+XtlvE3PF6aKsv9uqYJrtNZ9vabmWSZyCqqeOm+r5JjHiYb+lqm3OnoAhHfprqBjUDiUBTsmICni4OpzTQcDSuR13LVBkLcmFXPe4DU7Ox1KRAArVVMmg/tALGJAkKh0IWKp8UT69c6+I5PPxeu3oIZ6jBmnz7jBzHwLgzqmspm8I4gNMqFunCyQLhDhrMXGc1WjCEKc839olqPrQcLiSro+Hl5zw2o4Njkj055ouOFyarUpz49NFfUFI4Tb/43LDabf91/PrlMNdcgGX+5vqplC1gIBkzfmYXAXF5e6ovZxbLx8RQ0wWE9XgkLd8E0gFGNq5MFTdMOpas5sFrebL0TNHLCg9UeJ0ElLaD7gI+DWRuVYhAywRMvSHbDYbqipm8XXKccKPkckxMYbkV7MJsvOXytGLhft4qg/Po4MZiNX/lA5ViAPeNyNdTXdByhhLVOOTlV9jLLk/2zy41RIXUv1TzJZjLrpuU/nZ/GYA8DuLZIskNw3BvCp6TQl8gm0CqgsX/1XgAEAhE5TZWIqQhcAAAAASUVORK5CYII=" alt="TableTorn" data-type="icon fatcow-icon" {...props} />
}