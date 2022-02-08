import * as React from "react"; 
	
export default function NetworkEthernetIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEZFNEUwOEJBNzVBMTFFMTg5RDBFOTJEOTVDOERGREQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEZFNEUwOENBNzVBMTFFMTg5RDBFOTJEOTVDOERGREQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4RkU0RTA4OUE3NUExMUUxODlEMEU5MkQ5NUM4REZERCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4RkU0RTA4QUE3NUExMUUxODlEMEU5MkQ5NUM4REZERCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjHQrqYAAAR0SURBVHjarFdBbBtFFP0zu+vddeI2rmhUIbAEZ86AxI3QQMkFCRSpJ1AFgiuBgJAKLRLncuFApUrlgIpIOHCBlqZRuVQCzrkjmahCTts0CSSxvbvDf3/X9trs2rtRRxpNdjLz5s17f/6MlTGGlFKUFHtlZeVHrfUC+h9lwRpRFP20uLj4Gn8G/QVHxvlaqYW5F1+iyESPlIBWmtbX1xawBte9PAJexDufqR+n337/Q1in1DlSgZKozz/3LEWxqt44ArxaLL1l2cRWSD0qCSzMsktNepI1BsXOcIsnRmTbNjmOQ5VKRVoQwQbSsdEjNtqHbiza7Xap0+lIa8TS/2/EzmIeRYYJWOT7Hn156RJ7t86KWBSGEdXrNWpt7dDsyeP04EGs5IkTg77t7T0eq3lsSHNzc/T+0pIsDszM2MjqDA0scMh1Pbp9+1eq1Wo0NTXNavh04+cLPMKR1ql4UtN9GIOxmIO5wABWmHOoMhWgKGQFNEtvMUBFdi/WMN9jM/eIhZDWmFjSoT6K4wbjMRcYwAJmYQIga2ubLFTLlh54a9uKNjZAypZWgLkM98UxgLjAXGAAKy+rZBNgvzSDa/ZSWQDErizyXEXnzn1Fx2qetL5XkfHpPs+NAxaBrywjGMAyOTFg5x0hyC5VIRh9+TsO9kkZMlYAQbi/f9DHoTIKCAHeBSp24Feria/FC47hYbvdxylBIPZbcx7QzBzy+55/JAIP1Y5gACvOGaaEAkgoSTy4nicyAiR2weTdOPEc/j8swFyVYBVWANhaK1kQu5ifP023OBG5ritZsdFoUN5NCYLNZlOyX5vlx1xgAAuYWdOyTwF2whOCMKCPPl6mTz87z7eZopfnXxU7xhEIuyHdWvtFLh6QABlgmRwV7DwgS1uyUNAJRMpq1edsFkpAZp0F1c+iccI5PDikMAhlILBUGQLwDPl8sFOTBFbqwsm9/VLBzHHL4scbKkoAIHINW1afgEjI7ZlX5unm2lruuUbgYQzGKiSgZFE5VVpnWjcmD1hDEyDn8vIHUieVgMdq3HN6+NoulYhwiQwzVgNFcgB7/0fEI3WPvhsKEeglHCSgsg8hlZI88+7PSGajBMzu7u6d1dXVFwbPqOx8DzA8WtAG7D0sMmMeshgH7NEDpEae5TWuDa6PjbOn59LSh59cv3r1Cm3f3zrD391JocH1HtfmuEfpQTKglfmAGy51250mtzpDdH/rT/7envRGRXpI1si1IEjY7RXx/J/uNO208cqWxVtH+sEyYkHRYt39+tT3dc9+Hd52TbQ5/ebm0wVsyCVQufj5F+2J73x2pR3aNOv8Te8+8QNV3/pL+ve/eZIub75Bre4pcq2AFE3+WXfxwnmXm07Pgqlr176d/EMDBnY0PfN4RO+9o1PHT9PNG9dp4y6/HSoRFdRzCgR6CtT54ykEVkHlnNaVxnfaWDNyR6jw4ezbzbMlLEDMSOD2LUgYOQUBcCWeTI4tJUG7BTcKzgfRf9MKlI0dJyFcSb47CWDpIPxPgAEAqP7UVRXUjN0AAAAASUVORK5CYII=" alt="NetworkEthernet" data-type="icon fatcow-icon" {...props} />
}