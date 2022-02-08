import * as React from "react"; 
	
export default function TorchereIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjIzRERDQjQ1NDhCMTFFMThGQkJFMDI2RUQ1QkY4RTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjIzRERDQjU1NDhCMTFFMThGQkJFMDI2RUQ1QkY4RTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCMjNERENCMjU0OEIxMUUxOEZCQkUwMjZFRDVCRjhFNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCMjNERENCMzU0OEIxMUUxOEZCQkUwMjZFRDVCRjhFNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuBs2o0AAATtSURBVHjatFdNaFxVFD73vr9585fJJOlM80cIbbGxBBOrklqwtTFtg9YiLgTxZ6MLqaEbBcGFC3cuWtSFunThSrBQEKEgSisoFgO1RBS10hZ/kslkmsnMvP/rOW/exEz6JjMvwQuH93fOd7577rn3nMeEELBxMMaanvM9g8qzM6985TneIc/zANbVm+3Qcv3COQdZkYrvfPJGHt/YmxShySc9bJTNqM+fnDv63psfC3PNE2bZFWZFCMeoi2ujmELYeG/VUCqBDuqSzXMnzjz6H7NwnzJsPeS4Gj81NNoPq6U1uHJhAWJaDBRFBUVVUFTwPAG2bYFj2WA5FlimCYdPjwHZXL+WOIUYl8Oi0Bi8DQFVkbTjgwj2940V4BKri8yA+fcQSP1d4zvpko0qx2YIYysHbQlITN4/ONIPK0tlXFt0TMIgEOZHuPFM30lIl2zIdicE2DPTLx3s6+8FG8Nb/Ktc99JmECnStS0HyJYwwvKgEwJyUs9MDQzn4c5yFWgHsA4JkO6d5QqQLWEQ1nYIKLqiH989mIelWyUfuAP//lxJd+l2CciWMAhrOwRURdYO5QZ6obxS6cz5ehQAbaqQG+gDwtgqD1oSGBuZ6EqkEri9PDCqdkfh37gMRtXybRPphI8VlQCfOnD08V2YROVitZ5CESLQ0CfbfL4XCKuVr1YEVF1LnOjp68EDqBpp9hujsFqqQHZXDxBWq2VoRUCLKfqx7mwGKmUDoruv50ENbQkjpsSOEWYUAoqsyrpnNdeZ7QzPYSCrit5qJ4QRYC/Ozk1nujNg1AxgO3BOxI2KCYRFmGFTCSOgJPX0yXRXGsyqDTsdpmFBOpMGwgyLAg9dfy0+o+txrPgiOIBai18ftvhOJVfXkxBT4zNheRB2RCoSl/KqGsNigo2FLKNg6VUUbDKwDCsaqFiGZXymq+siSWxAOKOyyOuOG+2K318IiHEdJEnKh0UgjACvmmtXrs3PHxbCq2NQLEQ9YB6SwhbAdyy8egNDFVKSiIQAjjaYekHu1MkQQcIMizgLaclSeBlG6Q0hyJ+efGj2geza2bHJCYhrkt8X1AwXrl+dh++LifOf/vDd5z6D5uGgFFBuopQ3+gyLQC1QXAzJWqVY+K2L5faclZN9eNSuAvMYKKksMCUJxcKv36DOQkgHRB6NALvtEhDbciB3Jeh4Lnskk9sNHHPAMzEkCM1kFbrz/TBeKB758mbhIiV/p7uER9xV3HGFx1VMRNwlEDSWdC9hQtK3qJhRCchJhc/kRveAg81nozN3TAPyo3uBvm3VfIQCRiQgYbfjqjGcscBySwwE7gBNA0VQh+y5pPN/RkCSQYwNHbgPKsXF9S1aWS7A8PgEzWYsKoGoEeCubYOaStIZiTN2aJNjK85BS6TBdezIk2Ltfs0ar88c3DeSAu/r06+/NbRv6mFY/GkehGOCVVmF1X8WIXfvJPz5+w344oPzt8qCP/L+1V/+CPl/u+vXrC2B2b0D2v357Id4wr3w2MuvQiqdhp8vfQbxRBwSiZhf+Gs1E6qVKtwz/RSUSiW49NG74DJ+7u3LP76GEO5OCPC5B/c/0RvXLlCr7TmO33IHrW9zC0Y4KPRjyrF+0HXFsJ489+3Cxc2RiEKAEiqLMoiSibC+NOsSym2Ulc1RiEKABSU0vo2EpRO1GpyKLSPwrwADAL2x+KzjCN4EAAAAAElFTkSuQmCC" alt="Torchere" data-type="icon fatcow-icon" {...props} />
}