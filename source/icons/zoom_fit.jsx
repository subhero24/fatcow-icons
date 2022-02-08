import * as React from "react"; 
	
export default function ZoomFitIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjUyMTA0M0RBNzU5MTFFMUI1RDFBM0QxRkZEREVCMzciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjUyMTA0M0VBNzU5MTFFMUI1RDFBM0QxRkZEREVCMzciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyNTIxMDQzQkE3NTkxMUUxQjVEMUEzRDFGRkRERUIzNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyNTIxMDQzQ0E3NTkxMUUxQjVEMUEzRDFGRkRERUIzNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhyWWTwAAAZ1SURBVHjaxFd7UFRlFP/du3v3yeKLEEYEdSQfoOAog5pKlpOKYmnT46/UcNSeGuIjFXwx5KMaszKbtNKcGiwdEXxMo5APGpEQU5G0RoV46FrJLgu7e/c+Ot91YcBXi2HdmcO9e/nOOb9zvvM757ucqqr4Py89+8Nx3F3/OWvO3E5RUb020ONEAhrRDJW7pVNNt4OVlVcXbv10i+NBAXAsA3cBoFudlb3ZaDTNThg6BAkJQxEUZGuzwOVqQElJKUpOl8Hr8XyWuXzpK/RabjeCu2yBsCoru3bXd7vVQC+2lnTqmO6/zYCwYnVW1dD4+LCUlEnai/OVN/BFQTkOn60ET+u0pYR5XFwkZo6NxYDIEG1dXt4BlJ4pu7Yqc3kk/fQ9SAZ0SzNWbPsmZ1dLZJlfn1Bf2nRIzS2tUq/WS+rZOq9aVOVWD11sUD84clkdv2aPumnfTy3rmS6zwWwF6p9vfkga+0SI1WJ9+blnp2ohvp9XConsbH5tPIb174lGiskhymggETkdwnqEY0ryk9h/wY6PDpzWdJgus8FstYsF7D58+Mh1Q+IGQ8fz+PmKHRXXGrExdQyip76tVb0oisjZkkW55TB3fgbMRgN0Og4vzl+I/KJijI25gZjIR8BsOJ3OdUcLC2aRmhRoBkw8r3sqPn4wVNmHnFNVmJbYDw4Po5yK77e/gz3b1qJJUuBWVLy7KQsr3suCSs+2IAOi+/XBt6QDWQSzwWwxm+3ZAgN5Cg/tHgpFlnCqqhEDe3bDzSZKt+jDX00+1HtEuCUVHpVASLQVPgk+rwjBAISHh6CEdFRFBrPBbGk227MFTJk5pz8g/qPeLcHpU7W0O9wiPBS9l/ZCIhqIjD46BUs+zIaPasJk0cNgNJIq2eAkDUgr2wEB0NggkROOojMYzVqxNVHEPo6ntENz7mPOqUZ0eh0EQUcgeEq3ApVjv82kL0Ehk+1p7/ztlJQVBYLJBBcB8Co85ryZCYnXQ1R5eEl4cm62CLB11iNjejpFb9J6g85k1HTbO1taAMiSbK+trSMjKhIiLPjdKcEtqzBRtUu8AA9HkVHELHKzlYfNQukzCFoNOB0ihkZYNV1mQ/JJ9vYCkFwNrqKyM2dAPjE2So9yu0LFJ1P3U7EmfTnWpy2jdPNa2t+aloa5UxZrilSHqLFLmg7tGErLyoiGjuOBULB1Kw4KDw+PmZk6++Qbr86BwKvYfdWACocBwRYZVqtAdcFBz3MwmnhKu5Gi56gAgfIKF2LNTZgYKUGkWtm46WNsWJc9mGxfJmkMNAOeurq66uv267m5+/Kh0p5P6+lGQohMHdAMZyMVpMsLD4Xb5PHBUe9GdbUH5yq8GBQkYkKEV9PZs2cvovv2RcWlSwcCnYythxGbt73np6UXxMbGdpucPB6Kz4vqJgGlzk647LH6K5WYSrc+JheGBTvQ0yqB0xuwL/8gKq9WYnLKZKKxEUcKfsCiBfOMrIkGCoANkG7M9rz5C/Y/Gt23a/KkiRBoz1WFnCjKLe/NjOEYDYkdRNv8/AOoqa1FYmIiMcSC0Y+NxIVffkPhiRIsnpd6XxB3jGMSNkiiZsxIzegeFpY8MKY/YmNiEBoa2kIxtt5ut+N8eTnKz1XAQk579YmCiegrGAwYM3o01UgQHL/uRE3hVmrpuhHJy44Xt4ngPiciBqILSViXrl0jUlKeed1msyXo9fqQ1gCo6fxB1V781Y4vP1m7/t3Pg4NtoSaTGQYSnWDFhKQ4dDbQqe3iEpwgToxOKzSzWgv4SEZCTEcnkq4kwf7e3ryQIfGSOP33kEWLlxVF9e4FvSkYg4znMcKwk2Z8DmnRDlxMIxAKA3HHdtwLQOtWbfI7v723S37nsr92eqcvWXl8VOSfmGLZC85MRasnkiXtIG3hniD+CUCgFwMYykDkrh53rF9wDaI6KzCZ9bdgJ233g1iggWjwyCOTlx49yTLJd9DxnkXE2u+VpzMPjznr7Au70wO3W76Vp6PTaQU9DNiIUY8b0S3Y8CO9Nd4xjDoKxPOZeWNO1sfjhtPdFgSNdzR6Ictaxi0dDaANiBcyc1tAeOhsoVXKsRm0wkeNjGs5CnQ0gDtAFNfH4YqDBhWdqCBRzVJ35TgeHV2E9y3MnJWTj6nsm4LYy7PT84r9w+n9JZKbDxNAaxA9SIKav+pIavxZEh82gGYQ1lafbT7/mBbv9W34n15/CzAADoEov1RcZRIAAAAASUVORK5CYII=" alt="ZoomFit" data-type="icon fatcow-icon" {...props} />
}