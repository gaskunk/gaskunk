export declare class Entity {
    private sheets;
    constructor();
    create(tableName: string): void;
    clear(tableName: string): void;
    save(): [string, any][];
    find(): void;
    findBy(): void;
    delete(): void;
    deleteBy(): void;
    order(): void;
    update(): void;
}
