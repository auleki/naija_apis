import {Schema, model, Model} from 'mongoose'
import {IAPI_BP} from './api_bp.type'

// AI SCAFFOLD GENERATOR !TODO

type API_BP_MODEL = Model<IAPI_BP>

const API_BP_SCHEMA= new Schema<IAPI_BP, API_BP_MODEL>({
    website: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    reviews: {
        type: [],
        required: true
    },
    author: {
        type: String || null,
        required: true
    },
    yearReleased: {
        type: Date,
        required: true
    }
}, { timestamps: true })

export const API_BP: API_BP_MODEL = model<IAPI_BP, API_BP_MODEL>('API_BP', API_BP_SCHEMA)

//API_BP.find
