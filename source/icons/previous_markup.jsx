import * as React from "react"; 
	
export default function PreviousMarkupIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjQ5MThEQTYxMDc1MTFFMzk1OTM5MzhFNzc0REVFMDAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjQ5MThEQTcxMDc1MTFFMzk1OTM5MzhFNzc0REVFMDAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNDkxOERBNDEwNzUxMUUzOTU5MzkzOEU3NzRERUUwMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGNDkxOERBNTEwNzUxMUUzOTU5MzkzOEU3NzRERUUwMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsqZwqsAAAXmSURBVHjatFdrbFRFFP7uvdtti1ApttB2q0giKMEHP1DAYlu2gG3agk3BhLeEpH/UxH8af2jRBKOJMf4ytiGY2AcFWwpaSjFRU2wCER8UNEggoqJSASndLbCPe8dz5s7d3n3RgjjJ2Z07e2fmO+d855tZDambp3Pv3m5oWrWwLAjcTuNZGnRNg2ma+55dvXo1DUQnOnsKARB3qg0NDYnW9vYuWtdI8jQNgCyaJzu/nPuVAqHduv80f9b9M9HS1oYN69bBX15e19LevmfD2rVr6GfTeU9PM1+DCryu6zAM45aM57DJheh7ePgqCgoK4C8rkyDckUgHgEJjA+AFPR5PkrnHeTOOkmPOs/IE2ZOycfnyPygsLEQFRaJ1164YiLQAHpg3PxaBvt4DOHliECcHj+ME2eDxHySAvoO9sp8IwDGnZXq9mDxlciwSy5YurWvv6OhmP1Ml15vb2Bu6ci0C8XYtLvx1AZphpMyxs4nFlSLia4XHin1F+ObYMZw+c0ZGQqjxjcSJru5u1NfV5SSS0Ju/7UDoxeVP4vV9X9mp0DVwIZJP9CnkIrwXb2jvaW+cSFSOSmAkiMcXLJCW2Cx7cpYnfvOe0MtVJYhaAoZab2q2R25vTwIi9HEjatE7Lr6mYjEBCl4bRWA06HrHBltUWACFXnMAePMae0JvrirDe0cv4oUF0+AldmS8sh9REa8tax+dgeaa2bhu2oDkoBDxMIQdKQYhUqQuUQe8M97oDb1TX4YPvr2MeyYZaP3xKt5d4wdHlc2gDw+zm8Ly6r4BZGZlIoQMOx2mCT0agc4g1OLOJu602GmzJAcSAdzFnUkZOnKzqX6VhH52NmhPckmDRXZ++AZ0YvWw4YVv0RxkTvMh0PgW9vx0CsVUZpIbtMnikhJ0dXYiLy9PVoFDwCcWLkxWwqHXqhZtz/niyMNzHoFFHjHy/UeOIkxgmQ9QnnDeNz5WiGgkitxwBEHOsxmFTs/1D81TNHUIKlAv5d/JHgMTfC4kARgl++P7l/yl5xt7+teXl8CkF0MmkW37SmLdKFNaiaMggExCCrsw5UGjYmv3Za3YURMJKeBfLM2KKaQbQJjsb3642Fhd2ratp//5ynJiu/3CdQrD7t0d8Pl8sUowKZRPlZZid0eHVDenL99hkGTOmExBZqaMCKegZMmSRM0fK0Oy6WSzSIj6HSEKBEZIz42YNzLISgdY52OM576KiFBRGRtzUmDJFE/NycEnXV1YU18/w60DsUhcaawqvXTudL/NZDpcNMNZWzJd013s5nECKLwZdp/RmJZdER7DHnMkgFMXDt/0OHZAeA9/N4hnZs6WOWtra0FxsY9CKOD3V6C1tUWGWyjv5y9ajNGsXMxeuZy8JBJHIggc7MefhPpeqpTs/PvkOGjzwKdfjnsfYBDBqNAcScOGTc/JFFjC1vz1GzfZIqPKVBDIu+lhFGPe6kRWH40x54POyjQ2XgSSm0FS7PUoZhupr2e8IdWo7oi2QkF47bTJ09HWgcQL3rgANNr8d0XAOatWkPJFHR0fk/dIGOFDX+PjHTvgKyqKOxGfrqzERzt3ypRZlIZly1fcIgDK+0y14Q0gZQSkAtBmm7dsIU91Jb22+6yem7dule/IYzuFEN08A4Ta0D1JBwpj0p1qkGQkTuhaTISggLiFSdC9Qks4PccHQATb0dxMVVAcO2TYk5qaGjS7xll8qqqrcYbS9WB1BQSlxezrx1l+rl1mex4OIfr5wIQutdP3dHbKKzVpd9I12+LxFNdvHouSRZRFXcbPYfXNjdfnfcavAoqAFfdXY6xvum62WsIFU6S5qlhi7HCbGAnJTsmw+qWQ4NBh/MzPNRW2uJDoaO9/iKaBIyguKoxpfm1tLZqampCfnx93FvD4xDjgulbPTbjFOM9uLxvmzktaoqGhAeOtr6ePvI6JROd2m7O+5yaLB+nqPNlSJ9sda5r9h3VkZGRAnWUp21Q+lsly/6Oj6Rr/S75E9lu6xTPUXdGL/6cJJazX/xVgAB8VX6jb2H+TAAAAAElFTkSuQmCC" alt="PreviousMarkup" data-type="icon fatcow-icon" {...props} />
}