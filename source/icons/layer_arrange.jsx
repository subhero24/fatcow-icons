import * as React from "react"; 
	
export default function LayerArrangeIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkRDMkI0RUFBNzRGMTFFMUIxODlGMTMzNDM0QzBDRTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkRDMkI0RUJBNzRGMTFFMUIxODlGMTMzNDM0QzBDRTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2REMyQjRFOEE3NEYxMUUxQjE4OUYxMzM0MzRDMENFNSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2REMyQjRFOUE3NEYxMUUxQjE4OUYxMzM0MzRDMENFNSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuoalmcAAAVWSURBVHjarFdNbBVVFD73zkz75lFCodjSilpX/QspxBSlygITYkpZGN3Z1ERdsavujRvjUhO3bIgBdyYsBDWEEKWtIRiTogLGhY3QYlv6Gm3pe/Nm7j2eM/fOm+nzlU6192Vy3/3uzznnOz93RsC/m/vel/cvaumNKg073oQAkPzo8NLHpw++2mjN7onLi8itqhAjepQ2fTVCDCLT/x+c28TlBWRZbgMFCpJUrJD1t5cAJu8ZjTUtP/4UgKLeofH1beA8vv6HsZ5ZPfOcmWdZjRQQfsEhLUg9H6DFNwfzBv6v7YE8J7eDF0i4Aqgqo0TGI+B1vj29VA5wT0gzUYRQDTVgaFeJjGqYVXMbOGHHn++Ct17rgfUAYGwA4IOri/DpaEcHM7CLhS+dO7pOIjW5CQuet3vHg+/0NTj3bg88KgNEmeBmBZooMIAD44sfl+8J+vtby57+Mz0+XHkAMPKkoZHd8M286dmvr3Slft8M/5pw1wF4vcuygaYL6xSIZ1iBYrMnBKJwacx+ojAASTsEmv/MLqLppT3wcbi0bgisMIeUcaRZu0EBYdbpD7+a+1mixvGTz/S2NRdhlDRnFpKgGum0gkR+XJDASmSE3KS5tXWAk8+moeImoUipqvyCp4kBjMeWNVem9PKhMb3bwJm9QBkFeM6jRdn6VkvDdaUiAUIJsiWhUtQFsxQb+zy4MS4FuasPwpi+R4EO3z/VeVhora8sIiyS42ZKACcOpPR+t2B6HufBvyXcIwl9u4ywIXLJWoUUUI0YCFQU8QxizAFrmgSMtvQ6GXohBx5TLk3xScwXZL2qd0FcIikGyD8O+SyuTknqyeQCATMWkOKQBxcp5bGiTgMGbBbgJ1fnf0IV4qlj3b1PUOlsbwKYXjaH8RnDbabn8felHPh+Uwd+XTZCZh5CXIj62hq4gMqwKlIWoJI68SdHsCvStEIbLxylefDYKnqqNgDZJa5Ma8YGBejqDYWQFLAqrRPSug433uW17NgC5/0yiY1Mi3CTIJw40XFER0pfmkP4k6iap+foPmMhH/7DSs1d+XByR5PLF4yZHGw3LlgppwrI5E9ALggpOqL4OjJWxdcwGAvirOCrU5gec+CuxRMG0LqkYSFSSuvmgnAUlUBp/STtocJqmi04MmPBZriwWRBms0BuvL3TLEDUZyfnb0VBgEOD3b0d9DJxkDJh5q908WBrSu+tHPhhwpvIgmurZvJuybhgn1/PAEc9leFioUmH0iiIFndkJqpFWuXy4pApvUkWiEZBSO8EkZB0F0iByd6YQpsySZ9cv3nxpKjV3pZEZlxTgIByNYreeaH9SEiReHEWYYHugvUQ4FBrat2dv9ONW+L0/w5RX/BSgQN76cwiwOxqQwboOqR8oViMM5preJE2V2xEs0U8TtItD+675voV1vLZNVKgYjAp6xTgfSSUbwOhwmD+7I1SF1tywE/fMh+UU+46t8B5b8veZqr9Alpdn4RK+PxmCYIgMoquLEzxsloQkpb6wo25mYgi5o2hzkNhGN51HSHPT8/+4rhSMj1jw90DVKe060h54XE49TweO9bdj8TsfVno5bM+erlthKs+mPedh6yHTUOSrlXVb3YqVQmCtKZqSWRQQPpFv+J5rqDYQNd1KEilzot7nkNqoI7fhtyY89/pWUm8RU+Z+WpvG59auP3ZMJQD89GgMJNWIn3Z+C84pyR/oPSPT0Pp/IsdJG8R6goRumFpsu/N6ZcU2R3/cOPHJNRfMtvABQFEP3hRaaruE6aWmfwR8jQ9+7NBucMt8Tl9IcJqvQIslItjoe7DaidbzedWmVr7R4ABAGUKdIIT6VqjAAAAAElFTkSuQmCC" alt="LayerArrange" data-type="icon fatcow-icon" {...props} />
}