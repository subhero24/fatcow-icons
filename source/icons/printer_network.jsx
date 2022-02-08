import * as React from "react"; 
	
export default function PrinterNetworkIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjgxM0M1NkU1OEZEMTFFMkI4QjdBRDk5NDFBMUMzMjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjgxM0M1NkY1OEZEMTFFMkI4QjdBRDk5NDFBMUMzMjgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGODEzQzU2QzU4RkQxMUUyQjhCN0FEOTk0MUExQzMyOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGODEzQzU2RDU4RkQxMUUyQjhCN0FEOTk0MUExQzMyOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pl24ptMAAATKSURBVHjarFddbBRVFP5m52dnu92uEBKCIilVs23qQ5NC4180qTXSVBLQBx9JfEFp+tJIagSJAWt88qUp+OqjEbUKzWIsJaigLyZV25CihaaQErTdQmjtzM6f59yZWdpld9udcpLbuTOd+c53fu9ZCeVFef3js0N5R+pyXBfwUJ1IgByLQZO94a/ff20fPbGrREBq74lhb6PCGIxV1soKBHSbLSf5/hoZJAmj1iWs0aM/rzaQ2T6GTutetQQkN1BZR5/HAreul4EbbAMMKYoH6GPZJ6D5CFV5oAijnMTKPNc+/ODobS9QmSICtbSS61z8Ln/jk5HAWIxZjQeSc//OAY/6BNK6H9OqikC6vxFYhEkrX4qAMjAwMCRJUpcbJJ2qyNA1GZO3VZ+AhsgiySpad7Xg1MnBnGU7vtupPKlAhnt6evYxgQQr7+7uBhMQsaYX3n7nEDLKOA6/ewa2E60PKHIMGdPCrzccfHbqJDzC9wICg4ODXaybCeiseNkwMDn5N/1Tgq7rqEunoWlx8qDEbKNZT9/Gazzk8yau/jUFg3S4rodM5kkE3tYV/z0JC3fuwrIsQSBG96lUHRHQBMhGhMnn83HkTVPgMwHWFeBKSsh0fm4eJjHlvUsfpdOPPEQCeSwTAb7yPesKcZXwpe3bH8M2eyvFn9wW13H6y9N0jT8UAiYpb2rM0NWgPPAgK0ohrIUydBwHF3+6RCGQSbGGXC4nCHDCbEQ41kzgR8I2zTzdO3jpxRdW9wE20rEcJBK6UKgQw6bGJszemoUsy0Ezlao1XWQ8G9aws4HCqYr8YkKsK4RTwpqxbVvEnAnwanumDWNjY7h5c1Z8GM16D/U7HkdLS4vAZ1wmwPuwsd8PAblGU1SRA+Hpsau1FW27d0fOA46zsJi8wLMBL84B1vVAK3Y9R3gA4tilUqQmwu5XOAQR84Abj03KmYDrcBPy/JPSK0mAbjSl0CqZTDZ7DhPjE6IvoFonCEUemp9uRmfnHlGCYat3vRKHEeNz1ouHlISjIyO4cf0aUsmEAIuQgwKUMS5euID2jo4g9qttKTQiRVVRk0iIvaoqmJmexpVt+/HDkXb8QodZtXnIVj67BXilfxSJ6XOoTdZQJ7RFXrCulY3IW1xcvHTm26Hnw+YgyxIan6rHb7cscb9VBUqNNV6FgaSwty2BNXz2O8oFr3BGsE7+NxMw+vr6DtJ1S9F8oO45kc3ypiEdvRGpMQ9vHezupK214jHHgocEgxUu05qh9U+RkWksL1ze2599znHcEhZSZVDXFMnBZbUis0NvyVRJMO5cpu0UrbtFEAbrrhRZHqV3lPBMwbjDvb3Z8T9+R3bkfLGFxZbORJmKy3kmlE2LxHHJq+X9dVoLZdLBCLDKzS2RRJ4cfPmLhK6/wU3rP3P5q8yh829yQ616aCmeht87csysXN+k0JLR+8Qo6g/sF8+mP/8Gn061o0blQ6by9PRJ//H4yuG0OATJyYnxNepbwpIVg1NvwJkfD45yA1cm/kRSdalfrDm+rZqOiz2widbO4FpJlJFjzUc3pzRxsOfu5X/uOD7x0Tp+gC4U58sDIQgYqmsA8W+9zaJUfeESywUJV0m4UpYqeWC9IsZ5Pj6CezPI9Kp/gv8vwABhGj2a9RrhvAAAAABJRU5ErkJggg==" alt="PrinterNetwork" data-type="icon fatcow-icon" {...props} />
}