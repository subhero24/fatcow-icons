import * as React from "react"; 
	
export default function BooksInfrontIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDA2RUM3QUUxMDdBMTFFM0EzQ0NERkIwRTYxQzlGRTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDA2RUM3QUYxMDdBMTFFM0EzQ0NERkIwRTYxQzlGRTAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEMDZFQzdBQzEwN0ExMUUzQTNDQ0RGQjBFNjFDOUZFMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEMDZFQzdBRDEwN0ExMUUzQTNDQ0RGQjBFNjFDOUZFMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoHf4E8AAAM8SURBVHjarJc7bxQxEMdnvHuBA0UhPAoORMcHoKZEVFQooeELUKATJaJGIiloUkCVnqcEHVJAQUJCooGWmii5KFGa43WvXZsZ27vr8+7e7d1iyTo7sWf//s/Ps3cIAOHOWvNtiKMboGgmBICMAZSEWg0DiLHxZWM7vvZ4a/i3dBn1xc5a+PP8zWc0Q+i8WoXW6gsSIfV8rqboJCKA/Te3ofUgOkV/6ZYtDakf16dVQ4CtNkh2QY4A3t+lIA22ZManS7P/+tPExYVJq0PrAkBMm4LAzDhAsGA6Cruiohv80JhFR4mDOE2A3UgOCLtWjcxYmNMPZURR0MZS0xTojkffK4k2AlipdATENA5YgILD5mUY/fionUDqSqdLTtfwaV2H3XuEB1gAKKW327rfO+c54Ix5Fwka0sMvrrzUp9l7fQsurDw3kNUHdIlmJ8P0MvCpk6DxwIwTx5mJD229F1T0XwHNHEhTgIYBTkGQ/M8HtGEAdS2fWBOccWxj5CCUTgq0A5A5kgOUFiqKFPVMsGlM8E1ix8Km3Tv0BaDNOzpjyK5f7AGK0ny2u7Nl4MmScU5m6RaFDiRisAxQNCJmLs8yu3F5B/oZA3Jg8h+UAKrXkaUbqOtNJQZ0zV02ezmePZ1zDaPMcs5zzgEXUMvHPTWbA5tnjJOFDKQnK4AwB6gwudw8bYmuYAFDGBzL4uVL8cBxwGUAHWgwcwNpaxDaZ1cQkMaOrAD0HABbfk31NzYLR5APoXZr1kJEQiUWpcDa4p84ZcADVMzx7DEdfc8BdE7mvgsSAdIHtPrbufBGcLzCQuRa7hYi2R8HVOD8AoSNV8iAcBnAbO6mx3dnniYrMeA44ANaxwFl4+UKETh1IIEOve8HY+JwTgCKCpG+VgRGQ9DLiotMbDBnDYh5QEUN/9FJoxWgDn7DZ/i6e1X/PxSw/203rS0oSgCFugxkKehfefjnDn2eHU+Jbo3O+ol3OUBFTQEeA/StAnaoHxawvVxapObPQY4Brgq/bC9pBYCqOgwMCq7hpA0+oAuihgAw8RArCZgIaJ0s6Li2Kkxqi9QvlQBap3Haj5i9aQL4oU39A7b+5fN/O/ELofdPgAEA9gNxRdSeAIkAAAAASUVORK5CYII=" alt="BooksInfront" data-type="icon fatcow-icon" {...props} />
}