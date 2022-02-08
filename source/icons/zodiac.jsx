import * as React from "react"; 
	
export default function ZodiacIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzQzNUIxREI1OUJGMTFFMjk3OUJCM0I2QUY4OEY2QzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzQzNUIxREM1OUJGMTFFMjk3OUJCM0I2QUY4OEY2QzEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NDM1QjFEOTU5QkYxMUUyOTc5QkIzQjZBRjg4RjZDMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NDM1QjFEQTU5QkYxMUUyOTc5QkIzQjZBRjg4RjZDMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiZJNwAAAAVYSURBVHja7JdrTBRXFMfP7M7s7uzyKKhA6wrio8Q2YuqjoCKmPppatNJH0vrBtqaxta1oWlpNTdUEtY+k9kOt2gYJEAFbBAxFMFQCuosLvtJSQ1u1YlnZtYrIyrKz7A4zt+fuDnR5Lp/KF2dzMrP3/uY/59575v4zDCEExvNgHiYwWt/CjwoWqAyR9Zgjpwapwpy15iVs7x3EcSm7K9tkwkQFZYCJYolcYcpaPRwz4GAX7fzpzNs5jcT2QCQSTtOxRiuZuzk7PSBpZv77h+OX7a0mV+8IREbmh/PBmewzN8j8jCPpIw1elbLjRObyfdWkwPI38eAdF+1ekv9rN7nnJmT7sctkQkJyKOWSt/34+roDJtKJ0B8dYnDmXi/Jb3KRLpGQF/fXkWkrN0wIXAJm4Qe508AwoWz21EmJu16ZB6yGg0ttbujqkX2QXquGxbEaeOtA7Q3r3U7LmuSE9bteToTGW16wOsQxM1GhHESqPJCRY2qvz1ptpG3qpTvLv+R0usytaYnw3JwYaL7bC1fveUGFvYySIq3VGLw5HG++ZnfA808ZwdTqgS6P5OPGytAxp8bzkP5ZFViy0iJYbOElFZdZ/cmz4OgBqLvpAZdXAl7DgBqfTkVlImMAtLtEiJyog5QnJ8PpGz30kaDnVD7ZIcwTlHGDjAzPMZiAX4vg788OqW/qNfRuHS412JwAF209IEoEDBoWwnQaMDXdBIdTAB3HgkbN+KLlvggX23pAwzIQquOgueWf4RnUYnHYVCsUtcyo9aDbDXoNO6D+VErAbUHGTjWE8Bx0CT1woPQcVJSW5BVWNdhVDAEtvoj0oVocMV3rcD0HJ8zNUFRWWVNQabEFMhocMd+n5fpPK/uEye7AJHitqn9pWV8W+EePk6FlVVDVeA2qL1zz2M4c3dpqLv7luj6sYKqxtubNVXPBI/rXUsa5/rq4Hq5eMh26cnRnUbPOwMdPOXu6j6HiWlYNpy5cH6DFoRanLanZveEZUKv8S6fGMMQvW/9x0iwjfFPWAI2WhpMX9q9/54G1uQn7bLLocQnaSd3RsdNTZ8VFQrtDgM+LzHCl4vtN1yu+LUGmTe4Vncg4kVk6K9bPHCw/D+cbhmoZYuK77R59quAWoaW24Cvfm7FiX/UdSZKllprcjFZTsQXb7mB0YnhpkWJMSf4wP4cLnbSYSN7Oy4ffW+fusP+lcAKGFiMWmSPIpGC5ia21eVtazccbhtNasr0wjw+PSv55x8poOguRM1a88SqeF2FMxwhTZiawTiIwEmeu2piB5yQqQos3oJoGM8G0ZmPModeMkn2Y750C6MbwKNcDtmaMEGUEHoXzjsKIQbR4JRk3o4yCUUAyyIyeVsyIVcne3Pq96ZsUcTKcGQVl0IzUcm+uec8LG7FNGs2M1As/LS8ZbEbzMo6sDWZGwRhqRgu25Kz9/82ow29Gdmfv+JrR5AgO35tu2FHYMH5mtHwGD2l7xtGMrtztr7/xMyNmLGZ0qvJUWUHVQKMZYkalaEYnzwU1I6qVXXbWNmYzaqvL32qtL2myPZ5kLDU+enw0M7o1c0FMaexjJSOZUZ/WxIQk43c6w/EvNq0cixn9/hv22d0dtvuCZqIzOm5EM7K579s7+plhzcivJaCWPjrOaRX4VBea0c1BZkRaTuduRts8F2AgorLnxyZnotGEoBnJouPyoXdfCzAjd78ZKQyWm9Ram5+BWpbhtJZsK8zlH/GbEaOYQ7zSSeF2DFfAVknnKhzDqLC0/G8rXN9eH8hEKg8LpkWvrTQBDV0GZVMSghiIVvmgEEYwoz5GUmYmqBnBeB8PP07/FWAAH6ZAuKCLrBYAAAAASUVORK5CYII=" alt="Zodiac" data-type="icon fatcow-icon" {...props} />
}