import * as React from "react"; 
	
export default function TipperIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDM3NjA4NzY1NThGMTFFMUJBQzFFMDFCMDlBMkY3OTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDM3NjA4Nzc1NThGMTFFMUJBQzFFMDFCMDlBMkY3OTkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMzc2MDg3NDU1OEYxMUUxQkFDMUUwMUIwOUEyRjc5OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMzc2MDg3NTU1OEYxMUUxQkFDMUUwMUIwOUEyRjc5OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvC+JvcAAATfSURBVHja7FdrTFxFFP5m7r3sLo+FIopaLS1VU4oKW4xpLDH+Mm2aKik+YkxIGv0BiOFHbXwlvhKTptAqlrSpmir+UGuiiVFTNCoYgZK0TQSrGAt0W6Q/MAWWhX3c3XvHM7N3WZ7atVH+9MIwj3PPme+c852ZCxNCYCUfjhV+rgJYcQAsjXczho/kRmdnwqZfK2GEaSiuC7poaP6XALKoFTq9MXQo+7T3nl0ERCDY/y7Gx7Smu/bMPE8y60oA8L4DWU9ku6y3sag86VXOMBXWvvLtnn526FDOGWO1BWHFkXXz45g69SFe/URc19Zh/pkOAH3B3JXjDR3M9dXQ/tr8zRnRhdNaT9t2WmiU9DEMCgCz4cq7DZ6iMjxX9XNHWwd8JI/9GxLyzle0Gr6h1hUofx+hwaMITQ4iNP6b6qeH3oErv4KAqQi75R9NZ9Q0hP0tyC19DJ683NKvX/JsTye1cwG41hRYb8Y2tiA+HoVBJszKHxCr7Ka+U81ZfIJcTujJziAAusGh2QHERj9Cwd2NWFcg2r55OWvT5YLQU97zGlGyyx3RDbjGv4VOkkiErJDDMhs58k0rkLJLCDRDZoZ8EDpEuB98VSlFwfauA06dPehBEu1CLjEum4b1VDn6rPf59lvB0sOwKHtZ0yehUVFN0+aUYsXHGzJoLKbmOaZpzkxIfhiwxj7GtRU7wNzX07pYlvacFP1fvqcqKwnAQ+sZM25yKU5oZr4Dpw1LTjJwCYCElvRWBGXRJwJA9iUJLZZ0lKuAisl2mtqYDdMiAKRAqXNIbiQB6LbmRlk/CeJSzYAwPLRhBP0+G16iXFEPgYkH5kfAcPCI5HbckWvL172MgJ46AWbLUHgM8EwdtjzrbAb1Q4Z9fVyZFsQNzqdoxFKGXI4xkcbZ5uBzApkCoNdTbX2QiWhxRKVByemIZSJT2ZffDcxOcUAeCec6E5uzJfeRgmRomAIu5iRmLGj/CEVf5zHsECIDDO4NsUQEJfu4k0uKiGraJRKpc8Asrg1sPrYnp5cvcZ1x0tVZXPVKnUgap61kb9PSo03B+2n5IrWIBM8annnxvrrbj31/Y7kbwuTEgxhavyhH//mblIE7i0bw9I4+qgwv/KcjKGR9FEIuT+bEIbkgxyYx9vCv1RgKrFZr63NHUbfxU2RoMQXAphAUPmkXkCggdd2tR46GLZFBAgo5EelM308oKSlGZeVmZaCrqxcDA0O4o9yHQIAOnXhcAViUcQmGEJz3D6Os9FZs2ZLQ7+7uRd8vZ1G0tlilUlbQay/U5pNoQqYg0z/4u0Mu2p4MBMYvoGLTA3ijea8yUFvfgN7uTowMa2je9/qDDY27P5cAGFuK5QwzkxfhK6/C/qaEfl39U+gh/YkxgTnfoEaShKK5aW8F9auSgurqh4+HwyGqc/UO5Ni2Tbn5vTSdbG3ZL13LXobnRvVDjzj6+qy+FTfRcmDfNueimkheWPKNGWrnqP3hGMgzTdPf2921tmpntVqgMcyo6afhCDV53WYkPVjiyTOjUf+JOfonlH5U6g9LB5zNZ5Yr2lxqt2zduu0zrulrFIut+IX29uM7aTgoifMP90ta+ksBkJ5dQ01S2OusyQNglNqly7jr09Jnf2Mk0wk1nG+9UBofGleq/z9+FV/91+wqgJUG8JcAAwAxeNkRZ9WE8wAAAABJRU5ErkJggg==" alt="Tipper" data-type="icon fatcow-icon" {...props} />
}