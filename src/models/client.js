import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const ClientSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        email: {
            type: String,
            lowercase: true,
            trim: true,
            unique: true,
            required: true,
        },
        phone: {
            type: String,
            trim: true,
            required: true,
        },
        message: {
            type: String,
            trim: true,
            required: true,
        }
    },
    {
        collection: 'clients',
    }
);

ClientSchema.plugin(timestamps);

ClientSchema.index({ createdAt: 1, updatedAt: 1 });

export const Client = mongoose.model('Client', ClientSchema);
export const ClientTC = composeWithMongoose(Client);