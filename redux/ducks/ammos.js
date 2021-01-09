const ADD_AMMO = "addAmmo";
const DELETE_AMMO = "deleteAmmo";
const LOAD_AMMO = "loadAmmos";
const EDIT_AMMO = "editAmmo";

export const addAmmo = (payload) => ({
    type: ADD_AMMO,
    payload: payload
})
export const deleteAmmo = (payload) => ({
    type: DELETE_AMMO,
    payload: payload
})
export const loadAmmo = (payload) => ({
    type: LOAD_AMMO,
    payload: payload
})
export const aditAmmo = (payload) => ({
    type: EDIT_AMMO,
    payload: payload
})

const initialState = {
    ammos: []
}

exports.reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_AMMO:
            return {
                ...state,
                ammos: [...state.ammos, action.payload]
            };
        case DELETE_AMMO:
            return {
                ...state,
                ammos: state.ammos.filter(ammo => ammo.id !== action.payload.id)
            };
        case EDIT_AMMO:
            return {
                ...state,
                ammos: state.ammos.map((ammo) => ammo.id === action.payload.id ? {...ammo, title: action.payload.title}: ammo)
            };
        case LOAD_AMMO:
            return { ...state, ammos: action.payload }
        default:
            return state;
    }
}