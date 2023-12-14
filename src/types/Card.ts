export type ColorType = {
    backGround: string,
    boxShadow: string,            
}

export type CardType = 
    {
        name: string,
        color:ColorType,    
        barValue : number,
        value: number,
        series:[
            {
                name: string,
                data: number[],
            }
        ],
    }

