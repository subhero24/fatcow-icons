import * as React from "react"; 
	
export default function LcdTvIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUJGOTdEREY1OThBMTFFMkE1NkRBOTQ0OTBCRDJFNDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUJGOTdERTA1OThBMTFFMkE1NkRBOTQ0OTBCRDJFNDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5QkY5N0RERDU5OEExMUUyQTU2REE5NDQ5MEJEMkU0MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5QkY5N0RERTU5OEExMUUyQTU2REE5NDQ5MEJEMkU0MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiCLAsoAAAWmSURBVHjaxFfLbhxFFL316J7xM46T7BAScrxhTQSCH0gUiUCUP2BFFhF7Nixgj7JggcQfWAZFQdhrZB4KPxCHCIkFbIJwMmPPo7urOKeq+jFjExuySFvXt6u6+p5T91U9ynsvL/NSEHvr1q1vlFLXlZxGxkt3yf+mroDk5dutra33LIYLBN/YuCxGKjEKZpWfRWhwPV/k/+YZVetEH6ePv94hrcVkPXn86/51YpNAnzs3vpTPfnxFRLt2tYaDjA6icis9iM209DIj1hjJKRgbrMuxxhglVnOsJcOcwU5tmFOSWQVzRpyy8vrB/ZpV30aHYOzKCG4qiBIFgxpa82WAZBlAcon3eGathxYAYznEgqelhvcM7FhYNYlEIAIM52Ab66qqrP2ibL1Z51x4SEvcpTZRDHcJlCzjbqFtLYmIiR6gtvWuO8CGToTmJpXz4gDsqiqln0hLoCyw0iI+DhKBScBmCRzuD8BZC84xwQJgTaQD2iXgsUHPMTOtrGr8lkBJDxCYgngZGDcEygAcPGATeCIQSCQCpuPuLglRIY3oWFeBhEYKei0lPJDwEwHFuICVpQd8JEDjBMxPIEANhEAggc+7nSRCDtM8ysTh3oVyMTHcMwTAoCpLUYy99WHn9IAlcF6TiARyztch6BKg9iqFhIZ1G3/vAC7y51+HMqmcnHfzHpDoAYNdGuMiAZYaxjZPkjxgGy+gKpDD1qrgDatYeiJHk0KeHpVBHwwnUkxL+ePJMNivCifjSsvmsk+1lwjwlolhQuZLTL4Qf+42uTyP4HktaX48reTpqJDBaCoHR1PEGskGIaAvfbDbR7vxhZESm3OFCmV4Yg4oE7NZpxCEMNQkQKCXZWhGAEUMDwA6GoyF4fShcyrp9bIQX1dStDj0gwohqQjq4YHQ8HR4LvMh4IuancVET9iQA7HUGH8NPcBunsC1CgQVup3Ns+BJHmjcOTM9CCaruvXyGWwrZKFx2BxczLXHy5BJ2I+dLzYgNhm4DnpQVGBdNflAD4VGpXUEYYOBe+luFRilOYiCF7iOJahYhvAysUKs2xxQIQR8qHRsKOzrUxikEZPKcD48DBn/wg5L1R5cLu5au+gRpZOwIpCsFatA2+Mh4MXS0Vg4QpxsFstK1y+H+7T70LJtzB92Nh9ttECzwnVB67SuPu+6IRCyw6NJGY9Vz92peITylVq7YFCH8ISTCPec86p9zu0EUdLe+/AdELHmG1EB0BETCCChpisTuqFxcL8zoYdnPmqkpxS8LwhKyygxljIGJRBgKiQhyl7YYEuEpCxxBmDnE/SBAt7NuocRjUwqL9vXUCg8Kp1vPjriB4ZvMrqJc+eeflQ9GOm3H1qhz6RTsPZ3CI/J5IsvPb6COh5QyX0ff/Kp9PsLMh4dofR66GITjBdlPD5qdG9uPK8X5saNnQWMR6Og1y9cbFjpmjEPinNr69Do1RcuhWqgRnXPaN/RXE+9zuc+6bn1jR08X1u/iJOwRKh8TMiWAGJUlDIcDmR5aVUGg2fBE9T1uNGLqzJM49HoUFaWzoX5lfl1J9gZDrFueRWdsZj5Kr5048a7Xy8uLr1Ts3rudzHYr66uBrKs6TjnZHl5RZ4BSIk69cua6XN4eLh3796997l6BfIq5GK3Lzznyu7c+ei7Xx48aMCYsG9cuSJ3735+jcl/BhssmieQ31UCXZCYwyfRtzdv3vwqz/OrtYcePXosb7/1ZvO5zdkffvpZNjc3Gi9Np9Od7e3tDxLYCT8wZAwZ2bRgkOSkayXLsqv7+49mfs98v7c391tDy8OH+814c/Py1VPszrbi51x9ts7btz+c+ZSqYyn1d33HeWzXu7u7krz6wgRoebizs7N81t+Rqf8P/yWkx4yfdq1BXoOcP+P6OsZ/Q36DHLwogQyyBMn/40/QKeTwjFXx8q5/BBgATqaXzW2UZ/wAAAAASUVORK5CYII=" alt="LcdTv" data-type="icon fatcow-icon" {...props} />
}