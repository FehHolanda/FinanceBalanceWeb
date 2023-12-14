import { CardType } from "../types/Card";


export const CardData:CardType[] = [
    {
        name: "Nubank",
        color: {
            backGround: "linear-gradient(180deg,#bb67ff 0%,#c484f3 100%)",
            boxShadow: "0px 10px 20px #e0c6f5",
        },
        barValue: 70,
        value: 2970,
        series: [
            {
                name: "Lançamentos",
                data: [10, 20, 20, 30, 40, 50],
            }
        ],

    },
    {
        name: "BB",
        color: {
            backGround: "linear-gradient(180deg,#FF919d 0%,#FC929d   100%)",
            boxShadow: "0px 10px 20px #FDC0C7",
        },
        barValue: 80,
        value: 1970,
        series: [
            {
                name: "Lançamentos",
                data: [10, 20, 20, 30, 40, 50],
            }
        ],
    },
    {
        name: "Caixa",
        color: {
            backGround: "linear-gradient(rgb(248 212 154) -146.24%, rgb(255 202 113) -46.42%)",
            boxShadow: "0px 10px 20px #F9D59B",
        },
        barValue: 60,
        value: 760,
        series: [
            {
                name: "Lançamentos",
                data: [10, 20, 20, 30, 40, 50],
            }
        ],
    }
] 