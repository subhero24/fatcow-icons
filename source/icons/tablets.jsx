import * as React from "react"; 
	
export default function TabletsIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEJEQ0Q2QTE1NTgwMTFFMTlGNzhGMTlCOTA3MUQzNDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEJEQ0Q2QTI1NTgwMTFFMTlGNzhGMTlCOTA3MUQzNDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4QkRDRDY5RjU1ODAxMUUxOUY3OEYxOUI5MDcxRDM0MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4QkRDRDZBMDU1ODAxMUUxOUY3OEYxOUI5MDcxRDM0MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqCvwugAAAWVSURBVHjapFdraFxFFP5m9u7dV16bh0UT2qoxFSVNHxJsqC21Cj5A8fHLf0VNixaE4gNEBEEEWxCECtKC+ecPFX/VPwUhjf3RxrYmjW1SbDUmaX40JM0mm2yyjzuec+7dzbru3WRxltm5c+6555w5j29mlDEG+aaU4iF4/Ku+qzR7uPjd/2muXDP2/tuHttNDhml52arEgODnJ/tGHu/esW33rk6klleIyNzuex5UgblECf+KaCzWQP4QiYZx+coILgwO3fjg6KFONiKv1yoxNkpGkPLtuHZtFLmcQd5al981gRV53pIxQI9B+rM0oOnZIbasQ1ro+xxNNL1jmRd/Hd7GOqgn8gpLDbBZWWo5BYcEaK1FeVNjHA3xejGC9c7fTWDu7jwpI+WkMRxU+PJ8At8OL4FsAH2K17pieGdvPVYyBtmcIzK9VdvFCksNkGUp7SrnFotFoS0LiYVkgYnnNTUxrKRWYFsKpy8u4k7KxndvPIBoKIDl1RxOD0wRPYnXu2vIIC0yywXPKps1Zs3FaXLhanKp8KUpSixNq7fIvf030/js1XYMjM1i+u4K7ouH8ea+Vnz4w00c3qOhyQPwyWfLJ29FOLuYV95C7p+ZS4j72YstjTSnMMRrQhKClqiF4b8XcH1yUXJgPplBfcQSushhYmnW5r3p4wD5SFFfWFxCXSyCWCQkMeSR50xX5FdDVjWELYyS8uZYEE3UeeQ5043nLb+CLusBLVkekA9DtoXf/xjHow9uRsBqQi6bxdDYLYSJzoHlQnmyI4KRqbRUQt5LXAF7ttpUEVoWr1UVBhjk3Qa0bWrGrclpnOm/4JYACW+7twWtRHe4POl38JEwIrbG6FSmYMDOLUH0tNtIZ6kMtSuzihxYS0JuD21pxbb72wpJ6FBicufmGCU139MewhMdIdfdhuufscCIYqX8UdIqr3zNAE4yLjVLknINZNJZr+AlZG41BLX7zJ7JCC8ZqkxBZlVVIAhHAiMk9cTPM+gbnJc5r+xQdwPeO9giIMONgciPJ5VxZI5qQxCgFYVo5ScH5jCZUPi+t7MAMqfOTQn96P4m4T15btaX5619jVjN+m9q2i8E7MogLefs9SQOE6gwyHzTPyFjL82ZzlnPvTKPFlkbDoHxKlZp/lCjmQBlaOLfIFNHNKZrHRDeijxqDYZNGTTwgWLZXCWD4wQmYyScwSVfYjyPeyDDrTKPK4tlVhcCWgrnzjOdtaihfbaWEq026I48Z3qOhHKvxOPkUbW6KnD3fUa553Y2IGIFMPTXsgCK4yh0d0RxgISns24drs9TvI1tyAAtbnA8SD3QWYendtTxpkorIpDJMd0REOK2Lo/ydbYfEBnBAeW5j0Eo6O1qjIAZRjqjC+e69XiMJ7OKvYBxQMtRK0oY/8lPUzh1/k4B5Xr33oOPn28jIHJDwGDlx5NKOxLKje+GHiefiBiCj5+9jT9nsgQyXYiGCWRWGGQmceLsNN59ulV4K/EcI54CEJkNV4GS+mUQOfPbPI7sb8MvN2bRRyDDYy/NmR6kTOdekSfg4olSVUIxn2QZjvlUM1Ry2qkLu6cdDhO3yjy0mECVu2H+nM8g0kAuHZskkIkWgQzNmZ73aGUehQq78X9DYNu2W7ckiXexF3c1IxZQHsi4nedMzzru1lyJR3ZCpTa+Gyo56WpxL2fzKz2bJLEGRxMeyAB7u+J4loSvelWwHg+HwbICZfOg1ACznEyOX7p8detju7vIAEeMf2FPK17qWTsR5QxfNgxsbQpG+/IEIEl46fIwspnMeGktlN4N62lo//SLr38M2qHNhQtkGe+V3lsr8fDKM+nViY+OHXmZpjf5auZ7OaWBTxlc4HW++Fl941gtUL9Nfbb4cqrKXc+9C6TtmznVN1aSpr5cej3/R4ABAIGvzl6ESnQIAAAAAElFTkSuQmCC" alt="Tablets" data-type="icon fatcow-icon" {...props} />
}