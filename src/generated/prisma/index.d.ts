
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model author
 * 
 */
export type author = $Result.DefaultSelection<Prisma.$authorPayload>
/**
 * Model book
 * 
 */
export type book = $Result.DefaultSelection<Prisma.$bookPayload>
/**
 * Model member
 * 
 */
export type member = $Result.DefaultSelection<Prisma.$memberPayload>
/**
 * Model borrowRecord
 * 
 */
export type borrowRecord = $Result.DefaultSelection<Prisma.$borrowRecordPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Authors
 * const authors = await prisma.author.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Authors
   * const authors = await prisma.author.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.author`: Exposes CRUD operations for the **author** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.author.findMany()
    * ```
    */
  get author(): Prisma.authorDelegate<ExtArgs>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.bookDelegate<ExtArgs>;

  /**
   * `prisma.member`: Exposes CRUD operations for the **member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.memberDelegate<ExtArgs>;

  /**
   * `prisma.borrowRecord`: Exposes CRUD operations for the **borrowRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BorrowRecords
    * const borrowRecords = await prisma.borrowRecord.findMany()
    * ```
    */
  get borrowRecord(): Prisma.borrowRecordDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    author: 'author',
    book: 'book',
    member: 'member',
    borrowRecord: 'borrowRecord'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "author" | "book" | "member" | "borrowRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      author: {
        payload: Prisma.$authorPayload<ExtArgs>
        fields: Prisma.authorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.authorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.authorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          findFirst: {
            args: Prisma.authorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.authorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          findMany: {
            args: Prisma.authorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>[]
          }
          create: {
            args: Prisma.authorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          createMany: {
            args: Prisma.authorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.authorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>[]
          }
          delete: {
            args: Prisma.authorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          update: {
            args: Prisma.authorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          deleteMany: {
            args: Prisma.authorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.authorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.authorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$authorPayload>
          }
          aggregate: {
            args: Prisma.AuthorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthor>
          }
          groupBy: {
            args: Prisma.authorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.authorCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorCountAggregateOutputType> | number
          }
        }
      }
      book: {
        payload: Prisma.$bookPayload<ExtArgs>
        fields: Prisma.bookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          findFirst: {
            args: Prisma.bookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          findMany: {
            args: Prisma.bookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>[]
          }
          create: {
            args: Prisma.bookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          createMany: {
            args: Prisma.bookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.bookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>[]
          }
          delete: {
            args: Prisma.bookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          update: {
            args: Prisma.bookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          deleteMany: {
            args: Prisma.bookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.bookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.bookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.bookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      member: {
        payload: Prisma.$memberPayload<ExtArgs>
        fields: Prisma.memberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.memberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.memberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          findFirst: {
            args: Prisma.memberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.memberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          findMany: {
            args: Prisma.memberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>[]
          }
          create: {
            args: Prisma.memberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          createMany: {
            args: Prisma.memberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.memberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>[]
          }
          delete: {
            args: Prisma.memberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          update: {
            args: Prisma.memberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          deleteMany: {
            args: Prisma.memberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.memberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.memberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$memberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.memberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.memberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      borrowRecord: {
        payload: Prisma.$borrowRecordPayload<ExtArgs>
        fields: Prisma.borrowRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.borrowRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borrowRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.borrowRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borrowRecordPayload>
          }
          findFirst: {
            args: Prisma.borrowRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borrowRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.borrowRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borrowRecordPayload>
          }
          findMany: {
            args: Prisma.borrowRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borrowRecordPayload>[]
          }
          create: {
            args: Prisma.borrowRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borrowRecordPayload>
          }
          createMany: {
            args: Prisma.borrowRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.borrowRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borrowRecordPayload>[]
          }
          delete: {
            args: Prisma.borrowRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borrowRecordPayload>
          }
          update: {
            args: Prisma.borrowRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borrowRecordPayload>
          }
          deleteMany: {
            args: Prisma.borrowRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.borrowRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.borrowRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$borrowRecordPayload>
          }
          aggregate: {
            args: Prisma.BorrowRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBorrowRecord>
          }
          groupBy: {
            args: Prisma.borrowRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<BorrowRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.borrowRecordCountArgs<ExtArgs>
            result: $Utils.Optional<BorrowRecordCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AuthorCountOutputType
   */

  export type AuthorCountOutputType = {
    books: number
  }

  export type AuthorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | AuthorCountOutputTypeCountBooksArgs
  }

  // Custom InputTypes
  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorCountOutputType
     */
    select?: AuthorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookWhereInput
  }


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    borrowRecords: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    borrowRecords?: boolean | BookCountOutputTypeCountBorrowRecordsArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountBorrowRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: borrowRecordWhereInput
  }


  /**
   * Count Type MemberCountOutputType
   */

  export type MemberCountOutputType = {
    borrowRecords: number
  }

  export type MemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    borrowRecords?: boolean | MemberCountOutputTypeCountBorrowRecordsArgs
  }

  // Custom InputTypes
  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberCountOutputType
     */
    select?: MemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountBorrowRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: borrowRecordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model author
   */

  export type AggregateAuthor = {
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  export type AuthorAvgAggregateOutputType = {
    id: number | null
  }

  export type AuthorSumAggregateOutputType = {
    id: number | null
  }

  export type AuthorMinAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
    affiliation: string | null
  }

  export type AuthorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    surname: string | null
    affiliation: string | null
  }

  export type AuthorCountAggregateOutputType = {
    id: number
    name: number
    surname: number
    affiliation: number
    _all: number
  }


  export type AuthorAvgAggregateInputType = {
    id?: true
  }

  export type AuthorSumAggregateInputType = {
    id?: true
  }

  export type AuthorMinAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    affiliation?: true
  }

  export type AuthorMaxAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    affiliation?: true
  }

  export type AuthorCountAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    affiliation?: true
    _all?: true
  }

  export type AuthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which author to aggregate.
     */
    where?: authorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorOrderByWithRelationInput | authorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: authorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned authors
    **/
    _count?: true | AuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorMaxAggregateInputType
  }

  export type GetAuthorAggregateType<T extends AuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthor[P]>
      : GetScalarType<T[P], AggregateAuthor[P]>
  }




  export type authorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: authorWhereInput
    orderBy?: authorOrderByWithAggregationInput | authorOrderByWithAggregationInput[]
    by: AuthorScalarFieldEnum[] | AuthorScalarFieldEnum
    having?: authorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorCountAggregateInputType | true
    _avg?: AuthorAvgAggregateInputType
    _sum?: AuthorSumAggregateInputType
    _min?: AuthorMinAggregateInputType
    _max?: AuthorMaxAggregateInputType
  }

  export type AuthorGroupByOutputType = {
    id: number
    name: string
    surname: string
    affiliation: string
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  type GetAuthorGroupByPayload<T extends authorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorGroupByOutputType[P]>
        }
      >
    >


  export type authorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    affiliation?: boolean
    books?: boolean | author$booksArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["author"]>

  export type authorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    affiliation?: boolean
  }, ExtArgs["result"]["author"]>

  export type authorSelectScalar = {
    id?: boolean
    name?: boolean
    surname?: boolean
    affiliation?: boolean
  }

  export type authorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | author$booksArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type authorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $authorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "author"
    objects: {
      books: Prisma.$bookPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      surname: string
      affiliation: string
    }, ExtArgs["result"]["author"]>
    composites: {}
  }

  type authorGetPayload<S extends boolean | null | undefined | authorDefaultArgs> = $Result.GetResult<Prisma.$authorPayload, S>

  type authorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<authorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuthorCountAggregateInputType | true
    }

  export interface authorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['author'], meta: { name: 'author' } }
    /**
     * Find zero or one Author that matches the filter.
     * @param {authorFindUniqueArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends authorFindUniqueArgs>(args: SelectSubset<T, authorFindUniqueArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Author that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {authorFindUniqueOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends authorFindUniqueOrThrowArgs>(args: SelectSubset<T, authorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Author that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorFindFirstArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends authorFindFirstArgs>(args?: SelectSubset<T, authorFindFirstArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Author that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorFindFirstOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends authorFindFirstOrThrowArgs>(args?: SelectSubset<T, authorFindFirstOrThrowArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.author.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.author.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorWithIdOnly = await prisma.author.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends authorFindManyArgs>(args?: SelectSubset<T, authorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Author.
     * @param {authorCreateArgs} args - Arguments to create a Author.
     * @example
     * // Create one Author
     * const Author = await prisma.author.create({
     *   data: {
     *     // ... data to create a Author
     *   }
     * })
     * 
     */
    create<T extends authorCreateArgs>(args: SelectSubset<T, authorCreateArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Authors.
     * @param {authorCreateManyArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends authorCreateManyArgs>(args?: SelectSubset<T, authorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authors and returns the data saved in the database.
     * @param {authorCreateManyAndReturnArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends authorCreateManyAndReturnArgs>(args?: SelectSubset<T, authorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Author.
     * @param {authorDeleteArgs} args - Arguments to delete one Author.
     * @example
     * // Delete one Author
     * const Author = await prisma.author.delete({
     *   where: {
     *     // ... filter to delete one Author
     *   }
     * })
     * 
     */
    delete<T extends authorDeleteArgs>(args: SelectSubset<T, authorDeleteArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Author.
     * @param {authorUpdateArgs} args - Arguments to update one Author.
     * @example
     * // Update one Author
     * const author = await prisma.author.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends authorUpdateArgs>(args: SelectSubset<T, authorUpdateArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Authors.
     * @param {authorDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.author.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends authorDeleteManyArgs>(args?: SelectSubset<T, authorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends authorUpdateManyArgs>(args: SelectSubset<T, authorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Author.
     * @param {authorUpsertArgs} args - Arguments to update or create a Author.
     * @example
     * // Update or create a Author
     * const author = await prisma.author.upsert({
     *   create: {
     *     // ... data to create a Author
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Author we want to update
     *   }
     * })
     */
    upsert<T extends authorUpsertArgs>(args: SelectSubset<T, authorUpsertArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.author.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends authorCountArgs>(
      args?: Subset<T, authorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorAggregateArgs>(args: Subset<T, AuthorAggregateArgs>): Prisma.PrismaPromise<GetAuthorAggregateType<T>>

    /**
     * Group by Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {authorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends authorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: authorGroupByArgs['orderBy'] }
        : { orderBy?: authorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, authorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the author model
   */
  readonly fields: authorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for author.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__authorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books<T extends author$booksArgs<ExtArgs> = {}>(args?: Subset<T, author$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the author model
   */ 
  interface authorFieldRefs {
    readonly id: FieldRef<"author", 'Int'>
    readonly name: FieldRef<"author", 'String'>
    readonly surname: FieldRef<"author", 'String'>
    readonly affiliation: FieldRef<"author", 'String'>
  }
    

  // Custom InputTypes
  /**
   * author findUnique
   */
  export type authorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter, which author to fetch.
     */
    where: authorWhereUniqueInput
  }

  /**
   * author findUniqueOrThrow
   */
  export type authorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter, which author to fetch.
     */
    where: authorWhereUniqueInput
  }

  /**
   * author findFirst
   */
  export type authorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter, which author to fetch.
     */
    where?: authorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorOrderByWithRelationInput | authorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authors.
     */
    cursor?: authorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * author findFirstOrThrow
   */
  export type authorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter, which author to fetch.
     */
    where?: authorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorOrderByWithRelationInput | authorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for authors.
     */
    cursor?: authorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * author findMany
   */
  export type authorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter, which authors to fetch.
     */
    where?: authorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of authors to fetch.
     */
    orderBy?: authorOrderByWithRelationInput | authorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing authors.
     */
    cursor?: authorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` authors.
     */
    skip?: number
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * author create
   */
  export type authorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * The data needed to create a author.
     */
    data: XOR<authorCreateInput, authorUncheckedCreateInput>
  }

  /**
   * author createMany
   */
  export type authorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many authors.
     */
    data: authorCreateManyInput | authorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * author createManyAndReturn
   */
  export type authorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many authors.
     */
    data: authorCreateManyInput | authorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * author update
   */
  export type authorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * The data needed to update a author.
     */
    data: XOR<authorUpdateInput, authorUncheckedUpdateInput>
    /**
     * Choose, which author to update.
     */
    where: authorWhereUniqueInput
  }

  /**
   * author updateMany
   */
  export type authorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update authors.
     */
    data: XOR<authorUpdateManyMutationInput, authorUncheckedUpdateManyInput>
    /**
     * Filter which authors to update
     */
    where?: authorWhereInput
  }

  /**
   * author upsert
   */
  export type authorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * The filter to search for the author to update in case it exists.
     */
    where: authorWhereUniqueInput
    /**
     * In case the author found by the `where` argument doesn't exist, create a new author with this data.
     */
    create: XOR<authorCreateInput, authorUncheckedCreateInput>
    /**
     * In case the author was found with the provided `where` argument, update it with this data.
     */
    update: XOR<authorUpdateInput, authorUncheckedUpdateInput>
  }

  /**
   * author delete
   */
  export type authorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
    /**
     * Filter which author to delete.
     */
    where: authorWhereUniqueInput
  }

  /**
   * author deleteMany
   */
  export type authorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which authors to delete
     */
    where?: authorWhereInput
  }

  /**
   * author.books
   */
  export type author$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    where?: bookWhereInput
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[]
    cursor?: bookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * author without action
   */
  export type authorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the author
     */
    select?: authorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: authorInclude<ExtArgs> | null
  }


  /**
   * Model book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type BookSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type BookMinAggregateOutputType = {
    id: number | null
    title: string | null
    isbn: string | null
    category: string | null
    authorId: number | null
  }

  export type BookMaxAggregateOutputType = {
    id: number | null
    title: string | null
    isbn: string | null
    category: string | null
    authorId: number | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    title: number
    isbn: number
    category: number
    authorId: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type BookSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    title?: true
    isbn?: true
    category?: true
    authorId?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    title?: true
    isbn?: true
    category?: true
    authorId?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    title?: true
    isbn?: true
    category?: true
    authorId?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which book to aggregate.
     */
    where?: bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type bookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookWhereInput
    orderBy?: bookOrderByWithAggregationInput | bookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: bookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    id: number
    title: string
    isbn: string
    category: string
    authorId: number
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends bookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type bookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    isbn?: boolean
    category?: boolean
    authorId?: boolean
    author?: boolean | authorDefaultArgs<ExtArgs>
    borrowRecords?: boolean | book$borrowRecordsArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type bookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    isbn?: boolean
    category?: boolean
    authorId?: boolean
    author?: boolean | authorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type bookSelectScalar = {
    id?: boolean
    title?: boolean
    isbn?: boolean
    category?: boolean
    authorId?: boolean
  }

  export type bookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | authorDefaultArgs<ExtArgs>
    borrowRecords?: boolean | book$borrowRecordsArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type bookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | authorDefaultArgs<ExtArgs>
  }

  export type $bookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "book"
    objects: {
      author: Prisma.$authorPayload<ExtArgs>
      borrowRecords: Prisma.$borrowRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      isbn: string
      category: string
      authorId: number
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type bookGetPayload<S extends boolean | null | undefined | bookDefaultArgs> = $Result.GetResult<Prisma.$bookPayload, S>

  type bookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<bookFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface bookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['book'], meta: { name: 'book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {bookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bookFindUniqueArgs>(args: SelectSubset<T, bookFindUniqueArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {bookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bookFindUniqueOrThrowArgs>(args: SelectSubset<T, bookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bookFindFirstArgs>(args?: SelectSubset<T, bookFindFirstArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bookFindFirstOrThrowArgs>(args?: SelectSubset<T, bookFindFirstOrThrowArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bookFindManyArgs>(args?: SelectSubset<T, bookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Book.
     * @param {bookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends bookCreateArgs>(args: SelectSubset<T, bookCreateArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Books.
     * @param {bookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bookCreateManyArgs>(args?: SelectSubset<T, bookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {bookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends bookCreateManyAndReturnArgs>(args?: SelectSubset<T, bookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Book.
     * @param {bookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends bookDeleteArgs>(args: SelectSubset<T, bookDeleteArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Book.
     * @param {bookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bookUpdateArgs>(args: SelectSubset<T, bookUpdateArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Books.
     * @param {bookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bookDeleteManyArgs>(args?: SelectSubset<T, bookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bookUpdateManyArgs>(args: SelectSubset<T, bookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Book.
     * @param {bookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends bookUpsertArgs>(args: SelectSubset<T, bookUpsertArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends bookCountArgs>(
      args?: Subset<T, bookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookGroupByArgs['orderBy'] }
        : { orderBy?: bookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the book model
   */
  readonly fields: bookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends authorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, authorDefaultArgs<ExtArgs>>): Prisma__authorClient<$Result.GetResult<Prisma.$authorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    borrowRecords<T extends book$borrowRecordsArgs<ExtArgs> = {}>(args?: Subset<T, book$borrowRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$borrowRecordPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the book model
   */ 
  interface bookFieldRefs {
    readonly id: FieldRef<"book", 'Int'>
    readonly title: FieldRef<"book", 'String'>
    readonly isbn: FieldRef<"book", 'String'>
    readonly category: FieldRef<"book", 'String'>
    readonly authorId: FieldRef<"book", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * book findUnique
   */
  export type bookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which book to fetch.
     */
    where: bookWhereUniqueInput
  }

  /**
   * book findUniqueOrThrow
   */
  export type bookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which book to fetch.
     */
    where: bookWhereUniqueInput
  }

  /**
   * book findFirst
   */
  export type bookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which book to fetch.
     */
    where?: bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for books.
     */
    cursor?: bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * book findFirstOrThrow
   */
  export type bookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which book to fetch.
     */
    where?: bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for books.
     */
    cursor?: bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * book findMany
   */
  export type bookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter, which books to fetch.
     */
    where?: bookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: bookOrderByWithRelationInput | bookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing books.
     */
    cursor?: bookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * book create
   */
  export type bookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * The data needed to create a book.
     */
    data: XOR<bookCreateInput, bookUncheckedCreateInput>
  }

  /**
   * book createMany
   */
  export type bookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many books.
     */
    data: bookCreateManyInput | bookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * book createManyAndReturn
   */
  export type bookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many books.
     */
    data: bookCreateManyInput | bookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * book update
   */
  export type bookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * The data needed to update a book.
     */
    data: XOR<bookUpdateInput, bookUncheckedUpdateInput>
    /**
     * Choose, which book to update.
     */
    where: bookWhereUniqueInput
  }

  /**
   * book updateMany
   */
  export type bookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update books.
     */
    data: XOR<bookUpdateManyMutationInput, bookUncheckedUpdateManyInput>
    /**
     * Filter which books to update
     */
    where?: bookWhereInput
  }

  /**
   * book upsert
   */
  export type bookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * The filter to search for the book to update in case it exists.
     */
    where: bookWhereUniqueInput
    /**
     * In case the book found by the `where` argument doesn't exist, create a new book with this data.
     */
    create: XOR<bookCreateInput, bookUncheckedCreateInput>
    /**
     * In case the book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookUpdateInput, bookUncheckedUpdateInput>
  }

  /**
   * book delete
   */
  export type bookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
    /**
     * Filter which book to delete.
     */
    where: bookWhereUniqueInput
  }

  /**
   * book deleteMany
   */
  export type bookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which books to delete
     */
    where?: bookWhereInput
  }

  /**
   * book.borrowRecords
   */
  export type book$borrowRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrowRecord
     */
    select?: borrowRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowRecordInclude<ExtArgs> | null
    where?: borrowRecordWhereInput
    orderBy?: borrowRecordOrderByWithRelationInput | borrowRecordOrderByWithRelationInput[]
    cursor?: borrowRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BorrowRecordScalarFieldEnum | BorrowRecordScalarFieldEnum[]
  }

  /**
   * book without action
   */
  export type bookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the book
     */
    select?: bookSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: bookInclude<ExtArgs> | null
  }


  /**
   * Model member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberAvgAggregateOutputType = {
    id: number | null
  }

  export type MemberSumAggregateOutputType = {
    id: number | null
  }

  export type MemberMinAggregateOutputType = {
    id: number | null
    memberId: string | null
    name: string | null
    surname: string | null
    phone: string | null
  }

  export type MemberMaxAggregateOutputType = {
    id: number | null
    memberId: string | null
    name: string | null
    surname: string | null
    phone: string | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    memberId: number
    name: number
    surname: number
    phone: number
    _all: number
  }


  export type MemberAvgAggregateInputType = {
    id?: true
  }

  export type MemberSumAggregateInputType = {
    id?: true
  }

  export type MemberMinAggregateInputType = {
    id?: true
    memberId?: true
    name?: true
    surname?: true
    phone?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    memberId?: true
    name?: true
    surname?: true
    phone?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    memberId?: true
    name?: true
    surname?: true
    phone?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which member to aggregate.
     */
    where?: memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type memberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: memberWhereInput
    orderBy?: memberOrderByWithAggregationInput | memberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: memberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _avg?: MemberAvgAggregateInputType
    _sum?: MemberSumAggregateInputType
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    id: number
    memberId: string
    name: string
    surname: string
    phone: string
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends memberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type memberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    name?: boolean
    surname?: boolean
    phone?: boolean
    borrowRecords?: boolean | member$borrowRecordsArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type memberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    name?: boolean
    surname?: boolean
    phone?: boolean
  }, ExtArgs["result"]["member"]>

  export type memberSelectScalar = {
    id?: boolean
    memberId?: boolean
    name?: boolean
    surname?: boolean
    phone?: boolean
  }

  export type memberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    borrowRecords?: boolean | member$borrowRecordsArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type memberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $memberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "member"
    objects: {
      borrowRecords: Prisma.$borrowRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      memberId: string
      name: string
      surname: string
      phone: string
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type memberGetPayload<S extends boolean | null | undefined | memberDefaultArgs> = $Result.GetResult<Prisma.$memberPayload, S>

  type memberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<memberFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface memberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['member'], meta: { name: 'member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {memberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends memberFindUniqueArgs>(args: SelectSubset<T, memberFindUniqueArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {memberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends memberFindUniqueOrThrowArgs>(args: SelectSubset<T, memberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends memberFindFirstArgs>(args?: SelectSubset<T, memberFindFirstArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends memberFindFirstOrThrowArgs>(args?: SelectSubset<T, memberFindFirstOrThrowArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends memberFindManyArgs>(args?: SelectSubset<T, memberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Member.
     * @param {memberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends memberCreateArgs>(args: SelectSubset<T, memberCreateArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Members.
     * @param {memberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends memberCreateManyArgs>(args?: SelectSubset<T, memberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Members and returns the data saved in the database.
     * @param {memberCreateManyAndReturnArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Members and only return the `id`
     * const memberWithIdOnly = await prisma.member.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends memberCreateManyAndReturnArgs>(args?: SelectSubset<T, memberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Member.
     * @param {memberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends memberDeleteArgs>(args: SelectSubset<T, memberDeleteArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Member.
     * @param {memberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends memberUpdateArgs>(args: SelectSubset<T, memberUpdateArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Members.
     * @param {memberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends memberDeleteManyArgs>(args?: SelectSubset<T, memberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends memberUpdateManyArgs>(args: SelectSubset<T, memberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Member.
     * @param {memberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends memberUpsertArgs>(args: SelectSubset<T, memberUpsertArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends memberCountArgs>(
      args?: Subset<T, memberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {memberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends memberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: memberGroupByArgs['orderBy'] }
        : { orderBy?: memberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, memberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the member model
   */
  readonly fields: memberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__memberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    borrowRecords<T extends member$borrowRecordsArgs<ExtArgs> = {}>(args?: Subset<T, member$borrowRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$borrowRecordPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the member model
   */ 
  interface memberFieldRefs {
    readonly id: FieldRef<"member", 'Int'>
    readonly memberId: FieldRef<"member", 'String'>
    readonly name: FieldRef<"member", 'String'>
    readonly surname: FieldRef<"member", 'String'>
    readonly phone: FieldRef<"member", 'String'>
  }
    

  // Custom InputTypes
  /**
   * member findUnique
   */
  export type memberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter, which member to fetch.
     */
    where: memberWhereUniqueInput
  }

  /**
   * member findUniqueOrThrow
   */
  export type memberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter, which member to fetch.
     */
    where: memberWhereUniqueInput
  }

  /**
   * member findFirst
   */
  export type memberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter, which member to fetch.
     */
    where?: memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for members.
     */
    cursor?: memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * member findFirstOrThrow
   */
  export type memberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter, which member to fetch.
     */
    where?: memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for members.
     */
    cursor?: memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * member findMany
   */
  export type memberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter, which members to fetch.
     */
    where?: memberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of members to fetch.
     */
    orderBy?: memberOrderByWithRelationInput | memberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing members.
     */
    cursor?: memberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * member create
   */
  export type memberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * The data needed to create a member.
     */
    data: XOR<memberCreateInput, memberUncheckedCreateInput>
  }

  /**
   * member createMany
   */
  export type memberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many members.
     */
    data: memberCreateManyInput | memberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * member createManyAndReturn
   */
  export type memberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many members.
     */
    data: memberCreateManyInput | memberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * member update
   */
  export type memberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * The data needed to update a member.
     */
    data: XOR<memberUpdateInput, memberUncheckedUpdateInput>
    /**
     * Choose, which member to update.
     */
    where: memberWhereUniqueInput
  }

  /**
   * member updateMany
   */
  export type memberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update members.
     */
    data: XOR<memberUpdateManyMutationInput, memberUncheckedUpdateManyInput>
    /**
     * Filter which members to update
     */
    where?: memberWhereInput
  }

  /**
   * member upsert
   */
  export type memberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * The filter to search for the member to update in case it exists.
     */
    where: memberWhereUniqueInput
    /**
     * In case the member found by the `where` argument doesn't exist, create a new member with this data.
     */
    create: XOR<memberCreateInput, memberUncheckedCreateInput>
    /**
     * In case the member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<memberUpdateInput, memberUncheckedUpdateInput>
  }

  /**
   * member delete
   */
  export type memberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
    /**
     * Filter which member to delete.
     */
    where: memberWhereUniqueInput
  }

  /**
   * member deleteMany
   */
  export type memberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which members to delete
     */
    where?: memberWhereInput
  }

  /**
   * member.borrowRecords
   */
  export type member$borrowRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrowRecord
     */
    select?: borrowRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowRecordInclude<ExtArgs> | null
    where?: borrowRecordWhereInput
    orderBy?: borrowRecordOrderByWithRelationInput | borrowRecordOrderByWithRelationInput[]
    cursor?: borrowRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BorrowRecordScalarFieldEnum | BorrowRecordScalarFieldEnum[]
  }

  /**
   * member without action
   */
  export type memberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the member
     */
    select?: memberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: memberInclude<ExtArgs> | null
  }


  /**
   * Model borrowRecord
   */

  export type AggregateBorrowRecord = {
    _count: BorrowRecordCountAggregateOutputType | null
    _avg: BorrowRecordAvgAggregateOutputType | null
    _sum: BorrowRecordSumAggregateOutputType | null
    _min: BorrowRecordMinAggregateOutputType | null
    _max: BorrowRecordMaxAggregateOutputType | null
  }

  export type BorrowRecordAvgAggregateOutputType = {
    id: number | null
    memberId: number | null
    bookId: number | null
  }

  export type BorrowRecordSumAggregateOutputType = {
    id: number | null
    memberId: number | null
    bookId: number | null
  }

  export type BorrowRecordMinAggregateOutputType = {
    id: number | null
    memberId: number | null
    bookId: number | null
    borrowDate: Date | null
    dueDate: Date | null
    returnDate: Date | null
  }

  export type BorrowRecordMaxAggregateOutputType = {
    id: number | null
    memberId: number | null
    bookId: number | null
    borrowDate: Date | null
    dueDate: Date | null
    returnDate: Date | null
  }

  export type BorrowRecordCountAggregateOutputType = {
    id: number
    memberId: number
    bookId: number
    borrowDate: number
    dueDate: number
    returnDate: number
    _all: number
  }


  export type BorrowRecordAvgAggregateInputType = {
    id?: true
    memberId?: true
    bookId?: true
  }

  export type BorrowRecordSumAggregateInputType = {
    id?: true
    memberId?: true
    bookId?: true
  }

  export type BorrowRecordMinAggregateInputType = {
    id?: true
    memberId?: true
    bookId?: true
    borrowDate?: true
    dueDate?: true
    returnDate?: true
  }

  export type BorrowRecordMaxAggregateInputType = {
    id?: true
    memberId?: true
    bookId?: true
    borrowDate?: true
    dueDate?: true
    returnDate?: true
  }

  export type BorrowRecordCountAggregateInputType = {
    id?: true
    memberId?: true
    bookId?: true
    borrowDate?: true
    dueDate?: true
    returnDate?: true
    _all?: true
  }

  export type BorrowRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which borrowRecord to aggregate.
     */
    where?: borrowRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of borrowRecords to fetch.
     */
    orderBy?: borrowRecordOrderByWithRelationInput | borrowRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: borrowRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` borrowRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` borrowRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned borrowRecords
    **/
    _count?: true | BorrowRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BorrowRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BorrowRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BorrowRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BorrowRecordMaxAggregateInputType
  }

  export type GetBorrowRecordAggregateType<T extends BorrowRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateBorrowRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBorrowRecord[P]>
      : GetScalarType<T[P], AggregateBorrowRecord[P]>
  }




  export type borrowRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: borrowRecordWhereInput
    orderBy?: borrowRecordOrderByWithAggregationInput | borrowRecordOrderByWithAggregationInput[]
    by: BorrowRecordScalarFieldEnum[] | BorrowRecordScalarFieldEnum
    having?: borrowRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BorrowRecordCountAggregateInputType | true
    _avg?: BorrowRecordAvgAggregateInputType
    _sum?: BorrowRecordSumAggregateInputType
    _min?: BorrowRecordMinAggregateInputType
    _max?: BorrowRecordMaxAggregateInputType
  }

  export type BorrowRecordGroupByOutputType = {
    id: number
    memberId: number
    bookId: number
    borrowDate: Date
    dueDate: Date
    returnDate: Date | null
    _count: BorrowRecordCountAggregateOutputType | null
    _avg: BorrowRecordAvgAggregateOutputType | null
    _sum: BorrowRecordSumAggregateOutputType | null
    _min: BorrowRecordMinAggregateOutputType | null
    _max: BorrowRecordMaxAggregateOutputType | null
  }

  type GetBorrowRecordGroupByPayload<T extends borrowRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BorrowRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BorrowRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BorrowRecordGroupByOutputType[P]>
            : GetScalarType<T[P], BorrowRecordGroupByOutputType[P]>
        }
      >
    >


  export type borrowRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    bookId?: boolean
    borrowDate?: boolean
    dueDate?: boolean
    returnDate?: boolean
    member?: boolean | memberDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["borrowRecord"]>

  export type borrowRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    bookId?: boolean
    borrowDate?: boolean
    dueDate?: boolean
    returnDate?: boolean
    member?: boolean | memberDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["borrowRecord"]>

  export type borrowRecordSelectScalar = {
    id?: boolean
    memberId?: boolean
    bookId?: boolean
    borrowDate?: boolean
    dueDate?: boolean
    returnDate?: boolean
  }

  export type borrowRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | memberDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
  }
  export type borrowRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    member?: boolean | memberDefaultArgs<ExtArgs>
    book?: boolean | bookDefaultArgs<ExtArgs>
  }

  export type $borrowRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "borrowRecord"
    objects: {
      member: Prisma.$memberPayload<ExtArgs>
      book: Prisma.$bookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      memberId: number
      bookId: number
      borrowDate: Date
      dueDate: Date
      returnDate: Date | null
    }, ExtArgs["result"]["borrowRecord"]>
    composites: {}
  }

  type borrowRecordGetPayload<S extends boolean | null | undefined | borrowRecordDefaultArgs> = $Result.GetResult<Prisma.$borrowRecordPayload, S>

  type borrowRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<borrowRecordFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BorrowRecordCountAggregateInputType | true
    }

  export interface borrowRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['borrowRecord'], meta: { name: 'borrowRecord' } }
    /**
     * Find zero or one BorrowRecord that matches the filter.
     * @param {borrowRecordFindUniqueArgs} args - Arguments to find a BorrowRecord
     * @example
     * // Get one BorrowRecord
     * const borrowRecord = await prisma.borrowRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends borrowRecordFindUniqueArgs>(args: SelectSubset<T, borrowRecordFindUniqueArgs<ExtArgs>>): Prisma__borrowRecordClient<$Result.GetResult<Prisma.$borrowRecordPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BorrowRecord that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {borrowRecordFindUniqueOrThrowArgs} args - Arguments to find a BorrowRecord
     * @example
     * // Get one BorrowRecord
     * const borrowRecord = await prisma.borrowRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends borrowRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, borrowRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__borrowRecordClient<$Result.GetResult<Prisma.$borrowRecordPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BorrowRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {borrowRecordFindFirstArgs} args - Arguments to find a BorrowRecord
     * @example
     * // Get one BorrowRecord
     * const borrowRecord = await prisma.borrowRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends borrowRecordFindFirstArgs>(args?: SelectSubset<T, borrowRecordFindFirstArgs<ExtArgs>>): Prisma__borrowRecordClient<$Result.GetResult<Prisma.$borrowRecordPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BorrowRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {borrowRecordFindFirstOrThrowArgs} args - Arguments to find a BorrowRecord
     * @example
     * // Get one BorrowRecord
     * const borrowRecord = await prisma.borrowRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends borrowRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, borrowRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__borrowRecordClient<$Result.GetResult<Prisma.$borrowRecordPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BorrowRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {borrowRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BorrowRecords
     * const borrowRecords = await prisma.borrowRecord.findMany()
     * 
     * // Get first 10 BorrowRecords
     * const borrowRecords = await prisma.borrowRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const borrowRecordWithIdOnly = await prisma.borrowRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends borrowRecordFindManyArgs>(args?: SelectSubset<T, borrowRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$borrowRecordPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BorrowRecord.
     * @param {borrowRecordCreateArgs} args - Arguments to create a BorrowRecord.
     * @example
     * // Create one BorrowRecord
     * const BorrowRecord = await prisma.borrowRecord.create({
     *   data: {
     *     // ... data to create a BorrowRecord
     *   }
     * })
     * 
     */
    create<T extends borrowRecordCreateArgs>(args: SelectSubset<T, borrowRecordCreateArgs<ExtArgs>>): Prisma__borrowRecordClient<$Result.GetResult<Prisma.$borrowRecordPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BorrowRecords.
     * @param {borrowRecordCreateManyArgs} args - Arguments to create many BorrowRecords.
     * @example
     * // Create many BorrowRecords
     * const borrowRecord = await prisma.borrowRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends borrowRecordCreateManyArgs>(args?: SelectSubset<T, borrowRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BorrowRecords and returns the data saved in the database.
     * @param {borrowRecordCreateManyAndReturnArgs} args - Arguments to create many BorrowRecords.
     * @example
     * // Create many BorrowRecords
     * const borrowRecord = await prisma.borrowRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BorrowRecords and only return the `id`
     * const borrowRecordWithIdOnly = await prisma.borrowRecord.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends borrowRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, borrowRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$borrowRecordPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BorrowRecord.
     * @param {borrowRecordDeleteArgs} args - Arguments to delete one BorrowRecord.
     * @example
     * // Delete one BorrowRecord
     * const BorrowRecord = await prisma.borrowRecord.delete({
     *   where: {
     *     // ... filter to delete one BorrowRecord
     *   }
     * })
     * 
     */
    delete<T extends borrowRecordDeleteArgs>(args: SelectSubset<T, borrowRecordDeleteArgs<ExtArgs>>): Prisma__borrowRecordClient<$Result.GetResult<Prisma.$borrowRecordPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BorrowRecord.
     * @param {borrowRecordUpdateArgs} args - Arguments to update one BorrowRecord.
     * @example
     * // Update one BorrowRecord
     * const borrowRecord = await prisma.borrowRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends borrowRecordUpdateArgs>(args: SelectSubset<T, borrowRecordUpdateArgs<ExtArgs>>): Prisma__borrowRecordClient<$Result.GetResult<Prisma.$borrowRecordPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BorrowRecords.
     * @param {borrowRecordDeleteManyArgs} args - Arguments to filter BorrowRecords to delete.
     * @example
     * // Delete a few BorrowRecords
     * const { count } = await prisma.borrowRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends borrowRecordDeleteManyArgs>(args?: SelectSubset<T, borrowRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BorrowRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {borrowRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BorrowRecords
     * const borrowRecord = await prisma.borrowRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends borrowRecordUpdateManyArgs>(args: SelectSubset<T, borrowRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BorrowRecord.
     * @param {borrowRecordUpsertArgs} args - Arguments to update or create a BorrowRecord.
     * @example
     * // Update or create a BorrowRecord
     * const borrowRecord = await prisma.borrowRecord.upsert({
     *   create: {
     *     // ... data to create a BorrowRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BorrowRecord we want to update
     *   }
     * })
     */
    upsert<T extends borrowRecordUpsertArgs>(args: SelectSubset<T, borrowRecordUpsertArgs<ExtArgs>>): Prisma__borrowRecordClient<$Result.GetResult<Prisma.$borrowRecordPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BorrowRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {borrowRecordCountArgs} args - Arguments to filter BorrowRecords to count.
     * @example
     * // Count the number of BorrowRecords
     * const count = await prisma.borrowRecord.count({
     *   where: {
     *     // ... the filter for the BorrowRecords we want to count
     *   }
     * })
    **/
    count<T extends borrowRecordCountArgs>(
      args?: Subset<T, borrowRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BorrowRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BorrowRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BorrowRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BorrowRecordAggregateArgs>(args: Subset<T, BorrowRecordAggregateArgs>): Prisma.PrismaPromise<GetBorrowRecordAggregateType<T>>

    /**
     * Group by BorrowRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {borrowRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends borrowRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: borrowRecordGroupByArgs['orderBy'] }
        : { orderBy?: borrowRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, borrowRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBorrowRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the borrowRecord model
   */
  readonly fields: borrowRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for borrowRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__borrowRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    member<T extends memberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, memberDefaultArgs<ExtArgs>>): Prisma__memberClient<$Result.GetResult<Prisma.$memberPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    book<T extends bookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, bookDefaultArgs<ExtArgs>>): Prisma__bookClient<$Result.GetResult<Prisma.$bookPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the borrowRecord model
   */ 
  interface borrowRecordFieldRefs {
    readonly id: FieldRef<"borrowRecord", 'Int'>
    readonly memberId: FieldRef<"borrowRecord", 'Int'>
    readonly bookId: FieldRef<"borrowRecord", 'Int'>
    readonly borrowDate: FieldRef<"borrowRecord", 'DateTime'>
    readonly dueDate: FieldRef<"borrowRecord", 'DateTime'>
    readonly returnDate: FieldRef<"borrowRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * borrowRecord findUnique
   */
  export type borrowRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrowRecord
     */
    select?: borrowRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowRecordInclude<ExtArgs> | null
    /**
     * Filter, which borrowRecord to fetch.
     */
    where: borrowRecordWhereUniqueInput
  }

  /**
   * borrowRecord findUniqueOrThrow
   */
  export type borrowRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrowRecord
     */
    select?: borrowRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowRecordInclude<ExtArgs> | null
    /**
     * Filter, which borrowRecord to fetch.
     */
    where: borrowRecordWhereUniqueInput
  }

  /**
   * borrowRecord findFirst
   */
  export type borrowRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrowRecord
     */
    select?: borrowRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowRecordInclude<ExtArgs> | null
    /**
     * Filter, which borrowRecord to fetch.
     */
    where?: borrowRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of borrowRecords to fetch.
     */
    orderBy?: borrowRecordOrderByWithRelationInput | borrowRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for borrowRecords.
     */
    cursor?: borrowRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` borrowRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` borrowRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of borrowRecords.
     */
    distinct?: BorrowRecordScalarFieldEnum | BorrowRecordScalarFieldEnum[]
  }

  /**
   * borrowRecord findFirstOrThrow
   */
  export type borrowRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrowRecord
     */
    select?: borrowRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowRecordInclude<ExtArgs> | null
    /**
     * Filter, which borrowRecord to fetch.
     */
    where?: borrowRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of borrowRecords to fetch.
     */
    orderBy?: borrowRecordOrderByWithRelationInput | borrowRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for borrowRecords.
     */
    cursor?: borrowRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` borrowRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` borrowRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of borrowRecords.
     */
    distinct?: BorrowRecordScalarFieldEnum | BorrowRecordScalarFieldEnum[]
  }

  /**
   * borrowRecord findMany
   */
  export type borrowRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrowRecord
     */
    select?: borrowRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowRecordInclude<ExtArgs> | null
    /**
     * Filter, which borrowRecords to fetch.
     */
    where?: borrowRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of borrowRecords to fetch.
     */
    orderBy?: borrowRecordOrderByWithRelationInput | borrowRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing borrowRecords.
     */
    cursor?: borrowRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` borrowRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` borrowRecords.
     */
    skip?: number
    distinct?: BorrowRecordScalarFieldEnum | BorrowRecordScalarFieldEnum[]
  }

  /**
   * borrowRecord create
   */
  export type borrowRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrowRecord
     */
    select?: borrowRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a borrowRecord.
     */
    data: XOR<borrowRecordCreateInput, borrowRecordUncheckedCreateInput>
  }

  /**
   * borrowRecord createMany
   */
  export type borrowRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many borrowRecords.
     */
    data: borrowRecordCreateManyInput | borrowRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * borrowRecord createManyAndReturn
   */
  export type borrowRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrowRecord
     */
    select?: borrowRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many borrowRecords.
     */
    data: borrowRecordCreateManyInput | borrowRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * borrowRecord update
   */
  export type borrowRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrowRecord
     */
    select?: borrowRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a borrowRecord.
     */
    data: XOR<borrowRecordUpdateInput, borrowRecordUncheckedUpdateInput>
    /**
     * Choose, which borrowRecord to update.
     */
    where: borrowRecordWhereUniqueInput
  }

  /**
   * borrowRecord updateMany
   */
  export type borrowRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update borrowRecords.
     */
    data: XOR<borrowRecordUpdateManyMutationInput, borrowRecordUncheckedUpdateManyInput>
    /**
     * Filter which borrowRecords to update
     */
    where?: borrowRecordWhereInput
  }

  /**
   * borrowRecord upsert
   */
  export type borrowRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrowRecord
     */
    select?: borrowRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the borrowRecord to update in case it exists.
     */
    where: borrowRecordWhereUniqueInput
    /**
     * In case the borrowRecord found by the `where` argument doesn't exist, create a new borrowRecord with this data.
     */
    create: XOR<borrowRecordCreateInput, borrowRecordUncheckedCreateInput>
    /**
     * In case the borrowRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<borrowRecordUpdateInput, borrowRecordUncheckedUpdateInput>
  }

  /**
   * borrowRecord delete
   */
  export type borrowRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrowRecord
     */
    select?: borrowRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowRecordInclude<ExtArgs> | null
    /**
     * Filter which borrowRecord to delete.
     */
    where: borrowRecordWhereUniqueInput
  }

  /**
   * borrowRecord deleteMany
   */
  export type borrowRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which borrowRecords to delete
     */
    where?: borrowRecordWhereInput
  }

  /**
   * borrowRecord without action
   */
  export type borrowRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the borrowRecord
     */
    select?: borrowRecordSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: borrowRecordInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AuthorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    surname: 'surname',
    affiliation: 'affiliation'
  };

  export type AuthorScalarFieldEnum = (typeof AuthorScalarFieldEnum)[keyof typeof AuthorScalarFieldEnum]


  export const BookScalarFieldEnum: {
    id: 'id',
    title: 'title',
    isbn: 'isbn',
    category: 'category',
    authorId: 'authorId'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const MemberScalarFieldEnum: {
    id: 'id',
    memberId: 'memberId',
    name: 'name',
    surname: 'surname',
    phone: 'phone'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const BorrowRecordScalarFieldEnum: {
    id: 'id',
    memberId: 'memberId',
    bookId: 'bookId',
    borrowDate: 'borrowDate',
    dueDate: 'dueDate',
    returnDate: 'returnDate'
  };

  export type BorrowRecordScalarFieldEnum = (typeof BorrowRecordScalarFieldEnum)[keyof typeof BorrowRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type authorWhereInput = {
    AND?: authorWhereInput | authorWhereInput[]
    OR?: authorWhereInput[]
    NOT?: authorWhereInput | authorWhereInput[]
    id?: IntFilter<"author"> | number
    name?: StringFilter<"author"> | string
    surname?: StringFilter<"author"> | string
    affiliation?: StringFilter<"author"> | string
    books?: BookListRelationFilter
  }

  export type authorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    affiliation?: SortOrder
    books?: bookOrderByRelationAggregateInput
  }

  export type authorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: authorWhereInput | authorWhereInput[]
    OR?: authorWhereInput[]
    NOT?: authorWhereInput | authorWhereInput[]
    name?: StringFilter<"author"> | string
    surname?: StringFilter<"author"> | string
    affiliation?: StringFilter<"author"> | string
    books?: BookListRelationFilter
  }, "id">

  export type authorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    affiliation?: SortOrder
    _count?: authorCountOrderByAggregateInput
    _avg?: authorAvgOrderByAggregateInput
    _max?: authorMaxOrderByAggregateInput
    _min?: authorMinOrderByAggregateInput
    _sum?: authorSumOrderByAggregateInput
  }

  export type authorScalarWhereWithAggregatesInput = {
    AND?: authorScalarWhereWithAggregatesInput | authorScalarWhereWithAggregatesInput[]
    OR?: authorScalarWhereWithAggregatesInput[]
    NOT?: authorScalarWhereWithAggregatesInput | authorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"author"> | number
    name?: StringWithAggregatesFilter<"author"> | string
    surname?: StringWithAggregatesFilter<"author"> | string
    affiliation?: StringWithAggregatesFilter<"author"> | string
  }

  export type bookWhereInput = {
    AND?: bookWhereInput | bookWhereInput[]
    OR?: bookWhereInput[]
    NOT?: bookWhereInput | bookWhereInput[]
    id?: IntFilter<"book"> | number
    title?: StringFilter<"book"> | string
    isbn?: StringFilter<"book"> | string
    category?: StringFilter<"book"> | string
    authorId?: IntFilter<"book"> | number
    author?: XOR<AuthorRelationFilter, authorWhereInput>
    borrowRecords?: BorrowRecordListRelationFilter
  }

  export type bookOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    isbn?: SortOrder
    category?: SortOrder
    authorId?: SortOrder
    author?: authorOrderByWithRelationInput
    borrowRecords?: borrowRecordOrderByRelationAggregateInput
  }

  export type bookWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    isbn?: string
    AND?: bookWhereInput | bookWhereInput[]
    OR?: bookWhereInput[]
    NOT?: bookWhereInput | bookWhereInput[]
    title?: StringFilter<"book"> | string
    category?: StringFilter<"book"> | string
    authorId?: IntFilter<"book"> | number
    author?: XOR<AuthorRelationFilter, authorWhereInput>
    borrowRecords?: BorrowRecordListRelationFilter
  }, "id" | "isbn">

  export type bookOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    isbn?: SortOrder
    category?: SortOrder
    authorId?: SortOrder
    _count?: bookCountOrderByAggregateInput
    _avg?: bookAvgOrderByAggregateInput
    _max?: bookMaxOrderByAggregateInput
    _min?: bookMinOrderByAggregateInput
    _sum?: bookSumOrderByAggregateInput
  }

  export type bookScalarWhereWithAggregatesInput = {
    AND?: bookScalarWhereWithAggregatesInput | bookScalarWhereWithAggregatesInput[]
    OR?: bookScalarWhereWithAggregatesInput[]
    NOT?: bookScalarWhereWithAggregatesInput | bookScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"book"> | number
    title?: StringWithAggregatesFilter<"book"> | string
    isbn?: StringWithAggregatesFilter<"book"> | string
    category?: StringWithAggregatesFilter<"book"> | string
    authorId?: IntWithAggregatesFilter<"book"> | number
  }

  export type memberWhereInput = {
    AND?: memberWhereInput | memberWhereInput[]
    OR?: memberWhereInput[]
    NOT?: memberWhereInput | memberWhereInput[]
    id?: IntFilter<"member"> | number
    memberId?: StringFilter<"member"> | string
    name?: StringFilter<"member"> | string
    surname?: StringFilter<"member"> | string
    phone?: StringFilter<"member"> | string
    borrowRecords?: BorrowRecordListRelationFilter
  }

  export type memberOrderByWithRelationInput = {
    id?: SortOrder
    memberId?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    phone?: SortOrder
    borrowRecords?: borrowRecordOrderByRelationAggregateInput
  }

  export type memberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    memberId?: string
    AND?: memberWhereInput | memberWhereInput[]
    OR?: memberWhereInput[]
    NOT?: memberWhereInput | memberWhereInput[]
    name?: StringFilter<"member"> | string
    surname?: StringFilter<"member"> | string
    phone?: StringFilter<"member"> | string
    borrowRecords?: BorrowRecordListRelationFilter
  }, "id" | "memberId">

  export type memberOrderByWithAggregationInput = {
    id?: SortOrder
    memberId?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    phone?: SortOrder
    _count?: memberCountOrderByAggregateInput
    _avg?: memberAvgOrderByAggregateInput
    _max?: memberMaxOrderByAggregateInput
    _min?: memberMinOrderByAggregateInput
    _sum?: memberSumOrderByAggregateInput
  }

  export type memberScalarWhereWithAggregatesInput = {
    AND?: memberScalarWhereWithAggregatesInput | memberScalarWhereWithAggregatesInput[]
    OR?: memberScalarWhereWithAggregatesInput[]
    NOT?: memberScalarWhereWithAggregatesInput | memberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"member"> | number
    memberId?: StringWithAggregatesFilter<"member"> | string
    name?: StringWithAggregatesFilter<"member"> | string
    surname?: StringWithAggregatesFilter<"member"> | string
    phone?: StringWithAggregatesFilter<"member"> | string
  }

  export type borrowRecordWhereInput = {
    AND?: borrowRecordWhereInput | borrowRecordWhereInput[]
    OR?: borrowRecordWhereInput[]
    NOT?: borrowRecordWhereInput | borrowRecordWhereInput[]
    id?: IntFilter<"borrowRecord"> | number
    memberId?: IntFilter<"borrowRecord"> | number
    bookId?: IntFilter<"borrowRecord"> | number
    borrowDate?: DateTimeFilter<"borrowRecord"> | Date | string
    dueDate?: DateTimeFilter<"borrowRecord"> | Date | string
    returnDate?: DateTimeNullableFilter<"borrowRecord"> | Date | string | null
    member?: XOR<MemberRelationFilter, memberWhereInput>
    book?: XOR<BookRelationFilter, bookWhereInput>
  }

  export type borrowRecordOrderByWithRelationInput = {
    id?: SortOrder
    memberId?: SortOrder
    bookId?: SortOrder
    borrowDate?: SortOrder
    dueDate?: SortOrder
    returnDate?: SortOrderInput | SortOrder
    member?: memberOrderByWithRelationInput
    book?: bookOrderByWithRelationInput
  }

  export type borrowRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: borrowRecordWhereInput | borrowRecordWhereInput[]
    OR?: borrowRecordWhereInput[]
    NOT?: borrowRecordWhereInput | borrowRecordWhereInput[]
    memberId?: IntFilter<"borrowRecord"> | number
    bookId?: IntFilter<"borrowRecord"> | number
    borrowDate?: DateTimeFilter<"borrowRecord"> | Date | string
    dueDate?: DateTimeFilter<"borrowRecord"> | Date | string
    returnDate?: DateTimeNullableFilter<"borrowRecord"> | Date | string | null
    member?: XOR<MemberRelationFilter, memberWhereInput>
    book?: XOR<BookRelationFilter, bookWhereInput>
  }, "id">

  export type borrowRecordOrderByWithAggregationInput = {
    id?: SortOrder
    memberId?: SortOrder
    bookId?: SortOrder
    borrowDate?: SortOrder
    dueDate?: SortOrder
    returnDate?: SortOrderInput | SortOrder
    _count?: borrowRecordCountOrderByAggregateInput
    _avg?: borrowRecordAvgOrderByAggregateInput
    _max?: borrowRecordMaxOrderByAggregateInput
    _min?: borrowRecordMinOrderByAggregateInput
    _sum?: borrowRecordSumOrderByAggregateInput
  }

  export type borrowRecordScalarWhereWithAggregatesInput = {
    AND?: borrowRecordScalarWhereWithAggregatesInput | borrowRecordScalarWhereWithAggregatesInput[]
    OR?: borrowRecordScalarWhereWithAggregatesInput[]
    NOT?: borrowRecordScalarWhereWithAggregatesInput | borrowRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"borrowRecord"> | number
    memberId?: IntWithAggregatesFilter<"borrowRecord"> | number
    bookId?: IntWithAggregatesFilter<"borrowRecord"> | number
    borrowDate?: DateTimeWithAggregatesFilter<"borrowRecord"> | Date | string
    dueDate?: DateTimeWithAggregatesFilter<"borrowRecord"> | Date | string
    returnDate?: DateTimeNullableWithAggregatesFilter<"borrowRecord"> | Date | string | null
  }

  export type authorCreateInput = {
    name: string
    surname: string
    affiliation: string
    books?: bookCreateNestedManyWithoutAuthorInput
  }

  export type authorUncheckedCreateInput = {
    id?: number
    name: string
    surname: string
    affiliation: string
    books?: bookUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type authorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    affiliation?: StringFieldUpdateOperationsInput | string
    books?: bookUpdateManyWithoutAuthorNestedInput
  }

  export type authorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    affiliation?: StringFieldUpdateOperationsInput | string
    books?: bookUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type authorCreateManyInput = {
    id?: number
    name: string
    surname: string
    affiliation: string
  }

  export type authorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    affiliation?: StringFieldUpdateOperationsInput | string
  }

  export type authorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    affiliation?: StringFieldUpdateOperationsInput | string
  }

  export type bookCreateInput = {
    title: string
    isbn: string
    category: string
    author: authorCreateNestedOneWithoutBooksInput
    borrowRecords?: borrowRecordCreateNestedManyWithoutBookInput
  }

  export type bookUncheckedCreateInput = {
    id?: number
    title: string
    isbn: string
    category: string
    authorId: number
    borrowRecords?: borrowRecordUncheckedCreateNestedManyWithoutBookInput
  }

  export type bookUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    author?: authorUpdateOneRequiredWithoutBooksNestedInput
    borrowRecords?: borrowRecordUpdateManyWithoutBookNestedInput
  }

  export type bookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    borrowRecords?: borrowRecordUncheckedUpdateManyWithoutBookNestedInput
  }

  export type bookCreateManyInput = {
    id?: number
    title: string
    isbn: string
    category: string
    authorId: number
  }

  export type bookUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type bookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type memberCreateInput = {
    memberId: string
    name: string
    surname: string
    phone: string
    borrowRecords?: borrowRecordCreateNestedManyWithoutMemberInput
  }

  export type memberUncheckedCreateInput = {
    id?: number
    memberId: string
    name: string
    surname: string
    phone: string
    borrowRecords?: borrowRecordUncheckedCreateNestedManyWithoutMemberInput
  }

  export type memberUpdateInput = {
    memberId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    borrowRecords?: borrowRecordUpdateManyWithoutMemberNestedInput
  }

  export type memberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    memberId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    borrowRecords?: borrowRecordUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type memberCreateManyInput = {
    id?: number
    memberId: string
    name: string
    surname: string
    phone: string
  }

  export type memberUpdateManyMutationInput = {
    memberId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type memberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    memberId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type borrowRecordCreateInput = {
    borrowDate: Date | string
    dueDate: Date | string
    returnDate?: Date | string | null
    member: memberCreateNestedOneWithoutBorrowRecordsInput
    book: bookCreateNestedOneWithoutBorrowRecordsInput
  }

  export type borrowRecordUncheckedCreateInput = {
    id?: number
    memberId: number
    bookId: number
    borrowDate: Date | string
    dueDate: Date | string
    returnDate?: Date | string | null
  }

  export type borrowRecordUpdateInput = {
    borrowDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: memberUpdateOneRequiredWithoutBorrowRecordsNestedInput
    book?: bookUpdateOneRequiredWithoutBorrowRecordsNestedInput
  }

  export type borrowRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    borrowDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type borrowRecordCreateManyInput = {
    id?: number
    memberId: number
    bookId: number
    borrowDate: Date | string
    dueDate: Date | string
    returnDate?: Date | string | null
  }

  export type borrowRecordUpdateManyMutationInput = {
    borrowDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type borrowRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    borrowDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BookListRelationFilter = {
    every?: bookWhereInput
    some?: bookWhereInput
    none?: bookWhereInput
  }

  export type bookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type authorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    affiliation?: SortOrder
  }

  export type authorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type authorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    affiliation?: SortOrder
  }

  export type authorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    affiliation?: SortOrder
  }

  export type authorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type AuthorRelationFilter = {
    is?: authorWhereInput
    isNot?: authorWhereInput
  }

  export type BorrowRecordListRelationFilter = {
    every?: borrowRecordWhereInput
    some?: borrowRecordWhereInput
    none?: borrowRecordWhereInput
  }

  export type borrowRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type bookCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isbn?: SortOrder
    category?: SortOrder
    authorId?: SortOrder
  }

  export type bookAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type bookMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isbn?: SortOrder
    category?: SortOrder
    authorId?: SortOrder
  }

  export type bookMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isbn?: SortOrder
    category?: SortOrder
    authorId?: SortOrder
  }

  export type bookSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type memberCountOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    phone?: SortOrder
  }

  export type memberAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type memberMaxOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    phone?: SortOrder
  }

  export type memberMinOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    phone?: SortOrder
  }

  export type memberSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MemberRelationFilter = {
    is?: memberWhereInput
    isNot?: memberWhereInput
  }

  export type BookRelationFilter = {
    is?: bookWhereInput
    isNot?: bookWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type borrowRecordCountOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    bookId?: SortOrder
    borrowDate?: SortOrder
    dueDate?: SortOrder
    returnDate?: SortOrder
  }

  export type borrowRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    bookId?: SortOrder
  }

  export type borrowRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    bookId?: SortOrder
    borrowDate?: SortOrder
    dueDate?: SortOrder
    returnDate?: SortOrder
  }

  export type borrowRecordMinOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    bookId?: SortOrder
    borrowDate?: SortOrder
    dueDate?: SortOrder
    returnDate?: SortOrder
  }

  export type borrowRecordSumOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    bookId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type bookCreateNestedManyWithoutAuthorInput = {
    create?: XOR<bookCreateWithoutAuthorInput, bookUncheckedCreateWithoutAuthorInput> | bookCreateWithoutAuthorInput[] | bookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: bookCreateOrConnectWithoutAuthorInput | bookCreateOrConnectWithoutAuthorInput[]
    createMany?: bookCreateManyAuthorInputEnvelope
    connect?: bookWhereUniqueInput | bookWhereUniqueInput[]
  }

  export type bookUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<bookCreateWithoutAuthorInput, bookUncheckedCreateWithoutAuthorInput> | bookCreateWithoutAuthorInput[] | bookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: bookCreateOrConnectWithoutAuthorInput | bookCreateOrConnectWithoutAuthorInput[]
    createMany?: bookCreateManyAuthorInputEnvelope
    connect?: bookWhereUniqueInput | bookWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type bookUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<bookCreateWithoutAuthorInput, bookUncheckedCreateWithoutAuthorInput> | bookCreateWithoutAuthorInput[] | bookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: bookCreateOrConnectWithoutAuthorInput | bookCreateOrConnectWithoutAuthorInput[]
    upsert?: bookUpsertWithWhereUniqueWithoutAuthorInput | bookUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: bookCreateManyAuthorInputEnvelope
    set?: bookWhereUniqueInput | bookWhereUniqueInput[]
    disconnect?: bookWhereUniqueInput | bookWhereUniqueInput[]
    delete?: bookWhereUniqueInput | bookWhereUniqueInput[]
    connect?: bookWhereUniqueInput | bookWhereUniqueInput[]
    update?: bookUpdateWithWhereUniqueWithoutAuthorInput | bookUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: bookUpdateManyWithWhereWithoutAuthorInput | bookUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: bookScalarWhereInput | bookScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type bookUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<bookCreateWithoutAuthorInput, bookUncheckedCreateWithoutAuthorInput> | bookCreateWithoutAuthorInput[] | bookUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: bookCreateOrConnectWithoutAuthorInput | bookCreateOrConnectWithoutAuthorInput[]
    upsert?: bookUpsertWithWhereUniqueWithoutAuthorInput | bookUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: bookCreateManyAuthorInputEnvelope
    set?: bookWhereUniqueInput | bookWhereUniqueInput[]
    disconnect?: bookWhereUniqueInput | bookWhereUniqueInput[]
    delete?: bookWhereUniqueInput | bookWhereUniqueInput[]
    connect?: bookWhereUniqueInput | bookWhereUniqueInput[]
    update?: bookUpdateWithWhereUniqueWithoutAuthorInput | bookUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: bookUpdateManyWithWhereWithoutAuthorInput | bookUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: bookScalarWhereInput | bookScalarWhereInput[]
  }

  export type authorCreateNestedOneWithoutBooksInput = {
    create?: XOR<authorCreateWithoutBooksInput, authorUncheckedCreateWithoutBooksInput>
    connectOrCreate?: authorCreateOrConnectWithoutBooksInput
    connect?: authorWhereUniqueInput
  }

  export type borrowRecordCreateNestedManyWithoutBookInput = {
    create?: XOR<borrowRecordCreateWithoutBookInput, borrowRecordUncheckedCreateWithoutBookInput> | borrowRecordCreateWithoutBookInput[] | borrowRecordUncheckedCreateWithoutBookInput[]
    connectOrCreate?: borrowRecordCreateOrConnectWithoutBookInput | borrowRecordCreateOrConnectWithoutBookInput[]
    createMany?: borrowRecordCreateManyBookInputEnvelope
    connect?: borrowRecordWhereUniqueInput | borrowRecordWhereUniqueInput[]
  }

  export type borrowRecordUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<borrowRecordCreateWithoutBookInput, borrowRecordUncheckedCreateWithoutBookInput> | borrowRecordCreateWithoutBookInput[] | borrowRecordUncheckedCreateWithoutBookInput[]
    connectOrCreate?: borrowRecordCreateOrConnectWithoutBookInput | borrowRecordCreateOrConnectWithoutBookInput[]
    createMany?: borrowRecordCreateManyBookInputEnvelope
    connect?: borrowRecordWhereUniqueInput | borrowRecordWhereUniqueInput[]
  }

  export type authorUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<authorCreateWithoutBooksInput, authorUncheckedCreateWithoutBooksInput>
    connectOrCreate?: authorCreateOrConnectWithoutBooksInput
    upsert?: authorUpsertWithoutBooksInput
    connect?: authorWhereUniqueInput
    update?: XOR<XOR<authorUpdateToOneWithWhereWithoutBooksInput, authorUpdateWithoutBooksInput>, authorUncheckedUpdateWithoutBooksInput>
  }

  export type borrowRecordUpdateManyWithoutBookNestedInput = {
    create?: XOR<borrowRecordCreateWithoutBookInput, borrowRecordUncheckedCreateWithoutBookInput> | borrowRecordCreateWithoutBookInput[] | borrowRecordUncheckedCreateWithoutBookInput[]
    connectOrCreate?: borrowRecordCreateOrConnectWithoutBookInput | borrowRecordCreateOrConnectWithoutBookInput[]
    upsert?: borrowRecordUpsertWithWhereUniqueWithoutBookInput | borrowRecordUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: borrowRecordCreateManyBookInputEnvelope
    set?: borrowRecordWhereUniqueInput | borrowRecordWhereUniqueInput[]
    disconnect?: borrowRecordWhereUniqueInput | borrowRecordWhereUniqueInput[]
    delete?: borrowRecordWhereUniqueInput | borrowRecordWhereUniqueInput[]
    connect?: borrowRecordWhereUniqueInput | borrowRecordWhereUniqueInput[]
    update?: borrowRecordUpdateWithWhereUniqueWithoutBookInput | borrowRecordUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: borrowRecordUpdateManyWithWhereWithoutBookInput | borrowRecordUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: borrowRecordScalarWhereInput | borrowRecordScalarWhereInput[]
  }

  export type borrowRecordUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<borrowRecordCreateWithoutBookInput, borrowRecordUncheckedCreateWithoutBookInput> | borrowRecordCreateWithoutBookInput[] | borrowRecordUncheckedCreateWithoutBookInput[]
    connectOrCreate?: borrowRecordCreateOrConnectWithoutBookInput | borrowRecordCreateOrConnectWithoutBookInput[]
    upsert?: borrowRecordUpsertWithWhereUniqueWithoutBookInput | borrowRecordUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: borrowRecordCreateManyBookInputEnvelope
    set?: borrowRecordWhereUniqueInput | borrowRecordWhereUniqueInput[]
    disconnect?: borrowRecordWhereUniqueInput | borrowRecordWhereUniqueInput[]
    delete?: borrowRecordWhereUniqueInput | borrowRecordWhereUniqueInput[]
    connect?: borrowRecordWhereUniqueInput | borrowRecordWhereUniqueInput[]
    update?: borrowRecordUpdateWithWhereUniqueWithoutBookInput | borrowRecordUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: borrowRecordUpdateManyWithWhereWithoutBookInput | borrowRecordUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: borrowRecordScalarWhereInput | borrowRecordScalarWhereInput[]
  }

  export type borrowRecordCreateNestedManyWithoutMemberInput = {
    create?: XOR<borrowRecordCreateWithoutMemberInput, borrowRecordUncheckedCreateWithoutMemberInput> | borrowRecordCreateWithoutMemberInput[] | borrowRecordUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: borrowRecordCreateOrConnectWithoutMemberInput | borrowRecordCreateOrConnectWithoutMemberInput[]
    createMany?: borrowRecordCreateManyMemberInputEnvelope
    connect?: borrowRecordWhereUniqueInput | borrowRecordWhereUniqueInput[]
  }

  export type borrowRecordUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<borrowRecordCreateWithoutMemberInput, borrowRecordUncheckedCreateWithoutMemberInput> | borrowRecordCreateWithoutMemberInput[] | borrowRecordUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: borrowRecordCreateOrConnectWithoutMemberInput | borrowRecordCreateOrConnectWithoutMemberInput[]
    createMany?: borrowRecordCreateManyMemberInputEnvelope
    connect?: borrowRecordWhereUniqueInput | borrowRecordWhereUniqueInput[]
  }

  export type borrowRecordUpdateManyWithoutMemberNestedInput = {
    create?: XOR<borrowRecordCreateWithoutMemberInput, borrowRecordUncheckedCreateWithoutMemberInput> | borrowRecordCreateWithoutMemberInput[] | borrowRecordUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: borrowRecordCreateOrConnectWithoutMemberInput | borrowRecordCreateOrConnectWithoutMemberInput[]
    upsert?: borrowRecordUpsertWithWhereUniqueWithoutMemberInput | borrowRecordUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: borrowRecordCreateManyMemberInputEnvelope
    set?: borrowRecordWhereUniqueInput | borrowRecordWhereUniqueInput[]
    disconnect?: borrowRecordWhereUniqueInput | borrowRecordWhereUniqueInput[]
    delete?: borrowRecordWhereUniqueInput | borrowRecordWhereUniqueInput[]
    connect?: borrowRecordWhereUniqueInput | borrowRecordWhereUniqueInput[]
    update?: borrowRecordUpdateWithWhereUniqueWithoutMemberInput | borrowRecordUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: borrowRecordUpdateManyWithWhereWithoutMemberInput | borrowRecordUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: borrowRecordScalarWhereInput | borrowRecordScalarWhereInput[]
  }

  export type borrowRecordUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<borrowRecordCreateWithoutMemberInput, borrowRecordUncheckedCreateWithoutMemberInput> | borrowRecordCreateWithoutMemberInput[] | borrowRecordUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: borrowRecordCreateOrConnectWithoutMemberInput | borrowRecordCreateOrConnectWithoutMemberInput[]
    upsert?: borrowRecordUpsertWithWhereUniqueWithoutMemberInput | borrowRecordUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: borrowRecordCreateManyMemberInputEnvelope
    set?: borrowRecordWhereUniqueInput | borrowRecordWhereUniqueInput[]
    disconnect?: borrowRecordWhereUniqueInput | borrowRecordWhereUniqueInput[]
    delete?: borrowRecordWhereUniqueInput | borrowRecordWhereUniqueInput[]
    connect?: borrowRecordWhereUniqueInput | borrowRecordWhereUniqueInput[]
    update?: borrowRecordUpdateWithWhereUniqueWithoutMemberInput | borrowRecordUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: borrowRecordUpdateManyWithWhereWithoutMemberInput | borrowRecordUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: borrowRecordScalarWhereInput | borrowRecordScalarWhereInput[]
  }

  export type memberCreateNestedOneWithoutBorrowRecordsInput = {
    create?: XOR<memberCreateWithoutBorrowRecordsInput, memberUncheckedCreateWithoutBorrowRecordsInput>
    connectOrCreate?: memberCreateOrConnectWithoutBorrowRecordsInput
    connect?: memberWhereUniqueInput
  }

  export type bookCreateNestedOneWithoutBorrowRecordsInput = {
    create?: XOR<bookCreateWithoutBorrowRecordsInput, bookUncheckedCreateWithoutBorrowRecordsInput>
    connectOrCreate?: bookCreateOrConnectWithoutBorrowRecordsInput
    connect?: bookWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type memberUpdateOneRequiredWithoutBorrowRecordsNestedInput = {
    create?: XOR<memberCreateWithoutBorrowRecordsInput, memberUncheckedCreateWithoutBorrowRecordsInput>
    connectOrCreate?: memberCreateOrConnectWithoutBorrowRecordsInput
    upsert?: memberUpsertWithoutBorrowRecordsInput
    connect?: memberWhereUniqueInput
    update?: XOR<XOR<memberUpdateToOneWithWhereWithoutBorrowRecordsInput, memberUpdateWithoutBorrowRecordsInput>, memberUncheckedUpdateWithoutBorrowRecordsInput>
  }

  export type bookUpdateOneRequiredWithoutBorrowRecordsNestedInput = {
    create?: XOR<bookCreateWithoutBorrowRecordsInput, bookUncheckedCreateWithoutBorrowRecordsInput>
    connectOrCreate?: bookCreateOrConnectWithoutBorrowRecordsInput
    upsert?: bookUpsertWithoutBorrowRecordsInput
    connect?: bookWhereUniqueInput
    update?: XOR<XOR<bookUpdateToOneWithWhereWithoutBorrowRecordsInput, bookUpdateWithoutBorrowRecordsInput>, bookUncheckedUpdateWithoutBorrowRecordsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type bookCreateWithoutAuthorInput = {
    title: string
    isbn: string
    category: string
    borrowRecords?: borrowRecordCreateNestedManyWithoutBookInput
  }

  export type bookUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    isbn: string
    category: string
    borrowRecords?: borrowRecordUncheckedCreateNestedManyWithoutBookInput
  }

  export type bookCreateOrConnectWithoutAuthorInput = {
    where: bookWhereUniqueInput
    create: XOR<bookCreateWithoutAuthorInput, bookUncheckedCreateWithoutAuthorInput>
  }

  export type bookCreateManyAuthorInputEnvelope = {
    data: bookCreateManyAuthorInput | bookCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type bookUpsertWithWhereUniqueWithoutAuthorInput = {
    where: bookWhereUniqueInput
    update: XOR<bookUpdateWithoutAuthorInput, bookUncheckedUpdateWithoutAuthorInput>
    create: XOR<bookCreateWithoutAuthorInput, bookUncheckedCreateWithoutAuthorInput>
  }

  export type bookUpdateWithWhereUniqueWithoutAuthorInput = {
    where: bookWhereUniqueInput
    data: XOR<bookUpdateWithoutAuthorInput, bookUncheckedUpdateWithoutAuthorInput>
  }

  export type bookUpdateManyWithWhereWithoutAuthorInput = {
    where: bookScalarWhereInput
    data: XOR<bookUpdateManyMutationInput, bookUncheckedUpdateManyWithoutAuthorInput>
  }

  export type bookScalarWhereInput = {
    AND?: bookScalarWhereInput | bookScalarWhereInput[]
    OR?: bookScalarWhereInput[]
    NOT?: bookScalarWhereInput | bookScalarWhereInput[]
    id?: IntFilter<"book"> | number
    title?: StringFilter<"book"> | string
    isbn?: StringFilter<"book"> | string
    category?: StringFilter<"book"> | string
    authorId?: IntFilter<"book"> | number
  }

  export type authorCreateWithoutBooksInput = {
    name: string
    surname: string
    affiliation: string
  }

  export type authorUncheckedCreateWithoutBooksInput = {
    id?: number
    name: string
    surname: string
    affiliation: string
  }

  export type authorCreateOrConnectWithoutBooksInput = {
    where: authorWhereUniqueInput
    create: XOR<authorCreateWithoutBooksInput, authorUncheckedCreateWithoutBooksInput>
  }

  export type borrowRecordCreateWithoutBookInput = {
    borrowDate: Date | string
    dueDate: Date | string
    returnDate?: Date | string | null
    member: memberCreateNestedOneWithoutBorrowRecordsInput
  }

  export type borrowRecordUncheckedCreateWithoutBookInput = {
    id?: number
    memberId: number
    borrowDate: Date | string
    dueDate: Date | string
    returnDate?: Date | string | null
  }

  export type borrowRecordCreateOrConnectWithoutBookInput = {
    where: borrowRecordWhereUniqueInput
    create: XOR<borrowRecordCreateWithoutBookInput, borrowRecordUncheckedCreateWithoutBookInput>
  }

  export type borrowRecordCreateManyBookInputEnvelope = {
    data: borrowRecordCreateManyBookInput | borrowRecordCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type authorUpsertWithoutBooksInput = {
    update: XOR<authorUpdateWithoutBooksInput, authorUncheckedUpdateWithoutBooksInput>
    create: XOR<authorCreateWithoutBooksInput, authorUncheckedCreateWithoutBooksInput>
    where?: authorWhereInput
  }

  export type authorUpdateToOneWithWhereWithoutBooksInput = {
    where?: authorWhereInput
    data: XOR<authorUpdateWithoutBooksInput, authorUncheckedUpdateWithoutBooksInput>
  }

  export type authorUpdateWithoutBooksInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    affiliation?: StringFieldUpdateOperationsInput | string
  }

  export type authorUncheckedUpdateWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    affiliation?: StringFieldUpdateOperationsInput | string
  }

  export type borrowRecordUpsertWithWhereUniqueWithoutBookInput = {
    where: borrowRecordWhereUniqueInput
    update: XOR<borrowRecordUpdateWithoutBookInput, borrowRecordUncheckedUpdateWithoutBookInput>
    create: XOR<borrowRecordCreateWithoutBookInput, borrowRecordUncheckedCreateWithoutBookInput>
  }

  export type borrowRecordUpdateWithWhereUniqueWithoutBookInput = {
    where: borrowRecordWhereUniqueInput
    data: XOR<borrowRecordUpdateWithoutBookInput, borrowRecordUncheckedUpdateWithoutBookInput>
  }

  export type borrowRecordUpdateManyWithWhereWithoutBookInput = {
    where: borrowRecordScalarWhereInput
    data: XOR<borrowRecordUpdateManyMutationInput, borrowRecordUncheckedUpdateManyWithoutBookInput>
  }

  export type borrowRecordScalarWhereInput = {
    AND?: borrowRecordScalarWhereInput | borrowRecordScalarWhereInput[]
    OR?: borrowRecordScalarWhereInput[]
    NOT?: borrowRecordScalarWhereInput | borrowRecordScalarWhereInput[]
    id?: IntFilter<"borrowRecord"> | number
    memberId?: IntFilter<"borrowRecord"> | number
    bookId?: IntFilter<"borrowRecord"> | number
    borrowDate?: DateTimeFilter<"borrowRecord"> | Date | string
    dueDate?: DateTimeFilter<"borrowRecord"> | Date | string
    returnDate?: DateTimeNullableFilter<"borrowRecord"> | Date | string | null
  }

  export type borrowRecordCreateWithoutMemberInput = {
    borrowDate: Date | string
    dueDate: Date | string
    returnDate?: Date | string | null
    book: bookCreateNestedOneWithoutBorrowRecordsInput
  }

  export type borrowRecordUncheckedCreateWithoutMemberInput = {
    id?: number
    bookId: number
    borrowDate: Date | string
    dueDate: Date | string
    returnDate?: Date | string | null
  }

  export type borrowRecordCreateOrConnectWithoutMemberInput = {
    where: borrowRecordWhereUniqueInput
    create: XOR<borrowRecordCreateWithoutMemberInput, borrowRecordUncheckedCreateWithoutMemberInput>
  }

  export type borrowRecordCreateManyMemberInputEnvelope = {
    data: borrowRecordCreateManyMemberInput | borrowRecordCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type borrowRecordUpsertWithWhereUniqueWithoutMemberInput = {
    where: borrowRecordWhereUniqueInput
    update: XOR<borrowRecordUpdateWithoutMemberInput, borrowRecordUncheckedUpdateWithoutMemberInput>
    create: XOR<borrowRecordCreateWithoutMemberInput, borrowRecordUncheckedCreateWithoutMemberInput>
  }

  export type borrowRecordUpdateWithWhereUniqueWithoutMemberInput = {
    where: borrowRecordWhereUniqueInput
    data: XOR<borrowRecordUpdateWithoutMemberInput, borrowRecordUncheckedUpdateWithoutMemberInput>
  }

  export type borrowRecordUpdateManyWithWhereWithoutMemberInput = {
    where: borrowRecordScalarWhereInput
    data: XOR<borrowRecordUpdateManyMutationInput, borrowRecordUncheckedUpdateManyWithoutMemberInput>
  }

  export type memberCreateWithoutBorrowRecordsInput = {
    memberId: string
    name: string
    surname: string
    phone: string
  }

  export type memberUncheckedCreateWithoutBorrowRecordsInput = {
    id?: number
    memberId: string
    name: string
    surname: string
    phone: string
  }

  export type memberCreateOrConnectWithoutBorrowRecordsInput = {
    where: memberWhereUniqueInput
    create: XOR<memberCreateWithoutBorrowRecordsInput, memberUncheckedCreateWithoutBorrowRecordsInput>
  }

  export type bookCreateWithoutBorrowRecordsInput = {
    title: string
    isbn: string
    category: string
    author: authorCreateNestedOneWithoutBooksInput
  }

  export type bookUncheckedCreateWithoutBorrowRecordsInput = {
    id?: number
    title: string
    isbn: string
    category: string
    authorId: number
  }

  export type bookCreateOrConnectWithoutBorrowRecordsInput = {
    where: bookWhereUniqueInput
    create: XOR<bookCreateWithoutBorrowRecordsInput, bookUncheckedCreateWithoutBorrowRecordsInput>
  }

  export type memberUpsertWithoutBorrowRecordsInput = {
    update: XOR<memberUpdateWithoutBorrowRecordsInput, memberUncheckedUpdateWithoutBorrowRecordsInput>
    create: XOR<memberCreateWithoutBorrowRecordsInput, memberUncheckedCreateWithoutBorrowRecordsInput>
    where?: memberWhereInput
  }

  export type memberUpdateToOneWithWhereWithoutBorrowRecordsInput = {
    where?: memberWhereInput
    data: XOR<memberUpdateWithoutBorrowRecordsInput, memberUncheckedUpdateWithoutBorrowRecordsInput>
  }

  export type memberUpdateWithoutBorrowRecordsInput = {
    memberId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type memberUncheckedUpdateWithoutBorrowRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    memberId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type bookUpsertWithoutBorrowRecordsInput = {
    update: XOR<bookUpdateWithoutBorrowRecordsInput, bookUncheckedUpdateWithoutBorrowRecordsInput>
    create: XOR<bookCreateWithoutBorrowRecordsInput, bookUncheckedCreateWithoutBorrowRecordsInput>
    where?: bookWhereInput
  }

  export type bookUpdateToOneWithWhereWithoutBorrowRecordsInput = {
    where?: bookWhereInput
    data: XOR<bookUpdateWithoutBorrowRecordsInput, bookUncheckedUpdateWithoutBorrowRecordsInput>
  }

  export type bookUpdateWithoutBorrowRecordsInput = {
    title?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    author?: authorUpdateOneRequiredWithoutBooksNestedInput
  }

  export type bookUncheckedUpdateWithoutBorrowRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type bookCreateManyAuthorInput = {
    id?: number
    title: string
    isbn: string
    category: string
  }

  export type bookUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    borrowRecords?: borrowRecordUpdateManyWithoutBookNestedInput
  }

  export type bookUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    borrowRecords?: borrowRecordUncheckedUpdateManyWithoutBookNestedInput
  }

  export type bookUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
  }

  export type borrowRecordCreateManyBookInput = {
    id?: number
    memberId: number
    borrowDate: Date | string
    dueDate: Date | string
    returnDate?: Date | string | null
  }

  export type borrowRecordUpdateWithoutBookInput = {
    borrowDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: memberUpdateOneRequiredWithoutBorrowRecordsNestedInput
  }

  export type borrowRecordUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    borrowDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type borrowRecordUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    memberId?: IntFieldUpdateOperationsInput | number
    borrowDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type borrowRecordCreateManyMemberInput = {
    id?: number
    bookId: number
    borrowDate: Date | string
    dueDate: Date | string
    returnDate?: Date | string | null
  }

  export type borrowRecordUpdateWithoutMemberInput = {
    borrowDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    book?: bookUpdateOneRequiredWithoutBorrowRecordsNestedInput
  }

  export type borrowRecordUncheckedUpdateWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    borrowDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type borrowRecordUncheckedUpdateManyWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    borrowDate?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    returnDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AuthorCountOutputTypeDefaultArgs instead
     */
    export type AuthorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuthorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookCountOutputTypeDefaultArgs instead
     */
    export type BookCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MemberCountOutputTypeDefaultArgs instead
     */
    export type MemberCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MemberCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use authorDefaultArgs instead
     */
    export type authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = authorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use bookDefaultArgs instead
     */
    export type bookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = bookDefaultArgs<ExtArgs>
    /**
     * @deprecated Use memberDefaultArgs instead
     */
    export type memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = memberDefaultArgs<ExtArgs>
    /**
     * @deprecated Use borrowRecordDefaultArgs instead
     */
    export type borrowRecordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = borrowRecordDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}