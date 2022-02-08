import * as React from "react"; 
	
export default function NotesPinIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTI2MTZERUE1OTVEMTFFMkEwQ0RFM0JGNDVCNzM3NjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTI2MTZERUI1OTVEMTFFMkEwQ0RFM0JGNDVCNzM3NjMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MjYxNkRFODU5NUQxMUUyQTBDREUzQkY0NUI3Mzc2MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1MjYxNkRFOTU5NUQxMUUyQTBDREUzQkY0NUI3Mzc2MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj6FLK8AAAR8SURBVHjavFfba1xFGP/NnLPZPWtiWK1BfahI6wXBarVYtdgK4gUiavXBhwraJ/XN/AEi3sAHUZ98EaOIoQWRxqitklB9aNpGTENr09L0xSRqTFMbyG6zt3Nm/Oayu+fs5TTFY2cZDnNmzvf9vt/3+2Zmgf/W+CDw9GiXKydvuVGOZtNSjdV7XKHmHQBkZe+nUv5xUopv98gfaKzer9UAo+7+8uH9wy5EvxBy7aG7DO7VKSzvHscdjz8A76ZrUVku4bevxuC9ey+cbhfSF+CcwQf//r6Bo8/QZ36zHVehdaXo37zrKTvNbI+DTUC7gFNzXchjHCtjEyj0EYB/8lih6e0Du4BCGRCCPDBMfTncb1nJtwOQESKg6buAmTfJeOoSAMi5I1AppzC4/wng0Z0oju5DbmEJRZp9cOhu4O8RIPBNwBvfAlIj6sNMJwBMGxUV4pWcMwqNhVlg0chVTwX4aP8O/Dm3jPnSWbz60w5suN0zDEqJha/ncXzgFHp7cygUnkT2pfXoFJXbCKyK5QWijPvkn4M7XD8j/unncImR05txZLqIh64/hD0fXIdqhWN1pgpJa3nWwTFy/sjnnyDz8FYEkycw+twLHflsABBV5O58lrzQK3L++8RxnDtzsgU4JwZucw7h7S30CXk89nMBgTDS5w60MK9SXA8NIjg8jPKFMrI0nnjnnkW3OwUZRIXp1mmWZGXpR2PFcbB4ehFbdxMgoeZCKWGyTSHVhCkxPZvGRRxG/uBRXOxbFxVmntIcBDrsqaERLcwGA1D0d9UZ0G6yJKizlyfMz9oJ8wsS+Ow3QKmqmcatb1CB7NPCDGnAN9Ez1TlahNkJAKtFb4U5ewHzxRm8cnA7NiphVmiuTMGVAyNuZVrZNSGykAZoAZxGYYSFyXxbGe39006M785swpETeWzrI2G+l0OxKrEyvaq3AilNdZgukLu52ixClefA4KkzYJAaYToxDNB7ImlybAkfvwbcsIFyTfY90o4nZWuqlB9RbVMFSgN66DTOEmVACVO9Y51TUCz5eH5THtewHuAvQhN02NI1IAKQfbEeUEgDgY0+xIBarISplrHODBQrZfT0dGO1lELaS9M3cQB8GyziADhRYSImBWqvovW93Z4VJO9cMLqEpbHbmoLADrl1GBZmDACyl8mk4bGa2Hh8uerqCtrthEGDfh21UawpFCd2H/A8J+qDxQGwbEc1wMwktyVYS0GEFRYf2JpaDV1bDaiIa2p3o7q4FABcJgDZnAJW24qbGLhiAOolUsu1axeHU5BUE9ZuSxVIKz6mn4YUEWIgqcZaq0Cdz0iRI2kvs3Qcm8uIFaZkCfrnkVLRXJ8vBONTe0e21W7F+tByHVOG0kko/2GxywgDpcden3yZnutCKUn9+v6WA/XSlMlmQOuANQCoO8Mc9XOhUHOahrowE25NDPj2upxvWzZKmIkzINtVQdMZExamTBABM3a1/RgALcJMsinnyj5i6otuFljfJMwkm0r7eaU9FvN/wbN/p9j/AEDRWlIF8K8AAwDCkM+Zvjoi2wAAAABJRU5ErkJggg==" alt="NotesPin" data-type="icon fatcow-icon" {...props} />
}