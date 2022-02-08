import * as React from "react"; 
	
export default function ReadingViewIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEE2MDczQzYxMDlGMTFFM0JFMDI4MDAzM0JGMzcxQUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEE2MDczQzcxMDlGMTFFM0JFMDI4MDAzM0JGMzcxQUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowQTYwNzNDNDEwOUYxMUUzQkUwMjgwMDMzQkYzNzFBRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowQTYwNzNDNTEwOUYxMUUzQkUwMjgwMDMzQkYzNzFBRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkfMUigAAAV8SURBVHjavFfNbxVVFP/dj5l5H22p0FRFWCghfsGipVBIBY2xGsRQowt3bFy6M/Ev0MSNunOjO/wDJH4rhkQhsWkaFkJTFQlJm6pA7ef7aKdv5nrOvTPvzXuv1BalQ26HmXPf+Z1zfuece0YA0B+cPX8uhjoVxzG245JSQiL68s0zwy/zc+d7Zy+Y7b4Yk7E1/cmlnl//Yw4C9F6IurXiP3prmh4MPQvs270TCWZOZzFMbNwTbRRkhBUkd7ZJZAwzVhkSWbOZVmYYnPSYxIhkP8syl9DZp9hQJhA/KeCtuWV7L1dDzC9VMU0RCtci7OouYqm0gkf29hCfAr9P3UYh72OR9nQUc+jd1Ynurhw68oEFva+rAE9Jh9GSZ9qF2XnAnnxzcQJdpKQWGUS0OaKoBJ7Cjs48TgzsJ/ACcr5Pyn1cm7qF6zN/45kj++FrDZ/2rZGBM7cXMTdfwdTMvNUpyQxFBiyUqnh+6AlkMVsiYMjTFbzx2glUwxpWwjWs0r26GtKdjYnIsJhWhLAW4cC+3VheWUVsuVA2oIVigL6ebuR9CU3RkYrvzvt3Pv7OYrRFwIKTlU7oNiyVqyhV1lAhgPJKCE0eFgKPPJLWft7KlNm0kQpfffYpPL8DnudTuIGRV0boHsHTxj4HWlrdjBFnUrNuAIc6jhsCBuKwKaXsunp5DMVCHoVcgFwuh0P9fU17IQO8fvIHdOhplGt7cO4Ln/bG8H0NSUadfGHYGs4YUdxqgIAVuARx3ExevYJyZQXLlQpKpTL6Bo8T94pC6yEgpaa13IxChzcN1DwUxQ0sHDyFWq4GHfh44NfvGzQTRpxWWyMJKQLEK4cnLajHDxyk8NdQIf7L1VVbRht2NxFRrjyIvJ6iSnkI2oRQBCYN0Zb8liuKMRhLtOVASsE6nYcz9ufLoyjm70ABxcMXIT6ceRe+0hQhhVwQUvYr19iyid5CdZ2CGguihmBygigob44C9kzLGJduzqPgM/c+7qc+0FuU6Mk3NVby3lisJgqQUBCZRpOwFFQ3R0FdJC0XqBHibAgs0ovfIokR0dzsGKutCliJEnJdgH+jwJDSkPrD8Owl5D1NkZI4v/c0ea6t9ybDK2NkfdFNYdQNA2wVbIYC4zrm8Euv2o7J3TBHe+KvP0eeqNBEyar2G4CEkaUkY4AgoaofX1ujwCVWZFyNc5d8+sXT1J6lBfSoUaVRdgaIFgMS3XxgmLuggBWOj/5ITSegCGjbNY8NDbmuRwYZYeqHs6dU0zmtG3UsqG3KuuQXoqC0ySrgCAwcPW7BPaaBIjk+Nkr7qC3TO34+NnjY/oYxZFsEEgPSQ8MkFJSrm29ErVVx6PBRAmOnVP0oZsWM0WaAPcxkkgN3TcHFNgrQNlcZi8FYpi0C9NLmgHEeTGYoWF4uo3/wKUcBnYiBl1Bgmilgb7kKOOzjYz8RBUE7BYTBWG1JqNIqcIMTHnuSzwI+jkOUiAJ3iAh7N+mxLRoxd3K4FQn0Dwxavq1RmcTTfLq65lDvXY0caKoCYxsMLxoWbe3y8eyUSqdIOm/4vU6WfSfS3ycro1Wtn4TGTS6JIa4ilFNIi+fA5bkKFmlI4QmJre6iEe25I4+StzEmrv2JNap9xtm5o2Bnxj293SjQ/11V6HqusF6pGtVWT0K2nCPLjeTtj751Ey3/46lYOMMgkqGZe/rNBVwhYCuTos7GX7NLtv7T5mQynZbfcSu2WG2dkBdF+60zz9rTbJ1SuPPAv4GsqV/Erm2L9WZCmwdKIFCebakbf2FsQdZyKSXbh9K0LLLlce+/DzNjORVJ6f1PLnTYYdHcY2SuJq4cwkzZ66b1MH/A/A+fglv5ZJyndYMBPVpFWj6296KZCeV/BBgAzyEa1rdwDUEAAAAASUVORK5CYII=" alt="ReadingView" data-type="icon fatcow-icon" {...props} />
}