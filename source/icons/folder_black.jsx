import * as React from "react"; 
	
export default function FolderBlackIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTIxQzEwMUM1NEM3MTFFMTk0Q0ZGRTc4NzJFOUQwNzgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTIxQzEwMUQ1NEM3MTFFMTk0Q0ZGRTc4NzJFOUQwNzgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFMjFDMTAxQTU0QzcxMUUxOTRDRkZFNzg3MkU5RDA3OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFMjFDMTAxQjU0QzcxMUUxOTRDRkZFNzg3MkU5RDA3OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pp4ATrQAAAN2SURBVHja7FdLTxNRFD7zKC22QElrQlQe/gBZIJomJkaXggt8LDUSf4SKe9kY/Q8+YIGaqAGjMa7b2MQYF8aWKvQFtBQQ2gmdmc6M597OlClMy4BjcMFtTtq5vXPPd75zzjd3GE3T4CAHCwc8DgEwaHwoFHqtKMqwqqqNkbIscBw3HYlEruBlxSkAPForcT42dh/wu4qKYWoLjCJF5zA+/uAyWY9WdBKAh0QuyzJMvXhJI90OQFFUuH7tKoiiCKcHBjbA9P+uFONSlmGB5bgZZG9kO3u8ngYavcvlopHuBKCAqlbgzt17FOBeB9nz8aOHw1bs8QZKVdWA5/kdAIwN3n/4CFuaYZcBDQi7Q5eGQK8vjyUAyoCq0Oi2p8AoQCvBYnZJhZE+hGGAZqxqgM5ryACJ1AqAdW6ZmjUbJHKO4xuWjS0GrJyTdb9+JiCfz9XobsRC9HOYgjgzOJgD/V60mXA4PFIDQBhgCQOkBsiHae48MRsDCTvn1uhtaKYf1kXJw+TEU1qUJgawCNF58zRUKY/FvkNFrkB3dw9Eo1Gw+0AjQNs7OqD7xHHS9lGcatliQFOpc9IJP9DB0sJCQwaCwaPQ09sHKjpuVKCNAAQCAUinkyAIwlsSdw0A2YwAWF1dgfLmJty8MYpzqgUAFmLxWLU79vgoJwD87e3w7esXZDE2hVPluhrgUYgKy8tIbS/IKDyJ2YRlKvYjRoQlX1sbiBUZCoXCsq4HEm9ewCH9ufwSnOrvB6EkUEAUgAkEs0/NJ/u3+XyQmpuDYrH4DKdEQgpvVq1NQQC32wN+fyesra6Bi+dtaYJdAF6vFxYXFyGZTE4Q+k1SzNDQMukUrWzyW1YqlAFHnBMNbmmhD7xCIS9iAeZ1BoA3n01WMDVnQ+dAEiXgbCqi3XGktRUymTSUy+K0Hr1Sx4BQ2kBhkSAQDGKLlByL3hgtHg9ksxlYX19/ZURfB4DkpqvrWJUwvSUdO3RgLako9fncEszPz0eM/NcAkLZKp1LQ29eH7ajSG5w887ncbljA6GW58gkvBfOhpAoAGUhjAZ6/cBEkSXKYfoYGlM1mifq90aPX6p+GDFPCRb7J50/owQScfFlhquqJLG/E4/F35vwbDPnRTqJ1/oXO2OnE32hJtDUiQHUpQvOSQv3HrwCSnn8Z/qfBHL6cHjSAPwIMALWpitgssYmzAAAAAElFTkSuQmCC" alt="FolderBlack" data-type="icon fatcow-icon" {...props} />
}