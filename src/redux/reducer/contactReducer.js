const CONTACT_INITIAL_STATE = [
    { id: 1, name: "John Legend" },
    { id: 2, name: "Hamid Ali" },
    { id: 3, name: "Philip Kahn" },
    { id: 4, name: "Martha Johnson" }
];

const contactReducer = (state = CONTACT_INITIAL_STATE, action) => {

    switch (action.type) {

        case 'ADD_CONTACT':
            state = [...state, action.payload]
            return state;

        default:
            return state;

    }

};

export default contactReducer;

