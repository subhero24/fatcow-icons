import * as React from "react"; 
	
export default function UserQueenIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABrxJREFUeNq8V1tsHFcZ/mZmd+wdZ7Pr29obu04jQ2JKUCuBqtRNlQpQGqm0CqIFhCJSaB/aFyTIGyAhIQRRqwpa9fbUy4uhIkrapGkb1ACR2hAlTSERSdrgS+xNndixs7tez+5czszhO7PrsFiOs1WsHulods6c//+/81++8y+klFBzmREbfgqHxp/D2+r3wpr7IfbKU5DuUeytX8+9hLdH/4BDdWtLjmt2GwCweuxJyNIeyIsvY+jRO3uGTj5vSDl6C8WekPKTNfLEs4bceUd26OKrGJrfBzn+eyiFq1cKQOfo77hlfkjaByHt/ZDBvzqkdL8vZfiIlOXtUnzUJu03+e1d7rP/JMefjgB0NgJgWTfVhhapEz6sta08Vy9gZYBAAEbI9QBG70ZY7VeB0iTXfciwJtfA0BvapHYZxGrUtuta7T3OSMeqGzSt+p3vuoGGh7bgfk27LuDM1DOYMhJAfBVgMrJmkjZT/NLEaVenKAPePB3Ap18B2h9HF79MLxcC3ChTF8bu/WswsLETiUQaZnMKhpGEZhANWpC7MIqxsXFqDBCHx0gVEUQhuNSQBxoCkDAlXLuiwosmTzC4Ni5P5TE+fgkbvzqA7/xgE4QI8eeh95A2BUKpNxyChgDoWgjH8ZDtzOLk8dPo7ulB9y1d+PFPHoZlNaNsO/CFwLe+vRlv/fENpFviKwpAFu3wmJUUm3b86mfYUXEY8wq8chk2n6W5MsG58H2BDV/qxetOiESzdk7JrRSAwGqy+lyHhvMlZprDE1fgVNzIsOt68D2fAHwIVodGs5aVZopeCVekDG/LJloMQ1sj/DjOf/RvxjqAR4OeMshTC79mnCHIXZhCMrmKVRmuuS1rWSsBwPj6+lW7AHUYCyfePxOVT0AQyrgfGRcRKMHUn8pdQUdbWtUY7v1CcqeSv1kATaYR3qfCyVPh7D8/weTFaZZZWDUuxDUAHkMxMUwm5LcwDJCIhzsob940ADLVujDwIqWaLrHn5YP0QNWw54nIE0EQ4NzJYfiuQ3AsQ9ar4P4aVd1cCMjshYC8LwKHxipIpppZhhkaUadW2e+R+0PMTs8QmEswanoIqkyn32wVyFKAUU0GXYpnBbnALpIFE3H09WWRz8+hUCiiVCzCsa+iPHcVWsyAZDWUAm20kVJcFuF6E/o9k/lEk0bXihKeO+7gp6+d5cXRhZCAQt9GwKfZvh4/fOEYdh0u8fRFHsvDlsv57IB54yS83mVk/KUPv7Zi+HnPXffj1kcE5GQr3O6dMLdug0MRz+OlMz+NMJ6Cz3vAUxn3zj70CjZO3bO48GoMn/7jIMoCu7dO4JeKT5a6jJYCEP9bH3Kt/f1d6x78EXzG1vraKYS2jdl9SZj9a9Gy6zeQ3Vl4FBVCwhs7D/3F3UBuEm3bi9BIAZUPb0cs04Gx/a9gdnjk7DdyuIO6/RsBiL3XhyOZDQODPVseQHnkDETJQ/p+DemHDIx9z4PWxMtI8ryqKqqCUA2A1EyEjoF1r5so7AlQOMhuJ2nC6v8yPj1yANPnPz76zXFsUa1NPYDFOWA1mxjs3nwfCqePwZvj1SoqKByhwVUZpHcm4NsswVCHYDOipq/H4AUac9SPvqt9ar+SU/JKT/fmbYiHGIzYbJkk1J7JYpOZakVlMgdhlyDcMq9g8v5EEcV9I2j9rovMY/Sj58LLO3CLTvRU72pdfVf71H4lp+SVnsrkBBKZNij9i1u1+jI0UjoG9HgzvCJrmkpVWGStlnJPuiAPIbUtRGqQHcEpoPIf9gpfZFtyu+qB51Ham0fuKZ7K0v4XbbraK85CjzdB6efKXxfCsBhAzNLRr7Gv8+fyLDMHlx2B7kSMDQb1sKBGfstW6yj7ggfKaPmK4KwKiuEYLh2wMPt31m1z1BxFjekU5VsMDavj5AfqVfprNpcG0BrDVp3NplvMQyfdTtk+2rjFoNfUdSR5sCuHOQ/RSljnSeWaGJMyVgGZmLLKAZLyAmsTNX3Uq/Rz9y+uF4K4qWFtQD4nx/LUvPW8AB+TXpM8RSauQ/U5rDrM0CUFtmDKM6pBTsd0dBBdnIZ5PWDaD8mEMtqryFxRNMwmKP3KzvUAxGgn4ZdLqrij7GynhTwVFqioUMeqWjS1yLhazvsSVyv//1dCVWe76tI9rZoOwoPSv5j+61/kTIAPOsrlu6M2iApaVW5p1d7GDhYM16G4RqfV14WEbWG+dOrVZsD3a4ukTqV/8f1QT0Ts9tHH2dFos/oZh0q8Gc4JztJSTKiMKhc1N/q36jMOZYgJhkqUSsvcBZ/LWLD7XwEGAK2doMwsacM1AAAAAElFTkSuQmCC" alt="UserQueen" data-type="icon fatcow-icon" {...props} />
}