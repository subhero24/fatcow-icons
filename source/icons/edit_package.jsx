import * as React from "react"; 
	
export default function EditPackageIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDQ5REEyNUY3NkM0MTFFMkE1RUJENTZBNDBENzdGQjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDQ5REEyNjA3NkM0MTFFMkE1RUJENTZBNDBENzdGQjAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowNDlEQTI1RDc2QzQxMUUyQTVFQkQ1NkE0MEQ3N0ZCMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowNDlEQTI1RTc2QzQxMUUyQTVFQkQ1NkE0MEQ3N0ZCMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pvlv8l8AAAUOSURBVHjavFdrbFNlGH6+72ztuJRswoZucagDM4yQ4EylbkMSdLAsJtyDWRBmMA5B1ET9gQmXoXj7AdmGmkgMXqIRMcJkkm0OwQFjbPsDmjnGMocWZVzKuo72tD3n+H7nMortpGzVL3nT5jun3/O8z3v53jLEXkl1Wwv3SpwtwkiWZnyEVfXbBVuOLRdfh3uVxdizNWx5VL7XVQRNvjDMK/GxcGQ9hNM1n6Jo6wk7bQTjIWCr3+yS85avR3/vMTpipOCWCipS7ylE+95qItEck0Qkgq1u0yOya9VGeLobzUejIDDEQkNqzjyc/GQ75le0RJFgQ55vcsmF5dvhOVtrhpAjMUvVQdLuL0HThxtRVHGzEuJZcv2WArdz4fz0sCxD07QEeB6tBGMMSXY7Wg/UX3pic1MWbYb0bCcbx5mWfs2XCiWsGOAswQQ0IxRSSKLT1XSBSXbNImDTM3ZyLrob3wXjSf+JApoaRs68V/SQGJhmvVuRCPSfh5Rs1wkkGl4nQCIEvN3QmP/mhmPgcwT73eASNyKQMApmR2IKRTWIy3VOZEgzaaPgZgKMMwQH3JiQOSOhfuuFrIUJ3A/fqZWYMCMbvkEv2l7/5uLDby7Rq0G8k9H4xpyLSigU+bMEEVAgqdfRnbsNg/5LKLHNxYDfB9/1AFJ6O+DcWWbXFdAUBfnPVeL80fdIDWn0PYAZ8ktU7kdCZXDl5SItbRx27/kYC6THEQjIsIVk6BVoVImKcNBrxmyU3lMJM9Outp/B2DF2THA40NXZhYyJk/DVwAFMdHdh9q7y2RFVQNBhPzglI2N8FH2A6fkk3Og72Y78tcvhzMpC9WdHKQ8H0NHRCdWWgrwP1syhV9xkg/wGARmMqoBJxiEjsiRK5kGfAV6+FLjzGeDE21ivrsLZ3isIs/FYeUcDTPA+kYTckg1EgHM+cpMk+pRw9UwneU7gd60CmrcBnbXkXQpmXP4cleumQw7povus+2AoBKoSgCQSkPPbzwNuVM4fPzWjoHwZeW6Cn/1OP6+6bSoWLnoQ/kAAispiNCIRO1XWvRBN6XYICOmFgr2Hj6Mg0nMdnKG6PQeLl86CSgprIb/VmqIJaEqQ3rcIxAtudM6exiYTfHUU+GNzp5G8dCVrdA0pwSjnhkJgKMDj7gECXJRaV8OPKFy7LAq8qu0+rFjhJM/DhK/ooRAYiKWAMT3JhkdxyD8EXnc4BjhQ1UrgpbMJPER3n2r2Bq5jxAwB03MgCEnkwK0IMKPkOr//AbOWPAlklhF4BdB1w/PSp/N1cEFST2xrKCEMFisE4sAkTjLZ7XHJ/0vNIYq58NwEF55T+N5vn4oy6jGG50nRchOGnrT/IKB5fKHjLQ3H80VL1rThRmemDxNenxczi2nUn7IBOPIycK4WnoADX5+7G9On2NDScIKGD01MAIjUm+nFwiGwEPFEnOogyyabFJmUw6zkgztLvyh58aO0cM9BsF/3QXI3YvfpB/BsVVOxNef9yxJ/UC6TnScbsBTwmxt9t0gA/tbqaU+58tLT8Ps+ME8Pfv7tOto7cgW41dt9cUwoARNz2H9Gw60xr60p7h87MTP5hfkO1Oyvl+tb/6z8stmzP8KB4Ihu7nia7dZ1xRtO/ZWxI1vqCfOBczt2HbpQY8p5hax/JOC3s8a8+tLzV9Ysdr5D3wvJpotJSuyPdnqJV4HxZJNNMK9psjVj/x8EkslEk1ASBWytvwUYAOdL6WofGJDTAAAAAElFTkSuQmCC" alt="EditPackage" data-type="icon fatcow-icon" {...props} />
}