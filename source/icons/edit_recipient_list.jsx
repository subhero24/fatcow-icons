import * as React from "react"; 
	
export default function EditRecipientListIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODUyNDU1RTYxMDYzMTFFM0E2MEVEQTU5MDVGQzM2MTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODUyNDU1RTcxMDYzMTFFM0E2MEVEQTU5MDVGQzM2MTciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4NTI0NTVFNDEwNjMxMUUzQTYwRURBNTkwNUZDMzYxNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4NTI0NTVFNTEwNjMxMUUzQTYwRURBNTkwNUZDMzYxNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pi23m5sAAAc4SURBVHjarFcLUBTnHf/t43b3jkcQKRSsJ1qxUdSGYml8DI2JbVJhpu+mcXxH046GdFLTmSpOZiJpJ40TGxSQmGkk0OlM1TZJDRk16gw+ohKqpRbJgY5aHw2IOeCO28ft3vb/7RLDAUai/Idv2G9v9/v9/u//cvhMxHGb3nvb5Pgi27YBG6MnHP1xHAQ7Vn/9+YU/oDvmLdABj3lN8EWbigsQi8XAc6OHHyNlOJ7H+r2NRQyHVmg4Aoplx5AiC3im/gpEgQM/GuC0DGLwysJsBO2Yg3M7Ahxjep8sYtJYBR4ywWhYwSb7a3Su7JNwyeOB+vt9nVM3PCYzXoMJwCIGXlHAlxMUCPy9O575nZneEkV8q+4opBnToEYiaCrdo8/63U8cEgN1TPdtrO/oK1uI0Za6ujqEjAgelRYgpPYhFNGgXD6HgldXyOLgYGHyUWsrQMxZNrCE4JwoZvvYyPbkO06QYYtehF6dDrGwDnPzJ+Iv9XuQzz0AX4hDLKozqIRhDS3LMo4eaYCieJ1r9v/YSPeKAtmbhIbjH6K7/JsoKFmFJ4qzcbyxBWNTM3AofAzJXf/Fg5W/fJBh8YNDhokkSRSAPLxeLx2qOCA8P5K9D4ovCR7fGMxsXofZJUuBrKeAD17CGnMJLly+AUOLIr9qdSHBXKPVJwxATxALF/1m48NTEKFA0XQD/2xqQntbG6ZOnw5V1dDUeAptbQFMnUbBpKr4sLER7QHa59Je09F0+gzaLl6DsrsYs9cy8FXAiReBwF5H1cjlC1i35W0GfpFW55AgVErrO9QXF+JmMAxB9lEtcA3k+DZmwiK/WWbU8TPPfnNixHZSTfBQUEs+BEonYPaaJf3gZUDbO07hqz09Diuza2GVzvoq3bj6aRrGuYDjXYO0n9iNN3+Rgj+vGYPXlqdg88++hM2/ehzehESIlMseScSeXX+FSCnLiHhkBbv+vhcfrfcPAv8HS25UnMjA0h0tkIwednz4U/AhBASPhND5Ywi8UwK/34/xE++Hn1Zqajo6mg9gX005EhKSIJO2LMcVmcUA+ZxiYUbzc5jz9NJ4cI7AT2ViVU3AtaSlDwn4uDQUPQqO1j6L5DGZUJLGkqYpdJNDQlhCcoqGXeVl6JbTsXjRz5GTk4PaulrYggs+9+llBL5ygOYmKk5mQnzoBQiW7Zxjx2KfT4ATPLh6/jTSSGuBl4lQIoIhHZ1dOqKWCK33EyxfssipFw/Nn4/5tAIn/wYhazGQvQ5o+DX5r54OslF5Mgtrd7aAYdsms7g0bJGKc8F9nIqILuLS1V7859wVHHj/BG4Eb6Lw0Tx8ZXI6NMMtVqxHVFe/5rzTFWjA5O9sgHnlMExNJTQDVWR26ZEy1oWdBiNwwm2rZJwFopYJZqVHiorwSa+K+3NzyMeSk5b+CeloPfPvWw1KFCV0th7AFD+xuloP+0YrzrbfxKl/ZWBNTQt2/KnGjSuBvTBCAiHTg7yHH8fX5+Uj0hNBOBxBT08YGuV8TzAInz/fOfipJ5cjLy8PL29+DnJyKkoWHMT+90+je8xcKIVPOmdN+1oOtm/fDtM0UVJSMjICLM9nf/9ZqMEDCPeZpLnmFCBGIGqo2PBKLbIm+J1nUz0hnLwooGB8F6LjlmFZ+c64g+fNm+usOwkf344tKP6ZiHKp0CIqdHK6QUtXdfRG+FvgTLZU7sAbf/wtttQexvi8IlRWVccdXFFRMaJOGUdA53yu3/hUqEYUZtRwTNjd2wfDSox7ceasb2PKA/M/O4iLHyIFQfjiBMbb13B961Rc3/1ThHUBZ893oKEpgP3HzmKWUYcj6xKxc2uZ6+Pc6dheXX1L09zcXFRVVWHbtm3D7u8kwuHVePnSH8baWvNGm0nzu+vtg2+ssms2Fdkbl8+wAzdsWz/7vN36gmR37N9g3414S99lZkofHITCByV4feKCH69IovKrXSqHZ9ITSMspplg4Ak5KRfY3fgQ5eAj65XKMK1qN3vbj6HxrNdJ/+PoXmow81DfUYbLAm5SWvELKnIRwy2aqWoD2Vi7SFttIyp4D3bCp1fZB2peECNUIu7sSCZOfQeebW5FxZiU8sR7wtvX5fuZccEXvPt476IuDEVBYR9O6AohG+scSOs96bwESHzuIGDWd2LFiEAe3nrCRK9RF7Zquy+Z8L0r1ayTak+YmgXfRpTaYAB+zojDUCKWc+xXDQPS2Q+CyqigLYtAvNrhP9ldBO9QJww1yNlgERzyhu+DqkEJk65TzoY8p790B0+7/oujcv9bFFJy27nJjzaW3A6abP8H+yeauxSUQJS27r1Pnkp3plhPE/gS1XTKcq3qMegWbjtizGKVPN6abdJPGu4I09bsey1I4laIwQg1GHbAi7uI0E5xhQQ+q3S8dxOJzH+PCYJ/exXcrWDhl0MpkgynurBszCgvJ/9HqYAX0Xglw/dOC97ZTw1Ax+oPJwD1+yP9fgAEAdOVJgz+bOXgAAAAASUVORK5CYII=" alt="EditRecipientList" data-type="icon fatcow-icon" {...props} />
}