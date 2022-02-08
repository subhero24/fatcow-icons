import * as React from "react"; 
	
export default function SynchronousScrollingIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTMxODc3ODYxMDc2MTFFMzk5OEM5QTlCQzkwMjUzOUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTMxODc3ODcxMDc2MTFFMzk5OEM5QTlCQzkwMjUzOUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MzE4Nzc4NDEwNzYxMUUzOTk4QzlBOUJDOTAyNTM5RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1MzE4Nzc4NTEwNzYxMUUzOTk4QzlBOUJDOTAyNTM5RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrcV2fUAAAWESURBVHjavFdrTBxVFD4zsyyPRVu0LI9FK2pM00aSPlKRBpaHYIDYVEOWh9hQ+OEPf/vLolhE/6mJrx9QECywLF12F4GFisaYalETTYyJxkReiW2gP0yhLXbZmes5d2dmZx/sxkc55DD33Ll7zznfedw7ALtD5pxzfpbXPctoDLtM5iPvfsF6rtxgby3cYNbXp3fVCHM2Knz/h01W+OEie/ijRfbBj5toxIxuhICc4p2cvC4ryh6mKCAIAoiiCAqOGWPAkupgfBsRfyfLss/R0NCAE0EOe/fcnbcd5fDed9cBFBlX4R/u/dLxbHh5/Eu4evbpVNphr9vjYUZyjo+zf0Nra2ts1OmcwD0l5Cxr9yVGsc969VM2+fsWO+m+xrK7pjAX/OyBnktkeZaJLCVPiZZXVsFkMqGxMpeXllc4Ign9x98WPrQfLoyMQGtLC1SU2591jY26HI3NL6531hzFJdas16b9qZIE92WYESkRrnXW1uL8Ov1e1EDk8cCXBL9GNA6xtAOH19NzcWkZcnJywW4vf841OtyL06vkh4IKMswi7LNImq4llW+JRm8kieIvGAwQcE7k8/FZDK9HpPLycrkRVjSisvKpU7OeMTJik2cjrrOYdAP+VDkQYYAgSJwjZTEpEz326CPg8flg4dsFHo77rVYMZ8opfJVOSoMYqgAmdjSZwpmMCKAXkiHmNE6WA5TVGxs34djRY5yj8wMpjXYIou7tIAMhrgEqLgJCKpgMCJBMBhCz0MNYfHwNKtn6awtub91Wq5pxxXm5OXok6Z8sM7ijsJ0QUD3GxEoRJd1rSaT4GwwiBUKEd/paTaanEg01LpFxPijvhIBmgEkEj3cC0iwZqiyB1+MBm80GT5aUgPviRT4OeQlw8NAh+Hz+M8jPt0UoP15cHKVfwBxQMAcYRFsQYQDVaKOjCXxTk2G5sYlvoODmDkdj2CUVageu1+QQ1ApyMAbqoCJwBBKGQMSYu8adkJphCctjTrAVFITaMnKp3Q4upxO9zoeioiKYm5vVESBYsKVDyYkT0RHAECACaFzCEFA8q6qq4fKVb3S5CbsbPbUYEzXjnGZQU3OLDj+toxAEg7EIyAj/drIkFLHu5zGmaRaLLo9iTdvQ2/KKShgZGeZjpio8fPgIzMxMYwPKgwp8Pzx8gY/LSu2xIcDuvi1DEgSwYF44fRrGMdmMsoZAK40NNU78fGurXgm0liOgniVhZPEwxMIIyEmSUEKPhwYHIV1FgMryk6EhXo7kWTSApKy6ugaGhgbV6qAklLENV8UgsM1CIUiIALWMtrY2wONYiwm0tbfzTsJ2qH3itjNn9DlKQjlhDgiJGpEIHw8MQHpmpt6KB86fhwK1Csjjuro66O/v5x5zA6junygGn8/L84Pgr6mpiamCbUatWEkcAurr5I3T5dLljo6OGG/aEZVEc9E5oCEQSBYCulYNoHc6AhiC3t5eXvP19fXQ19enx1pR6526I+VH6H0v5OaGxtFJyFtxHAOIrONuN79SKUroajU8OhohR4/jkfE9dkP+nJ90U9Af34eX0He+32AHe1dYwRt+mrNGnFTaMaeddsxgOcQZxz2WDe+1S0qK4bYha2dBFInadSoiLoYT8L+Q/es0yOry/0R3TGpCgSDj+YEfKGvqpdRsUrP05oTXm6m1U3NqKqDMDyBg7B8rpty5F3dOM6VD18kyrJQg/Ly+hQjIcPaZMkxuCXqmLtNSC2G1F7mQrsgAIPzPHyYpOedm/MqeAwi1op6ZEkgbv8DVzjo6s3/jHyZkyV36XKJysj3Y4/9q654D3IC0zV9h9ZXaMvVWvH7XP82QC5BL9785x4hprM7pn2a7YQSVnXppgD9UzwO7ZYBmhEUd39KUE/0twAATVeqCeslRDwAAAABJRU5ErkJggg==" alt="SynchronousScrolling" data-type="icon fatcow-icon" {...props} />
}