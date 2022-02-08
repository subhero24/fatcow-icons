import * as React from "react"; 
	
export default function UserFreddyIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDM4MDNBMzA1NDBGMTFFMUFENTlEMEFBM0FFNUJDMjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDM4MDNBMzE1NDBGMTFFMUFENTlEMEFBM0FFNUJDMjgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MzgwM0EyRTU0MEYxMUUxQUQ1OUQwQUEzQUU1QkMyOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MzgwM0EyRjU0MEYxMUUxQUQ1OUQwQUEzQUU1QkMyOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqP4jUoAAAVrSURBVHjatFf7bxRVFP7mzkz32fKwTVNAQLe22xKwiAFcSYpECaCoidRgNDExMVH4BwjxFw0RjFETExMSIon6i4oaDCoCgUhAQEzBllJoocizsJR2H92dnfd47uwsrtiFLiw3+XLnzpx7znfPuefcO4LjOOBNEATcoQmL5ze3Vgfl7/yyGJUEbDMM4/1wwLdet50OVbdOJxVj1b4jp3tJ1rmTsoJdhvE3SRLFjQKEKB+IIuuYGPYfFyWhw1tBVJbYRi5Xhs6yCASYyFbeVhlzvwfuBwEhGmlo5I51ioH/jvmL1sapjVy+0gTEcDCwwjAtmAVYFizLdsGf+Tv+PRTyr+Dy447rOOWqliyIrJk8qZoebTDHpiU61FvuYi2C7RAEEYlEZs2fXQMf0wezkgT8wZpwg2XbLgG+g9nNje6QccAi2MxGoDrUwOUJyrhiWyINq9oXtGgSEyAywTVi2bRacrfIHMiiANrx1DMaMxjEwKDPhs1FHO4bN7acrk7M9h/p9fHHsdKwFIEQod7reQvuWhs70rR0FcXcgGUYMDUdppFze0tXCbzXMHp9EMs//W1hkQeyhLjX/49AqRAYhAQh440nKbREhRtWVZhkyDJUzzh/1r13BlSdT0XSm1/QZZS7B/RbXaZb0JRUwsdEmYzx1ec9kUd+bFJv58W58euVTEM7oZoHs0NxOJYJyzRgmyaBendsumNLU5HT7TPjKcXlEtD7ro1uV0Zu5I1bnnHzXzKO2+u4mFR+Gm8KlkNA+2Rv/06TSUO8AnBDBeMO9RQDZFUNmm5i/Q9dW0herbgHCKmjg8p7JvPDcETYhuYa5sioOs7G0+i6nPjIi79WaQI8ppkNX+7aTekPk/mQFAKIayLOj9q4kjLcNN7dc20byaW9ElC5UtyxrKkmHBbXzayvX1sd9CHLk9POnz6CC7egYNlTM3e1KVM+S4/qH2z7tT99L5XQbSuXRGoa6kNbq/zBlx6OtuGxlkdRq4xAz2WRTqaQSqWRol5Vskgmk3jomedwJTmEgVPHoOWU76/Gs2/s2DeQvt2FpBQB8c2XZ2/whwLr5jXNxRNUgqXhIeSaG6GHgrTxbBhqFiYZNnK8Giq8SqN2ch3qhpNQg9U4TGW6s/841Gxu05ZvT7xDOq3xEpDfXj370vRIa/0LDzbB13kIIydPI3nqCsTWaRAXzQdqwhQBh08C46DzAGkidOAwrJ5LmNAyFZNnRaHNi+HHS/24cPZk7+ZvetqKK2IpAtJbq2fvb2yeE1vU/iw6u3dg4PwpCLLkGuNxd+jsn8pCiCBMR55I+WbhnJDBZTsLgdE1gB9epNMxTERmtmDenJU4uP9nnO07cWjz193thRpR6iwIyqFgbEH789h7+AvEh6+Byb48OQ6eM0zCRVrIBWfETQ3BI88oM9ztKOSTxpFF9F3oQ0bLIrb4VZw51xPj+r0sGTMLhBeXNy985PM/IMZO4vEPfwGropesdF7enFgqd23u4mNgm9ow66sucP3bd/btKZ5erF70+6Qo/zKx8yC4NwVvQWOBFaGUDJ/PSUwifVwv13/rda3YA5LMhIi54XUcmBBE9yujRMJjcbeN4mzTnpnT3AT93WmQu45FPJvmWB6QfEF5qSz5MZwYoouH4MIm0btFQcdw4gZ8/gC4/lv3XfFAru2Pz3g6uw/J81eRHcyAMdxz49fI0JReTJhWh8G4NoPbKXUWSHV/DQZEge5/o4qbTZVoXA/XJ1FWcP2384DTvWru72f88pNO+wNu7CvBwfH2Aj8r8Nr8DLYeFUqdBfzSP51QW+7/XRlc+FH9N78zjlUJJe+/zl/Or1WZTfdux8adDqP73gp2/xFgAEmI+UO8uClzAAAAAElFTkSuQmCC" alt="UserFreddy" data-type="icon fatcow-icon" {...props} />
}