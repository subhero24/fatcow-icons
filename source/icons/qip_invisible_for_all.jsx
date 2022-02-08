import * as React from "react"; 
	
export default function QipInvisibleForAllIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACNxJREFUeNrEV3tQVOcV/93H7t1d3rsiiwIS1CgyvkBTA0axPiBVMeikj6TVTOw/mTQ+SB/TmZikmc7ENoqRmj9MdRy17WTq2GhMBK2K2CDga0URVDRV2Mp7Yd/Pu7fnu9wlNI2mY//Izpz9vnvPd853vvP9zuNyiqLg2/yJ7I/juG9cV7ppx1/J1HJmMFvPc7gR9DqfO/Ph23cLVq1PHJuT90lU4RYoUeLzjK+cG7R/Ud54aJfjUYq5mMJH/HQlG3d0lCyeZ104Px9GSU9SQF29DSfONGHAfm+RyWKtfW55MRYWzQKiJMEz/lUc/ews+u5eS718bF//Iz3wyJNv2Ha4ZOnT1rlFBfjL3QEMBMMwCDxWz5yGUlpw+Ki3tnzFQuTMzEXVtQcIyFGVv2ZWLkoDAVTLkb20bA1R5Os24L/BACMvCCsLCvLwzvVu2JwB2IMy2n1h/LalB1PmzoBEm2XMmo7trb1o94ZV/m0at7X1YXbhbAiCWMb0PK4HJJ4uvlEW6CJ4GHQc8z4UTfCzHjeeyBiLC04vFOJLen6EH6HZWU8kdkKJyP04BvBKVB661D2ULBl14GV5hCEQbtrotJmRKHrIuXpJhIAvI0oQBLSSx/hv8LT4ULQzNNOLKIHU33wN4oKnwYXC9CI6YoCiE9BFRtAMOklgiNa248HrdPBfvIJwJOIv2VjZw1gsOkjnxzXvb/5+DBPif6B9047OosJZac8uLoRB0qkCTReu48jHpyCnWaDLmwIuIqtGKCwUdSJkjjbXi/RMO7CIos0higi33kKgrhGrVi81Fi8oADtQIBhC3XlbeVSp7Dy5syKL9gzHDBAWvbJ169TcSWmlK4txoN1BaI/AKPIoyZ2CVyeMw87K/ZB5AXpCN5gR7CzkgQhtKBh0pIEfvn1RQLi5Db4jf8eL61bBmvskdtzqh5+uykLXVF48DwovWGV52+HTu36+OpYH4k5cvnunOD/HaiM1gWH16o9tNZ3ITHTphh38pAzw0pdui3QMQsxKGbn9aJCOdfMe8mZmI46eGzRQxsDJzCwiOtJwC6sLpybGDGD6B76FTJwqfhWMFZs3w2g0wuVywev1wOP1wufz09wLv8+njuy91+tDT2/viKYtb7wBp9NJa3101wH4/Yz8CDCihOQPsHkAHo8HnXb7SJTFwkPp7u6+WDh/IWw2GwaHhlQacrpIqUtVzATdnmGDvGSQy+0ZFtSQ3z8wAMfgoCrncNBIcybn1uTctN7ldqOXjJ4xK5/xvmDiMQNCx48f3zvjqfmRy1cuI0rxLhNFIhEMXxGvnpwJD9BG7JShUASJ8QQ+DGF2XjZu3rqtyoTDYXWMEurZ2NfXh46OTpLth8vpRjAUwoTJU0PNzc2HGYRiBgSqq6ubVi4uPOlyuSEZDJAkA10FkcmknoR5wmAwIjnZDLNlDBISEjE5ZzyJ2hGKBFnKpXDUU0KSaJ1B9W13dw8dQkZSUhJSUpJhsZjVzVYvX3bW4XC00TQYMyB86NChB4nZ00sn5EyC7YoNcfHxMJni4aO75klbeno6rFYr0tLGwpqWRptJmDwpk0S7sKbsGdy/Z4eRDDQZTJSSDeRyL21oQTrJsPVMluoKUsxjkJ1fvIgOxu5QjoGPK3z57V/HmyT+Dwf/hLKiecifna+engmljxs3UrLZyJJN2607mDSZeeCfSLKkEF6cZHSCyguGQxiTmqrOOU1GoHlTUyN+t2c/GWXW7arpWkusYzEPSEZj3A+FODrBU99BwbLvYd+e3YgSBiZkZSEzIwMZMRo/HgEClWuoH1vWFVJyeBcVP8pAX68dD+ydMJvpiswWZGVmqnKMLClm1J89gzmlKzBz7VpYUhNw58HgCtpXH0OxuXRDpXIsqCgnPIpSSwWg/LUKRcsd/0UiJf+jdY3K9n8pStGWj5SXWsNK3fV2RXjIekZLX3xJqaXNakj/6ZCilLy2nb0fM5KKBUXu/ePtrrE5VjO+y+tRUbUdvyTitSzGMmKwpRPTnsyEgZqiqvsB1HYNIInzw+5z4tOkdAzSYQIhoLXtHqRp2RB0WnbUKs+AX8FlamhsXR7K4qrz+ZgBss81UJ1y/uK63rVl+DNpUQJaYaGCE+6mGK88gB//YBlCgXGouuFARInCSEVIpIZBIINaXB68YPNhw0QzOgiAB195F8lrV8EwdxpBnMKZQlLFApV16WY7XD73WWZbDAPB2v1b3wu33HbINZ8jLlGP+BQJcUl0hJbb8Ly/Hy+/sAwT83PxQYcDHPnaQOWX9QBMqY5GiZVjev9BpwMTZ0/F+vVl8B44AuVCM+kTVX2mBD2i/7iEwIlzjpMfvrmZ7RurBYJWb55Y8tO3Kk2m5CKqn8PFhkrvguI5KCwrRlXHEBXCKAgDw1FBNT988BB0P3meThlW8RRR2H3y2JiVjKunG1F97JxfJ4pGLYQorIfqT+1953V6usduRRxV9IaI7p/a85uf0Zik1Qddyau//+iZknlJO3vdiAoc9FRuOU0Z9MJwi06nBxdV+wHmUmbELlq/efE8VNc0GD6pqniW5RoNCk41eQCsXY+MbkjCWkX0aT0c05UsCmLSVZMBii9KDSg3UqZZquMIA2FK06KRGhLWPGrdEhOUiV/PqXNOTRbAoIZHKtjwf11HBO2le3QDSQqCn/d7JMkoDXdDsbaLPMEToOTufmoc6Z1B1BoV1q4xtgCbP6K2btrmvY/TlkdDQW+DcrUN+gQdRJNeRTEbdQSoUEMzQSUK+dpN9Xk0X0/P8nkbAj7XGe3kj9WWB0/s3rJpuSid4QTObFoyh/w5nF599S3w1zTgRtPxX+SJwnsctWemwryR7sd3/gZ8NfW4+Om+tzS3P9anGTPQQpS9ZP2b201xFB1UZtmHYSQcvH+97m+/6my92B6Xkjpm/vMbtkmGuOkxfjDgvd54ZPfrzl57C8n3PezL6H/6NtRCNH1UdDCXsmrWo6E6niiNKJFBQIsqhqNu1qv8Px4Y7QnjqOhgng5paA5/hR/rP4Oj+A/9/VuAAQA6tgMyjB/MjQAAAABJRU5ErkJggg==" alt="QipInvisibleForAll" data-type="icon fatcow-icon" {...props} />
}