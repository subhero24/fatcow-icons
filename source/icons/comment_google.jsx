import * as React from "react"; 
	
export default function CommentGoogleIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjcxRTc2MkI1NTlEMTFFMTg1REJCQUNCQzkyQUQ5MzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjcxRTc2MkM1NTlEMTFFMTg1REJCQUNCQzkyQUQ5MzEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyNzFFNzYyOTU1OUQxMUUxODVEQkJBQ0JDOTJBRDkzMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyNzFFNzYyQTU1OUQxMUUxODVEQkJBQ0JDOTJBRDkzMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjapAJIAAAc3SURBVHjaxFdpbFRVFP7eMtOZzrTTGVoLtbWUYgPiFjFR4oJEMYCJPzQmaiKRWKPgghumLhgNiWIVFTFBQKBoUEoIitWioVIoVAtDWaWU2lVK6XSbznT2eYvnvvfGUktpXSI3+fIm9913zne/e865ZzhVVXEpB49LPLiRXlz/zBqHPff691Sen6uAz1ahjrz4L0PVDHPgOaVdVZSd3ta6JadWLfCNlYBw6/s1q5MslsdvmZqB26dehtx0cXAhNwbvxqOtR8Le+l5UnArgrui2dcteKFpI0/LFCJhu+aj292tyneMfuysPIVrqbo+i2SuhqV8a83kphHyniEmuJNyQI6Ku6gweFF9E5HRtZ/azzVfQ6/iFCJimrWs5MzPHmlk4KxN7G6OoaApAUlQIHAnK4W8dgcIJiMKMgyXfYWDb1TTTAe9PJfD96vbkPdeQkyAhJmQ/lJf7tmvNzMx2dxs2HIyi7kw/zORRYI65IeqOToAXIEFAzcbvEdweA1pnA/bb4LxzAeRIMPPke1gzbUnD4+w4NFWfysgYZ7OlvJS36itMvOdmVHkUSLwImVJUlmVI0tgRJ/3DsoifS3YhuLUTaHkVkGxAnxvwliN9zgNw2M0LnpmTkZ5IQ/Fhh6PYOfM2+jKKnKJ3UXp/MnyiFWF6HZeJjCSNCXE6rgjt6dCXlQhsPk7OlwNRMxHg9L127qSzCcI+9VoUznIWM9/sCCxWFXe7ZsxA7EANQrsqMKVsJ7beZ8N9X/jhUCSYZAmcqoyS0Dz5EVFfthf+kgpKga/JcbJxbop+gEoU6N4Pe0EB7EdqZzPfTAGzCHWCKT0D0ZYmKAIP34oVKCjZgu3zU9ErJCOkCojJ6siyy/rOG8v24/hGF7IW7SZnzCGlkcQgGU8i4v8NgiMZIs9NYL55PRBJonAICIW1iFMIvrXrULByLcoKnfAKVkRUjmwokMnYENBcjOy3/XAA1ast+KDyRexasR6Zy7PIFtkDBSGpSIvpSQTiQSISSOgm6qnNE4FQCJLHA46xJrkVksy3eTOufLMY5QszDCU4UmIwJlh8RMhux+6j+HGlhE/2LYMct2FddRG+XV6M8e9nk/GgLr0U00kEzxGnwJ+pxcMomwgEoIaJMUW9xpQygJ2c79syTF5chIrFE9An2EgJQZNcIsQouLr3ncS2d71Y+8tHpLCNypyZ1Dfj8wPL8OWbbyBrZT7ZInXVmH4Ucfod9WsxM3gZkX81GIDgTNNZJsCUIAzsqUL+/IXYsyQbvbwVIUVAOM6jv+Y0Nrz1Oza515NtK2SalygWZIWn4xexpfZDrC5ajKzVU8hWWFdCSNMJDLkNeZ4IDOiqsGCRzwOrBYSBQ4epRjyI6tcnopuzwX+sDR++VofSo6WUfhZaQ8oonFYH2FNWiYQqYseJ9Sh+/jFc/tk1uhKsAMZ85Ou8IyBeXaH2DgjJVnJKC6T4UCUoLpgS4d8aMenGu3H0lTwsfcGNb06UE19yLrN6Qc6J7yA4bV6WBfxYV4rXnnwA2ZumkwLk0tuDqKx2JQhIHlmu9jU1Q0xJMfJVHgZWB0RJRd2Bffhs/1LsPrWHZE8iAsIFnA9CIyHxqGoox9OPzsPtZTMAzwB6fPFq5ltg98CxcLjhXoulMDXNQbFB0g349eLBuiVyzBOSSNvm1gZ8Wv4kTjcehEBGocmM0cGKPj2DMS9unT4dD+9ow0+ljQs6fVInI6B0S5I6L9WRnxyOTElJpbodi1HQxjQCPFlIiqtoaW/B8u2PoL2tDmKcM5xzY4JMMAtmWM1JcNecgO9ccMepqrOl5Ls/ccMy7fNqr5pW6bKZXRnJFgrYKAVmGEmU6y3dHXh5070Id3fCTCHBqcbVzHGjd0a0xGISkWQ2oaexH97OYN/BVYdn0asWwkDCAlNiHGFS7bSrv3eKvCudk2Gh3bd0tuOJ9XMh+kMwUQzwaqKLoN0prBrGh7dUnL6GpwJHJVcj7G8NINwX6fvl48P30NtmQi87mSENCYFdkbk7Jhcsvc5knSd5W/HQipuQxpnIORlS9K2zFFJVFpjSyD0aTUthqpa9MUT7Ywh2hcqPbPp1GevUCD2JhmRYS0ZwEsaPS7FkOx4qWJRmNd1gT7NOSJ2cRvGoas7lYBz++h4k2iRueEuozcmS2hPxRdz1ZU2fhL2RdpqiBgHekVoynHccdI8ileBiR3PH0hmV9oJ0PStY5BzzoPqDQ/PoP0VslBBg71lK9bGqTgj9tSkVL/AhWzBAYFeZ/8o5efnGda+VDf/JLrRVny0k5w3GuosNySARMX4PG+IoH4csqWar2ZWs3ZjBpn54jne/faamo1LrMnXD/2qIo7w3pWSlzDdnWBFo8OKc++w79d81f07zXXoF//fjogQcOal2QeTn9B/xMNkX0c53GzsP/Y0m+Z/9NUtwYGlpBGWXgZDR5OH/IEAtLWzGupAh+6X9O/1fjz8EGADQQBDGpLYAuQAAAABJRU5ErkJggg==" alt="CommentGoogle" data-type="icon fatcow-icon" {...props} />
}