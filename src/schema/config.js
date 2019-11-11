import { Config, ConfigTC } from '../models/config';

const ConfigQuery = {
    configById: ConfigTC.getResolver('findById'),
    configByIds: ConfigTC.getResolver('findByIds'),
    configOne: ConfigTC.getResolver('findOne'),
    configMany: ConfigTC.getResolver('findMany'),
    configCount: ConfigTC.getResolver('count'),
    configConnection: ConfigTC.getResolver('connection'),
    configPagination: ConfigTC.getResolver('pagination'),
};

const ConfigMutation = {
    configCreateOne: ConfigTC.getResolver('createOne'),
    configCreateMany: ConfigTC.getResolver('createMany'),
    configUpdateById: ConfigTC.getResolver('updateById'),
    configUpdateOne: ConfigTC.getResolver('updateOne'),
    configUpdateMany: ConfigTC.getResolver('updateMany'),
    configRemoveById: ConfigTC.getResolver('removeById'),
    configRemoveOne: ConfigTC.getResolver('removeOne'),
    configRemoveMany: ConfigTC.getResolver('removeMany'),
};

export { ConfigQuery, ConfigMutation };