import * as React from "react"; 
	
export default function AttributionIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjFCMzlBM0E5ODQzMTFFMjlBRjE5Rjk4MkNCRDZGNjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjFCMzlBM0I5ODQzMTFFMjlBRjE5Rjk4MkNCRDZGNjciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCMUIzOUEzODk4NDMxMUUyOUFGMTlGOTgyQ0JENkY2NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCMUIzOUEzOTk4NDMxMUUyOUFGMTlGOTgyQ0JENkY2NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmRU4A0AAASLSURBVHjavFe/bx1FEJ673fvxEssuKCMhFIzi2BE2SQoSJVIScEEUQUSDQLghhTt3rkEKcgp3bmL/EymsCGEakKwoLxGSnyNZehEuwkOuAg3Exva7u2W+eXdPd+e75RVxVprT3Ozsztw3szN7DvWGt7Ky8swYM8ZExzkcxwG1Z2dn3+fXrhhfXl5ub21tmTc1YAs2YVvz4wTTmfHxcVp9+AN1o5hc9rJumNwjw8rJnk7GV4+E0fW0ok9v3aT19fUzsA0H/Az2JCEK/EBgIosL0E9YOVsHfdd103UW51k/iqI+D9s6v0J7Sjy0OQDDSmm6fu0qaaVEFsUx/fzLOsVxJI7YHCCnkGNOQVvxYncA+vija/T06RP68quvhcBDNshaVXKw8DbIBr7vU7vdpm+/u0u7e3tC4CHD3CB7WBzQTKqWAL3POXL//gqdPHGSwiAUAg8Z5qBj2wM28qPwplQPosockPg5Mv/y5Z+ktWb9Xg6Ahwxzcba2Yg/kgFGmHoG6HBCH0g1jTsI7d77hhIv768CLDMcoNZ6djP/LAU25Y9CDqAoBhy59eLEg2dnZobW1n4S/ffszTsLrhfnHzV+zglFEwORrRykErnKPOADe8zz65OYtSTK8A/og8Bl6T3TW1n6k1dVVQQJGDg8PaWHhHnW7XcqXdnGg9Gk6746qcoDfNRfMIAio0WhIvAuhkXVcPzxfagQKDeRYExsuVllY+nWgUD5LSehWIwDcZmZm6LftbXrefs6G4oJeVhmByMS5c/Te6KisUTxvcjGHnlOJQKkOlHMAC8fGxmhiYoLCL0JaXFykf/f3BR2ZZ+iHhoZofn6e9lmOUIDSzldEoDTcPB6uUv1ELBeOOIUX8Z2enpbN0LRA4CHDHHSy03D0FCixkbd5JAT4KsfeywtHLDNUmKurAxAnZK8DOj2rVYTm43MSbmxsSuLlCTLMQad2fV0dKB/D6s9nZS6z/+zuUueP3ykMw358cTIgw1yjEXJ3jIjqLlZODQLID6WUpYspqQfNZlOOJGQB9wFQjw9kDjrKtezDNvK56OYjZOtg+EoYaW0+EyRMYuj8B1NC4CHDHHTytaK6G5pqBGxeY9PW5qYUFshwzC5fviQEHjLMQSdrVHX7VSIghYS/AvCVCfKQW22rxV/PEGP92fGzNDw0LATeyI3KEx3o2vZKctVxoBDgi17tvaJOpyNfhsvl1StXJNlA4CHDHHSgawtDZQiSxFjhf/SoKV+IMTIyTO+ePp12NyM8ZJSiILqWMMBWRQ6Y3jGsIKVdevykSRF3N5Ta6Rs3KEq46biOEHjIMAcd6GJN3X75kly6EanKeg2PF76/myZQ72qd1XpxnucnpybpwsULIkOM0YrLvaDf3I5cSFJFj2Gr+zVL2GCS3YIQ73JVY1mc3vkFWpRkra3lPHPAsLcvWq2NdyYnpwo/HMfxXwgU2RYQegHbcGOEaXRpaekBF5G338TP6cHBQWdubu5zft2GA0jtt5hOMQ2XG9QxDBSBv3GtZPorywgv/Un1yf5/+ToGID5k2sPv+X8CDAB7rmknUlXq+gAAAABJRU5ErkJggg==" alt="Attribution" data-type="icon fatcow-icon" {...props} />
}