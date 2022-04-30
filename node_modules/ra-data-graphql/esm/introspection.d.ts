import { IntrospectionObjectType, IntrospectionSchema, IntrospectionType } from 'graphql';
import { ApolloClient } from '@apollo/client';
/**
 * @param {ApolloClient} client The Apollo client
 * @param {Object} options The introspection options
 */
export declare const introspectSchema: (client: ApolloClient<unknown>, options: IntrospectionOptions) => Promise<any>;
export declare type IntrospectionOptions = {
    schema?: IntrospectionSchema;
    operationNames: {
        [key: string]: (type: IntrospectionType) => string;
    };
    exclude?: string[] | ((type: IntrospectionType) => boolean);
    include?: string[] | ((type: IntrospectionType) => boolean);
};
export declare type IntrospectedResource = {
    type: IntrospectionObjectType;
};
export declare type IntrospectionResult = {
    types: IntrospectionType[];
    queries: IntrospectionObjectType[];
    resources: IntrospectedResource[];
    schema: IntrospectionSchema;
};
export declare const isResourceIncluded: (type: IntrospectionType, { include }?: Partial<IntrospectionOptions>) => boolean;
export declare const isResourceExcluded: (type: IntrospectionType, { exclude }?: Partial<IntrospectionOptions>) => boolean;
//# sourceMappingURL=introspection.d.ts.map