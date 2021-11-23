import {
    createConnection,
    getConnection,
    getConnectionOptions,
    Connection,
    QueryRunner,
    getConnectionManager,
} from "typeorm";



export const connection = {
    async create(): Promise<Connection> {
        const connectionOptions = await getConnectionOptions();
        return await createConnection(connectionOptions);
    },

    async close() {
        await getConnection().close();
    },

    async clear() {
        const connection = getConnection();
        const entities = getConnection().entityMetadatas;
        entities.forEach(async entity => {
            const repository = connection.getRepository(entity.name);
            await repository.query(`DELETE FROM ${entity.tableName}`);
        });
    },
    async init() {
        let connection: Connection;
        let queryRunner: QueryRunner;
    
         if (!getConnectionManager().has('default')) {
            const connectionOptions = await getConnectionOptions();
            connection = await createConnection(connectionOptions);
          } else {
            connection = getConnection();
          }
        queryRunner = connection.createQueryRunner(); 
    }
}
