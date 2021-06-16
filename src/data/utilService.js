import { v4 as uuidv4 } from 'uuid';

const utilService = {
    getCardsHome: () => {
        return [
            {
                id: uuidv4(),
                icon: "fa fa-code fa-3x",
                title: "Dark card title",
                descri: "Some quick example text to build on the card title and make up the bulk of the card's content."
            },
            {
                id: uuidv4(),
                icon: "fa fa-code fa-3x",
                title: "Dark card title",
                descri: "Some quick example text to build on the card title and make up the bulk of the card's content."
            },
            {
                id: uuidv4(),
                icon: "fa fa-code fa-3x",
                title: "Dark card title",
                descri: "Some quick example text to build on the card title and make up the bulk of the card's content."
            },
            {
                id: uuidv4(),
                icon: "fa fa-code fa-3x",
                title: "Dark card title",
                descri: "Some quick example text to build on the card title and make up the bulk of the card's content."
            },
            {
                id: uuidv4(),
                icon: "fa fa-code fa-3x",
                title: "Dark card title",
                descri: "Some quick example text to build on the card title and make up the bulk of the card's content."
            },
            {
                id: uuidv4(),
                icon: "fa fa-code fa-3x",
                title: "Dark card title",
                descri: "Some quick example text to build on the card title and make up the bulk of the card's content."
            }
        ]

    }
}

export default utilService;