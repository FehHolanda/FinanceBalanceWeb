import * as C from "./styles";
import { CardData } from "../../Data/CardData";
import Card from "../Card";
import BasicTable from "../Table";

const MainDash = () => {


    return (
        <C.MainDash>
            <h1>Dashboard</h1>
            <C.CardsContainer>
                {CardData.map((card, id) => {
                    return (
                        <Card
                            name={card.name}
                            color={card.color}
                            barValue={card.barValue}
                            value={card.value}
                            series={card.series}
                            key = {id}
                        />
                    )
                })}
            </C.CardsContainer>
            <BasicTable></BasicTable>
        </C.MainDash>
    );
};

export default MainDash;