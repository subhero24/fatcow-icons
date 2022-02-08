import * as React from "react"; 
	
export default function NewEmailIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjMwREJBQjYxMDlGMTFFMzhGOTJCNUVDRDhDRTJGMzciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjMwREJBQjcxMDlGMTFFMzhGOTJCNUVDRDhDRTJGMzciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGMzBEQkFCNDEwOUYxMUUzOEY5MkI1RUNEOENFMkYzNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGMzBEQkFCNTEwOUYxMUUzOEY5MkI1RUNEOENFMkYzNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiFqg2sAAAWwSURBVHjatFfrTxRXFD/37mCV1kCNYNklLRZojUJBRQEhxQRJsKsgGjFtpJak6Jd+0v4FTfqt/dY0tSCvNC0+2OWhYoKkWqG1ldbYV6pWoYY+EGqzoMAuu3N7zp07w+zyUsRJzu59nHvO7zzvDIPHe6Kq6q4M6ELE04Qzdre6clMiDifhCT9s7/tNL77z2fdi3D8pfCEhica0RnvE86SU84qPug681/qroOe6TwjPbYNoTA/tEQ/xLrZyx5ufXKxu6O4TaLDoHRKitU+I9n6DaExrtEc8xEtn5nTlIyjXDnzafb6y4OWCvJdWwuVBAJ+f4j4lRCDp+BPzFEDOKoCeG8NQd/H6xYaD+dtwK7hQAOyND1qTV6xKvHCoMNWVtGo5fP2XoYix6QIIhBAGsC1OgP7BUTjadfPPe4MDWz9/t/SWYnloAOz1D9s2r0lNuVy1NRlCjiXwyz3jEJ/nJAEkTetWYAxCAai+cAt+u/l7zhdHSr6zg5grPvzAx18eTktNOnFk+xr4e8IBt0fwAKaVgynr5yCuaGgca1VzwI70OOj3wduuvD2j1840fGuCmM0O7a2j3SeK1r9QVo5l3TsMMDZpMD9qbQlF0VEAWSsBTlwZgM6rf3jrD+WXU16wGZOtuqf54LZ1JenPx8A1VB7U53f5jJojQGgoIwNB/HTHB8e6fj5dW5Vfps1wdFnQEV2yISkGeu8ZQYrSFma20MOB0PQqGpS9OgZqtSU7SBeJ1pq93hbGmZvSl1EKi1tw5tQNnIrIpJ2/ZBRFJ6RAzNosCUIwQ4xDN6SFVKXgs5QALGOcu93F2yGkh6YUCvHIXUoo5Q5sgO2nWyE2Mwt0jL3AxGUomk0gYTcITYlmBGCp0HUIhULwz+CgFMEW2MUNzAKei4sDnaPWaIC8tShsGS6PAXzzowD+INw2zUps/NU0DZUzSeR+ZkMi1CkWgc6+TmMdjZEuR4FUssP3MfZUkvjPsUPycSMX7ACs2DkQQOe5DnC6nJCcnArdl77CsUsKJsrIXA/nOs6CC9fIUpku+JOSkgqXkDchIQHS0l+xbiASPjyEPNiywWc0HXKMmAkAQeC4+9qOnbKTECD3zhKlHKyw0Bqzudv0lORVoRQGh1Q4FCAUxtnlYlqF2jzAyGUcTre3QemuMmhvawWX04ktVUDWps04bwGn06VETynfmJWNZ1qQ14VJrMP6DRuNMOGYY8LFCjGldGwOAFh/0gNlu/fIaemu3cCo+yj309zKATa1LkxexhEseiAYAtNFHLun7jc0MtUIIvPb5gGOABh4Pc3S8nVpaXC+szMsB3K3bAFPc7ORA0o5rachbyfyUg5szs5WCakumohmJLGzWUJAHijft8/K7r1qLOVQduNauW3NuPVkJsp1XeWAWSlcdSW7y6UD9QgAwswBhwOONzVJCzMyMqCjo0OOTQ+8WlBg7ZsgiTIzMyUveSAvP9/wwBwA9GkeoHipJNy/f7/lkYqKCkuJaVUF7auxWffkOeKlcTAYlLJAlVwkAB7xEjOtChobG6GyshIaGhqkpSS0qKhIrpuW28Ni3yP3FxYWWmDp9tN5eOeTIeDhIOJPeTzybXYyEBATE34sZ12S+Zhz+5q5jkqF3x+QcxoHAn7cEOLk8SaB76diGGnIRjR/gFRV30uw4sMuWo45UFd/TFqTk5MDXq/XygGy1u12Q01NDSQmJlotmNZzc3PB4/HIHCguLlZtncPh2h/QC6Ewa+XrHMZhcvTfHrM+4k8qD5AF81kb+dh57Twt3pMkHNFA4QxUQK+L1Bw1+3sZJZOwBUxEXMnmhTPzTSgsGUb5y/8+pP9mubnxcoZxAwDnYUoW5+NNyiTld+f82FAeuO9paXnGbCqPp5jJMhwZGel5mNcpMjcWaTXSs4v4QRlUd+AdpNH5AOBLEzyNtGQRvyGtGM/2SWY+/wswAIdmTcMJocO0AAAAAElFTkSuQmCC" alt="NewEmail" data-type="icon fatcow-icon" {...props} />
}