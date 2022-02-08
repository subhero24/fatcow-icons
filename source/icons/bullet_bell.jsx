import * as React from "react"; 
	
export default function BulletBellIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTFBRTM1Qjg1NTMwMTFFMThFM0JFREE0QjNGNzk5RjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTFBRTM1Qjk1NTMwMTFFMThFM0JFREE0QjNGNzk5RjkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MUFFMzVCNjU1MzAxMUUxOEUzQkVEQTRCM0Y3OTlGOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MUFFMzVCNzU1MzAxMUUxOEUzQkVEQTRCM0Y3OTlGOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pio2vrUAAAQcSURBVHja7FZLbFRlFP7+e+/MnUentNPSTim1QB9Y26koScU0RhM2RoMrF7oR2Ziw0Y01ipoUiS6MSdUFmIAhYFRMQ7XKAhM0LMRoAJ+UttBOYTrTmTLtMI/OfT88d5ySyq4zNWz6J2czc/5zvvOd7z/nMtu2cS8Ph3t81gGsA1gHsA5gHYCw2guMsXJz8RPf7n3HzbMDtmVBUo2h8LNfDLDVLqNVAuBHD4UPb25teMnjdWMhsYhgUxA9ux9C5EIcbXtOBoT/q7UjB7tfaW6uOdS1a48/UL8JtjIHmHGMXbqGKz/8Dr+v0fHzrBUANjwY7hM49AvMfKp+Y2D3lt4nEOp4FKaahpYdB/QYeLcH3Y9sx7nhn2D4xONlaWBllacPhl+sr2GH3S4m8jyHUHsfGrqfg1hVB6sQhaEkYEoRQJ0Fc3nAeDekvAxvlQeP7R8dohhyuQC4U2/37G3fVvdp7zMURwxQqBj05FlY+V9hIAxLSxLts3eSc2SqYkCVNSgF1Ylxm0wpBwA3PLhjX2e7/1jvky8Ddh6WLMFWc0DVAxRyFkbiKzBPkGhfoOQiOEGEbdFfiob4zRSm4tIJJzmZWQ4Asa7Gfey+lg04f/wtVG9woePhnfA39YNZyr+vRPQDRvoO7YwXIC0pkHIyEjfmlf1D4x849JerAV8g4EYqaSCXZVjKG0jEf0FPXwItXTuppgJMU6KkLjDBRdS7oRH1mqJjfi6NvyL5TyjGQomBsgDwNhhq63zw+UW0tDaisFTA5J8xpFNZhPu2g6OKbU6AZZInzdpi32UV2YUMBo5cO0oxcg795Y5ieyaau+zyCmgMBSmBjepaP9ram1AT2gbLu5kg8gSCh64ZKOTy5MMhk8ogtShfXBZfJbtAO3d58cNkModgyA+n5QwWbGZh667Hwbt8kLISDKpeUw3oqk70K8guZjGVkEfpvkRmVQJAPnom9vPY2K2Iv9ZLw4UrRhFEF1VugTPz9MxIX4bpzO0iC4aqFUX42fdzZ+i+Wuk21B0aXz0yuW/i7xgaWoLgOKLBNpG5fgXRiQlMX51GIjIDf3WAWNCJBQM+nwcT0YIjPq1SAM72WppJyJFTZ2cHpibn0dS2CQL1fCl5HfHpG0UHTVHpWWrQdQOyJEORiAriZSX9lYxih4XFj07f/KbKw9c+L7oO3P/gFqSjMXR0NcOmqSO4GAmRFdsRj6Tw4x/p10r3sBYAUFLy/LufR06SCrmnM4XXd/SHIYo2DF13foIQ3Ihbsd9w4Wrmvfe/nPluefj8Z4tV+D3gtJDGHppaG71tgy9sfbOzs6G/sTUEzma4nUrjxMj4Gx+PRL8mnzmndaUWrhmAZRAeslqyBrLqFcwWWSpZ4e7+rxWAle30OrtihbiNEu3K3ZUvn38EGADvSboFOzlurgAAAABJRU5ErkJggg==" alt="BulletBell" data-type="icon fatcow-icon" {...props} />
}