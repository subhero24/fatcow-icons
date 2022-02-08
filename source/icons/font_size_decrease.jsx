import * as React from "react"; 
	
export default function FontSizeDecreaseIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjVGNTk2NEYxMDA4MTFFMzkyOTNFRUJEMTcyMjY1ODAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjVGNTk2NTAxMDA4MTFFMzkyOTNFRUJEMTcyMjY1ODAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNUY1OTY0RDEwMDgxMUUzOTI5M0VFQkQxNzIyNjU4MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGNUY1OTY0RTEwMDgxMUUzOTI5M0VFQkQxNzIyNjU4MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpwfHmkAAAWdSURBVHjavFdbaFxVFN1zJ/O688rM5DET28ZSmndTSPLTP5VOGjWmMV9FWvzRH/0IBApFP0LQD0HBHxVSECoiKBWRaqQlTYmtNqkmNjVYTV+JSZrHvJ935s7TvU/uhSEkmXulemEzZ849c846e6+1zhmA//7Re965XKSgNvzPj756ZKz4wS8xFtTeDkKjckLu1KlXXuO02tFCocA6tBwHYibz7NcXv/oRvxZLF3cNj4nvDTwDH/8WYB1vdlTBuW8mITjyogG/ZqivQiUAA2g0I729veB2u7GpgdnZWZiautmH737GyMqLO3Hx82eegwt3IlBv17HOSw9iQH2vw5gYkkBwKhbXdHf3HDObzW5XVRXMzN6GR4uLUItAOA3Xw8BJi7vfvSJ+98YLcH1FhENOExxy8FuBbeqjd8gJkcaqyYDOarMNdnV1gd/vZ7uPRmNw9Gg7cBzXTO+lcWYqy8DoFaxHgdVYrnNRii9vaECnZXs3KwbQ2trm5Hm+b9/+/XD//gMEAJDP5yGZTIKnrg68x72d41fHJ2js47e8nfjhKDNlWA0HtI1NzWcbGhoglUqx3Wu1WiAiRqNRBOCBv5eWenEcETGJsYixWmZO4ktSKQCTXq8fam9vhwcPH8LdP+6mNJzG1NLSBrFIDDxuD1TodN047m0JQEaxrJSMOdn/8un6+nrIZbOwvrYGS0uPvo1FIsFsNgMpMcUUIfFAtdEoAWAwGk3DbW1HwB8IwsbGBkxcHT9fKBZ9SUGAIrIqHI5AHZbhuLe7U623cEqkZ7Va3Ta7DVZWlkEUxXvY7xeE5I2UkMSdayCeiIPHUwcWi7VXrbeUA6Cz2e2DHR0dbOeBQACCwcDn2B9NJBK/kgJow/F4gpVBt8UD/RMDIEuv7qk6THMYF4rDtYmrF/FVHNl/T2CKQMZlRLBXVpItNz9JAEx6hw8fhnAwDOvr6xAJhy9gfwRDuDN3+1EmnZZKrmHgPP+CB3sBMBkMhqHGxgbwBfwQCgZhevrmJ9ifwMiR1PL53EI8FmVZID9woxytVpsqHnB7Se/AgQMgCCnaORqQMBMKhdbwXVpyVFRlbpmUQA9loKamRjUPdgNgMJn44aamRgiGQsz7kYSfSSaTl8bk0BXnMpktzymiHi1ms2o/4HaU3onnj1ksFjpvWWoFQRB/unH9Mr5LlVppOBy6JaAScrkcCz+Wye2pBa/3hGIe7ARAZ0fpke0+Xltnu49Ewl9gf2ybxeamp27OkBTpUKIgpdTW1KriAbeT9DD9fUaDHkSUWRJr+8PY9x9K6S+98RARRUx9OI3jCpiBFPKB5814LlQo5sF2lNqm5pazBw8+DWtoPLSjPJ54Z868Os+ovsNDJyKWCIw8D0Vso3KgoqJC5kFSLQCT0WgccrlcsLq6itZqAZvNxo7f3R4iH4HI40FF7RCCrq6uZjwYH78ysS1rewLg+vsHTns8HkC5gYAmE8HPvRaXAdCuKx0O1ibOVOGVDW9P8v0gqxSAgTebh51OJ2xubkIa07q6svLR5OS1S5Tp3SZwOl2Ol/pOXiwgCSkTBIJdDPV6+X6gCACTHvq+m248JCk89QAX/5ROvj0m0YRCQQcrQQkA9ALFPJBVoHM4HIP78b7n8/kgjelHYl3D/k2MdQzfLkHvQ9lsdoF+I/sBzeFyOcDb3VPWDxiA1rYj7NQThATupMAmmZ///X0JfaEMkXO4+2X6jZwF8gajkUcCl78fEABta0vrua3a+3ESNlHg3sJff25zvl0BoP7naGE5AwwMqgJvUj3l/IAAoO/wg8RemoRic3NjtOTUKwsgGovOyXKUw4eXF+RBYzkAVB8bRj2Gi7IhnXYbGGsKM0B/SGow9mFYShVK/MBYku4QuwIghOaSfzZ5aeG0gvrLc9DfMn6HemfLXdP/EWAA8jbDSKzoBh4AAAAASUVORK5CYII=" alt="FontSizeDecrease" data-type="icon fatcow-icon" {...props} />
}