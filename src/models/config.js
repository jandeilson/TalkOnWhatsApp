import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';
import { composeWithMongoose } from 'graphql-compose-mongoose';

export const ConfigSchema = new Schema(
    {
        client: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        moskit: {
            type: String,
            trim: true,
            required: true,
        }
    },
    {
        collection: 'configs',
    }
);

ConfigSchema.plugin(timestamps);

ConfigSchema.index({ createdAt: 1, updatedAt: 1 });

export const Config = mongoose.model('Config', ConfigSchema);
export const ConfigTC = composeWithMongoose(Config);