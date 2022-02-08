import * as React from "react"; 
	
export default function BulletMagnifyIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODRDQjg1RDA1NENEMTFFMUIwQjlBQTJENzRDRUU5RDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODRDQjg1RDE1NENEMTFFMUIwQjlBQTJENzRDRUU5RDQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4NENCODVDRTU0Q0QxMUUxQjBCOUFBMkQ3NENFRTlENCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4NENCODVDRjU0Q0QxMUUxQjBCOUFBMkQ3NENFRTlENCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ponj13gAAAPlSURBVHja7FZfbFNlFP/d296O3tLrwqYx4sTtrlt9mGJCglvTDRLcg/IyH0h4dGgQHjAaHtBEu04ZPmgMi8xER2JUjMaHER/U4BzQTeISlIVJSBbGeHCMTUbX3t529+/n+boS5+IS1zXw0i/5Je3tOff8znd+55wKjDHczyPiPp8ygTKBMoEygTIB71odBEH419e3Y/HtvgrfMVEQdzDmFmxEuK57zjTNN7rjsVF6tPrC4ctoLVhO/p2jxwZO9H3MbkxOsJVnip6d6Otj3e/2fEq2nlUTWus2LNyAJ9bV/UnNo5s79+3rxOnxNL4dm4fhuJAkEZWyFx1NVWivl9HffxJ/3pw5GY+9tZ/8nFIQEA69+lpUVevOHzx4AIdPT2NrjYxWVYFuu0hmHcxmLVyaMaD4PTgSqUJv70eYvD7V1nv8w+GV5ShGhJKiKD3tO3dQ5ik8/ZiM9nAl0qaD2zkbd2wHOTJSgl4sWC7O3sjhWbJVgkoP9y1FF/hJcJFwuB4DRCBap2BOt3DHcKHZDFlXgM6oTJIHwYCE4VkD4UYVoihGuO+6u4COz3GolB4vLCpf1mFIGg4yFFyny82SRiwKvpFytek3bZFBEL3I+5BvKQgILqjdHBs+CpTM2kjTVeuUOQ9uekTIPhEiXYJpujCp5IyCu0stKpSCQF5GekZHcIMHs7pNNWfIsKXMZeoC2S/lu8UVbAQosJbRVp0ExWiAZbO53y5fuYpdtRLGqMbTGYdEyPIvE8WlVhXoChh9aZItcNtUOn3hvwZSMQTMK3+MHx86n8D2Bx34vQwpg4HKDV5m0yItLJImCDJ1RIOzgJ9+Pov6hsYW8nVLQSA3OHhmZHr6VuKrU6fwsmqgeROpwhGQMYGMARgkPNXKYKc7g/7PPkdjOIyOFzrwQd+Xt1cKsahBxNuc8PiLnS8d3bKl5vloSzNCah0qfL78HRuGiYlrk0j8cgEVG2hItbVBDYXhS49i4rs4Uoue5ufeHM7viGJHMRdvJeGR5pZIpKnpqVdkv//Ju+/iNpqmXayqrt5WWx+C5H8AkZoFhBuId2oEI9+PIfr6OT4TFoslgMKCCRA2EaoJG5ctHd70Nh88h4/Ez+wOJdEWHAAejgKhvYA2hNEfL+GZQ0MV3nWsch5E41kQkoXaCv80al5wwfffi7VG4rsSUMn81kWyII5P7IXj/s7tAuv9Q8IDkfSQIvxFmCuAf54n3CRMdcQGW7+5thVamvKd+xXjQ18MsqURJK2nBP97dBMeItR+3bU7ARpMosCwp+uHbfTs+r0gsJzEZoJMSBduZ/5eEbhLIlBYyRZB5+X7W4ABAOJZ0ma1cWzjAAAAAElFTkSuQmCC" alt="BulletMagnify" data-type="icon fatcow-icon" {...props} />
}