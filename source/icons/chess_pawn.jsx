import * as React from "react"; 
	
export default function ChessPawnIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEMxNjE0MEQ5NEFEMTFFMkJDNURGMjhGRTk3OEEyNTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEMxNjE0MEU5NEFEMTFFMkJDNURGMjhGRTk3OEEyNTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4QzE2MTQwQjk0QUQxMUUyQkM1REYyOEZFOTc4QTI1MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4QzE2MTQwQzk0QUQxMUUyQkM1REYyOEZFOTc4QTI1MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpFKDWwAAATiSURBVHjaxFfdTxxVFD/zuTOzywLLx+6UhWJVBPrQV1qDxqTG0hCgTWxME+JD/wKJNSa++qImJj4Zn32TxNq0MakGBHeLrTE1qdTWxm2bQtgPoLAfsLszs7Oec2e3ErLALizpkLP3zp37ce45v/M7B65YLMKLfHh4wY9YaZDjuN3WCN3Bzk95nv9YEEWQZRdIskztZ7//cfsT/F7YbfF2i3OVXLCLAlLQH1jsP368/fyFC9Ds89GWsLa2DtNT07C0uLgcngt34KB5GAoIwYD+eW9f38T7ly7B/Pzf8OzZKtuwtbUV+npfgxs3foKFhadfhkK/frSTJbafVwsGFFw8MTw6CqFQCGLxKIiSBC6XC/txCN+cg4GTAyAI4gTNPQwQqmSXWCIByWQKeI4HuoyNfzzPQTqdwtsvsD7NPRAId1KWXLOwsAi2XQDDMJk5acyyLBwrIgaWyu7jD0MBdhACDTSPGyzDAlEW8ECeHV4oWJBKJcEuFA8ehhUeuVM/Ev/gw8vg8zVDCs2taB5IJZOwsrICq8srEIstgaapMDR0BniBj09N/ezCdUa9FNDQ3A//unu3h+I+iqALHu0CyzQhk8nA5gZKNgs9nUF4HHmC1ig8pDXVKFCtrzjbtsOPH0UgoOuIfCIeGSSMAgnJiAgJiYmFYzQWhVwuF6Y1VW1cJQ942lpaxjRF/ZZzJlC4sTB0WBBbSWbvMoZlIhEfv3dv/gecmakXEUko7SjdR9r9X7x38eLJvGmBS1FgPbnOQi/g1+HH69d+u/Pnncs47wlKohIj7peILJRVlEU09YlGbxNEo1HyNZN4NA5ej4escILmlOZa9SQiUjvX4KZDRC1vmYyEtt4mm8sSLjQ9oNNrrrSmrkzIe9zuU82+FoZ6x0vcc5dtbGyAt9ELuq6fqmXfWhQQ0dcDlAHj8QQ7tAwV6i8jH3i9jZSWB2ohuFoUkJH/Tzc0NMDm5uYWxDoKZHHMhREhiuJpmnsYCkh4Vn9jUzNT4P9IcVoiIqJoVKC/FDX1VaDJ2+hHMkK0e2EVzV1kIVX+AVhfWwNVURkwjx172V9PBcRgIHBVkeX7yHCQ3khDPp8H0zBYAiqHIilHkWBjv7Oj8/4bb751tRos7EVEvN7uPz88Mjo5MjYGM7MhOPPO20S1mPnSrAbIIPozmTRk0hmsE5I4noKzZ4dgdmYGHjz45925ufD3QGXDDkS0l4ZS0bbHX+npgUgkAqZpwNT0DDIfZhlMRJSMTGoxNZuWwfp0QCTyCFowL0jiv+O4xzWU/H5d4GppbRtRNTem25hjHaRdSjw8C0NHtqcdYkmKFswLI7THflwgHu3ouJLPG8Nd3S/Bq739oCguUDUN3G43JiKOVUSG4dzaNExmnfI7YcQwUdBVts1hZAjXsT44R/RcrQtUyyoMf/X1N4z1BEGg8GKZT8S+SaBDOnYqoQIDY7kqct6xUiz1FVWFye8mh0t1YrragkQhq2bSabh1+xbeXkVR2GYypl0qzUyTIsECo+R7Bw8GG2NWsdACeQMGBwef71lJgZ1c0IYl2BX89jqC0PE53nxrK4jUCiBhXcBjX8A+a/Fd2PKdwz5a4ubs7C/kguVq64EGbLpQWmstXHdI5SsoT8kC1SoglnymVFta7ZXKKWNXAmGt/xse+Nl+3n8CDAAmJmYmsmquYQAAAABJRU5ErkJggg==" alt="ChessPawn" data-type="icon fatcow-icon" {...props} />
}