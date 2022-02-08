import * as React from "react"; 
	
export default function SortDeleteIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDYxMTk4OUY1OTVCMTFFMkI0NDJBODJCQzdDN0UwODMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDYxMTk4QTA1OTVCMTFFMkI0NDJBODJCQzdDN0UwODMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NjExOTg5RDU5NUIxMUUyQjQ0MkE4MkJDN0M3RTA4MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NjExOTg5RTU5NUIxMUUyQjQ0MkE4MkJDN0M3RTA4MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmRO1RkAAAVOSURBVHjaxFdrbBRVFP7mzsxuW6Cv3aUtFSgJyCtYIYVUwfogMUQM1eA/CVETiDEEgxgFJICPANHWROCHiEtQfMSoLWwAFSKP2sTaAhZIsUIr2/IotNtut7vd7WN3x3vuzJQtfYAF6iTfzt37Ot8959xzzgBDe5RtXxw4RKA2hvlRCj4vKj5RUaURqD2cJORCZ3HRoeOnNfM5WnZOK3QWFdHYcAj//mtXiRBcd92n1V7zijb10dhQSEhmY/XGwpSxWZN2gbHFfE9A6z0xyvtGpyZhSX4emnxBNLUGRb8jOQGOpAR8tb8EjS0+MEnqI0Givmj0x8vui8sK313t7UPglRVr7Nmz5zXlzZmOh6dkDcrY0xpCc1sQEtMFaVENtsQE2JPjB11XWe1GSXkVzlSUOnbv2OrpcSjCtOzZTlO4+4YP3V2RQXUmMwbzoBon4g2E4PWHBlyiWuSeg3V3dTr5azFHmP4zjnhFtS4Swq/7EIlEIcsMstIXCoHGZIlbSge1qU9R+l9De9GetDfJIFkkM1YDVlXRfYfMTguke+y9Gt9R08y2aFg5/CYBlu5IFoPkQEy6P1coepONqfkeDUAz6N1PAgNtq9wkBd2u94mANhiBnkjDNSD9nwQY92gJw/v0JoB7oAFJhD49+pmn1wbWQW8TyNJdCZYoQCkqJBW9DtJLtKz0Q8CYMWQHJOGKAmaV4T91Etec2+H9ZT95tXEHo0hZkI/sN9+BNmJkPwQMwdJQGJjCVYa6LZvQXLwX45/Jx5SCbVASdGHhYADNZytR8eIijJ01vy8BM4OxITiAJMtC+IU1KxEsL0HO+vcRrjmP9u+cCDc16EIcGUiZk4fR6zZB3bkDB3ImbX325MVlfCgidNTQ1KpPpDhP8f0OIXIATzSBM5VoO/ozslesQsj1LUJHXEDAD2VEogC1Q0f2I7jvG0xf/hpsNvvLe2ZNmiuULlQUjhj+wYT33inIxrTB1V2fYMLzL6D7t8OINl4Di4sDs6hgZBoCtXlftPEquo4dwvgFC5FhkTdToqT1Ub+v5eiff7n5PwaLKuuZTe4fZhbUMyETNmz8aR9S0xyI1FZDivDDhHhqDrZzBAy0iz4aozkptiRYJTZXZGL+07l7++aNickFT5EWZk7Nuq0vUHrVzCsvbMdPefmSiKRJBysHXevLz4FUXwtNF2EhAqFLNdW1H214/emWles2lJSnzaPkdGvYoJLMkZKIpc89Lk4eO0MiS7Z5uTPG3dZpxRyf17R+z1EpP6dypHMkDlBmK+s//GzdE4/l5s3PndFr4Ndp6Xg0N0eQinaEoIXD6CkAbr2ucfH85qj4o/ofPFl6Ls0U1MnRxBEwyLB+CFg/eGv5G6zA+TGXkzf/EZ2Eq7wG2tScbl+wQ7XZbYha49BfUWsWp4xHQk+rD23hyGkKgfItNUMXB5W77QOg88RhV9mEqTnTJIt1fF1DM46XVRz7Yfe2zbNHxudnjsngXs9DMZPFaWNBgmXVIsbO19ah+Krn7Qqv/7z8HzMqaaqLk/h94ozcmfVXblx5b+WSVe6O8OU826jM7mBwcuaYdEGC8QBFwugtcwIyEeO+c6qqGhdbA661Ve6dfC+vNMQMmsKRZpBqNCrcB/bMenDL5NRRCydmjYPdbhe3Q4/FYXg8HtS46/F3i//gS6cvrOW9dVQXSneRxk2X7zCIJHFkLh03et6ijNRXbYr8kBZTjjWHI2ddDS2fflnfWEqxi24k3eh7WX+QOUcYt4kfHyNjPtUihoPTB0mL4U+RwWrFu6k9VaPut8TsrxkOTl8v3bElwr8CDACyNO27Kx3RwwAAAABJRU5ErkJggg==" alt="SortDelete" data-type="icon fatcow-icon" {...props} />
}