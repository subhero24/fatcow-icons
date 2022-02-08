import * as React from "react"; 
	
export default function PintIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABwlJREFUeNqkV11sHNUV/u6dv539sdd2YjuIQAEnTVClVAUEFMFDEEKC0kSCSqitkjxQ0beqtIW2qEVC4oEHaBEvVEg4ROpD+asSIiqECL9BsQpSW9WhCWlcx0nsJI693tnd+b+Xc+/O2rFZPIaOdTyzM3PP+c453zn3DJNSgjGGSw526NChuzjnt9i2/T16UmWcb0TOIYWYkkAtiqKDQojD27dvf0PdzlvHOgD27t07MDIy8ifTNO8lwzAdB45p0RsMdC9PD5IkIXMSYRJDxDGCIFD3Xj1x4sSDe/bsufhl6zqa7a1btsz29vehUq4sPhTKgVwfMgWOTWCBMpai6TW8ey1yiC4dkmg1ACVJng4PboAQKWQq28a/5sEJBDMYSsUyFuZrWn8eAMvgHK1WEz3VXlLQ9l8I6LCuFYpKJedtCGrpQm0B2Q0rLwV68RwtqNXrqFQqhN6FWyjAMIxFDgiNqIvHZCRJIqQp4Ac+mq0WPK9JxEzAGV8V9CIATUY6q0hkBNKKlHEtBMQictp0bVlth8Iw1oZjejeJU70mpt9JnBBwE2EqyDFjbQC0d7xNIK5CuUIYX/JEgb3Ue2UsihTzI/hRQOcQYZTC9E/jhtvuvolei3MBaMVEPqweMYilnLVDLxiOfXaSwnGRfhvoKRsYWDeIwctG0HxiG/763ENHMLAJ9UaEVhDFc3PefY8++vjBjqqOOTF7fvZQkoSkmK+JbEx7b+D4iUnw5jFczsZwTXkCG91J9Jzdp9/zUcDOH9yOnXdsxa4f34H7d9xplUrl/Q8/8vCOju2OtfCBB3/yW0optOo1gFDH8ZNTKHn/xHcKH2O4KNBjejCi80D9f0DaRMIcHH7vH/jw71N49+1P4BQc7P7R/Si47ktZb1hMgT999ux09b9/wPymX6O/r0hedgfRYfVnE6fRuvAfXCfeJ8ADoIxTuRpQHQSKeLEHYTj4zZN/fqDSP2Ree+03bw4TvvvOu3+IVEhl11V2OwASFYXixJtg3/4lavMeBofWaT2dfUIRUVUINynsJ0+jPn0U32r+hVpfLxnlK3NEABZIqYMPxo6OAUcbb/ztnY83bxrZ3SbbEv8uXSljXsY3KnOwz76G6Zl5NJuJ7iGGaZNhB0RyjB87hcaZMWyZfR4Gk9rrLizRACJWUD/UPnCG5FwYJ6tXQQQbSdhC5czrKDQ/hdd3K84P3E4UTbSXZjKLvosHsaE2BlYZgGCmpjJfaVwrq1Pt2eoqzcowYnllmNCCNG5AcgeWP4Nq8Aqq514hC6bOsCmF7qkpPWfMXDL2xTKhcNZ0ClZmZlUAqQJAyHVDouYiFQlUA1LX6k9tVCT5VaJS0EAi7eUzg+y2ca2IgAy8zLOO8Eyya8Zybat/Ilwgh5bvQUKK1QGoAEsiT66RtWzJcZ0cWgRgPP3U73+++eorl9GkOweCOv5v85RCoUiYWDjw/K/OYf1mVNwCbrzhetRmp6icWdIVgGKtjLwuEZBLZ5XIxefyy/MQNhFIC/fs/C5Z6aWRZIiMh3jxpf0YH//3I1nvWUlChyLQWIqRMibVYMJ1/pRItWuq+2rz19eZQGbn9nKZeERCqoIkxfFTs/jk6DhqC35y+KMjv3v15dcO6K3iCykgxDJqaAWGUwAvFsEdkkJJ93HTVsMJDaw0qMCugBEwTnlmJNQldF+ADHXZMr9J5yIO7P/Qf+/T+rNPP/PCW2SipRpSJmGXCJgUgXndOtIWlZEfUD+nmY5bFE5BfYBYQp7bNO+ZpQostwesVAW3yxAEUjplikMCFodUTdSKRQ92/PSPd5HqGRKqbwSZ5+HK7bhdBbFE9bbH4F6+DRYpRkrvqi1aROAyJiHlKnX6nNLilBpx+55BDDKol5p2D/jgVshtP0Nwzc1K7RTJZAZiLgMgupLwwtXfx0TzCthXPURRtFEtWTQfEjGbp9V+SYbaY7qh5gH6ZmAmpYJR2grrEZnrUKc5cN7zEQqKNHHZly09nXfynTsRGeTpwvwsZGsOwl/ABA2YLRqtEskQpaaedaVM24Rj7Qal6sCkqrK5hEMccV0XRoH4UeqjiIjcijVXltvQ+n605mm45BGs1ENZeuBETJYSOYMmDGqxIo0hbRr1rSLlvUhaShAW/SYO2KUipa8PbnUAkxNTXwlAPDo6eh99lj01PDx4ZU/vMHrXbYBrko+tixQRImPig0W+IgukpQw7WrhLfHH74ScMDeJRvRXg+L/GJ0dHX/jFagPpsm/DbEQaJBmmY2jXrl33bNx4xU0Ft7iBRqj1y/cBttSE9A4jEPj+hcBvTU9NnTqyb9++12dmZs5lxDvfKbk8ACz7gilmn1KVTApZpHjOsJxkZeZl0szqPl7tK5l1+TzXfFTfm5lYyB3WF0HE2TdglA0iucfnAgwAMHsNYOAjeKwAAAAASUVORK5CYII=" alt="Pint" data-type="icon fatcow-icon" {...props} />
}