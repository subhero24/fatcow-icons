import * as React from "react"; 
	
export default function SourceCodeIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkJEOTY5NEE5ODQzMTFFMjkzNEFEMDBGQjYxQjZCRUEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkJEOTY5NEI5ODQzMTFFMjkzNEFEMDBGQjYxQjZCRUEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCQkQ5Njk0ODk4NDMxMUUyOTM0QUQwMEZCNjFCNkJFQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCQkQ5Njk0OTk4NDMxMUUyOTM0QUQwMEZCNjFCNkJFQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph/hdLYAAAN5SURBVHjavFdLaxRBEK5+zMwmG/TgSQNR8BHJwQT0pggiokjwIAoeRYm55Wf42Gw85JT8CQ8iHkXMTUGDEIiSQ1Bz9OLBZHcebVVP9+zs7vRkVt30Ujs7s91VX3/9dVUPg7R5q6urn5VSZ9FgmI0xRrY5Pz9/Dm9DHXxlZWVzY2NDHVSjWBSTYkv8GkWbnJqagpevXkMYxcAR5TBagux6UsCt2ZuwtrY2SbEJgG9pTxKAwA80TcNoFCeKouw3xSYAWTTpCY2QAFTVwiBgtU/W5ZfJ/J3gHDia7ay7unCwFLkRVWUAwvjPJp2/4QYAObx29Uolp2/evhuIAV4OQIIQEoIggIuXLoPv+87ZkbN2uw3Npef6WmXJUgDgBiAEBykECtGHer0OIyMjpQB2d3d13ySOUcBJJQBKqBIAhn7qGMcJhGGE9xZyZyD9Uhgwwi1LfffTgf1Pa0AVAGDZEgi9RjHOqNlsIiO4I/Bj5JjOIOeA+oVhmIGokAHBDmeFGhAdBsix3bPWwYXzM3+dA95/+KiXqVcpMg+HNGB3QS96EuT1G7OlwiwT62KzAa1WC2mDLgoK80BvAHrmex6MjY1CrVbr20ql6Rdnvbe3p8fHxKhS1fJA73NqJLpUmGzA9Jt0+S8AwIwGUISMAPQ7IsEtLjaMA1YxTXeLlYBTjHzM/m1I5lDxmdMnBxbfl69bGoDKMVmaB4o6cS3CAO7cvaevnLNK1NNyzc09hOMTExoEUcLKAHDhAIDPJBbO0Xp1ERIAUr0f+CCwwtpc0otAdgZAmngKBNARYW92dK99YsTHTJKyPvLJqIcBVbgDukTYeKJBDrIFoyjUuydf5vNpvYuBMgD03/ixo5UCf/+xY7Ke0o7ztSJN5wUM0AApZHFwpJzW8v6DR1iqy0t0q9WGxtPH0MZrohJzaulnxrkErtlLKbE810pFSI5tX11HnBVaFTFQAsCILjElmPPEAUBls9NjODj7FWhA6W3oOv/FSQzPkNr9RGizHmA3rrj7cFp8IhLOo1VRiXaeemgyxADb/xQt84cFD9fugF7NMiAEQOHMttfXP52Ynp5Jt8+QQNiEhLGIzW2KTTAOo51aXl5+gafhiYNgAFP0t4WFhdt4u0UAPLQjaONoh8Cp3f/3ioj2C20H7adVhGdeUv3Kxf4fXhHR2mi/6fX8jwADAFWFEttphVjuAAAAAElFTkSuQmCC" alt="SourceCode" data-type="icon fatcow-icon" {...props} />
}