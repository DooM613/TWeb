import { Row } from 'antd';
import CustomCard from './CustomCard';
//MyContent
const description = [
    {
        id: 1,
        title: "Titlu 1",
        description: "Descriere"
    },

    {
        id: 2,
        title: "Titlu 2",
        description: " Descriere"
    },
    {
        id: 3,
        title: "Titlu 3",
        description: "Descriere"
    },
    {
        id: 4,
        title: "Titlu 4",
        description: "Descriere"
    },
    {
        id: 5,
        title: "Titlu 5",
        description: "Descriere"
    },
    {
        id: 6,
        title: "Titlu 6",
        description: "Descriere"
    },
]


function Mycontent() {


    return (

        <Row gutter={16} >
            {
                description.map((element, i) => {
                    return (
                        <CustomCard key={element.id} title={element.title} description={element.description}/>
                    )
                })
            }
        </Row>
    )
}

export default Mycontent