import * as React from "react"; 
	
export default function KeyRIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0YzRjI3ODQ1NEMxMTFFMTkwQThBODM0Mzg1QjQ5MTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0YzRjI3ODU1NEMxMTFFMTkwQThBODM0Mzg1QjQ5MTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozRjNGMjc4MjU0QzExMUUxOTBBOEE4MzQzODVCNDkxNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozRjNGMjc4MzU0QzExMUUxOTBBOEE4MzQzODVCNDkxNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuUU9nQAAAQOSURBVHjavFfNThRBEK7unln+RA8ehBgWjAgegEfARyAiPyrGmz6DMR6N8YT6GqsuRj3wBGqiXuACgmEBCQbDnxh+dplpq2q6e4ZdwnDYZaDYmd6hv6+qvqqpERAd/uu3E1NSyutaa6jlIYSAMAxnhm/d7MPLkiDw3Jv89PXuru7Oq1cgCMKaElBKwvzPBZiZ/TE7MjTY6+Fao5SqW0nB4IeHh1CrKJD3AB4QFmESNhHIaB3C+sYmE8hm2yhETKJaRAiYDFMMCwsF2NreBsIkbCIgCMZXCra2thi0r6+3JhGYmpqGbQT3PQ+Ma4IIgEaPJS5KPP+784+/KSwug6BQcdgE//JBkbGf0UkqMDnV0Z6FTXTQ933GIkzghJgbJIJRbkAKJxa6OZPJ4Lmy2AxIKSKtWL3ok9FdKiXuSfsSll2LCQjJpo2rHrJsaGiAsbu3kUgGSqWSI9rT0wNj9+5DS0vLqUQbGm+VwWAcS8oSECgQIRUyFE44RKKurp4j8f7DR8hPvIM7Y2MwNzcPr16Oc3RIWFZkJxnvyRiRHSFADCnMUXikSwGZaRzoaQkODvZhdGSU1zbWN5CYxxFJNeMU7U1GWGGFBkRCcBwBycaJZy+kM5v3eC2lDLUhYDDIjmggCHQUSvbeso3Y0+7E2PcUeOeaIJfL8ffZbJYFyfeASOkDcCQFJEbCTEQg5DDJMJEvoaIIcDoUDAwMcBqU8qC//wYMDQ+ZTYS774RSMFUQp8U0omQZKrTQEXApwe+CIIC3+Tx4phwfPHyIHW0BWi+1wiGF81Tw6AhjSMaqqIJkfjgCyJYakeYUBQy+hyKk48/aGrwYHwe/zudw0n1plnRKlWuAFMkbBdJFgGpWJGqYSYVxibInvKFMk4CLgCtDxCqrgtCkIHAEaFP6x729PbeJFrpijT1MY2A1YMowSkF4fCd0IsSfUrEEk5OTfF3Ec2RQsUYlJlNFaDSAwi7vhF7cCU2+RFyGWgcIosFGKdJk2ZqEU0TAMXA4FX3A9mnKj21E8QMo0qvNznFrp8OPMJQ8tg+YEjHAUoqqzwO2DVdoIESXVKJ3x+NTtQlE+9MDLzyigdA8DUX8MLKf1Z0J7bNDMWZZGcpoIEmEqxYTcXkrjjshPyRUjUdyxQKUUlZ2QmJH7Vajffr8BXax2VRLBQTViNNV17VO1hbPA0kCNHJxCSKzpaVlZtjc3FxVAjSELv9agXYc+ytmQhI8jVeFxSWOgt/UBNWuAW1Svbr6G7q6Ol0zIQJ6Z2en8PXb9442ZHcW74aIhd20WODHC/65gNb59NnzfKauPnsWBIoH+0tPHj8axMt5fjlFu4h2Ge28rYwaHlR/f9FW0NZtqolEI72rpQ541ZFDEW2XXs//CzAArePROQ+3X6YAAAAASUVORK5CYII=" alt="KeyR" data-type="icon fatcow-icon" {...props} />
}