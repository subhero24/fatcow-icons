import * as React from "react"; 
	
export default function GeolocationSightIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTYwMDNDNEQ3NkFBMTFFMjhEMDFGMDc1RjlDMDAzNDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTYwMDNDNEU3NkFBMTFFMjhEMDFGMDc1RjlDMDAzNDciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NjAwM0M0Qjc2QUExMUUyOEQwMUYwNzVGOUMwMDM0NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5NjAwM0M0Qzc2QUExMUUyOEQwMUYwNzVGOUMwMDM0NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj6pWgQAAATUSURBVHjaxFddaBxVFN752exf2mxDVTRpk2azm7TGrDHaRCOCb+pSEYTSp1qo0EepvqX4pA0IQhF80SLkRamCKKR5EaQgBlppEje1mia7+esmTdda2+5uZn9mdjxfvDfenZ3NTu1DF77kztxzv3Pm3PNzr2Saputh/lT8kSTJiay8r639pGSaMZJ/2U6APuaCKUnji8tLZ+ix7IRUggfqGKCG2trPkcyb9/NlxPttcnnpCA31/2uARIpjsqKMPYiLy4ZxiAwZh022bq2xTgl3hD5XVXVMJuNElI1yIpPNnLG+xzvMWd+DA1zgdOoBJdIR+kyW5ePiy5Kux5dT10/pun4Lz92d4Yvi/GxifnBzv1R1d1vrntNuVY1WeKJc/mJuIXmChsZ2HpBC7R2HFEU9LkmyC6A/rnvZ7EfJpcW3SfkVkpkjrPP5LTl6hznIQBZrsJbPgxPc0FGVBcLP6/E0fCdEkiu1tnY4k81CcZqQgTMIbkmuihuN8DchC6yt3xilbZnc80TLNy7mYcbtZ7JVHlD3R7oQ7S4OUvwhYZLmVgh3mHIXT10R4m4x2RWsBYcoBx3ih4sG+BRFeZ0LGoYxdX1t9UvmWs2S1ybNTwiyE5YoL7M16+AAF5eFDuiyBqHcHY4Mu93uD/jEtcT8ULFYnGVfYy0qOwh7CbvZ8y3mpYxNlgUbGhq6uzrDE1suKpXen52fGwEv94BHUd2v8oChiL1GylOM0K6iaUzh7wwr4r5aPJEBFzi3ApJ0Qae4BR5VVV5AYAGalv9KCDi7n87m/2TIbFPxwJEBJ+eHLm4A34JH+nqj6TqldfzXKzNv1CutCLCnn+r9njhj2wlNz8QfhfHqf0Etb980JFeMBU+mjgE+WVZiTvpQRR1w2BG9DgzwOuSqTEO+P7VAFW7CKSlk6/FVVUIJHmHv/7p9++OFxYUfhAzQWarlHejPx3+bOcFSlPMrPfufPOnz+175N6CqS7FplI3Lqup+Fg+7grteo3+fCqllMuWaAwN4iqaFuh/weL17eZzpRukyN4NvQalQKP7EqxV1tAPNzc0FRpJ2kGq1UnRzfVNTUx6cnB+6eIpzAwpX/7h6VqzZnR2dX6Pp1Eq1gecGzg8eHDQBjG0a25ZsV7iyx0AXdFYYQLhbLBUv8CBRVOWl/r7+t2ocWnyyIse4LMZifReDnDiOgYvLQgd0WQ1AsGWnpqfelTZPMvImvF7v2Z4DPfusPRypxmU4WIpW5DnWgoPLgBs6WMsuW7shgudmOp1+T3RXMBhMkJuPWmQlm3YsGiljDdaKMuCGjlrnAQTPnUQyMaZp2nlxIXXJ0aHnh36MhCM76p0HIANZrBHnwQlu1l31WmdCDHYS2vqf6R8JBAIxm54wvbGhjQYC/k/E97ncxjt+v+8YcfVZ1+RyufHJqclhGi4T7omVwPZQSmgitIZCnbHWlpaR6hBwfDtwpVZXh5PJBI7lKRZ8hpN7AYxoJKBjPT5wcPC0z+d78X5Uk8t/vvTLxVM0vMHqQdaqvO7FhEV2kPAYCmS0N3okEGgc8Hg8UbsFhUIhnstlL8Vn4ufYAfUm2/N8rYuJo6sZy/FGtjU72cnWetHA122wPb7Lvlh7kKuZXef0MLhtaoPJymuBoewsTB7y9fwfAQYA0kkH0eGiX0AAAAAASUVORK5CYII=" alt="GeolocationSight" data-type="icon fatcow-icon" {...props} />
}