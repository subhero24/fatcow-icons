import * as React from "react"; 
	
export default function ClockEditIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACkhJREFUeNqsVwl0VNUZ/t57syaTlSF7SMKSBPEUBJEAGlELUSSyCGrZtAdFkCQI1mNtexRO7al2kUWKKFCWWpBFgSQKUQ9liQghVoIsIWGSTEJClpkss2Vm3rx5/e/LSxwpnLbn9ObczFvu/3//8v3/vY/DD4NvOZz/bFS45n261nMcIMmBwxFTS+bRfQD//dA4v8w/IHCaWbKs3Pt63IHlSbNKdtF18NbFXL+QrXjGwYgRQ2ZqUxPAaQUyh6TbW+G6emH/tDVPrk6MG/YbcPwMEkmRQe/kPmlOUSHfgBwsvdlueeuLNZ+8axo55inEJRAcB1mUIDa1wlnbeMT8ROncW51h0nzN7rznUzMTPtBlJIMLSuA4CdBJqKkdhO1/S0ObIw1zHs3A3VlmZKQZEIKv/Ku3enHpmg2fHqtHfKQVSxZZkTnCDvgFyDJNXoC/vhlNNa0vZi4u2xYaCabD6Dic36PPStPyGh4CFwCn8+GDj8fh+PnRmD97GHJz4lFdJ6Ku2YfmdvHfYp4cp8XQZD2yh2px6mwb9hyy4OHxVXjxmW8h+/WUSg2CgSB816xi5KySKBLpDTUg1nHocbs2PQUaiMrCwvdmIDk1G889PRLXrH5cvu6Fj3BlmVdF+qc8MDkuCL0WGDXcgKw0HTbvvIgumwXvFZaCORaAFmLDDUTO/mwQCXQOEIZNOUAK3C5oBA+WbpqPpCFZWDwvG8fOONDdE0SQPIiP6cBdGdWIj24jIBE8x9Nz8krUoq07Hlfqs9HWNRjfXfGgvtmLZYt/gp37NChYL+PDgj2QJCMYjoo5MASWgp8/nHCf2eBP//CLBxGMmIgFczJRcsoJl0eG0eBHXs453HvXdcQMkhEWbYIxOgZb9pxB7kPjoDPqER3pQ1aqFYnmdtzoiIfDzaO20Ys50xJRd4NDTY0X4+O/R1Or+8Sm0sb9hOkZKD1WJlnLT688eHrw2ZOWiZj9WBrl3gmvX0a0yY1n8s5i2AgO2z+thMkcA8FghEanBy9olF92b4yJwvv7zmFIehDzpp5BFMkxeaaH6TtBevedGnw2a1n5SoYXGgFeJUTHrsonI6blksU3A3C4ggg3+DDv0UuIijNh695vER4RBz0BanitwoWgRCUWJHHlmsfqgpnQGI0wxYZhXt4lRZ7pYfqm5iZg67k5RoYTSsB+A6QJY1fHJ5hNozIzY2FtDiAQ4PHYQ42IiCUPCVSSgig7fhmbPjwBY7iB2oGAVYVPELvJCOICMYj4wCYPntYzOSbP9DSQvhHDB2FQTOTo6j//o6Xq91+wMtKFGqBJHjx21T2j4ylHfviJKCmJbgzLCGD9lmOKd6tW5GHK5OH4rOwC3t1UBgN5ynEaRZzjBGUyOnE0eeLY+i1HSV5CcoKHSMqh4WYQ7+TwiMjMhDY9HZW/PuDrN4IZoNfwYVPN5nDYu2UqQxkTxrtArQhFL81SvPT5g1hdlI9HpoxEydFK/GFdMQymMGh1WoULLCJs0o0SkZUrZoMyRHo8EH303liCo+ZaeLo88Do88JhTUfHyDsUI5oaOLE80mXRopOYlSTKGDvUjSPlluWb9XCJr/F4Jr74yl8Iq4UjJN5Do9/XXnwHcXuVZaHOV1dQMHcEjdWgpxo3JQTQRddvunXiU/ym8Xh90osLFcKUPsF7i9QZIkDoW9W9dOAfJq1cNkBUOSPQb8BHorxaToxw+OXQavb0+rH1jEeVeVNbxPHVSDUWDogKNHudX5cLwwA5ERMaitqYG8bGDse/GESxoT8O4zctyBpoCR8I+n6R2tb7H728tVnLLwJc/P4MMCw7kWivoEPCL9C6gcIF1QSYrEPCWv5YREY0Yc+VdTC56DhNT0rFpzyloAi5UX72KoEEg8KW5JNBM063pD5vPLypKZGUP9WPFslk/ioBAO6Rg0GPduv34tPg0Zs58AG++uRQBL1UVec7+oNGicMV8nCHPJxUsAJKWAN+sRUFgP15pXgNtmBZ/+t07DLyeZjsD4hX4oAyvEgFOiUHQz1LRxweWf47yqSHlGzYewtGyCuQ/PonAl9M6UUkZxxEZKeS8LgKniiZh0oqfEfjzBP4WcK2UgqZFjnM7rGfzoHqugPdXASnxt3fZe1kcKIwy6hp0lEsNBF5DzglqxxaoJGVMe+RevPbaEtrnRcU4UAoEAhf0kThdOBG5hQtpe3yBwH8L1BaTWBC7q1JxQfic9DsYsKsfvN+AgNdnK++yeRAUvYoB5eVUopTPrTs+HygzChJWvfwUfvHqQtpUROWekY01KkEXiVMF92FK0SIgZWkIuIRdF6m7Dj4JT3cHRbm1/NYDieIaB74jVj9qoSlWB60hHB0dPEZmyZjy8Eil1fbbKjOuSbJyzQjHsbDzEThZMAZTVi4m8Bf6wq6AB7CzKgkNKZWQHA1oq72Ji9c/XmXrqWm4NQK+6saSq16vy9LV6oTP7YCOAvDRXkHhBGt4rLTY5AW+j3BaLXbu+ZJyH42ThaPvAJ4Ia/K3kJw30N1qg7fXYWE4t9uMWEic15rK1na29KKzvZM89cPtBja9J/dVKm1AO3dTDolMPM8KxwBNWBS+fvluPLhy0W3B65MrwYk2dLffRFeLB0w/w7ldCtiQW7uqurOTJ2b7vVHDewO9GGSOgsvFobJCxvDhAibff1efvRxr4RFwfJCP+xXCLQ0Bl/rCnnSeGn0PmiwW9DT2QvRayo5feHuLehIK3BoBqDnp2bb2YEqc0Y5uEqq5WqdEordXxsYNXuzY5kN9AzuGhaG8KIPA5xP4kh8Ip+kjXH1iBWSfDbVXqtFt9SDeZAfTy/SH5v7WCGBeblLM0w+kvz19oQ3lxxNhb9XB5XNSCfMwRRjQ3c3hXAXhFR/A5PwhiLnnVaD8dQIvAbRUaheTcD3+HJx2K1rqrHA3i0iK6sT69cfB2wNx1Q2uDVesTuedDBBK35iwMSozZQwfa8Rjs67A2xTEpSoz/KIbTreTyo74wOvxyMgjGPvUGkiNX0FuqwLvqcVHl1NxJliKzpYauFrt6G0J4In7L+KXb5+lrc5EkdTjvjideUNxXUlIv/9RCozROv5ZzbAUiI1ueE60Yvqow5aE2F2bXc12i9jogr2uE8bOvZgwmla3UH/ouozqpm58fDUZJdbtcDfUQrLa4WruUOSm333E4jndrujTZCSB6Wc4d/oyir228cESc7h20uVm1+cLNl7Y3GTz2tSc6ZNjxqeNSlwwd2zOV3PD4mJRkBeFA/sq8M/qqbB7cumETG3M31zxfdMne622r6+rpaZLNRvMfy8a89KoZNN0m1s8k1V0Mj/0SB5qQATNITSj1VZpZzuVylgte1+4YOzCBl/2W6mCVeR6LOv+cqz1K/ULR1YBWX67VXlR3WnDabLvAJP6rlFdh9DvAqgHRfbypuo1u5dCjBSNcfeujmv47o+bD54vUQ+XjpCSCqhyPvW6P88OFVinGtV7pxT8p8E8iFNJ26N64bvd1+7/Ov5bA1ga9GpU/i/A/eNfAgwAIeagKVQOlfMAAAAASUVORK5CYII=" alt="ClockEdit" data-type="icon fatcow-icon" {...props} />
}