import * as React from "react"; 
	
export default function CaterpillarIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkM5NkYyRjE1NThFMTFFMTg4MzE4RTJBODQ2NjE4QTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkM5NkYyRjI1NThFMTFFMTg4MzE4RTJBODQ2NjE4QTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQzk2RjJFRjU1OEUxMUUxODgzMThFMkE4NDY2MThBNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQzk2RjJGMDU1OEUxMUUxODgzMThFMkE4NDY2MThBNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhJo2YAAAAR2SURBVHja5Ffda2NFFD9zP5Imt2m7u81uPyg2TbprQcFdBMHXfeiqCwoWK2iFBV/2paXIPgiiIOIfUHwTQURZCtrFB0OLPsui4MeK9GPTpK1t7W3iujRJs2lz73jO3LnJTTbpmhTpgwcOcye/+Thz5nfOnDDOOZykKHDCwlqc55ueni6S92zbbu7EikJzvpmZmXkJuyWtRQMM2nx0dBQsy2pqoqqqsLCw8AJ+BlCzrRqgM8Zgfn5eeICMoT7pUeLyjYxAaSMDWr26U6iXUK9MTk7yeDzOqaU+6uUGemVqakqMpRb7Z2mhVj2QR03JFjyRRL/9fYTRYqw38hoZoOGJvkbCPI8ujiNhXiTCePADqXqNAbT5bkPG17miRmEYoM2JZNRKwhxHfBMTE2YzeaCNyOWqJMxxxGg2ETHkNZBnuZMqGtLbwR+ZTvSmM+Gh5QOL66I9Sg4tHWyxTGs5raEBvaE0+K1l0R4lfR27wK2SMLYVoSjQN7/yp/EknZatCqcqzAaV3USefwEjlxSYmG03ba641yFzuDNOV2/Cgf09fKuMldd89bVrt3SVXWWMu/cElm3RDKB1SrZWZYDx9sK7nZ/deB8DDR3CcROmSudw6VrW4BnBcawN1u9swStP3IKPZATlisZVn2oJJrkGEJmDh0F4UDIgfxCqWuXsm9ffMz9+60NI/IBkZ0pz14mLxy5ySP5C6RhNUjh6xcLwtT3LcEFoN6o405A3Ojw2lvdrToLgDp9pb9Ycn2jhxM8MYk8xx2FiQeVhK72fOHT1jhhjSAOcH5UWiExT8Fph9VfvPqzuq++ENcDwxfJYvcyGzG8AkWcw6aDryvO9qbO2cqpNq5xXnbDaCF4xzmKw/qOCh2WVt8DGEOp+1obBp8/A9l8qgs59iidW8J3LR6Syt4vJG26IezEbCd57msP6bRM2b2sVEvIMMzvOD8O1N16G6NCAWDKbzUIymSy/9UNDQxAKOewlLJVMIWbLK1cgEolU4fXnMkgkN+GTT+cgv7QOrKdwThjw5MiAefm516H4IAdLi4vCgAsXzkNfXw/cvZuA4eEYbG/vwPLyitjAwXohkUiIfixG+J81eL25DB4fGQGfvx2+i38Ovy//cU5QMbPHIBrph13ThJWVRdQlMM00BIMGaJomWurT7y5mGAboui7Cir5r8fpzF3GPHbGXrXZVOKDJ8OvqOlWu8eibpFgslvtejNzrYvT97+eeFmGfy96vcGBwcHBrfHxcCwbb8f7y4goCgQCeAMpuLGE5UigUnFQnMAarq6uiH41GEec1eL25DLlgwP5+DmZnZ0tra2v9lHP9Pp8vk0olR2OxKAwM9ENnZ0gQbGNjQ7iRSBUOd0N395mHMNK9vb2GuDs3HCasA+7dy8Dc3Bzkcrkb+Xz+Jyarnf5wODyGd/kBukp1yydX3TrOLb28mLfOq4fXYlgRW7jxO+l0+kvsbjH56gRRe2Sletzy61FSkHXjDuo+89QFfrm59h8bUJJGEENtOGlh//t/x/8IMAADkkDrkDAb8AAAAABJRU5ErkJggg==" alt="Caterpillar" data-type="icon fatcow-icon" {...props} />
}