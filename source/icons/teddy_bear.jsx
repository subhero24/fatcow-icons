import * as React from "react"; 
	
export default function TeddyBearIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB29JREFUeNqkV2lsHGcZfmZn9vR61/b6jNPGdtw0RGlNm5A2xnXblISEJBLwj+NHVApVq1atCFQUVSCoBKhgKiQOhR7qL5AQAtw0jdMoVjGOkx6xk9gkJTZrO46Ttb3L7uw5Ozuzw/t9MxNb7u7GlJE/afzOezzfe69gGAbsRxAErHrEvoM4IjnwDcbFvmpFvHL4KJ6gV70E7++I95ucV+C8rx1+E4+X4IVtV6gAQPz5AbxaG8ChtnX0n0p/WeBqDEirmHIAnU4nILkl5FIaszAVqkHnbcQrEG8hB8zFATmPN757FI+tBmHblVD+8bocONTRDtTdtg+iOwA1E4djfBhS++bO5ttb4RBNxiKpjszOd4r5jxBs7IHTVwstm4Rx9jhyGg4Ry9N00qWMVALgYSAFuqroCqKoqfA1tqP5Ph1KYhrRycsoKHRN4pG8XvirW+Bp3gm3rx1qcglSVRBCcVnXJwHgYBExSImWT8Dpb0I2Pg55ZoTHt8g8aEVPz+WQzYWRi4YRbM/D7d2IvLyAomNZV1kjFQAUozn0h8PA0pUB5BKXIU+PYKLqSfS9TV6xJA2OFJiofgp9xyjmM8PIxC/jxugA5jNANIt+puuTAFBePIkXphbQP34FlGjznHjiz7+9GfeiRgA0U/2JP/3a1Ebv+dR1/GsBCMfR/+I7eIHpKmekYhXQCdLZ8PJBjN67LYBCJglRMPMi0HE/PNUNJlKKeXL6LJgqnQA4qwIYG03i2TdxL32epSOXq4JKHtAtwSgzWKCsZspVurGrdSeUnIrn+wb4URSV09SCCYDxwrxLtJTxtYbABpFnunTmbsNMynRKx/VLo8jnCvywd0Zj37gXNNs+8pWM36oKbnoro+KcnMK2gN8kzE9ehEBqv77D/D9N1ZgiWkvQzEqZCo7JLNdJhVJbAwD1vTm8vBQ3E49p1HIKUikgmTQPe2c0w0pOxstkzP75/wPI9U9gZEnGP8JXWdY60FJnupq8wg97ZzT2jfEwXibDZG+lXLjFMOLV8P1H8Oj6kPT7ex7qhof68+KlIej5oh1nfnPR7UDjll4oahFj747gWkz71k9O4fVyObCWYcRJP9yNzzfVSsc/u383lds80jcuwm7RKwGwBGTi/pa74Qm04vSxk1iIa/t+dBInSuVCJQDiLw7giGjQCGYZTfh79vdAS01RN4xwIxDKpasZDm9NMyT/Rgy/fRqiaIIlNa99563l0VwOgPjSF/Dq7Xe0Hdq++8vUYl00B3TI188gFh7mim4awop7CRYmC5hBJhq3PIxg63YyINJoVjE6+BfMzc688dwxczSXG8deJ43gbXv2Y+nycWQXr0HytKKu42FK72FukNnwhTbC6amHIIqWQZ0mYxTZ2L9NTASgqmkzIhNHoUTn4fKtR9fO/YjM/eZjo3k1ADY2kZo7DZe7Bb5Nn+I7QHzyjBljWncCLfeQYYm70NALtutoB6hHwF1D3hoj3iISV8/A7WmBf9MW6owJyFOnS45mR6kRHJ89D5e/nvvYHahHfOo8v1WgcSuFgYyzflu02h479M5o7Ft101Y+kBJXz9NMMHV4gvWIkQ6H4+M2VwMoxhQawdPUWBSZBBzIJ6MQvCw1XYTBRbfTWebAXgdurgWMRt+KxMN4CzKbCVGuQ83ImM+WHs2rk5A127bnHsSPGzz4UlNbM3bsPUAZHeJmsuk0Pjp3Hj4jiYYaz8ocxFJCQVYIYPO2T8Pn93NqIR3DBwNvYWEmgqU8/vrSu/gBfZhhIShbBfYI/uMzHR/s2PtFMRYeouSa5gqrQhtQ29aDkb+/j3pXGqGgm8vFaPOMqn50P7gDcbaQxGY43RdqR6ijF+8P/E3/yq/Cn1k5miv1AffP9mLw4KOPdS9c+AMUOUtZTC5VzLbuqa5C/d1fxeDxU+jeGuK0kYkodu37HKIXiT+V4TSnx0VbtErx96Gp62s4+vorI98bwC5rQlbcit0+r9itLFyiaLmwrmsPJZeTrz5Lk6doIU1CXZiApunkE7Pw2R7AaEoiA09NPeraH2AlQzlRQPTKO1AW/wna3ruZbhtApWHkFmjJS8ycI/c9ZK1fKk/2hs5H+AomU5WwrmQXgUGRYzT2ra7tAbMwdNNjDZv2IDE9ajcp91qmoaBrGsU9D4fkWt5C6AiSk1qrhKycoz7httJPgNdj0owCOI/Nz2SZDjWj2yUorAWAQaEbi/CtSuNlJFiHWTCyGq7EA7hzXRVtxiI/7H2SaCLrlOQGm5/Lko5riwW2oIyVGkqlkjCwoRZd3+7FUB391urq2QWJbl2kPWvmvUF8OJlgQYy0VKPZuhXvSTdSiJBPmrffUYO2+3bRryYJGslcGB7Ef2IJ/HIIvbNxXCD25K2mIfkQjeuD2PL4/ejzO3GXw3JeUsV43xCeT+SQsdxpe5A1F6PGi6rDvfhpwIW72F0ZMV3A+JGzOHxNBmU1FukU1rIPsACzPtpMp9pa0XULfXTFprNyJeDDzJILrJChnQkRSy7/vywkTkuhnW2GpSBn36LEs2YZ2+5/BRgAo1WqBCGMTmYAAAAASUVORK5CYII=" alt="TeddyBear" data-type="icon fatcow-icon" {...props} />
}