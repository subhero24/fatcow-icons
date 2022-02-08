import * as React from "react"; 
	
export default function ScrollPaneFormIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTE1REFDRTM1OUFCMTFFMkExQjc5QkY4QTYyODQzN0MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTE1REFDRTQ1OUFCMTFFMkExQjc5QkY4QTYyODQzN0MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MTVEQUNFMTU5QUIxMUUyQTFCNzlCRjhBNjI4NDM3QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MTVEQUNFMjU5QUIxMUUyQTFCNzlCRjhBNjI4NDM3QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po+cQQgAAASmSURBVHjaxFdbbFRFGP5mzuyyBjWaUCq++aRRC0utSQvdFhEWSkGK+GaUVmKUhBie1GBiTEzqJfGBS2LQUFB5MNHUVt1GJSQYLhqjD1ZIeOZNY6K9LbvtOWf8/zmXPWf3bHsqQac7p3vm9v/zzfd//6wAoI5+9PWYFqLfdVxo3HwRVKUUEEJMa407Xe0iXJg6LSnpiy699OzOAW6648jHJX0ryrsfjjXtO0o22baiR453fiuK7TiYtx0IaREaXhshAkGIuK6BJMcOiAAd7tS6dggEoZl45P3TKJ39Phi1CPDAjq29OHRgMGyZLc8jl7sN42Ojpm33wJOoVucDh4SKLqH9s6svpbPn8d3o6VS7Lu4ZrDlAVmaqVYyPf4mrVyZNW6W6gC19fZC+BzEH2PZrhw8jvz7vIUGf7X39aGm9NzXsq1rXxBCcma2i2L8b2zy+mXX/np42faEDwZ4XHI03h4djCzJfV61uTe1AS2Qs77JcqdIx/B4bY1mSeJGAgEukoU9sB0pZKD5WwFsnRmP8SGQBjS9u7gHzi9dnIz/+9Js53GAqb1xSGFLXXIMDTh0JeSIvtrWwHtt72mtQNSua19CG+bmMZd7b2x8MGB9DYHLy2soEBzRQt0uDiuuG3i9qPzqVHODNCPNXhwA9gveYA2imhMKDV6eQySiCZJZ264Vy1AHLqo1rRKCuWDQ6oxQsJdKcABxbY8G2a/PpvEXEMd6IRcIUFJUkJnESZnDsxEmcO3/RWFhUhujx+KZuHHxh/xIOyGQHKCEZhooAM34nZ9n4N5+fShWG2/YO4eCL+0NIlJImsmIOWPUIiGAXAu8Nv4F8PhAijQ2btpAOLEOIVq+BNqwXBi2L41GLCAcIVenxowEBTh6HXn29hgA8HWhZphDZrhMuraT0jq4egaQocGzKUlRDRJj5tJvewga888EXpAmLhwGHV2/PRtgLjp/ntDGm9RIcCKhnLg51CY/bujseQuHRtlRCxONZiKKiw8ajDihuSyRhwg4dkkfXCFG6MIzpgPaOQEudLgpYikViiAnvOFJwIOYELaaaIIC0CDCEioXI3GrEkirIRLZ9IWJOrFiRIRGTMSVkYRPx+4AIFzDqLfzLidEBhZOnzuDCpR9SZcPCxi4M7ns6fB/59FuTS2IIUGRlldWYDY3w+Pc3X4fIAUnGL2Pis5FUYdj31BCeG3qGkNAmC778/EDiuGOfTKxMOAKJkeNvI78uH3rc1tEdu+WkESLHJxOvwZcck5CiHHGbJCNOvfsOvOJnPm0mGSFqWYYQtd5DDjjefFqHL6Wl0le4Mvmr6X947Trs2vlEmNvjSkgKJrj6jBe+DnR1dYLu+L7XzdMRz+vq7Ixlw6lyGTt27SEeePP4+9TcTIiISrpR6Gh6pd080nY/OtY+kEqI2EkmnaD/TOKZuQrxKovNxX4zZLZcobZqPAos/4JoUepNjjTB+STVbzI+OGl5TOd6Y97G3B9/NtwxZPRSykd1/MzE7RH9+NdF1wIK2azCz79cbQhfNj479dclcwOgx11U76N6903aXtavNqoMy3U2mKHKMZnFf1cYkgrVG/i/yz8CDAAtrn3SbuCDMAAAAABJRU5ErkJggg==" alt="ScrollPaneForm" data-type="icon fatcow-icon" {...props} />
}