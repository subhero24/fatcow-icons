import * as React from "react"; 
	
export default function TokenMatchSingleCharacterIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REQyMUU0Q0M2OUFFMTFFM0I0RDY5OTdDNTM5NERFRjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REQyMUU0Q0Q2OUFFMTFFM0I0RDY5OTdDNTM5NERFRjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpERDIxRTRDQTY5QUUxMUUzQjRENjk5N0M1Mzk0REVGNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpERDIxRTRDQjY5QUUxMUUzQjRENjk5N0M1Mzk0REVGNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph82ZnEAAAVCSURBVHjatFddaBxVGD13Zja7SfOfTawPbTSNobFZkqoYS0sk7YOkGsEHobVIsSIoaEX6aEEQH3yRgkqL2lAjEgUfWizUpxbTUtOgaR4S2vzRqK1Njdsmcc3fzs6M33fvnZ3NNhtEsgOXnbl35p5zz3e+794V0NfHBxsrH99cfNoQXhs85OcSgOuJiwO///PC4e7r93QX8MGLj0T3NJb/Vb9jB6JN2wFPqCEh1gfY4xVREx7iw4OY6OvD+euz1Ue/G49bNBJqayg7U9/6FKKNMWDyNJD4DVi64/NbDwZAZCNQUksYnSwDbKfvDA20M4HCkCl2RmPbgF/PAvEBwg0B5ob1lT85p+amK9qwB6H+KzsZmwmEZcwdF1i4BVhhImCu4+ozVPAMhREKQfssbAVIRCB5l56YgJE/FzKG56Y7rGAwBRi0coPB80WA12kqLH0FBJgVg+ebAM8dKOATEIoVxz47/iII4X9ROGfqcipyegtfAZGlABxyvqHjL9Q4P1t6wpSnjJqLiEHvmboZWQvgbyj1KPdoHlNh3RcC3wM+AVOWLbx19Koc/eQ9KlAWjTs5GBDZc+f/wPcXptQ6ZB0TMGke5rO07OL4h08QmdQaHhBaAf6aZhmiahkJG/JxaPRvxJoq1Xve6vrverIGsa3lBGhIK4UsA8NjszjXexutjVUq/hyC+z2gQ+ArwIghE6OTCTy0qRiLiw7G6D62vVpm66oE6JPSsghKywuVh00VhgvdoyggIgf31SsfSJM7mZbM8gC/YJpMHwNDd7F1Sxka6krxC91znwyD9Ia5shlGhmPp17LwVc84EvM2Du1rkM8Sbk0CfgiIwNydBcwvptDSFEVLLIrFpZTsk+RMmqyAWmGBanxv+uqZEuzG6AwGh++iZVsUdSy/o4kJI5cJXR0CagUmLv88jdLiEKoao6iaTxFxIfv2dm6R5nz1jV5ZUfmybaDrRJvc7ZR5gZNfj6AwbOLggcYAXK7eVFj31QFPK8Av0QpGb8yS4gJdx9QGUl5SQJ6YxV6WO+mg67N2FQrofYTTlB8J9MSnA1ggxQ6/1qzCY2uDQ2/LjKXDFYRAaAVIyuU5GzdvJVBRUURze7JFIhZu3kzQpmYrkjxH0lXN0QWItpb+S7cwNjGLZ3bXoq6pRmEaIqiyUuVcWWDK3MFg/2249M6br2+HURKWowt/zuPd9y9hcGgarbs2kYpOkA28GHJ6kgx39odJPFBdhI7nG9JmlC8ypuun8GoeyFBgZHwGlRURAqeUWlJFo2hjCcIk78jYDFqfflhp52oGvHqSuuvLq0jaKexur0f89jzslEuZ58nsS9F9bV2FVitnHTCkXD/1TePZjs0aQKSHm2M1+LF3Ci8fIFOGjKAgCCXx0DAVrgjQ8+01OE7AjwnYSeCLUx3agM5qm5GXju3n3c+pr1NusLnQ8/5XHsP+Q0L1s/H8mi/UnMdPdaYL0MoNzFMl3HYyzJi9GQlHedLlQ4Pv1oyDKRO3vYyJjZWHJlebcs2zgK4DIlsBSchTHvAyqlmuU9n/PS0bekGM5a1qQiODQL5OZV4uE7ICVuCcvB2IjBW7mZU2kckKhFbs1fkhYCksEWxG3txSajBOKSQ3Fi7wvNmkK9c6NZ6T5yYMxmJMxmYFlo98M/L2yYh1kaWJNperMKx3JITKkvi1WUxcjoMxGZu7Wfeahgc3PHrspa0fVRaFYvn8c3pvwR56p2fkyNjU/DXqmfYtzwU/So3+wKFE75n5uLgAJKjxH8+4r4B/sRKFmky+cpG1Xaa2yGWNO/4VYADQleO+nV+EWwAAAABJRU5ErkJggg==" alt="TokenMatchSingleCharacter" data-type="icon fatcow-icon" {...props} />
}