import * as React from "react"; 
	
export default function FlagNamibiaIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABw9JREFUeNrcV2lsVFUU/t4ySzu0hUJbFChoiYBFqdDYtMjelh1ZRA0giwgEA2XRRKO0FKK4gLXFoqKAiCGBVDFEkLAVkR1a2mCRahEopHaH2Hb2ee957n0zXQco8QeJN3Nz35u5957vfOc7594RNE3Dw2zCwwYgcxSCYMDAtGq4lRAoqg+bPmhNj/pLO5tKc9lebIlkwvslOzBHLYXLu4sH2N8HmMwZIAAd8dS7d376Yi48bJEg0loRHlWiLkAWNeoKdZXmak14WjW2sUqG3R4FNqeCbhHBSBwYqf9Y14D6EwVQRQmabMLt5FhEAcGyd62RIa63OTFj2W4CYEKvnrdQ7zAhd/lWjMycjyCzEzdu9iDOFBY4P9a9HjvJN6OMD9ImY87YSGjF13BtxnLYCq5Ak2RoioJeezb7nDCLTWoAbC7axGBGv75VGD+gDDVZG1FjD+Mje4/uVwWYAoAAU1M3G8mggWgmXxQBIyc+A61oLd5+cSBqUzNQ1C8R9j+vQ+zYAaLFCCIAwj915LFuVWzuhM3FvDPC6g5E9qx9tCkw8skbfGTvVreF/86NyfSlJOrI3Sos4cE4krMYRz+ZDu18AYpDY1CZ8TXk0BBIAWQYKkS7HaEjEhA893ns6KVDaAmA0SfIyF26GcevUIQUFlTwkb3nLtkMjobhZlEgw7B5kLJgGBoOpGBUdAT+HjcbxcNe4juLQRYIEgF0OWGQZfT5cSu6Hd6O045SvDM3thUAFgISDmQBIz5/HcP6/sVt8Rk0snf2Pf+OKdyhIDIqAgUHliNr8RBYs7/B1UdiUX/2IiSiWzJKEBU3xPoGRMybjt7V+agYH4uI72ch5/cjBB6tGRBgdzEBAVHhd5CSM417f/yPKD4uzZmKnp1riQ1aaXVjzZvJKN05DzGOapQNnYyy1PXQSJyiJUAPrMMBc3hnPHEpF6GZq7GscCu6fzkCVbdJD0yw3ujLbTRAlP1S/DRqbaXotTYdRxdlIzJ9NUySHVdLumFAQg+cy54Ckh/q12Wh4sNsoEMg0R2ob+KiTG+wovuHaTAvmY1LzkrE75oOWz0J2BjEY+rU3I3FRW4RAjcLASGTVPxW3pOqhYTBm1JQWRYG0P5Z6xKRMqY3cLEQpVNfheJ0QgoNJmdESi9iz2ZH0HMJCNuzje+XdHwNjpQcpj3NlD1egBrVCMXVshI2paGiK5uxo7GCpKCyPASjRj+OI2uTeampeWEe6n49CyEwgOi2UPrTPIcTssmIHju/gpA8FLurLuDlQ6kUZzJk7ED7MOEKeqlSVdhUlx8GeBZo+kSmcAJjCQvG3vcmYFSfULi2bEfl+myoTjfkjhY+T/O4IVhtCJ09E0Efp8FJy+IPv4GCsjxyhLw2BrTOdC47m+b0wwCLKUtDRTeeMj8eWXMHATevo3rsAtgvF1PRMUNkxUdVoJHITF0j0PXgXqB3JNaU/ID0PKLeQ94ZyGtRbH6INNFMZd3uNwTEZHmdB49GhWE/eR0TboYzYyOqP90ELZBEFmzhzGhu5rUVEempMC54BWWwI/7nhbhVW6J7bTD58brZaUEfq+L0hqQ5ANp45cxnsTAuHLhUiMqR80lklMchwbo3JDKNRGZJiEen77ZynaQUbcNnBd96DVvu4nUrBlioNT8aOFS8AUlxH6Fu3muwnjxDdZ7ymaUWiUajSiYajYjYRofIiCEodJUj4eBK2G01NC+omchaHY2afxA2xd02BH0pBrVjJ8BdVk6GLZxGJjKWWh1nzkBg+io+L+HiGpy5nksrSWCBJr2WCa2saYLe6XCCirYiVP1ogGOiGiB2IDrpyBRYanUJQ6ctRPdjPbB+QwZydu2Cmc6KRFGmik2s0PWC31cEfqlpPJWNxMitGBPyxxv4zaMlE4L/EOjYaKbZBIGqWeiqNGDiOH6Dicl/C2E5J3E+73y7L0RTBo9G/mSDHp5WobCJrsZDwAdAo0J5Cvv2DWYvtAwXpo3HmLQEKjIefgBFMpFR69+/P4qKivhzdHQ0Ll++jGPHjmHFihX8u8zMTAwfPhwuKmI4SxpR5TZhcDLjDe5TzK4PgCMeWERjl0ZQLCapp31rDOLQxAP8CkO1wNeMRv1Mz8jIQGFhIX+eNGkSB6CxU3P1ibFoPPdaNBaYGmbXB8BO/Sb1qrvkUSePpPNoMBgQGxuLvLw8/sxaRUVF48Ty8nLdgsSH69Tv3OX66GB25WaI6r3d/yXXew/0eDzc+KBBgxoBSJKEuLi4xudm8+94nbprE9srKp+OHA4HH/Pz82G323X6aDx37hzvvt/bfYFv5x+T8KSkJO1BGpvP1rXrj0k7CTiVnJw8WKEacS/QrB54w3CqPUT4/pjcbx67ykS2yJJ7N5/Kb95LVw8CgBkNYFl4n9Omjcq9YP6zBv6//47/FWAAn9n4qjkkfpYAAAAASUVORK5CYII=" alt="FlagNamibia" data-type="icon fatcow-icon" {...props} />
}