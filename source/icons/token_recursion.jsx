import * as React from "react"; 
	
export default function TokenRecursionIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDlFQzJGOUE2OUFEMTFFMzg3OUJGRjlCOTg0Q0EwNUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDlFQzJGOUI2OUFEMTFFMzg3OUJGRjlCOTg0Q0EwNUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEOUVDMkY5ODY5QUQxMUUzODc5QkZGOUI5ODRDQTA1RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEOUVDMkY5OTY5QUQxMUUzODc5QkZGOUI5ODRDQTA1RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PixQlYQAAAWQSURBVHjatFdbbFRVFF3nPmamD5AW2lJoB6E8ypRSSEHlqUWigP1QCeIDEn/84sfglyZ+megXhPhl4o8JkEj4sBoT8UmoQRMEpUVGGqbFUmjLtPQx2nYe997j3ufeaWfaKWLs3GTPzD1z7t7rrL32PucKeNei198v1Zet/8zStJ1SIi+XEIDhOK12d/sLg5+8M6TG+KP04NuLtNCOgcONq9AcCkISAiHmNjgvSpDTL8O3cfLKTTjhH8uGznwwaNB/prF6S8urFPyZ2qU41zWC3piFobiFucLAhJYGDCydb6gYfJ22rRb6amIABY5hbNuzthrnb43ij2gchgYE9LmlYCxpITzgLmr7igpmYRvHZgB+hyBa0kZ0zIKfoutaXhQA3QGi4xYCPgOezvyGpw3iSWA04ajVayI/IgT5Ho07yBC5MNK/bBo0dCgAeYyvnNsZVWZMCcWBxqt/CADCKxH3S0x6SK9MzlLH0gPBsWYA4CGDfLH2RM4MkhE6jfKjqW8yQhBPJtxk+vwU2IFDgrJtotmh39OASM+Rg1wM0IOzMcAr1kiZpmGgtzeK6+EIenr6EY/9neV+flkpqqorsWnDWhQVFcCybdgEBHIKgPRizQBgw9WANo0BXrGu65iYiOPzL75H9E7U5d5b3eJgpXLb392P2OAIwmy/hlG/MYRdTZuRTKVcRmi+9NJm52SATKflp8vf7YYCBqEaGY7h1JlzVKvuo2vqavBYYwhli0qJcpdQTs/A4BB+uRJGx+8RXGu7ge47vTj08nPEnK5AqJTISUKmhOlWoYRlpZQaCgMm/KYOn6mp+8nglIKDr+xF87NbUbKgGEnKv2UllaXodymN8X88h6Iidj+G059+pXyYJDCuMCKT7uRMAEx8gIJ+dOwkjh8/hYICEwFqE9/9cImCUwej4EePHMDSJQuRIqCOtD3ppjPrqDH+j+ccPfKSAjF6fwQXf24jkRoUXCiNZVKgTVWBRHGhH8H6Grpx0NV1F4l4HDfaI3Qv8dqBp0kjLGEbOs3V4VZMlvEyqBIkAeZghw7sVs9evRTGxPg4TBIys5CTASUS4aC+9lGllJtdPWR3VVmsa1iJFcsrKAOCsNnwETOGoU1WzXQjFGpeMFiGuoYapeyfCIRpcpsXs2iAAGi08nW11Urht25Hcbvnnnp4144GWriNCxfbceLDszjb0gpfOqcit2keE9ufqFOU/9l9Dz7dfSYzB1mNSCPkAb+JlWuDiHT2kbAsLg10RHrwzfmrkBPUdCiX5QvnqQ1LasCDDi+81qrFJSqlw32DKoVsORuRW0qcMk7DMkQivYgnkhAU6etvrwApGytqg3hx7+MoLg6Q2CxV0w88uHAqyF9ZdQUGOu/SXG522YiNzF6r04egJa2vC6Ll3CWi3VHoAxTw8P6dWF5djlTKgk0lSb6IavEvGzAxZDnYv28zxuMNyp+G7E5npLsQI02j8/tMhFZX4TodnZr2bMK+pgYkKB3c1VTjEQ+/ZfPGU1m+wN0D6FnNYyUtg6wU6J6CpW3hqS1r0Lx7AzWXIgqeVJsM5/S/H1a8PiE90NOAG5n50jLa8JKKEjWXKVdtGZi7g6rIUQXsm9ukS42cLJVcqP/nySzL3VQZCjmjTebn5cCNNZMBCu4jBLbj5DU+77hCm8YAb7tcUj5SWCLPFHAMjpU+1jEAqU3EfmvtuLdx66oyiKRUip9rGByPDzeFtB9QLHBM9ywOzPdVrWl45I0Trc83LsOToQo6tcq51wJFilM3vdx5Hy2XuzH68Zs7k3c62hiASVZuVtaESg69d8wpKqmXeXo75UOsGBu+Nnzq3bdSfZ1hGoqmK8LPL8h8xCObB3drz8fFp5i/yPrJBskSmSXJTBR4YPL1bsLU8jl+gnscD/wjwABOw1Mu1F/cdAAAAABJRU5ErkJggg==" alt="TokenRecursion" data-type="icon fatcow-icon" {...props} />
}