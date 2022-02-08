import * as React from "react"; 
	
export default function BoxResizeIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTI4Q0U3NUE3NkE4MTFFMjk3RDJBQTI0Mzk5OTJDOTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTI4Q0U3NUI3NkE4MTFFMjk3RDJBQTI0Mzk5OTJDOTAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MjhDRTc1ODc2QTgxMUUyOTdEMkFBMjQzOTk5MkM5MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MjhDRTc1OTc2QTgxMUUyOTdEMkFBMjQzOTk5MkM5MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnBN3ScAAAShSURBVHjatFfbb5RFFP/NzHfZC7RUi9UiEhPxUlMjmkjMQmIW2gbSQiAaX7z9B0ZjSIxQgnhJNNF3n/TBB+MDKIamXUAUiTE+aKIPWoloCE1ReqMW2P0u4zmzs+12+zXZ1s/ZnMz3zeyc85tzfme+OQKA1/d2qYyFFg2/2pOjvoJ0m9P7xtCXQjnbagNkx5fU52sDcRRO0mAXPbpIvzkjB3c9U56dPFM3lpc1Y1FQni4d3LWHHudIgv8BQEhy/exbTx+4MTV+3o65jum0jk4N9vfT00WSv3lk+5HS8VBm9sZazGsQgkVCKBIpUJvRLLGGjmJSxbJgVQoNJ7752bnDPU/S6xSPff3Osy8WB499wMtYR1vrxvvvmrn0y1V6/osjsfXQ8Kcvbz6/b8eto4g0O8maok45Dn44eQbSUahBINOIwwhbdhcRhWEVkZ1RIsbpiXvx3m+FY98d7XvKKmsjYZ5NKTZYvnb1GvWzvKIwOHT8la7v9+4rdGN6ehyhk0fkZI3ETg7aX4ux3y8D/hpoN4fY5fEsQuFhfVc39T5ClbVrcohkBo9teRzt5R8fuPzggUcuffXxJ2TnJskNkrJj2V5j/NpI+f37iw9h8sI5uPlWC1jYEAgoz4Xn+1Cua8IA6/5ISvj5FkSVgEKg64ODmbFvsb+4He+O+hzmrN1saJjZQJSMJmMToz9hNrqDAuQsuL8GQLiYC3NwpEe+s3NkMAwrmAs6KAT1AKoghA6hSadGwdiwAJAEwGhct+FhXBx5nxjkLQVAvJ0d/8P0qKNhFISY+HXI9I0AEFewsfelRTaWA2B2E8WBIZtWnjFaj0+6RD4moCPNnHEyG9SK5lx6l6hjoZkTlB2sc1F6LAuAAUYBpCR+ClXNvToPSBqTDIQTyCQRu5h5ADPHyzUaPMC6oqBx89U0TbIPXQUgiVj1Ikwv4GV8QzwmYefmTWZRW+d6k5Y81rjObIZ0JthP9oAmtIoWahII0TArcOd9m/Dnzxdwz6NdyK7JoX1Dh3G1jmNjsDGkBMnoTELgJJ2ZOqqY0w5SLFnE7m257RZ0F7ca5TEZNS7X1b8KsdQIn56sM/EDkThKaSN5kZCJqBFjnmjC/pL+Np+GrEeHKwDAWUBxi+UyAFbUOC+U0dkkADIYh8b9IiEEq2tWZ9McYA8o8oBIyQOUnrpZDxgumTTkDEgJAH1RWadeGQntQZRCkyZLwpVwICDbAiKV+FczpUrCJjnAXy9zeiUclKvzgDI6m05DgcieaDK1ELDOpkMgYsuB1ADA6GwqBHySKhHA4bMjkberA8A6RTMfI75ESlXGOl8QAJFaCKSqXlCTADi9bw6fHnmtb4e5Jv9z5ZtC6bltfBvW6TjAepW2Q7rtUTNvk7fYQqXZDBUmn1Nt8AK9d5K0L3tG/LfChK/+Yztf/+JD5fp7qAprZSO+cT0N7Dxy4qNThweet/WBSBkA7zxkG2RrwI75i669yssM9Bw9eaJ0aPcTtWtzmrUh6T4rHbfQEB1TpdxNwkXAdZJxkiu2eEiz8XW8g+R2WxXNcCnIADxbIbvWTWULJHUPWMO+9TqfzXP/CjAA+Ca2ZZYM/LMAAAAASUVORK5CYII=" alt="BoxResize" data-type="icon fatcow-icon" {...props} />
}