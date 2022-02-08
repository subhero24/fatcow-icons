import * as React from "react"; 
	
export default function ConnectionsIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUY3M0I1NzYxMDdDMTFFMzkyREFBRjM4NkE3NkIzQkEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUY3M0I1NzcxMDdDMTFFMzkyREFBRjM4NkE3NkIzQkEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1RjczQjU3NDEwN0MxMUUzOTJEQUFGMzg2QTc2QjNCQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1RjczQjU3NTEwN0MxMUUzOTJEQUFGMzg2QTc2QjNCQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoOrqiYAAAVtSURBVHjavFf7T1xFFP7m3ruwC7Q85VVYXoIEG0EEKrWx0sQ2kZoQEzU2waQ0BSOQ+BfU6L8Aia0pIbG2Tdto0Ep/N2q01SBIrVikSCgUWoHlsbuwu/eOZ2Yf7Ovy8NFJZu/O3HPnfPOd75y5lwHQcj8YHHDprNmrG+Ac/2tjDLCoCpJUPjj3fnOLmNuz98wN/rib8Cl8a/RjFTsXbcjhR6ko4mcX26LHJXMGB98BBbVpQMCnVQBgIdrpqqjAw9FbcNyf2GE4OFL3lSG3+oCfX26YW4bWY8H/TIuOj+jL5PyNN9/aMQFzM/fx8/APyKt5nnZD1BkmIBhiGNJiUDLJqGyTf04RIGayG46S4iJcuHQJrSdOoIbGwwQin0BwpmzJhCkAlXwpYf5UVZUAokEI5zzAoUL3vD4f8goKpd3I6E0UPHOASGCIjmG8iEZIjbJDgghaCgDBrpAylYixKm0qystx9do1yUTuvgI4piekjhRm3nfBgCKdBXctmQgA1HUdKytrqK+rkz080JoIY5x4c78MzAEEEQYf1FQNV69eQZHdjoMvHMJ3334DRkwYJLLGxoNYX3dj3e0K2efkZEsVizRmSkjpoXDxgNBNAWhRDAjaW1vfljsXTl88/JKcE+sZhi7nxJiFRViwZk2g+6rQoX83Qg9UImjMYxDEDQEPE+GFC5+gmNSuU+Foajoix0VFdum89tlaDA5+hcycfHgUCxYcy1KUX356RWaB2HlqeiZKK6tgLy6ET4+NS9wQhDPQ1nYqxIBY8OTJtkAhMShEKqpqGzA5M4/SohLSQnZk1aHn5ufnMH57GKuLC3i6tiamRGjRg3CCGNHZ13eeGCiWAF4+ehR958/DTpo4euwY+vv7oKdkoaG2XoJ0EAPhmSfYtlqTUFW5Hzd//B41dTXQjd0wQCu0d3RIJgyR+wTidHu7FKIwa+94Bx9dvIZSez7m/1qA0+mS8z6fDk1TJd1JSUnIeSKDADCZ5nzbNFQiNfDx2bMoLimRznXqzceP45yYI1ZECATIX369Q5lSgLxsu1R/MN+E6BwrKxi987tkSIgcbCcM8E0NdHZ1he7rgl/q73Z2htY5d/kzuNxuKtvTmE18BFuiDTabDR6Pl+Zd2PC44V7fkI5ZnEKkRKehRBlMKSppPT09uH79OgYGBiCI/4KuwqS3t1f+35towfj4PSwtLZPK/dQHq6Wu+2h+ie7/gYqKcqgBlmMY4GGlWImqXd3d3WH130BLS4sUZFeAma9vDeFI01NE8294ND8Px+Ii2VHZpq16vV6kpqXg9ddexe2xMQkgSB03DUHYTRE3HibreCfj6Ni4gI7yJ8uQkZ7qtwmkoHh2ybGCuxOTGLs7jsONdeDKNpUwIg1NjuII0KST1TUn7k1OYWbWhiQracAqNOCBM6ABp8vpZxjbiDAo0tKycly8fMlfcExesuiQppApsGkKpeBD5GRlIzk5RWpAs2gyTJqmYWHJhQcUmur9VbGii1eIRJ1obKiXfadtYnoWP42M4tbQVAzc7MwMSX15UYFcW93ujcjsxWGrYJQV5su+bbii9BYXwG5ehv9N01TFnIEt36rf+1w8DdP372A1E0evweNSySwqMm0WrP4TAFRhMHK6Dus6l+dDpG8mRVndP4SRU8/B7TPi2qQkqDh0cWSTAYXtAgAtWGnPwppH95fmiLOEYU+iCk6HUaU9E6sb8W3S6HPEG2BHArCou4i8RUGCLREZti2LAyxWsrFuQSTbFHd23oc3Jpw+pIjPJYObh1YIxyJKLBn5xIdsnEzZiY3YcLKGtQdnXikTY/pSQwn19G2y7b9sAteS+PaRgKgnU0/A420e6s6/BRgACRKSG0QqDmEAAAAASUVORK5CYII=" alt="Connections" data-type="icon fatcow-icon" {...props} />
}