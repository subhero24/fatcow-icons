import * as React from "react"; 
	
export default function MacroNamesIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0Y4QUU2Qjc2OUFDMTFFM0FGNEJGQjc3OTQ2RDFGNTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0Y4QUU2Qjg2OUFDMTFFM0FGNEJGQjc3OTQ2RDFGNTgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3RjhBRTZCNTY5QUMxMUUzQUY0QkZCNzc5NDZEMUY1OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3RjhBRTZCNjY5QUMxMUUzQUY0QkZCNzc5NDZEMUY1OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtyvRlEAAATUSURBVHja7FfbTxxVGD+zw+4Ou0C4WBGoJm6VklhK4kO9AEVr5bpo0qZUow9VlBiNl8T64BM10Tf/AFOlBd+kLWlLDLTUFbpFCcESCqVeKm0BQS7NynUuuzPj71vONJPNYk3c9akn+bJzvvP7zvnOd/ntjMAYc9XXv6iymNHZeSYN+lWbyoQuPUa3GTauLo6d24FfJx4emZ6eeid6immyqanJg3jMVBSl2zCM0JUrI/WEgc6L3+3QLRCOBPMiri+iOWwCeC6ELov2W15ebpmY+P1V6Ep6ewNllh2GQXbkQBiyNDx8uU/X9WGX2818vm1f7thR7EvPyKgeGxt989atmz8D8xdkjSQQuNBAOJKqyuq3oNP2PPuc3+VysZ6ecx9jvkInOJ1O1tf3/RdXr471k/3evZXtlt316781QieQAxrkNmSmvz/4Hm3idrsziot3XlQV5SscPoS1aUiIOzAvy/KEoiqn3cBm5+R8QGfl5uV9vrS09AnHLhK2o+Pko/idgvy5b/+BdyVJyicbWZHPXrs2HoR+XbClxAnJravzN2+5P/cNUnzddvwxhJs2oFyaNmwaxHfotcYRK22CIJitx1uKuAPrVFt8z/DzlVXb8vMLxgEisNbWemwX9DcoUg7bppSKZbckaQ6Hg5E0HHz5I+jUmMNpyJAF1M0RwomiyGZnZpoplRCFYzQeMVZQsDVAGBFY1BOlbI6vmXYHWPHOkrTUVM/bKJxxVVVp40O1df4nKFcxDuiU0ws959sJRzI4OPAtXYAXlzXEAw0vfRYOhx8gzMLC/Onhyz9d5OmkPZjdAWdh4fagIss3Tp745v211ZVfwprGPB5vOw9n7KDILBGGJBQKzXGdNYTS0vJCeH6Y1jVVlTvPnjlCkaNFRJei6rIccFRX1x7WIxHfqVMn9mM+OTo62qzBMALva2r9n9JtYhwwy3dXPK1FI6CwsvLdT8WsO7Ozs4IoZKYqMhv48YdXqIDRNRV+/wvfkR21ocCJSLGFWUXPPgjQJApLiiEiiefWCZtZZho5hq4zM6KhtgxMjfnuQO9WXk+ZNXueCUULLxoPAT3nYEKKC/UlRhsQ++XSqheSB8nht1zkPZ8N2cJ1Mm/VWV48HuoYbuPhDq5zzBx/zoQ8zAkpwu0ivDMkPr8p8Px6+YJVvWE+d8V0yZoVAW5D6ylNxwZaWIqrGi3LY2WyOze3cozbs4jWffT1Jxu5I9Z+/3mkN7UNmasggz/CEC2OQE/rhCO83TglAQ5IOm6+jriMLmwwhv3uUQKB4nEkU9+IkGRRdaIcEOiUCMTzD7vROqczIdERsNxgqc44nGkdKcQ3S5gDYFrmdW1+vigm0QHieA8OML2bYzzCBi4ZDpjaymLww7ahct3g9wfRCCAaIidm6NxJgWkrt4OxSRIS0YaQhyD32S7krCgp7Oob+bWG9zvjvU8kN2nvgkQ4IDW1XOpgorvGQARMgThIjNIuqBlR0JlgEhFhQVe7jjaW7bP9ZbPEEFFrHCIKxyGi1mQRkfkvici8R0T3iCh5RNQPIirdICK8+YjUhiLaEG9Luh7NCyei/v+NiKrKdnWduzR4VyJKRARkvum87UJZYmoG4x8fIVtHKhyf9EHvgT7rA/UuzZOUceezjL9Dbjr+FmAAYxSAz5Xk3nkAAAAASUVORK5CYII=" alt="MacroNames" data-type="icon fatcow-icon" {...props} />
}