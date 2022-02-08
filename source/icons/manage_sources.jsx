import * as React from "react"; 
	
export default function ManageSourcesIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Mzc3MDNBNzUxMDEzMTFFM0EwMThGRDZDNUVFNjcxQjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Mzc3MDNBNzYxMDEzMTFFM0EwMThGRDZDNUVFNjcxQjIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozNzcwM0E3MzEwMTMxMUUzQTAxOEZENkM1RUU2NzFCMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozNzcwM0E3NDEwMTMxMUUzQTAxOEZENkM1RUU2NzFCMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PixVCmEAAASiSURBVHjavFdNTFxVFP7uz/sZEDSKQhtDoYiNfxuCVYImajRRY2NLqTWkCxO3mmiMiVt37tw2NjUuCjidOANtqsZFa1OL2ijFQmJMS4GmpoK4oCBDeT/Xc9+bNwzjmz9LvMmZ9+ZN7jnf+c653zvDUHrJLzKZDGPsFaUUFCovRub7/uiB/fv76dbFba6G9MiIqnX9tbiokqlUmvYLVAk6NvvhZDJtmOYe13F0VhUZCBwxBikEpJRwXTfzWn//AXrq/W/ZF7IwcuKESqXTFZmIY0B+fvx4WkiZz76WRT0DkWNBm+M4J/v7+vpK9YSMeZYwDGNP3969t9VAC/PzODc2Bkm+tE+y5WoBWLrr9ZqZnQsyqnbpfe1tO3BsaAiHBgbwVE8PLoyPYyiZHBw4eDCWBR7jh0cNxzmv2aJ9V2dm0dzSgt1dXTA3WEA1ADZ+JEe6ntVaBECfhm3bWvIgnu7txeDw8GAc47IcACFYTSWIerqzowOZ0VFdE4x9PxaUw7bt2F6QJYqZ8ydqAsA5w82VZTze3R1Y4fJDn1Z1ACIGeO0MZFezWF1dDdnIJdLS3Bzd85pKwBmvEcBmZYlOU7klS6hJeKmZgWIsbANECT8yPn7IlKAeAMOWrMhndQCEmbtuUfQCn5V0QBx+68nDYPw/C1EpcdI+A99FL6dCAOLT959P1SXMfdEmwUlcmAiasVbT5QuMi3wy2reOUQgiAiCOvvdCyjbFvsnpRXqBhJUxLQuGZUDQdy542JRVmJD0NjQlDNuEaVthrcmH9q1j6FgRCP0hP3nnuRFDqFcnr/6JcxNzkPfsDLKYmvqV3moLaGpqIvSJoKv1qSibOafAhoFLlybx8/gErkzP4MYfCzj73RjOfnMKlmmg+S77oZd3t3ed/GEmpbus4ei7z97sfulQ0PCcKfiuQxONngU88Pp7cX39Pux6YCce7OwoOxlFLTvxyyR+v7GA+815uCsLRL+eDwxwMl+xwMdPXx3Dmx+fadRc257norn9MXz72QdEtRHJSHCGlbeOR198G9Oz13GZsqkkLgFD0kRb/RKmvj4S+gs0IITnew6eeeMj6Jg6tgbAPE/ByS7BtmzaYBaID7HhJ3Dl9BF09vTRN72p9HzIcm3FfInLp9NI1DXmTgHLK6PviSCWjql/kGEYBje7DJPqw4UsUi1igRzOXfySrjRf+g49oqsqGtX00dXCxQ26FbDq6unKi7WZAKgglso9zwGg0XVtiZpHBvWKlU0d0Hchd72OROsTIZhN8QWy136E+xvNoVwCccqnAdC4o2OpQiXUvtX637AIAAvOLYvVLD0qzbrbwaenYxnw2Xa00fHzA2LjfKh8rGi7jF7/6tayHp3ikUdiQRQvnfkQruP+iyTtQ5918+FWeKqMhCsexIp6WYbDAuXnrZLwRMhZidcz0P3IDho6bsUCaLzDCsooSh4UFTJJsfxCACDEhsqiIWFXPOf1CQt331lfepCq8D9S+9CxoDaaUC1nnfOZUxd6qxkg8uywmOQ235TVipU15zxyMBrIWsmaKk1IW7i0oCySXWO5oHpatbFl40fl/zBka2TZfwQYAHDlG772kKs9AAAAAElFTkSuQmCC" alt="ManageSources" data-type="icon fatcow-icon" {...props} />
}