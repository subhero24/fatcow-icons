import * as React from "react"; 
	
export default function FlagTibetIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABt5JREFUeNrElwtwVOUVx3/33n3nsUmAgDYEMTBAhPLINCLp6FA1BakFlAFFBvpCkanITAutoIO1Y6dNqx0k1KojI5VoBZvCIC/bBiuTASf4mAChJUaa8EgMQkIeu5vdvff23LuLyS67GZxOh2/m3L3ft+c753+e33cV0zS5nkPlOg+H9VAUxfleJRcMA79p/P+VKmK2YbLnrseZ54ivZRg6/pnLdoMetRDFKOUw42SLilM6PhJ57a3y0Bwc3HrvHJl5rwBw2akQ7YKPHgJP3DdqGt3J+pVBMA5c04X6hKa+QTz1PI5ErgD4RN6SP7I99Cp3hE/Tq7qIChKX7F6Qu5ij3hLxX0R4JVaqg6Xd7/LM5b8RwmkDcQu3Id4rGr5WLPXHgYoa0819rfv5y84tMT390RiIMmhJgJwcFo5dxU9umovTr5CdrePKVthh7CDXe55582shSwD4dbKzTLwZCjmL+/BmQl5WhCWjl8CQbJEjJucqDMs4z3vBZ9mk749519KTugoEmdNyv5ii6WzLvZ0xI5/gQ08hmYpODmF2XtqGU/4eWtBhW6aKDe5CXSJmkqVEec4/k8NZk0WGiHZ5Wd37d862VzDRuIDucMTkkw6AEbBXRoVbhDFDhLjocw1hTsEaNs4ow+vTmRZsp+TNL3j0O4ckntmEAl68i0KYb/uoVwt4ZtQ8Ro9vZkS0k7pzFfy68136FJedZJlSZna+GD2JZZjsgfrWTYSDKtvFkj/7pnDIV8JTZ3+Eui7Cd7d+ysraD8W1nSgrFL4daIQCna5QBg/MWkxFeRWBZ/PY0LM/5gXF4K8io0ronfwyTG2u6OlNB0Bco8lT8QhinaU9n7C88yh933yJbeO+zuY/3MV/lg1l9c9qGDe5hw3R3ZKKCqZIObPLZFfjy+Q+pTF2fg3VvaX8qX4Gu/xTxKsuqQBJ++5YomIG0gHotQF4RayV9apVO4qG76DGiiMnWLHgCO1dmeRNaicckKgb/alcVtxIU1MhG9ffzuadFRCWbM4Ni/JorGJM0ay64xrTecDstXNgbf48MrNCqKqBqStoD3bR1+phVn49hbe04ZcqNKRz2Qis/mJo6BEFvTjK7MP/5gcF67lx2CUqDtyLQ7N9JPwqPV2eq5IwEYASsAW+NHy+lJkkigBANnLARfEtH9NmevlFwZsCKmqzO/OWiHdvIHzxt3afmeBpofjsZWgTl+/O4nn3Hom5qJe+YIgh4S6n7WGU0CBlaDFosqxapSgTh5uZ0w7xUPPHlFc1UfSvCzg8Y8kY+RnKnmV8nrEZT8cO3L4JHAmPR2ncwtTsNbw4d7LY6RZ7DLutR6Vp6VZDcjCwEQ0AYJmgxHIAh7RDVWVBZx3VTRupOfJ71vmr+P7WiWhzTYJ5p/ikuY9TDVWsXz4U9YSXvZfe5rZvnMTcFWDloi7WhWfim/gKd4x6nNdybhNFivSuSLx1937ZqpNCELRjtKfxV9xj1tkHhxmMoOfciraqEoqL6DGiPPzWYzxy88O0Z2by9LR7+KfajXaxi4WHV7F98QssnwUlE6LM+d1R3m+eyPv+afxw1I8pam3mU3VhDEDKEFgABNLdnaeIRJz0dYUxnnwSrWYfdTdGWbPvOQ40VDJmWD4fndvL7KWnyW0rYkRJNS++s5YRmS62fPAbfvmPSr6W/zmtm6az4XtjJOnF5X0BmjLGxQ+uQLociCEzglHMovG4j9WjPfqIvZbn8jG94DN8kXrGh1opLz1MS/dotu7dzcWIi8qVXsZ1nGV4ZhM3DzmD151j73v6vptoef1ubiiQgymi9oc6ZRVoQfvIdG2oQPnprIS/dmyqZmd1vaSGZieVaRWXcsLuE28sOm8LVmiTkjwnkTM4c/8r/PyJ1fbekXka51+YymNvXTE7MKD0Ywdzfs1Gee2Rjt0hv5eFLgldiFM35tSSO82vMqaUfMveZ+9vF7pITHZHTI+lz9J7xQNmRy+1B18NlyVfyaxq9EpZa06XPZ80aRIejwen0yl5EiEYDHL8+HGKi4tpaGjod6bDyQevS8sJ29evL+8vdgTUMJY+a3oFQOj+dVjBHnp1e471nFtnGPusl2PHjtkLpaWl1NXV9cfSkbjNIZGavpLZ8hpJIc/qZF9Yeh39pxByBtOe5pKX69SiCQvhcDixgJLukHH+00IdaS6MVjsMOgYg6o5TyqGpibHRdT3xKmEYqfg74kb9798FahJnNBoddK5eo+RrBpAc45MnTw46T+Yf9MPkGoYVs9ry8vKyZEutMk6Of1x5bYrL+dUfKakEpBhZQoWDVEm6LG8ZLK++CgBLqZfYpVq5Ro+F4tUVHZzzOn8dK9cbwH8FGAAJEtehvCZvXgAAAABJRU5ErkJggg==" alt="FlagTibet" data-type="icon fatcow-icon" {...props} />
}