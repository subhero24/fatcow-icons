import * as React from "react"; 
	
export default function DownJacketIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB21JREFUeNqcV2lsXNUV/t4y782MHWeWJOOQOsR2YOKEFFCCsmCSKijQH/kR+IGQaKFBTSGiUluKhEBIgNiKVLWCgFKaSlRs5UclIoFUkihA4sSYlJTiVLEncWximzozwWN7PJ71LZy7PPy8YbeWPr/35t6z3HvPd865iuu6YH+KomCeP/3UPrynKdjlOvTF4MoRJqrSg2C7+ODmA7iDfrHmU8hs61j4X4j079rUuhqoJeuLIRAiZAnDhBEVHe09u+Sv4wtRqi7QuHb0PvzVrtJblf5ZjkCVUHEmv60q2Bw2l8ksRLEyzxGoR+/FT36QXHNgze6nw8O9n6Nw8RjcYjeiq2qxqKWWr3X8bB4jPXkowTUIN9+KeNNGdB96sjCY6t638w28JQ9s1iOYywH16B7cG4vXHFh928PBuuQO4Ny7tM0pIGDAGk9joPcC0t8UeBwklobR0HgN9EUJ2pUKEE8C192NXOoj9Bz+QzE7PLFv5+t4c7ojczkQOPlzfNG8/e519ZvuAca+Aj5/hRSP0AiFjEanphICGs53FbjAtS1hGrcnj8Wi+AtEgU2/BCKrcLnjbfSeeDd980E0sEP8PgcCp/ZioGX3I4lo82bgzEEgfYavGgYdKVFAgHFCQeqc2IHkWuYAvZAPjAawCBXmEO3G8g3Ahr0YudiBrkO/v0xOrPScYLbVKYF2P37X9KOfJqKL64DDDwOZTsAMknFaua5yo5w3HjTM/GYOsrlchmTTnVwX00m668nGC/4A9TsQrDHwUP0NPwY69tNp0TbqAZqqTa5a8xkNzOKEN656jtCHGhC6PtsPprvWwG+Zre+Si98BEjFx8QgJk5BKQ6oilWHyOX3FnhYvOSm+JMVkmA5HF+9Mt8wphInpDmh8Uv9xYVxRpq5InwZvB1yfA5Cn6/3OZG0IXYoudU/d+SmZ0GXith3gka7Ql+Kg50wORq0KjfJgoIYQJtRqCNVplGsdmqrApYArjVqoTDiwCg6qeULRQnXCRdPaOsEa5oRtY3q68TtgHe/FU/WLM8/ZGZO7Y2xpxer7NpJbORImuPlJaDno/Rl616BElpNDNbSvlJhUMqjQU19EgRhB/9nTqJz6mBcKbVkJXRkclPsyw4EyBUjBjSWx+s77Ka/34fg7L2Gl82+57eR6gGAo4t2kVVUpuFxC4TJQcgUVK5KGHEDf6SFsv+sBINaI3rZ3SKyz4s8FU2rBhqvwYtMOSh4nn8eFD1/CurseIwOK8FORUWcTHFXUuirbVglXFVA0MZfBUbiOC8deAz79I5juxigemqsYmWx9+LqdfjUwNAYsWRITDrg+Q7YstJYiAs9750lI4Ua/A8ktiUUxNApBR6ZbZtvZjkAXLPiEJmuCTqdfFgFkSzra06qJ5XtactyDI5uE0/uhMdYznVy3ZNxsRyBZwBmwYuNtyGbHRJfhekol/Ib8xv1NiivUZ0fHUL9+p2DVglhQl37OzQRQ+WEDugaO4KoBil7TpVWoMIiKOnsGdQTDRMMi0ZAC0s0TDfNEu6KNaolRkFCy4VCoDTg5xOtWorfzUyjLKgtgAZXSpjt/Rqtx0fYl0PggBWJhVFCxOiaeFUbLccq0/+XBptStQCi6CCFjsaQfUdGMAOEo+l/9NVpuagY2P04s+BvMvrNTWOCvhjXtDyK7Ze+fDZx4AhcGMojd+ijiqddFZFPCYVW2vb+CbckQz/WpVJHLJq8N8Sp4oruIrasMXgLAGkfCcHIPssdexDUNy4Btz6Lj4C+w5U+8mctNr4YzWBCPxwWddB3ZCRWf9FiImVSabVVGvgRnhIpY2OBzsgVVFDKSZTqYLqbz/2DBfm48NWRhYNTG+hUGEhGdFXJJT/jaYhfXNRhYOqriX4NVNEQ0JJfrnEmquXAWWLyrobelLZupilb51l8p2NjWbJJxTRj3bCpT7PMxNucWmstkmKxD5xZv3iS1OzNY4HfA+mwAL/RlvuGTE2t3oG8og6++HENjtYzhwXFc6afm83IB+ZEK7Anyldovdo5u2UYxV0HuSpHmTWDs6zyanBIudY6idyiNZS07uE6mu/0SnpmLBcXfvI83r+QLxd3r9dtvvL5m+7kRB60PPEGVm5r+EkV+eUygNC5YMCRZECcWJIgFJkV/sE6wIMRYEEPbq79CcySCf57Pth36T+Efz3+Mv5OtwmwsYLtRQ4hLRIkVR7esoz7SsjFl31XRG6bO+1jAjo7rciezEXVTpzoH0foX7GTXFnl9GZbNiDP9ZuTIgYq86yQU3pAYYse8s3c9P3xBwHxXlckxyHHqK1QR75cIaZZrZA5wZm1I5EBZIkg2R1OXBiNhw0Rt0EDYNGGGTBk9CpUJGcz8KRwsF8solMvIlyr8OVLCCfqZlaPc/3ozokNE456NaN16NbYmatESC2MNLcqEfxMgWSmFbAflbAHd6Ty6KKhPvv0F2opV9M12V/y+m5GXLCivgiKKtTo8PoKSw3Ndpb2yVZLHyYyyNJSf7bY8nwPeQtkxGb42dL4LrdclVGU8Wb4aOcOBbwUYAG1VPS2U0DrpAAAAAElFTkSuQmCC" alt="DownJacket" data-type="icon fatcow-icon" {...props} />
}