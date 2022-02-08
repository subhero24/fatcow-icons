import * as React from "react"; 
	
export default function UserPlanktonIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEM0NjRCRTI1NDEzMTFFMTlDNDRBMDkyRTk4NUVCMUMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEM0NjRCRTM1NDEzMTFFMTlDNDRBMDkyRTk4NUVCMUMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4QzQ2NEJFMDU0MTMxMUUxOUM0NEEwOTJFOTg1RUIxQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4QzQ2NEJFMTU0MTMxMUUxOUM0NEEwOTJFOTg1RUIxQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhVDDoYAAAXwSURBVHjatFd7TFNXGP/d296WtsDkIT6AykMESVTwBYswUDS66Zy6mJhszqiZm9miWdwf2x9LzLK/t2z7Y8teSjI3tywKOGMcOlRk1gn4AEGGWJjymKMF+qKP296d7/bWdB2Piuy0p/fec77H73zn+373lJMkCdQ4jqMLn1VWsFUlqH9CWGMyJtHt3d3d0NJBj5i4cRmrFuWqYzRHmM3i8AnR4ysz19+sD9kg31wYAFKsEHTaWr9XrLP1D37DRiVDcvxqjUG3l2Q8dlfun1fbOicAwRmL8nO0cXoCCq9z9GvnoK2OiXPxc5L3qjTqcraQtebLt34N+pegDlPWCjGa70aHHe8/aLxTxZ7tJDTYidbEzDmXk7JTjyiGYwjLOAA0IeeWrt7dVnP/dXbrIGCDnQ9upy3P26J7yvA9ezay7pZDHg7A7/NfZM6Psfse1u8r3cwMXQmI/i4SYlHaE6EXanxm6ZK36YZkSYd0w+z0kG3yQb4eKYUZ8N+7dOMguz5kfVhZpVeJxKDHMVpNQmqtcIBWOgYArUpQ7ZS3Kig7qOh6FVtk86Hiwz8WgFGKnKIUCM9BmmP7/5u8yTyfxy66MQDEsLlcee8driuKvfBcCSi2Lcqc3MJzwB+OLKKJao1angsEApF6j2zRHM/zYFUkks4YMv/xwSO65u9vuddEWesPAuDGqgCaIxAkO8Fi/o06SgABfVK8IIp+eH1ebN63tYbBKJKkgBxjjn1UHK42MppQCwLJ+yK28YkBYFbaLJ3D6cS6NeXYvu3FooKCZUFkfj9btYSWlutFsVUncPZ8HbQ6LTyjHikau1wEE47ZCsqXJaTnGq2bN21F6apy/O0cQWn6ImRkZWJp+dNY+kwxVq+vwEz9DFy8dB7Vp05gwDyQ2FhrGprIeSQTjien2fjqlp7nN22ZXVi4Au19ZhZfEdfONcB0pg63GhploYUrFuPw0Y+RnTAHTddMqPm5auD0l1XzlDKcMgB+3cvP7svNz/9s1yt70WRuB+077bNGq4Wg1UDQCKivOYfzP56i7MfBD9/D4tQcVFZ+hY62tv213575Yrx8iKTiMVevYcRTVlKOtl6zrKBSq9Fr7kbzpXq4nHbwHI+4xATsfPd1zDamw9L/EO2cGaRj7uok0joaot2pJKGOFfbCFKMRbfc7oVKp0NPxBzqamrFn1z7Mz86Ra+DuvU4cO3YEucsLYcxZAKfbhXnGHArrQoW0xgUwGQ+oOVZoVsewvFK3y4UblxvwxpuHED8zCc3mNrYttxGfnIhDB97CdRYVN6sUkrXYh2CIi5t0kZMB4OjrZ/vOq3i0/n4Nays2wMMH0NHfA6fXDRfrdD/MCKhizQa0MBmSJYZw2e3jkdbj8QA54XkVeru7MTsxBc1trTLNc0oisR8MDVowNzkFfRdqZVnSAcc9ORGRiSD9cvB4fLAO3MVNkwl8jCAnt+QeRcDnJy6EmuWIwAcrinS46WRCiX1mJRnw6eEd7EnAg5TtxP5I+8uqSFTLZ5UXXvscDpsdcTPiMa1UTK27z6a8Y3g4WKJxGj7ibSvCanNDT8knRWeTR/QhgJYRj9dmU9yx+tDGoD0tBa16vbx674iDEYdGzoloW3QAmEFiQOP8LJysa5eH9IuM8qI5IQaxxfnytpy8cEeWIdloQfBRLh4SS6qC4pWorG6G6B5Bxke72CuYpZltFBmf7GFjNlTWNMsyUiAwzRFQAOgNOiwpLcFL7/yAnoRY5HQdRZ6lEj0zDPJYQWkpIx9D8L0S6tNXBUEQWXkL5BfR/g9Ow253yE7iYmOxsqwE6ez1TD5Nv9SiZONz01uGoShQcNMy5sGYnSk75x65kSD6fGi+WI8RqyUq548NIERMwehywU5n7d4+uBx23LpiQkpqKtZs2yafDaX/BQBzevb4cYxYrHREV0BxrPZjUcjyY25GRtB5ILpKeGwAxP3rd+yQnXOhkEjBcXIsimJoKLoFTXIiSmA9U7lOpQ0pf8+Gpnoko79gBpllptboeO4c71xIvv8RYACzMp3PxmwlxAAAAABJRU5ErkJggg==" alt="UserPlankton" data-type="icon fatcow-icon" {...props} />
}