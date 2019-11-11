import { SchemaComposer } from 'graphql-compose';

import db from '../utils/db'; // eslint-disable-line no-unused-vars

const schemaComposer = new SchemaComposer();

import { ClientQuery, ClientMutation } from './client';
import { ConfigQuery, ConfigMutation } from './config';

schemaComposer.Query.addFields({
    ...ClientQuery,
    ...ConfigQuery,
});

schemaComposer.Mutation.addFields({
    ...ClientMutation,
    ...ConfigMutation,
});

export default schemaComposer.buildSchema();