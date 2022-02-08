import * as React from "react"; 
	
export default function BillboardPictureIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODAxMDZDQkY3NkE4MTFFMkEyNzBFOEQxNUU0QTA0M0EiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODAxMDZDQzA3NkE4MTFFMkEyNzBFOEQxNUU0QTA0M0EiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MDEwNkNCRDc2QTgxMUUyQTI3MEU4RDE1RTRBMDQzQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4MDEwNkNCRTc2QTgxMUUyQTI3MEU4RDE1RTRBMDQzQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgNuQ5QAAATfSURBVHja7FZdaBxVFP7u7Ozs7G5CjJs2NAGJaUGqjfGptdEX9UlTi9qHiqKIlpoHiWCM9UUQEauRVmx9EB/si0hRMBUrBZ/8oUlbTUlQLFZIYmNMs81ms5tsdmd2Z67n3Jkku2E3PzS1L144zD33/H33nHPvHYHyQ+/rO9sLiD0eK0+3td33OE0KGyRfClQBQNgwQnuam5sVMzw8zI7CRLMbJC8BoHe8/Mopx3HbHdeFJLLzefV1iRR++j79wotpIxhU/PXIhaYhwBTQvv34w6OPMYCw48j2T44dIsscoGwkLgxNkqLwHDh5fHa8mzIq/IxK/MzyBXatctACBYdh4mBnTzvHZgCm4zoq+KFfm5SOQ7RLr4a4PIwA8riqb8Ebl26HkL5Dku/UNQT/vKT4q3rjmuS0LxSIDreMQsWk2LqCRYjhShgB4BGcwG7tKPr6r+FH7McF7UmEMIodbaUBvjw/AsdvoQBGVpF79pxdmxe4NFIpi6ImFNCohLtne2gaRdvebrQ17MNcoAm/TAIDcXbkDcb+/BMPYle9x59fo5yzL5c1oVbMGMzl6KRYXKc7gMQArqSBhhAQol3pPvGc18ZSHjWYRXLNl1PPj6U9eWOhF6GAJwtqFQFIhIm7GO4CqrYDM4MYzzZimvoymQe21ngOmHiepFxOkSxhefJttyzJeZ765wgSWdKZ+gHTqd+x1flcBTe0MveA9AGYJByIdWCiqoNbAhqTrfpSOQ77BeP5jO3VWuavAfE3ode/hYgRU8pi+lNMZn6DyByGqxGa7Bj5+gPhLU8h6yxsd/lFRCsMgLMwnyutlfDJ9LVTticXlNbs3x/AmRukNOxD9M7v1UmcGP0JBXuUFMbgSDpNDtVBzqNqUwKuHvO9lbkJ+RSwZ0dixcFHSRDQwnwcifh3ZEOIXAumlcPM2HvIJPpJIUxgNMrktLqIIC2khtrReO+5ygB0bhRZLK4wSCFAuqP99xMQnYg6UoYwPvgA8nbS4ykVwld2JZ/0AAH+C95lWQEAN8l6AFhWGnqoDiHqyGwN38EJCuSq3o6kXW+NdM2kxHw1Xc+IwhDFHbDsGPJRMdZC3M3k6J6730ZDrBV15zLI5JKord+Pba0nMG8lEeufRTZPlJsl+RyyVgrNLccRFCXxFzLArRuEafoZWDUFtCsCEtt+ALeZBzB0shWPPjsEmfNkTXdN4OKpzbQWV/xA72bsfS5OJaAkOQv3n1gCwM2CQARnvmqkHZoQqxeBNuE9LELXUTecxuUvdgD0Cnq1DCKWNvHNyRbF8vw0yV3bgl3I4qFnhryYpT2go7pmEwGIQhMBrAGBtwl6Ma1X61DNpXf93NKa3RXz1rg1um5Vc9d0KANzJWH1Yo+hqgjVN7KIbqMHN6hQ/wiyHAAXRkTQAikJeYMALKTNLQXAfygISnTt/BpLb9qNGo6KpWIuAtDF3MHOd6oc18V/MTi4bWfP+r8OoNcC9LeAWpTeQcGXul47w5OPjvQ8TJ/8OuOsZM9/x1NEVzgDGaIRovFlDmo1bbEZWZ5cJ4CV7LkZ+NbI6j6ymVWcsXH8OrJe0V7DTR7/A7jpAMq9OkZn9+tWOeVj778bgv9rv8JYl305AFGiev9+iPprGf+kTPrzlca67MtmwDcMLlvP+8arZmA99v8KMAC38iUFEkrKiQAAAABJRU5ErkJggg==" alt="BillboardPicture" data-type="icon fatcow-icon" {...props} />
}