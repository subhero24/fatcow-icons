import * as React from "react"; 
	
export default function NoteTornIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUYwMkQ2MjY1NEMyMTFFMUFERDlFNjgzNDk0QTlCQTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUYwMkQ2Mjc1NEMyMTFFMUFERDlFNjgzNDk0QTlCQTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFRjAyRDYyNDU0QzIxMUUxQUREOUU2ODM0OTRBOUJBMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFRjAyRDYyNTU0QzIxMUUxQUREOUU2ODM0OTRBOUJBMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plvd5fcAAAS4SURBVHjaxFfba1xFGP/NOWc3V01ztaZtLC0oPlRIurvJNlREQdQkqMWAD/4Fgg9RW1/Ep74ZWBB98F3wUhNUqoUKotH0sme7aR9UVKKg2JimuYiJMbtnzvh9c2Z3zya7FtYsHfbbM5cz8/vNN99ljlBK4XYWh/+EEE46NfSRo/wRnwnVi5MALCHgCevTxMSlp6jHc8xQE4P3P/ckdZk3texmUYEQ4tw7H48wJslfBQKNvi/p/wjw42lqRlgtu4zPBPLAva/C96c1ZphAgCa3SEcN1IrURwPKIoy/EcZ0yt/ZxOqiZ4broQEP7fds7TTCYvH+QfuRcarYdbJCOmZ/sxoB2rGiM7r5eX0J7H2s7HjLNeB7gQ1oAvXwAp8e3n9pIEfPKIn1/wiIEOZ2An7uFhrQHmDVCMJTaa5tBiUN+n4YICAgKmmAO9kGrJALVouI20GUX+qP2EhPz+lm4kQ/ub4MSPBaQgV2UFUDzNCOBguFF1chkhrEQfrDdADyTCIA4RK1kZl2MXjKfZybriXOxU7EgZwMdsOkbUlLVCBg6V3RS03NcN//RrttYnyYFvdKauR3og4yUxcw+IoBsQmE36OSOTOL+MvpB6n6O7e57gIzhXH3g69h2zYsx9pBID8wcXkoC1zSuzqVKe1g/CHagbFcBj/zJeIn3TKQrG3NFOrcn00Nz3N7YGL2cHg8cTJY99qbw+eKJ8/pmLIhm34PyT7Tv2Se+9zX4zOxZx8Ndvje+SJ4NnXMgFw4TI/uwjx38th87IkgjmQ+k0SqfNw82dBukKzC3AeixEoZEj20uGKh+iGS49nUoGLhOve5k0mlvn9EC9cL83T/dw8rdc0I1cPj2dQQrZPgdrvx96IG2q++kVzxPQlPCsTH2rXFZc6u0Q4ubtthcj420kaHZizTEUif/TMwyFHq91Rg6DDxzIwLMsL4WCvQ9wLm3j6NgRddjni5gg1EfCnR//xrwM9v0eKWTkaxsS5kBAG+dPEubROTycXYaBeNhzyDzCMx0mnqSjtS0cv80DhrOk9uvrVBNq2NuiVMQM/69fwU+u7jdFyKhEef3o8rVnKRNXV0tJemcDBR5QFOhuqiQgSWhWzIpIrZMFLmhoJczCZc95MFcn1h3lc6K1ukyp4DpD7fCeKCuEV0rDimgggrc9Vzgdz8Ab2HLHT2CDS2EUGHztTpABo6cfndGfQ9sNfotdZkZDJupUjIO+64uxVLv21g6Q+FDi+PlrZVUpQqzecoqcOqqj0dV82GtKgVaSISPpavb2J5SVGXh9Y9a6W4r49NorZrszmCagQIDrbTDBmR6CBbWyESKzfZGSRanLXgisbxSnio/d7OBiyraYATYTNsSiz6OAoklphYPrgiMgFOJH6NBNgQ2QZExWyo4ESbICkYcSfFI3QyiQU6jhvsDXynJwJKmIVUbRcVhcoaoGgI0XwnGvTnik2asCHp2X1AYHlhA/cfj+Gnr+bQfbAXew7uDwioGghEUDEdq+X1/Ozc1BfDQW4Q5ie0ulhjq9ev6ryxvrIG/8q3NXsCg/vCWt+eDe+geh9J185Lyq4XpbMg8AvJWoGAY77VGutwHa5UOBxu6G+12/15/q8AAwAcLAboyrPq3wAAAABJRU5ErkJggg==" alt="NoteTorn" data-type="icon fatcow-icon" {...props} />
}