import * as React from "react"; 
	
export default function SortDateDescendingIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0UzQjNGRTU1OTVCMTFFMkJEMUVEN0E5MUZCQzY1QzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0UzQjNGRTY1OTVCMTFFMkJEMUVEN0E5MUZCQzY1QzEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3RTNCM0ZFMzU5NUIxMUUyQkQxRUQ3QTkxRkJDNjVDMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3RTNCM0ZFNDU5NUIxMUUyQkQxRUQ3QTkxRkJDNjVDMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnvznRkAAAQRSURBVHjaxFddbFRFFP7m/uztll1IsV0hBduHNiVttbTQGglW5cVEBR9ICDGYGBLjA7woL4YoxGqMiVYTo/EBW6MiiUFLNEKiiUDXKpRGtMpWSSEBKVK3ltJ2021Z9o7n3J/dFnZvw9ZdJnvuzp25M993z3xzzlwg96K9+/E3R9i4jgIX7a0Puw5190UkG9cLSUJt7zjUdeT4aemW70/8ziS6uK8Q4Ac/+zpsAV8cHpfn/x6z6kdPWiQO3i4J4VZ27W0vWVlZvQ9C2Swhwb+biyklQkuXYNuTrRi5NoXR8Smr3e/3oSK0GPu/CiN6dRyKEBmRBF+k+eWlC4PPtr+yayxFYPvOF0sbmtePtLbUYfWqynlZj47HMToRJ642EPGC39Cwsiw479hf/7yA8KkI+vt6yjrfe+NfFo5W29Dc4YJfik7ieuLGvH7TNAWz3zORSOL85THPYT5dS71g4vpMB/1tZgJ+TTc2ccfQyARM04Sm0uQiF4lkH8ReMs2khcFY3b2RTRY2XQzpLLiUAoqqQuRJwdIhYtetisEEFFdwKq2pEPndRi4BB1OZEzxUVSDP+LdsrrkEFAUFD6mzWamKKBiwzOwBcWc8kCagImMI/F+L8CCgibRK8wUvvAgod4qAsNXPEdD0jGcLF15qn7mYfEkWB1KroxZIfC6mRaClbStdX8XF154nYhplTJPTZjp0sbHrKE4ICtUW+1xCJs0pbyRQ8dI7hPlymoDpJzbFQfhKl9PcCvTqehSt24DY4c9h3NcM4961iPd8B19tI2L7P4DQtJQLbw+fCCRmLCwLMxWIOAKSaZZbJO56sxMgpnppyAYiDwQeeQLQdXpmEY3Sc/OARUC3sKQySwOWMqenoQeXWMADG9el3O5mByls4ZSHSpzBwiPTZJGgSWYUWVjubmAC5mjSPHq598cN5Y9vQTz8LSp8Rbdsl1Q6dbQwRwd2srd1I7MTUAKLUNz6KAgLjMnYPEOwNljc8H7dPT9UP/Qwyu+ntzcMzzSWOHYYycmJtA7ooKGVV0Jb84DjmMxnQszMEPhPGOw+jh2Rvx4cmJzqF44XyqoD/vq2mhV7lunqepnRlXSEIBcGQiG0bHsGyf4+mLEJO4AtXwGlph6nPtqHWDTqnBVFxiA0nEj27Dk71DYYi5+hphH3KX7lpWTLyBZ7fGRonzZW7W5e29Ra89hG4OcTtiDrVqPvk06cHboSfvqXc6/Tc9kOldzOrIfJrrJPxE1R0e+QybbHuC90oLHq7aY1jTYJKhH6HPht4I/wU6fPvUC3UZ442z5w+uIeJL0/TMhKyZoONFWFB5/bKtm4zm1OX/6/jlwSX7Ss6mVbCHiueYeXq4Tsbuf+H7KxXNy6kMTHJIqc+nSua/qfAAMAEAZ/VN9tcA4AAAAASUVORK5CYII=" alt="SortDateDescending" data-type="icon fatcow-icon" {...props} />
}