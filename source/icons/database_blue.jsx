import * as React from "react"; 
	
export default function DatabaseBlueIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0FDQTAzQjU1NEM4MTFFMUEyQUNFQjhCMUZBODE3RUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0FDQTAzQjY1NEM4MTFFMUEyQUNFQjhCMUZBODE3RUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozQUNBMDNCMzU0QzgxMUUxQTJBQ0VCOEIxRkE4MTdFQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozQUNBMDNCNDU0QzgxMUUxQTJBQ0VCOEIxRkE4MTdFQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt3Mk+wAAAVOSURBVHjazFfNbxtFFP/N7GaT+KvOt5OodZtDWxFaxCVAJeDCqVJahIR64Q9AFXDgUKRcKiQUCU6IE1ckDlRISE2FKDcoEpBKULVQkvDRJqnS+COxkzj+Wu/u8GZ27NiOExNUUTZ6mR3P7Lw3v/d+b+YxIQQe52PWdxhjDd3Y1OcTntl5TjBj0hWICsYPC+xvMJN/wntgMGww4V7jTnkmMf3qTRpq+LC6cVaPgDbAGL48M21z61I82o3xWBinYxF0WwxPj0ThtUGM0xq3Hm6gaAvcWd3C3WQOSxtFdHj2B4l3z03RFHc/A8zY5Zkvhnsjkxefi2OUDHA8D64nSDFqysWeu98xglPHoH8m59gslPH+t/eRyGxdIyNeoSlOVa/ZtEa3w63JSy8eJQsZ1nJFpUzOPWikMLUh7Wcy4h1a882r85NSB0muZQzQ0+XSjmMDPbi7mNxxC2NgBzRA+DjXoB6PD8FxPaVjPwOYnH9sJIJiBVhYTqJglxWkYDrA2ljio+VDJl0W7LRw/PAQjtKa4e4ObKBxL2arILp+8x6eeXIMY6MRbJeAZGYL+ZKNzFYeZcfdEw25107TQG8kiGCXhaFeUkr73cx7+HL2L1qrsj8NlQEUOLlCCV/98Cui4QCGohH094TQGwrg1LF+PyYacN6JPqYlk6vAcTwsrqSRyG5hPVdAp8EpKHl7AxQPyQgBA/mijeXyOlbTWZhE7A4ptIhpGLBMDsvwF7TJtzYprLiueq+QOJQ4Kp7fyvlSdyv37TKAKQox/QFTVhukiCuRY/qdfmd6R5yQ4IbfGsQeD3IDHmTIecID96Bo2SqUmzHxxGby6/nldYWCFK4ZwOuoxdAIeT3tquPVPmf+OivpLbi0ttSxHwIObcVdzNoou0mcPNyHrkA38ZgpFGpGVQ3TmPI6RZ5EQPBarEgkEms5/J4s0XzuKh37uiDUd/aNl8/gw6uz+OW7P9ETtHBkMEJtF2K9ARjkgpHeICyLU0xw7TahJJ0tYLvoKL4vpTaRIQolZBoOhvH2+QnMfeaeXWsTA6bEJ5VaxXuvPY+VzRLmHmSwkspijiCcXcxCeliA11CQjysTjszVEl3afSjUhfhAFKfjR3CBUIz3dOLWwhKlZHuXTnNXGlA0KuCbn35D36EgTg9H8NITgxT1Jg6FWS0tN59JNd/Tv2yOor/iIkkUTKQSmPsjT4ypuYy3paHPAjpP8yXk6SB5kFgnKvE6GvoUtCjpKBo6O/STYisa6j4hoxjD/iUN5cdVyjEud1F93yG26hMizNORzzU1lXg6SP+nNOR70fDOvSTKdkXBLaWBhvq8Z5qKVRpyPW5o2spjWL6nN7YfLQ3HhiJ+PDTRsFxyKfcXlP9Xs9v0nn/0NPQR9OPBaKah8MdqNBwfxfnBKE7EAo+Hhimi4WomjevLB6Qhe7w09APKI5/yR0ZDmTtbX2N4qyQkb8Im15GOJjkIDbVP5ZEu1+SsfR4QLLd+45OfkygSrN0dBl2x/EPHbKAgq9GON/3mX8V9hshv5RobdBX79HYacu3mW31zXRCm5lj/6x9N8ZHjF4ZCFsb6Ajg5EEDQ6sCp4ZDith8D/q3IjwHpd1ffhDwqSHJ0mXUxn87jXqaA1HYF4uHClfTHb03T9PvyVrxnYULNIZIYSV/4hQtPWScmzrD++LOCG0HR0TVQnd5colXTrEpOlWKaeW5erC39aC/c/D5348ptGlonSZBs1hcmLUszfXcPkgRIwrrt1GO8TUng6fKrTFLQNYBs8ySldqVZc3EjEbG0/BPlzUbYWpyDFKf/yVPV+7cAAwB8kMRUpNacRgAAAABJRU5ErkJggg==" alt="DatabaseBlue" data-type="icon fatcow-icon" {...props} />
}