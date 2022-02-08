import * as React from "react"; 
	
export default function BowIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUIzRjlBMTk1NDhCMTFFMUFCRjlCNUYyNDE3NTA3NDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUIzRjlBMUE1NDhCMTFFMUFCRjlCNUYyNDE3NTA3NDIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5QjNGOUExNzU0OEIxMUUxQUJGOUI1RjI0MTc1MDc0MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5QjNGOUExODU0OEIxMUUxQUJGOUI1RjI0MTc1MDc0MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnFyaJ4AAAWrSURBVHjatFd5TNNXHH+9fuUql9pyCoiwTRIV1ARQDBMz3dApIDA2DgWERUM0Di1zHFUHXuFUEIbjcB6JBIGJilGOls2FLMIfyxLjpnJVRQ4rlqOF9u098up+1JZQwJd86eP7fn3fz+/7/XyPAgAAJ6/0ytCJ7CJ/tGeAD7+ozLjlEAveM9EfbtezJ0JzC8vmnJJfJPH7D1l+KMth/gJz0W7XBprKFL+xMRLbs4Xl9yku1wVrxxUT2cL9MUK0Vc3TJiM9epm3SgWtKQ4zls1iBNMPf/j5XwEGgL1gaWNn7/H98bMSiKKgAmzwXXwoD+nl+m7evcXWwknALWMxGcFsNhuYm/LAmGIMKJRKwGDoj2Tfa+VtgRX1BTLujf59jI2rkbx9+Vza1dvdeQ0DUAMOaC1PuIr0bB13MFO/cUp2czCTrfhoRbDPuvVAsEQwdaBSq6cZn1TBfsWE+ql0QHHpdtvAHmR0MzHui46lSEboUM2QOOBwNJyPOtbYWOu3PWjPrY3RBTvxXeQZdnqkXc3iRfxtPr4B4MXzHtDe0Qa6+5VX/+kd+6P1L9kj9Awkz0LyPSU2hCOLiPcYGV+J9gNIBsnZu8UiIOyReN0pThQnB1vB1oqkeponeCdTIkayYuxhXU4IFEUvhe4OJmFIvwqJMxIbJHyaLEZihYWwfhnRUzMRBxtbgsTzVtFeyZEQS/igPKEWZ8upwsvV+ZV1MLeoFKZG2LyK+9y2GOldMTCcznrSmJrJOGMGEBi5Q0PR7uzWpuufum3LH5Kpra0xQwaG3khOJMenovOXSF4QF0M9xhXI7a6E0DJtt8/GE17lZT/JRLvYMK+yHqacLMJ5vAZzBYkJySJg6Ju/Y/QMADCBhrPOX057w1hkYbm9FgzeDAXruWJcG3qRvEIySrJozm+uNwSiaMdqI0f/ABP3UFOoGgdS6YtGb+o30Pbn/YAtn4XUb0q4GETLjgVz+5RXUiKcUnL3ecDMGFuYW1gC089caEZ6nLvev+ZFtxzetRg2lsTW66gTlCFs17k2eVrxs+LdoaQkFl7L2AjTwq37SMwFRFbX5ERKjoS+B4L6MdbVYOPaHGD7rDC/uNzVHQwOD4HHnV2gT86pQvrntOIhDTp0+YCPz9bWe031geLSvfjcWBTjpEgtezJnt2sW71iMMxSXfTtVZD52nCoyboTt79eJ/JjGjChHmBG1dM5un+YBXw8LgZkZD3T1PAXSwcmKRz2jD0mej2tlx2ucCYEHKg8zWSwAIQR3CiILcE8xmHD0jHjw9xu5mZk5GBsdAaiB3CWpNqIj1TAIOYr5w4yKTn/P1X5i8e/3AhvOfV2lp4HNeglyk1bB04mfQFLbObMoMjjuXjfOhIuFYXzYkP9V/XxA8DGTM+Om2Gwzy9purOFEVdYuiTCcD+/mhNTOFQSfNq/xDSiv7P9B7Gg6GmYNa4qFMKe8DmaXXJkRDNPAYVJfhXtHzNCjdclrAxJBe2MhcBkXAyZlsuPMhUvXSbufHYAJNMnMobxqQAx0Ut5gzaZE0NFcApzHxIBjxAtCIKp0gZiWBXu22q3FG7UavqUx35DajkGMDQ9KJc+MNgBPfwSipRQ4j7ZoQNzQDgcdAAtNrXgGADL5ZAuZiOfSWMZFyfuShvp6JJ3GfgjEXtAhvgic5U2A4pp+mV18qVkfJ4xSI11uYZJtWbdop6FjlFalxKOYV9qpAnFueS2sKTwIRWHG+K4NSJywrfe+tdKVJ6BlgNs8uxpLAyL99LnW/Io6fJcfqS3mdA9oQsAJ8ePfw5t+mfImmV7n01hUhJDdx4VJB0eG+9vRvoc0tWH6HMHQxFnrFwsenfvm09W0ZkvT7SER6pvV17p1PWCqZdyXtN75GqenphwZV5EXhtojGUboQj7l5BfLqwUwrmv8g7qUFPECbjwTpPsttHG96z8BBgCpNW59sCGR8AAAAABJRU5ErkJggg==" alt="Bow" data-type="icon fatcow-icon" {...props} />
}