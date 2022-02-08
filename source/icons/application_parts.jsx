import * as React from "react"; 
	
export default function ApplicationPartsIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTIxMDgzRDYxMDdEMTFFM0I2MUJGM0E5Qzg0QjI2QkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTIxMDgzRDcxMDdEMTFFM0I2MUJGM0E5Qzg0QjI2QkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMjEwODNENDEwN0QxMUUzQjYxQkYzQTlDODRCMjZCQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMjEwODNENTEwN0QxMUUzQjYxQkYzQTlDODRCMjZCQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PshSyJwAAAWBSURBVHjatFddbBRVFP7mzu629Ifyo7TdVasEowEFRUoLpaVUowmGYGmh2tjQCL7psyZGE9/kQSKJDyT+JCDtdtvutvCg0cRHX0w0IEYxMSAlkFRs6d/sLrszcz3nzs52dukuXQI3c3L/zzn3u+ece0aTUoKLpmm+6NjYODVelbYNZ7TUwrs0CE2DZVlnD3V3d9OAueTKjFzVyHSqSQF5v8rk5KQcCIdjxFcvpACTzzNW7mp1bWIC5T6BgC4IED5T8TPztpRlI5m28WjDYzgzOIg3e3vR0d7eORiJ/Njb0/NSISS8Cmgu7Cv8Ot754Soif0wXl+7RomfjGnz+coPDSAjMzMyirq4O7a2tuyOjoxM93d08mS6mQLaU+XQl/KuDW4i5fXcFNIEjIxfwxd71TpcPUbECU1PTqK+vR1tLS/1wNPrPoa6ux/OVWFIBnU7AXCQJ//ZyAsLlusTJWb2961eoeV0sLioLBMiqqrJI7N61K0g2dr2rszPkVcK39IG0zO0CtRV+4i0Lyc+Z0TSlKp7csAEDQ0NwudjkVX1kE1QeJqokmimggGsFmmqSa6Kuqozqwk4ppUbztmOJtN5YWEDjtm2K8ovtGHmg8BVk5JhUv7F5Hd3rb4C4uxfwPfTSeotWGkYccwvGHS4XrK9zlFyOEZrE8Ot9T+HMa09DCOFycXG+82S2VG6YsgC/X2R9nBHkmq+gUFlSAZvuMjwaAwey8dEogqEQODo2Ne/A+JjT9xxPQdvUtAOxszQXDCnj5f7YWEx5QeO27YUdyBOK141Eo5PdBw5g+tYt+Hw+j1EKJUhm7pnbPKZ5IhqTi1aWJ/Vt24JlWlizejVGYzEc7Oqqpal/3TUFvEAgOjKiTrqzpcVpB4NZ5u5YiJHJCOex0cw6t83ztkKuuTQEZmZncxDgkymXI2ZaxgY0jy2wEIWAri8ildnHc6ZpYlVNzfIR4I0R8uPXyXeHqXZPuqu1FcORiOrn20BrW1t2LQvlPvPgIMSIFPHjrMaMgHrJZufnpRGPK4onEjKRTCritkvuGBOvWzCMnL6RWcPt2bk5xZf5s5xCr+FiKNZ0DIXDeCQUxJ49HRgcHEAoGFJez6f1jtkZN+vo6ECYxtgG2nl+4IxCw7QYjd2lIRA3EtJOmeRNxF66ZBGZHuJ+mr7b0r6dVPXiXHqxTeNJQqckBAJkTD9fPInm8Cb10kGjp1wmaYYijcZb/E7bSuLjvv34aEsK/ZGLOPXLjdywSeL6XqjH6c5nSwtEOuUDzQMbIfveJSYUuqWBE1WXVBDX0zdReeNFJB86AbnyFbx9cpwU2I9Tv97Al/R8a55kjh+qo8PncZqf9VIUAL+GHFSS5FYmkUWsqmkxx6OJ92AkLYhrR1D+/GVa51ePl+OVEuf+joOdlhwW+zZUOIi44XzZCqhdBLsxR5XA72vfRyXJSVw5htT0T3QrFRB0f/q1z2jpMzk7q/zCDZZ5/EpSgDONBKKbLiNOqQO/ttUExPWrx+AL0JMuLKWAdfUTmhzK2VbhF9k8YPE2CisgiiFQQ0JXEVWTmhXcru2HEZ+HfnMeRmIONXWHSYjpSU4osyUFXJL3joAztbKcPEIoE1Bm8dzO49DLj+Ovw2vR9s0UAuQI+O77nF2Vft39PVhWKaJAOf68uBmWLVTepzFHckmNcr3Uf2lcurADwiTXlJ+66Y66+5VlnldUs9T4PSnwwdZD6I9FPcm6x0O2EywjUoWCD7d20eAU3mpswNHI+dxLJc37mxruktJ7I2EsJh9kYf75kVDkv4IPsizF35dn+wux8fEqlb1Kef8ka84PK+UQC8USklVUPUG0evk2XPKv8y2iK/xfkJXrUcCf+WkIPMBbSBFxzp525f4vwAAxi8BCz5aIPgAAAABJRU5ErkJggg==" alt="ApplicationParts" data-type="icon fatcow-icon" {...props} />
}