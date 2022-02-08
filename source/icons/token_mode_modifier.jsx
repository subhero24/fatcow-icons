import * as React from "react"; 
	
export default function TokenModeModifierIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTQyOERBRjQ2OUFFMTFFMzhCNzE5QTgxQzBENTM1NEEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTQyOERBRjU2OUFFMTFFMzhCNzE5QTgxQzBENTM1NEEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNDI4REFGMjY5QUUxMUUzOEI3MTlBODFDMEQ1MzU0QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNDI4REFGMzY5QUUxMUUzOEI3MTlBODFDMEQ1MzU0QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiPsRhYAAASGSURBVHjatFffTxxVFP7uvTMLNGlq+SUFRAJrBSu1FdK0oYBgsNg3n3z2b/CliYkPJia++LfYB4O+SAy2iKWkCqWtKVu3rbDbLiilpcjuzlzPuTOzzJahJftjkgN3zsze79zvfPecOwL+dfHi1/Wvt5z8Tgg1rDWqcgkBaO1MP0ovfDI5+cU/xsd/xj681NjZOZwZGDiGEycajJtf5qeiTFDt/9H+YGlpHdevp5BMTjdN/fTNmkVeu6Pj3OX+/hb09tRj9tcUMo+fY+PJTiHqsgLw2XztSA2amg/hzJkW8mm47rnL5B7lAOqktAd73m7A3FwaicQGlBKIxZRBrwwDGlvPc9ikuXlBfX3NmJ9PDzI2B1DD77iuxlpmG7aloGQFuC/OvolECo11wrCswuQ1VqAD7QLPnuVg2QpSVEeEPPFTwmCsIDIrGDEDSkooIcrO+0t4gCYMxgquQgCanJKQZRUD0IYEYbD2BOAQLYIoMlaBAKT09jErXgdbQXsYjht6rxCdAyO+gIVyzFIKMdvGtblbBVEHz3jMWMUBCNaAWzHwmpiFufnbePDwkbmXQha9w1jBLtsVIdGjytSAJIHFbAsz15aQvJ829zynw3kPagIHECr1hQBAtEgqQLJEDfAOsgn86m83kXyQMiuMd7Wa//SIdCD8qigM1l4RskCIKlECA8HKr8zexL37KePrerMVg2ffRS6X3+0t8DCcaAa8bciUBfkx6ZDCr936peC/zC4S+KrxdXe2YuhsH7IMrr15i4pBKAIZ+IwGOAV+GpRiShWmZxZIVLYZsz9s7Kuttc3KE8lVk+R4ZxtGBk8i7zgm60W/UcJgMJbYW4hQUKlHlafo5b9WqTHZGD3/HnLZPO1hdzfnpPafry7QOyvGF+9qwwcEns1GrDzcFtyIFLimEsrCj7w9qwzFHATfj50/RbR6CorR6qeu/I7lex74W13thSC9xiP3qcfF6ZThvu0J0DMO1SVn7/EO8/wuAU3N/IG62pgxHrOPpzre3Y6xoVMkOMf8JjxPlOlIETIDtFopw4cJjfGR90mYwJ3ECu4u/w2b0mICojHP09PdhrHh077atV+CX9GSIpuRX4iK0kZOh1Y1PtLPRRx3lh/iT7KgsfTE38A4gXPOg2Z2sHPhiwwIXwMRRYhZyFMQF4gJrme3aeV89cbb8RH5DLg+GLiZT3pYe0oxXLnvSYj6mdlWE6MDtAu88HnM+1wfiPYXerIrIzTgi2e/oxhHzTtgYrTf3POYfaKUuq111DbEq1fCFdHZ7e2yFHDhYUUw4AdwwI+SUjumKQ9RIhTUrWJ0eMiHjytVuCwq8YwVFqHO7mzeWMk8OX2s/gj5He/AUI1DMZdvWiRhgTEZm6uKlU4t3mhqH/qMHx49fAjKkqYPWFYFjUo3U5/e2EQilcHk95c+3dpaX2EibLLmhsbudyY+/urb2rqjfajSxynT/t/2v4s//vDl5+triVvkeRxIib+OGslayA5zs6tSCNzJnpKlydbIdsJaZibq/GCq9W3E3PJX7zZZjh3/CzAA50nQxdClDVwAAAAASUVORK5CYII=" alt="TokenModeModifier" data-type="icon fatcow-icon" {...props} />
}