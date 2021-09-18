

var COMMENT_CURRENT_STATE = [
    { id: 1, feedback: "Clicked Button Liked", customerId: 1 },
    { id: 2, feedback: "Praying I have a chance to showcase my skills", customerId: 1 },
    { id: 3, feedback: "Trending in Aso Rock", customerId: 2 },
    { id: 4, feedback: "Volcanic Reaction is not good", customerId: 2 }
];


var commentReducer = (state = COMMENT_CURRENT_STATE, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':

            var currentStateAfterAddingComments = COMMENT_CURRENT_STATE.findIndex(x => x.feedback === action.payload.feedback) === -1 ? COMMENT_CURRENT_STATE.push(action.payload) : COMMENT_CURRENT_STATE
            //next line filters comments from a user
            var currentStateAfterUserFilter = COMMENT_CURRENT_STATE.filter(x => x.customerId === action.payload.customerId);
            state = currentStateAfterUserFilter
            return state;


        case 'CLEAR_COMMENT':
            state = []
            return state;

        case 'FILTER_COMMENT':
            var filteredComments = state.filter(c => c.customerId === action.payload.id);
            state = filteredComments;
            return state;

        case 'ALL_COMMENTS':
            state = COMMENT_CURRENT_STATE;
            return state;

        default:
            return state;

    }

};


export default commentReducer;
