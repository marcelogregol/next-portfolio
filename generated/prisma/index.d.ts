
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model about
 * 
 */
export type about = $Result.DefaultSelection<Prisma.$aboutPayload>
/**
 * Model abouthighlight
 * 
 */
export type abouthighlight = $Result.DefaultSelection<Prisma.$abouthighlightPayload>
/**
 * Model hero
 * 
 */
export type hero = $Result.DefaultSelection<Prisma.$heroPayload>
/**
 * Model skill
 * 
 */
export type skill = $Result.DefaultSelection<Prisma.$skillPayload>
/**
 * Model project
 * 
 */
export type project = $Result.DefaultSelection<Prisma.$projectPayload>
/**
 * Model contact
 * 
 */
export type contact = $Result.DefaultSelection<Prisma.$contactPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Abouts
 * const abouts = await prisma.about.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Abouts
   * const abouts = await prisma.about.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.about`: Exposes CRUD operations for the **about** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Abouts
    * const abouts = await prisma.about.findMany()
    * ```
    */
  get about(): Prisma.aboutDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.abouthighlight`: Exposes CRUD operations for the **abouthighlight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Abouthighlights
    * const abouthighlights = await prisma.abouthighlight.findMany()
    * ```
    */
  get abouthighlight(): Prisma.abouthighlightDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hero`: Exposes CRUD operations for the **hero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Heroes
    * const heroes = await prisma.hero.findMany()
    * ```
    */
  get hero(): Prisma.heroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.skillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.projectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.contactDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    about: 'about',
    abouthighlight: 'abouthighlight',
    hero: 'hero',
    skill: 'skill',
    project: 'project',
    contact: 'contact'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "about" | "abouthighlight" | "hero" | "skill" | "project" | "contact"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      about: {
        payload: Prisma.$aboutPayload<ExtArgs>
        fields: Prisma.aboutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.aboutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aboutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.aboutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aboutPayload>
          }
          findFirst: {
            args: Prisma.aboutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aboutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.aboutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aboutPayload>
          }
          findMany: {
            args: Prisma.aboutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aboutPayload>[]
          }
          create: {
            args: Prisma.aboutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aboutPayload>
          }
          createMany: {
            args: Prisma.aboutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.aboutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aboutPayload>
          }
          update: {
            args: Prisma.aboutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aboutPayload>
          }
          deleteMany: {
            args: Prisma.aboutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.aboutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.aboutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$aboutPayload>
          }
          aggregate: {
            args: Prisma.AboutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAbout>
          }
          groupBy: {
            args: Prisma.aboutGroupByArgs<ExtArgs>
            result: $Utils.Optional<AboutGroupByOutputType>[]
          }
          count: {
            args: Prisma.aboutCountArgs<ExtArgs>
            result: $Utils.Optional<AboutCountAggregateOutputType> | number
          }
        }
      }
      abouthighlight: {
        payload: Prisma.$abouthighlightPayload<ExtArgs>
        fields: Prisma.abouthighlightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.abouthighlightFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$abouthighlightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.abouthighlightFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$abouthighlightPayload>
          }
          findFirst: {
            args: Prisma.abouthighlightFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$abouthighlightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.abouthighlightFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$abouthighlightPayload>
          }
          findMany: {
            args: Prisma.abouthighlightFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$abouthighlightPayload>[]
          }
          create: {
            args: Prisma.abouthighlightCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$abouthighlightPayload>
          }
          createMany: {
            args: Prisma.abouthighlightCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.abouthighlightDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$abouthighlightPayload>
          }
          update: {
            args: Prisma.abouthighlightUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$abouthighlightPayload>
          }
          deleteMany: {
            args: Prisma.abouthighlightDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.abouthighlightUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.abouthighlightUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$abouthighlightPayload>
          }
          aggregate: {
            args: Prisma.AbouthighlightAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAbouthighlight>
          }
          groupBy: {
            args: Prisma.abouthighlightGroupByArgs<ExtArgs>
            result: $Utils.Optional<AbouthighlightGroupByOutputType>[]
          }
          count: {
            args: Prisma.abouthighlightCountArgs<ExtArgs>
            result: $Utils.Optional<AbouthighlightCountAggregateOutputType> | number
          }
        }
      }
      hero: {
        payload: Prisma.$heroPayload<ExtArgs>
        fields: Prisma.heroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.heroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$heroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.heroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$heroPayload>
          }
          findFirst: {
            args: Prisma.heroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$heroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.heroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$heroPayload>
          }
          findMany: {
            args: Prisma.heroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$heroPayload>[]
          }
          create: {
            args: Prisma.heroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$heroPayload>
          }
          createMany: {
            args: Prisma.heroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.heroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$heroPayload>
          }
          update: {
            args: Prisma.heroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$heroPayload>
          }
          deleteMany: {
            args: Prisma.heroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.heroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.heroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$heroPayload>
          }
          aggregate: {
            args: Prisma.HeroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHero>
          }
          groupBy: {
            args: Prisma.heroGroupByArgs<ExtArgs>
            result: $Utils.Optional<HeroGroupByOutputType>[]
          }
          count: {
            args: Prisma.heroCountArgs<ExtArgs>
            result: $Utils.Optional<HeroCountAggregateOutputType> | number
          }
        }
      }
      skill: {
        payload: Prisma.$skillPayload<ExtArgs>
        fields: Prisma.skillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.skillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.skillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          findFirst: {
            args: Prisma.skillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.skillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          findMany: {
            args: Prisma.skillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>[]
          }
          create: {
            args: Prisma.skillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          createMany: {
            args: Prisma.skillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.skillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          update: {
            args: Prisma.skillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          deleteMany: {
            args: Prisma.skillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.skillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.skillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.skillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.skillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      project: {
        payload: Prisma.$projectPayload<ExtArgs>
        fields: Prisma.projectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.projectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.projectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          findFirst: {
            args: Prisma.projectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.projectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          findMany: {
            args: Prisma.projectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>[]
          }
          create: {
            args: Prisma.projectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          createMany: {
            args: Prisma.projectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.projectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          update: {
            args: Prisma.projectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          deleteMany: {
            args: Prisma.projectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.projectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.projectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$projectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.projectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.projectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      contact: {
        payload: Prisma.$contactPayload<ExtArgs>
        fields: Prisma.contactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.contactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.contactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          findFirst: {
            args: Prisma.contactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.contactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          findMany: {
            args: Prisma.contactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload>[]
          }
          create: {
            args: Prisma.contactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          createMany: {
            args: Prisma.contactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.contactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          update: {
            args: Prisma.contactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          deleteMany: {
            args: Prisma.contactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.contactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.contactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$contactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.contactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.contactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    about?: aboutOmit
    abouthighlight?: abouthighlightOmit
    hero?: heroOmit
    skill?: skillOmit
    project?: projectOmit
    contact?: contactOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type AboutCountOutputType
   */

  export type AboutCountOutputType = {
    abouthighlight: number
  }

  export type AboutCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    abouthighlight?: boolean | AboutCountOutputTypeCountAbouthighlightArgs
  }

  // Custom InputTypes
  /**
   * AboutCountOutputType without action
   */
  export type AboutCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AboutCountOutputType
     */
    select?: AboutCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AboutCountOutputType without action
   */
  export type AboutCountOutputTypeCountAbouthighlightArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: abouthighlightWhereInput
  }


  /**
   * Models
   */

  /**
   * Model about
   */

  export type AggregateAbout = {
    _count: AboutCountAggregateOutputType | null
    _avg: AboutAvgAggregateOutputType | null
    _sum: AboutSumAggregateOutputType | null
    _min: AboutMinAggregateOutputType | null
    _max: AboutMaxAggregateOutputType | null
  }

  export type AboutAvgAggregateOutputType = {
    id: number | null
  }

  export type AboutSumAggregateOutputType = {
    id: number | null
  }

  export type AboutMinAggregateOutputType = {
    id: number | null
    title: string | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AboutMaxAggregateOutputType = {
    id: number | null
    title: string | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AboutCountAggregateOutputType = {
    id: number
    title: number
    text: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AboutAvgAggregateInputType = {
    id?: true
  }

  export type AboutSumAggregateInputType = {
    id?: true
  }

  export type AboutMinAggregateInputType = {
    id?: true
    title?: true
    text?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AboutMaxAggregateInputType = {
    id?: true
    title?: true
    text?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AboutCountAggregateInputType = {
    id?: true
    title?: true
    text?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AboutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which about to aggregate.
     */
    where?: aboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of abouts to fetch.
     */
    orderBy?: aboutOrderByWithRelationInput | aboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: aboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` abouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned abouts
    **/
    _count?: true | AboutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AboutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AboutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AboutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AboutMaxAggregateInputType
  }

  export type GetAboutAggregateType<T extends AboutAggregateArgs> = {
        [P in keyof T & keyof AggregateAbout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbout[P]>
      : GetScalarType<T[P], AggregateAbout[P]>
  }




  export type aboutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: aboutWhereInput
    orderBy?: aboutOrderByWithAggregationInput | aboutOrderByWithAggregationInput[]
    by: AboutScalarFieldEnum[] | AboutScalarFieldEnum
    having?: aboutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AboutCountAggregateInputType | true
    _avg?: AboutAvgAggregateInputType
    _sum?: AboutSumAggregateInputType
    _min?: AboutMinAggregateInputType
    _max?: AboutMaxAggregateInputType
  }

  export type AboutGroupByOutputType = {
    id: number
    title: string
    text: string
    createdAt: Date
    updatedAt: Date
    _count: AboutCountAggregateOutputType | null
    _avg: AboutAvgAggregateOutputType | null
    _sum: AboutSumAggregateOutputType | null
    _min: AboutMinAggregateOutputType | null
    _max: AboutMaxAggregateOutputType | null
  }

  type GetAboutGroupByPayload<T extends aboutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AboutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AboutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutGroupByOutputType[P]>
            : GetScalarType<T[P], AboutGroupByOutputType[P]>
        }
      >
    >


  export type aboutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    abouthighlight?: boolean | about$abouthighlightArgs<ExtArgs>
    _count?: boolean | AboutCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["about"]>



  export type aboutSelectScalar = {
    id?: boolean
    title?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type aboutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "text" | "createdAt" | "updatedAt", ExtArgs["result"]["about"]>
  export type aboutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    abouthighlight?: boolean | about$abouthighlightArgs<ExtArgs>
    _count?: boolean | AboutCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $aboutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "about"
    objects: {
      abouthighlight: Prisma.$abouthighlightPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      text: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["about"]>
    composites: {}
  }

  type aboutGetPayload<S extends boolean | null | undefined | aboutDefaultArgs> = $Result.GetResult<Prisma.$aboutPayload, S>

  type aboutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<aboutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AboutCountAggregateInputType | true
    }

  export interface aboutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['about'], meta: { name: 'about' } }
    /**
     * Find zero or one About that matches the filter.
     * @param {aboutFindUniqueArgs} args - Arguments to find a About
     * @example
     * // Get one About
     * const about = await prisma.about.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends aboutFindUniqueArgs>(args: SelectSubset<T, aboutFindUniqueArgs<ExtArgs>>): Prisma__aboutClient<$Result.GetResult<Prisma.$aboutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one About that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {aboutFindUniqueOrThrowArgs} args - Arguments to find a About
     * @example
     * // Get one About
     * const about = await prisma.about.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends aboutFindUniqueOrThrowArgs>(args: SelectSubset<T, aboutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__aboutClient<$Result.GetResult<Prisma.$aboutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first About that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aboutFindFirstArgs} args - Arguments to find a About
     * @example
     * // Get one About
     * const about = await prisma.about.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends aboutFindFirstArgs>(args?: SelectSubset<T, aboutFindFirstArgs<ExtArgs>>): Prisma__aboutClient<$Result.GetResult<Prisma.$aboutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first About that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aboutFindFirstOrThrowArgs} args - Arguments to find a About
     * @example
     * // Get one About
     * const about = await prisma.about.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends aboutFindFirstOrThrowArgs>(args?: SelectSubset<T, aboutFindFirstOrThrowArgs<ExtArgs>>): Prisma__aboutClient<$Result.GetResult<Prisma.$aboutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Abouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aboutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Abouts
     * const abouts = await prisma.about.findMany()
     * 
     * // Get first 10 Abouts
     * const abouts = await prisma.about.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aboutWithIdOnly = await prisma.about.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends aboutFindManyArgs>(args?: SelectSubset<T, aboutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$aboutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a About.
     * @param {aboutCreateArgs} args - Arguments to create a About.
     * @example
     * // Create one About
     * const About = await prisma.about.create({
     *   data: {
     *     // ... data to create a About
     *   }
     * })
     * 
     */
    create<T extends aboutCreateArgs>(args: SelectSubset<T, aboutCreateArgs<ExtArgs>>): Prisma__aboutClient<$Result.GetResult<Prisma.$aboutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Abouts.
     * @param {aboutCreateManyArgs} args - Arguments to create many Abouts.
     * @example
     * // Create many Abouts
     * const about = await prisma.about.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends aboutCreateManyArgs>(args?: SelectSubset<T, aboutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a About.
     * @param {aboutDeleteArgs} args - Arguments to delete one About.
     * @example
     * // Delete one About
     * const About = await prisma.about.delete({
     *   where: {
     *     // ... filter to delete one About
     *   }
     * })
     * 
     */
    delete<T extends aboutDeleteArgs>(args: SelectSubset<T, aboutDeleteArgs<ExtArgs>>): Prisma__aboutClient<$Result.GetResult<Prisma.$aboutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one About.
     * @param {aboutUpdateArgs} args - Arguments to update one About.
     * @example
     * // Update one About
     * const about = await prisma.about.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends aboutUpdateArgs>(args: SelectSubset<T, aboutUpdateArgs<ExtArgs>>): Prisma__aboutClient<$Result.GetResult<Prisma.$aboutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Abouts.
     * @param {aboutDeleteManyArgs} args - Arguments to filter Abouts to delete.
     * @example
     * // Delete a few Abouts
     * const { count } = await prisma.about.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends aboutDeleteManyArgs>(args?: SelectSubset<T, aboutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Abouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aboutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Abouts
     * const about = await prisma.about.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends aboutUpdateManyArgs>(args: SelectSubset<T, aboutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one About.
     * @param {aboutUpsertArgs} args - Arguments to update or create a About.
     * @example
     * // Update or create a About
     * const about = await prisma.about.upsert({
     *   create: {
     *     // ... data to create a About
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the About we want to update
     *   }
     * })
     */
    upsert<T extends aboutUpsertArgs>(args: SelectSubset<T, aboutUpsertArgs<ExtArgs>>): Prisma__aboutClient<$Result.GetResult<Prisma.$aboutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Abouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aboutCountArgs} args - Arguments to filter Abouts to count.
     * @example
     * // Count the number of Abouts
     * const count = await prisma.about.count({
     *   where: {
     *     // ... the filter for the Abouts we want to count
     *   }
     * })
    **/
    count<T extends aboutCountArgs>(
      args?: Subset<T, aboutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AboutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a About.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AboutAggregateArgs>(args: Subset<T, AboutAggregateArgs>): Prisma.PrismaPromise<GetAboutAggregateType<T>>

    /**
     * Group by About.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aboutGroupByArgs} args - Group by arguments.
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
      T extends aboutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: aboutGroupByArgs['orderBy'] }
        : { orderBy?: aboutGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, aboutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAboutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the about model
   */
  readonly fields: aboutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for about.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__aboutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    abouthighlight<T extends about$abouthighlightArgs<ExtArgs> = {}>(args?: Subset<T, about$abouthighlightArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$abouthighlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the about model
   */
  interface aboutFieldRefs {
    readonly id: FieldRef<"about", 'Int'>
    readonly title: FieldRef<"about", 'String'>
    readonly text: FieldRef<"about", 'String'>
    readonly createdAt: FieldRef<"about", 'DateTime'>
    readonly updatedAt: FieldRef<"about", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * about findUnique
   */
  export type aboutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the about
     */
    select?: aboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the about
     */
    omit?: aboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aboutInclude<ExtArgs> | null
    /**
     * Filter, which about to fetch.
     */
    where: aboutWhereUniqueInput
  }

  /**
   * about findUniqueOrThrow
   */
  export type aboutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the about
     */
    select?: aboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the about
     */
    omit?: aboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aboutInclude<ExtArgs> | null
    /**
     * Filter, which about to fetch.
     */
    where: aboutWhereUniqueInput
  }

  /**
   * about findFirst
   */
  export type aboutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the about
     */
    select?: aboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the about
     */
    omit?: aboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aboutInclude<ExtArgs> | null
    /**
     * Filter, which about to fetch.
     */
    where?: aboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of abouts to fetch.
     */
    orderBy?: aboutOrderByWithRelationInput | aboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for abouts.
     */
    cursor?: aboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` abouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of abouts.
     */
    distinct?: AboutScalarFieldEnum | AboutScalarFieldEnum[]
  }

  /**
   * about findFirstOrThrow
   */
  export type aboutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the about
     */
    select?: aboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the about
     */
    omit?: aboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aboutInclude<ExtArgs> | null
    /**
     * Filter, which about to fetch.
     */
    where?: aboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of abouts to fetch.
     */
    orderBy?: aboutOrderByWithRelationInput | aboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for abouts.
     */
    cursor?: aboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` abouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of abouts.
     */
    distinct?: AboutScalarFieldEnum | AboutScalarFieldEnum[]
  }

  /**
   * about findMany
   */
  export type aboutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the about
     */
    select?: aboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the about
     */
    omit?: aboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aboutInclude<ExtArgs> | null
    /**
     * Filter, which abouts to fetch.
     */
    where?: aboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of abouts to fetch.
     */
    orderBy?: aboutOrderByWithRelationInput | aboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing abouts.
     */
    cursor?: aboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` abouts.
     */
    skip?: number
    distinct?: AboutScalarFieldEnum | AboutScalarFieldEnum[]
  }

  /**
   * about create
   */
  export type aboutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the about
     */
    select?: aboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the about
     */
    omit?: aboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aboutInclude<ExtArgs> | null
    /**
     * The data needed to create a about.
     */
    data: XOR<aboutCreateInput, aboutUncheckedCreateInput>
  }

  /**
   * about createMany
   */
  export type aboutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many abouts.
     */
    data: aboutCreateManyInput | aboutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * about update
   */
  export type aboutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the about
     */
    select?: aboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the about
     */
    omit?: aboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aboutInclude<ExtArgs> | null
    /**
     * The data needed to update a about.
     */
    data: XOR<aboutUpdateInput, aboutUncheckedUpdateInput>
    /**
     * Choose, which about to update.
     */
    where: aboutWhereUniqueInput
  }

  /**
   * about updateMany
   */
  export type aboutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update abouts.
     */
    data: XOR<aboutUpdateManyMutationInput, aboutUncheckedUpdateManyInput>
    /**
     * Filter which abouts to update
     */
    where?: aboutWhereInput
    /**
     * Limit how many abouts to update.
     */
    limit?: number
  }

  /**
   * about upsert
   */
  export type aboutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the about
     */
    select?: aboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the about
     */
    omit?: aboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aboutInclude<ExtArgs> | null
    /**
     * The filter to search for the about to update in case it exists.
     */
    where: aboutWhereUniqueInput
    /**
     * In case the about found by the `where` argument doesn't exist, create a new about with this data.
     */
    create: XOR<aboutCreateInput, aboutUncheckedCreateInput>
    /**
     * In case the about was found with the provided `where` argument, update it with this data.
     */
    update: XOR<aboutUpdateInput, aboutUncheckedUpdateInput>
  }

  /**
   * about delete
   */
  export type aboutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the about
     */
    select?: aboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the about
     */
    omit?: aboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aboutInclude<ExtArgs> | null
    /**
     * Filter which about to delete.
     */
    where: aboutWhereUniqueInput
  }

  /**
   * about deleteMany
   */
  export type aboutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which abouts to delete
     */
    where?: aboutWhereInput
    /**
     * Limit how many abouts to delete.
     */
    limit?: number
  }

  /**
   * about.abouthighlight
   */
  export type about$abouthighlightArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abouthighlight
     */
    select?: abouthighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the abouthighlight
     */
    omit?: abouthighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: abouthighlightInclude<ExtArgs> | null
    where?: abouthighlightWhereInput
    orderBy?: abouthighlightOrderByWithRelationInput | abouthighlightOrderByWithRelationInput[]
    cursor?: abouthighlightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbouthighlightScalarFieldEnum | AbouthighlightScalarFieldEnum[]
  }

  /**
   * about without action
   */
  export type aboutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the about
     */
    select?: aboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the about
     */
    omit?: aboutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: aboutInclude<ExtArgs> | null
  }


  /**
   * Model abouthighlight
   */

  export type AggregateAbouthighlight = {
    _count: AbouthighlightCountAggregateOutputType | null
    _avg: AbouthighlightAvgAggregateOutputType | null
    _sum: AbouthighlightSumAggregateOutputType | null
    _min: AbouthighlightMinAggregateOutputType | null
    _max: AbouthighlightMaxAggregateOutputType | null
  }

  export type AbouthighlightAvgAggregateOutputType = {
    id: number | null
    aboutId: number | null
  }

  export type AbouthighlightSumAggregateOutputType = {
    id: number | null
    aboutId: number | null
  }

  export type AbouthighlightMinAggregateOutputType = {
    id: number | null
    aboutId: number | null
    title: string | null
  }

  export type AbouthighlightMaxAggregateOutputType = {
    id: number | null
    aboutId: number | null
    title: string | null
  }

  export type AbouthighlightCountAggregateOutputType = {
    id: number
    aboutId: number
    title: number
    _all: number
  }


  export type AbouthighlightAvgAggregateInputType = {
    id?: true
    aboutId?: true
  }

  export type AbouthighlightSumAggregateInputType = {
    id?: true
    aboutId?: true
  }

  export type AbouthighlightMinAggregateInputType = {
    id?: true
    aboutId?: true
    title?: true
  }

  export type AbouthighlightMaxAggregateInputType = {
    id?: true
    aboutId?: true
    title?: true
  }

  export type AbouthighlightCountAggregateInputType = {
    id?: true
    aboutId?: true
    title?: true
    _all?: true
  }

  export type AbouthighlightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which abouthighlight to aggregate.
     */
    where?: abouthighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of abouthighlights to fetch.
     */
    orderBy?: abouthighlightOrderByWithRelationInput | abouthighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: abouthighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` abouthighlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` abouthighlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned abouthighlights
    **/
    _count?: true | AbouthighlightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AbouthighlightAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AbouthighlightSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AbouthighlightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AbouthighlightMaxAggregateInputType
  }

  export type GetAbouthighlightAggregateType<T extends AbouthighlightAggregateArgs> = {
        [P in keyof T & keyof AggregateAbouthighlight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbouthighlight[P]>
      : GetScalarType<T[P], AggregateAbouthighlight[P]>
  }




  export type abouthighlightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: abouthighlightWhereInput
    orderBy?: abouthighlightOrderByWithAggregationInput | abouthighlightOrderByWithAggregationInput[]
    by: AbouthighlightScalarFieldEnum[] | AbouthighlightScalarFieldEnum
    having?: abouthighlightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AbouthighlightCountAggregateInputType | true
    _avg?: AbouthighlightAvgAggregateInputType
    _sum?: AbouthighlightSumAggregateInputType
    _min?: AbouthighlightMinAggregateInputType
    _max?: AbouthighlightMaxAggregateInputType
  }

  export type AbouthighlightGroupByOutputType = {
    id: number
    aboutId: number
    title: string
    _count: AbouthighlightCountAggregateOutputType | null
    _avg: AbouthighlightAvgAggregateOutputType | null
    _sum: AbouthighlightSumAggregateOutputType | null
    _min: AbouthighlightMinAggregateOutputType | null
    _max: AbouthighlightMaxAggregateOutputType | null
  }

  type GetAbouthighlightGroupByPayload<T extends abouthighlightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AbouthighlightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AbouthighlightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AbouthighlightGroupByOutputType[P]>
            : GetScalarType<T[P], AbouthighlightGroupByOutputType[P]>
        }
      >
    >


  export type abouthighlightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    aboutId?: boolean
    title?: boolean
    about?: boolean | aboutDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["abouthighlight"]>



  export type abouthighlightSelectScalar = {
    id?: boolean
    aboutId?: boolean
    title?: boolean
  }

  export type abouthighlightOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "aboutId" | "title", ExtArgs["result"]["abouthighlight"]>
  export type abouthighlightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    about?: boolean | aboutDefaultArgs<ExtArgs>
  }

  export type $abouthighlightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "abouthighlight"
    objects: {
      about: Prisma.$aboutPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      aboutId: number
      title: string
    }, ExtArgs["result"]["abouthighlight"]>
    composites: {}
  }

  type abouthighlightGetPayload<S extends boolean | null | undefined | abouthighlightDefaultArgs> = $Result.GetResult<Prisma.$abouthighlightPayload, S>

  type abouthighlightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<abouthighlightFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AbouthighlightCountAggregateInputType | true
    }

  export interface abouthighlightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['abouthighlight'], meta: { name: 'abouthighlight' } }
    /**
     * Find zero or one Abouthighlight that matches the filter.
     * @param {abouthighlightFindUniqueArgs} args - Arguments to find a Abouthighlight
     * @example
     * // Get one Abouthighlight
     * const abouthighlight = await prisma.abouthighlight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends abouthighlightFindUniqueArgs>(args: SelectSubset<T, abouthighlightFindUniqueArgs<ExtArgs>>): Prisma__abouthighlightClient<$Result.GetResult<Prisma.$abouthighlightPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Abouthighlight that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {abouthighlightFindUniqueOrThrowArgs} args - Arguments to find a Abouthighlight
     * @example
     * // Get one Abouthighlight
     * const abouthighlight = await prisma.abouthighlight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends abouthighlightFindUniqueOrThrowArgs>(args: SelectSubset<T, abouthighlightFindUniqueOrThrowArgs<ExtArgs>>): Prisma__abouthighlightClient<$Result.GetResult<Prisma.$abouthighlightPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Abouthighlight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {abouthighlightFindFirstArgs} args - Arguments to find a Abouthighlight
     * @example
     * // Get one Abouthighlight
     * const abouthighlight = await prisma.abouthighlight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends abouthighlightFindFirstArgs>(args?: SelectSubset<T, abouthighlightFindFirstArgs<ExtArgs>>): Prisma__abouthighlightClient<$Result.GetResult<Prisma.$abouthighlightPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Abouthighlight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {abouthighlightFindFirstOrThrowArgs} args - Arguments to find a Abouthighlight
     * @example
     * // Get one Abouthighlight
     * const abouthighlight = await prisma.abouthighlight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends abouthighlightFindFirstOrThrowArgs>(args?: SelectSubset<T, abouthighlightFindFirstOrThrowArgs<ExtArgs>>): Prisma__abouthighlightClient<$Result.GetResult<Prisma.$abouthighlightPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Abouthighlights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {abouthighlightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Abouthighlights
     * const abouthighlights = await prisma.abouthighlight.findMany()
     * 
     * // Get first 10 Abouthighlights
     * const abouthighlights = await prisma.abouthighlight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const abouthighlightWithIdOnly = await prisma.abouthighlight.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends abouthighlightFindManyArgs>(args?: SelectSubset<T, abouthighlightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$abouthighlightPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Abouthighlight.
     * @param {abouthighlightCreateArgs} args - Arguments to create a Abouthighlight.
     * @example
     * // Create one Abouthighlight
     * const Abouthighlight = await prisma.abouthighlight.create({
     *   data: {
     *     // ... data to create a Abouthighlight
     *   }
     * })
     * 
     */
    create<T extends abouthighlightCreateArgs>(args: SelectSubset<T, abouthighlightCreateArgs<ExtArgs>>): Prisma__abouthighlightClient<$Result.GetResult<Prisma.$abouthighlightPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Abouthighlights.
     * @param {abouthighlightCreateManyArgs} args - Arguments to create many Abouthighlights.
     * @example
     * // Create many Abouthighlights
     * const abouthighlight = await prisma.abouthighlight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends abouthighlightCreateManyArgs>(args?: SelectSubset<T, abouthighlightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Abouthighlight.
     * @param {abouthighlightDeleteArgs} args - Arguments to delete one Abouthighlight.
     * @example
     * // Delete one Abouthighlight
     * const Abouthighlight = await prisma.abouthighlight.delete({
     *   where: {
     *     // ... filter to delete one Abouthighlight
     *   }
     * })
     * 
     */
    delete<T extends abouthighlightDeleteArgs>(args: SelectSubset<T, abouthighlightDeleteArgs<ExtArgs>>): Prisma__abouthighlightClient<$Result.GetResult<Prisma.$abouthighlightPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Abouthighlight.
     * @param {abouthighlightUpdateArgs} args - Arguments to update one Abouthighlight.
     * @example
     * // Update one Abouthighlight
     * const abouthighlight = await prisma.abouthighlight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends abouthighlightUpdateArgs>(args: SelectSubset<T, abouthighlightUpdateArgs<ExtArgs>>): Prisma__abouthighlightClient<$Result.GetResult<Prisma.$abouthighlightPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Abouthighlights.
     * @param {abouthighlightDeleteManyArgs} args - Arguments to filter Abouthighlights to delete.
     * @example
     * // Delete a few Abouthighlights
     * const { count } = await prisma.abouthighlight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends abouthighlightDeleteManyArgs>(args?: SelectSubset<T, abouthighlightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Abouthighlights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {abouthighlightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Abouthighlights
     * const abouthighlight = await prisma.abouthighlight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends abouthighlightUpdateManyArgs>(args: SelectSubset<T, abouthighlightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Abouthighlight.
     * @param {abouthighlightUpsertArgs} args - Arguments to update or create a Abouthighlight.
     * @example
     * // Update or create a Abouthighlight
     * const abouthighlight = await prisma.abouthighlight.upsert({
     *   create: {
     *     // ... data to create a Abouthighlight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Abouthighlight we want to update
     *   }
     * })
     */
    upsert<T extends abouthighlightUpsertArgs>(args: SelectSubset<T, abouthighlightUpsertArgs<ExtArgs>>): Prisma__abouthighlightClient<$Result.GetResult<Prisma.$abouthighlightPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Abouthighlights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {abouthighlightCountArgs} args - Arguments to filter Abouthighlights to count.
     * @example
     * // Count the number of Abouthighlights
     * const count = await prisma.abouthighlight.count({
     *   where: {
     *     // ... the filter for the Abouthighlights we want to count
     *   }
     * })
    **/
    count<T extends abouthighlightCountArgs>(
      args?: Subset<T, abouthighlightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AbouthighlightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Abouthighlight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbouthighlightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AbouthighlightAggregateArgs>(args: Subset<T, AbouthighlightAggregateArgs>): Prisma.PrismaPromise<GetAbouthighlightAggregateType<T>>

    /**
     * Group by Abouthighlight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {abouthighlightGroupByArgs} args - Group by arguments.
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
      T extends abouthighlightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: abouthighlightGroupByArgs['orderBy'] }
        : { orderBy?: abouthighlightGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, abouthighlightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAbouthighlightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the abouthighlight model
   */
  readonly fields: abouthighlightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for abouthighlight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__abouthighlightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    about<T extends aboutDefaultArgs<ExtArgs> = {}>(args?: Subset<T, aboutDefaultArgs<ExtArgs>>): Prisma__aboutClient<$Result.GetResult<Prisma.$aboutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the abouthighlight model
   */
  interface abouthighlightFieldRefs {
    readonly id: FieldRef<"abouthighlight", 'Int'>
    readonly aboutId: FieldRef<"abouthighlight", 'Int'>
    readonly title: FieldRef<"abouthighlight", 'String'>
  }
    

  // Custom InputTypes
  /**
   * abouthighlight findUnique
   */
  export type abouthighlightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abouthighlight
     */
    select?: abouthighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the abouthighlight
     */
    omit?: abouthighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: abouthighlightInclude<ExtArgs> | null
    /**
     * Filter, which abouthighlight to fetch.
     */
    where: abouthighlightWhereUniqueInput
  }

  /**
   * abouthighlight findUniqueOrThrow
   */
  export type abouthighlightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abouthighlight
     */
    select?: abouthighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the abouthighlight
     */
    omit?: abouthighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: abouthighlightInclude<ExtArgs> | null
    /**
     * Filter, which abouthighlight to fetch.
     */
    where: abouthighlightWhereUniqueInput
  }

  /**
   * abouthighlight findFirst
   */
  export type abouthighlightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abouthighlight
     */
    select?: abouthighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the abouthighlight
     */
    omit?: abouthighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: abouthighlightInclude<ExtArgs> | null
    /**
     * Filter, which abouthighlight to fetch.
     */
    where?: abouthighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of abouthighlights to fetch.
     */
    orderBy?: abouthighlightOrderByWithRelationInput | abouthighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for abouthighlights.
     */
    cursor?: abouthighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` abouthighlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` abouthighlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of abouthighlights.
     */
    distinct?: AbouthighlightScalarFieldEnum | AbouthighlightScalarFieldEnum[]
  }

  /**
   * abouthighlight findFirstOrThrow
   */
  export type abouthighlightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abouthighlight
     */
    select?: abouthighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the abouthighlight
     */
    omit?: abouthighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: abouthighlightInclude<ExtArgs> | null
    /**
     * Filter, which abouthighlight to fetch.
     */
    where?: abouthighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of abouthighlights to fetch.
     */
    orderBy?: abouthighlightOrderByWithRelationInput | abouthighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for abouthighlights.
     */
    cursor?: abouthighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` abouthighlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` abouthighlights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of abouthighlights.
     */
    distinct?: AbouthighlightScalarFieldEnum | AbouthighlightScalarFieldEnum[]
  }

  /**
   * abouthighlight findMany
   */
  export type abouthighlightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abouthighlight
     */
    select?: abouthighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the abouthighlight
     */
    omit?: abouthighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: abouthighlightInclude<ExtArgs> | null
    /**
     * Filter, which abouthighlights to fetch.
     */
    where?: abouthighlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of abouthighlights to fetch.
     */
    orderBy?: abouthighlightOrderByWithRelationInput | abouthighlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing abouthighlights.
     */
    cursor?: abouthighlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` abouthighlights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` abouthighlights.
     */
    skip?: number
    distinct?: AbouthighlightScalarFieldEnum | AbouthighlightScalarFieldEnum[]
  }

  /**
   * abouthighlight create
   */
  export type abouthighlightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abouthighlight
     */
    select?: abouthighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the abouthighlight
     */
    omit?: abouthighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: abouthighlightInclude<ExtArgs> | null
    /**
     * The data needed to create a abouthighlight.
     */
    data: XOR<abouthighlightCreateInput, abouthighlightUncheckedCreateInput>
  }

  /**
   * abouthighlight createMany
   */
  export type abouthighlightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many abouthighlights.
     */
    data: abouthighlightCreateManyInput | abouthighlightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * abouthighlight update
   */
  export type abouthighlightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abouthighlight
     */
    select?: abouthighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the abouthighlight
     */
    omit?: abouthighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: abouthighlightInclude<ExtArgs> | null
    /**
     * The data needed to update a abouthighlight.
     */
    data: XOR<abouthighlightUpdateInput, abouthighlightUncheckedUpdateInput>
    /**
     * Choose, which abouthighlight to update.
     */
    where: abouthighlightWhereUniqueInput
  }

  /**
   * abouthighlight updateMany
   */
  export type abouthighlightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update abouthighlights.
     */
    data: XOR<abouthighlightUpdateManyMutationInput, abouthighlightUncheckedUpdateManyInput>
    /**
     * Filter which abouthighlights to update
     */
    where?: abouthighlightWhereInput
    /**
     * Limit how many abouthighlights to update.
     */
    limit?: number
  }

  /**
   * abouthighlight upsert
   */
  export type abouthighlightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abouthighlight
     */
    select?: abouthighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the abouthighlight
     */
    omit?: abouthighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: abouthighlightInclude<ExtArgs> | null
    /**
     * The filter to search for the abouthighlight to update in case it exists.
     */
    where: abouthighlightWhereUniqueInput
    /**
     * In case the abouthighlight found by the `where` argument doesn't exist, create a new abouthighlight with this data.
     */
    create: XOR<abouthighlightCreateInput, abouthighlightUncheckedCreateInput>
    /**
     * In case the abouthighlight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<abouthighlightUpdateInput, abouthighlightUncheckedUpdateInput>
  }

  /**
   * abouthighlight delete
   */
  export type abouthighlightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abouthighlight
     */
    select?: abouthighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the abouthighlight
     */
    omit?: abouthighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: abouthighlightInclude<ExtArgs> | null
    /**
     * Filter which abouthighlight to delete.
     */
    where: abouthighlightWhereUniqueInput
  }

  /**
   * abouthighlight deleteMany
   */
  export type abouthighlightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which abouthighlights to delete
     */
    where?: abouthighlightWhereInput
    /**
     * Limit how many abouthighlights to delete.
     */
    limit?: number
  }

  /**
   * abouthighlight without action
   */
  export type abouthighlightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the abouthighlight
     */
    select?: abouthighlightSelect<ExtArgs> | null
    /**
     * Omit specific fields from the abouthighlight
     */
    omit?: abouthighlightOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: abouthighlightInclude<ExtArgs> | null
  }


  /**
   * Model hero
   */

  export type AggregateHero = {
    _count: HeroCountAggregateOutputType | null
    _avg: HeroAvgAggregateOutputType | null
    _sum: HeroSumAggregateOutputType | null
    _min: HeroMinAggregateOutputType | null
    _max: HeroMaxAggregateOutputType | null
  }

  export type HeroAvgAggregateOutputType = {
    id: number | null
  }

  export type HeroSumAggregateOutputType = {
    id: number | null
  }

  export type HeroMinAggregateOutputType = {
    id: number | null
    greeting: string | null
    title: string | null
    subtitle: string | null
    cta1Text: string | null
    cta1Href: string | null
    cta2Text: string | null
    cta2Href: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HeroMaxAggregateOutputType = {
    id: number | null
    greeting: string | null
    title: string | null
    subtitle: string | null
    cta1Text: string | null
    cta1Href: string | null
    cta2Text: string | null
    cta2Href: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HeroCountAggregateOutputType = {
    id: number
    greeting: number
    title: number
    subtitle: number
    cta1Text: number
    cta1Href: number
    cta2Text: number
    cta2Href: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HeroAvgAggregateInputType = {
    id?: true
  }

  export type HeroSumAggregateInputType = {
    id?: true
  }

  export type HeroMinAggregateInputType = {
    id?: true
    greeting?: true
    title?: true
    subtitle?: true
    cta1Text?: true
    cta1Href?: true
    cta2Text?: true
    cta2Href?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HeroMaxAggregateInputType = {
    id?: true
    greeting?: true
    title?: true
    subtitle?: true
    cta1Text?: true
    cta1Href?: true
    cta2Text?: true
    cta2Href?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HeroCountAggregateInputType = {
    id?: true
    greeting?: true
    title?: true
    subtitle?: true
    cta1Text?: true
    cta1Href?: true
    cta2Text?: true
    cta2Href?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HeroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hero to aggregate.
     */
    where?: heroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of heroes to fetch.
     */
    orderBy?: heroOrderByWithRelationInput | heroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: heroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` heroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` heroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned heroes
    **/
    _count?: true | HeroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HeroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HeroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeroMaxAggregateInputType
  }

  export type GetHeroAggregateType<T extends HeroAggregateArgs> = {
        [P in keyof T & keyof AggregateHero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHero[P]>
      : GetScalarType<T[P], AggregateHero[P]>
  }




  export type heroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: heroWhereInput
    orderBy?: heroOrderByWithAggregationInput | heroOrderByWithAggregationInput[]
    by: HeroScalarFieldEnum[] | HeroScalarFieldEnum
    having?: heroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeroCountAggregateInputType | true
    _avg?: HeroAvgAggregateInputType
    _sum?: HeroSumAggregateInputType
    _min?: HeroMinAggregateInputType
    _max?: HeroMaxAggregateInputType
  }

  export type HeroGroupByOutputType = {
    id: number
    greeting: string
    title: string
    subtitle: string
    cta1Text: string
    cta1Href: string
    cta2Text: string
    cta2Href: string
    createdAt: Date
    updatedAt: Date
    _count: HeroCountAggregateOutputType | null
    _avg: HeroAvgAggregateOutputType | null
    _sum: HeroSumAggregateOutputType | null
    _min: HeroMinAggregateOutputType | null
    _max: HeroMaxAggregateOutputType | null
  }

  type GetHeroGroupByPayload<T extends heroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HeroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeroGroupByOutputType[P]>
            : GetScalarType<T[P], HeroGroupByOutputType[P]>
        }
      >
    >


  export type heroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    greeting?: boolean
    title?: boolean
    subtitle?: boolean
    cta1Text?: boolean
    cta1Href?: boolean
    cta2Text?: boolean
    cta2Href?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hero"]>



  export type heroSelectScalar = {
    id?: boolean
    greeting?: boolean
    title?: boolean
    subtitle?: boolean
    cta1Text?: boolean
    cta1Href?: boolean
    cta2Text?: boolean
    cta2Href?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type heroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "greeting" | "title" | "subtitle" | "cta1Text" | "cta1Href" | "cta2Text" | "cta2Href" | "createdAt" | "updatedAt", ExtArgs["result"]["hero"]>

  export type $heroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hero"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      greeting: string
      title: string
      subtitle: string
      cta1Text: string
      cta1Href: string
      cta2Text: string
      cta2Href: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["hero"]>
    composites: {}
  }

  type heroGetPayload<S extends boolean | null | undefined | heroDefaultArgs> = $Result.GetResult<Prisma.$heroPayload, S>

  type heroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<heroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HeroCountAggregateInputType | true
    }

  export interface heroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hero'], meta: { name: 'hero' } }
    /**
     * Find zero or one Hero that matches the filter.
     * @param {heroFindUniqueArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends heroFindUniqueArgs>(args: SelectSubset<T, heroFindUniqueArgs<ExtArgs>>): Prisma__heroClient<$Result.GetResult<Prisma.$heroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {heroFindUniqueOrThrowArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends heroFindUniqueOrThrowArgs>(args: SelectSubset<T, heroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__heroClient<$Result.GetResult<Prisma.$heroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {heroFindFirstArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends heroFindFirstArgs>(args?: SelectSubset<T, heroFindFirstArgs<ExtArgs>>): Prisma__heroClient<$Result.GetResult<Prisma.$heroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {heroFindFirstOrThrowArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends heroFindFirstOrThrowArgs>(args?: SelectSubset<T, heroFindFirstOrThrowArgs<ExtArgs>>): Prisma__heroClient<$Result.GetResult<Prisma.$heroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Heroes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {heroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Heroes
     * const heroes = await prisma.hero.findMany()
     * 
     * // Get first 10 Heroes
     * const heroes = await prisma.hero.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const heroWithIdOnly = await prisma.hero.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends heroFindManyArgs>(args?: SelectSubset<T, heroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$heroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hero.
     * @param {heroCreateArgs} args - Arguments to create a Hero.
     * @example
     * // Create one Hero
     * const Hero = await prisma.hero.create({
     *   data: {
     *     // ... data to create a Hero
     *   }
     * })
     * 
     */
    create<T extends heroCreateArgs>(args: SelectSubset<T, heroCreateArgs<ExtArgs>>): Prisma__heroClient<$Result.GetResult<Prisma.$heroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Heroes.
     * @param {heroCreateManyArgs} args - Arguments to create many Heroes.
     * @example
     * // Create many Heroes
     * const hero = await prisma.hero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends heroCreateManyArgs>(args?: SelectSubset<T, heroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hero.
     * @param {heroDeleteArgs} args - Arguments to delete one Hero.
     * @example
     * // Delete one Hero
     * const Hero = await prisma.hero.delete({
     *   where: {
     *     // ... filter to delete one Hero
     *   }
     * })
     * 
     */
    delete<T extends heroDeleteArgs>(args: SelectSubset<T, heroDeleteArgs<ExtArgs>>): Prisma__heroClient<$Result.GetResult<Prisma.$heroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hero.
     * @param {heroUpdateArgs} args - Arguments to update one Hero.
     * @example
     * // Update one Hero
     * const hero = await prisma.hero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends heroUpdateArgs>(args: SelectSubset<T, heroUpdateArgs<ExtArgs>>): Prisma__heroClient<$Result.GetResult<Prisma.$heroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Heroes.
     * @param {heroDeleteManyArgs} args - Arguments to filter Heroes to delete.
     * @example
     * // Delete a few Heroes
     * const { count } = await prisma.hero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends heroDeleteManyArgs>(args?: SelectSubset<T, heroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Heroes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {heroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Heroes
     * const hero = await prisma.hero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends heroUpdateManyArgs>(args: SelectSubset<T, heroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hero.
     * @param {heroUpsertArgs} args - Arguments to update or create a Hero.
     * @example
     * // Update or create a Hero
     * const hero = await prisma.hero.upsert({
     *   create: {
     *     // ... data to create a Hero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hero we want to update
     *   }
     * })
     */
    upsert<T extends heroUpsertArgs>(args: SelectSubset<T, heroUpsertArgs<ExtArgs>>): Prisma__heroClient<$Result.GetResult<Prisma.$heroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Heroes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {heroCountArgs} args - Arguments to filter Heroes to count.
     * @example
     * // Count the number of Heroes
     * const count = await prisma.hero.count({
     *   where: {
     *     // ... the filter for the Heroes we want to count
     *   }
     * })
    **/
    count<T extends heroCountArgs>(
      args?: Subset<T, heroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HeroAggregateArgs>(args: Subset<T, HeroAggregateArgs>): Prisma.PrismaPromise<GetHeroAggregateType<T>>

    /**
     * Group by Hero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {heroGroupByArgs} args - Group by arguments.
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
      T extends heroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: heroGroupByArgs['orderBy'] }
        : { orderBy?: heroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, heroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hero model
   */
  readonly fields: heroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__heroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the hero model
   */
  interface heroFieldRefs {
    readonly id: FieldRef<"hero", 'Int'>
    readonly greeting: FieldRef<"hero", 'String'>
    readonly title: FieldRef<"hero", 'String'>
    readonly subtitle: FieldRef<"hero", 'String'>
    readonly cta1Text: FieldRef<"hero", 'String'>
    readonly cta1Href: FieldRef<"hero", 'String'>
    readonly cta2Text: FieldRef<"hero", 'String'>
    readonly cta2Href: FieldRef<"hero", 'String'>
    readonly createdAt: FieldRef<"hero", 'DateTime'>
    readonly updatedAt: FieldRef<"hero", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * hero findUnique
   */
  export type heroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null
    /**
     * Filter, which hero to fetch.
     */
    where: heroWhereUniqueInput
  }

  /**
   * hero findUniqueOrThrow
   */
  export type heroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null
    /**
     * Filter, which hero to fetch.
     */
    where: heroWhereUniqueInput
  }

  /**
   * hero findFirst
   */
  export type heroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null
    /**
     * Filter, which hero to fetch.
     */
    where?: heroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of heroes to fetch.
     */
    orderBy?: heroOrderByWithRelationInput | heroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for heroes.
     */
    cursor?: heroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` heroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` heroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of heroes.
     */
    distinct?: HeroScalarFieldEnum | HeroScalarFieldEnum[]
  }

  /**
   * hero findFirstOrThrow
   */
  export type heroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null
    /**
     * Filter, which hero to fetch.
     */
    where?: heroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of heroes to fetch.
     */
    orderBy?: heroOrderByWithRelationInput | heroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for heroes.
     */
    cursor?: heroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` heroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` heroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of heroes.
     */
    distinct?: HeroScalarFieldEnum | HeroScalarFieldEnum[]
  }

  /**
   * hero findMany
   */
  export type heroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null
    /**
     * Filter, which heroes to fetch.
     */
    where?: heroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of heroes to fetch.
     */
    orderBy?: heroOrderByWithRelationInput | heroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing heroes.
     */
    cursor?: heroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` heroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` heroes.
     */
    skip?: number
    distinct?: HeroScalarFieldEnum | HeroScalarFieldEnum[]
  }

  /**
   * hero create
   */
  export type heroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null
    /**
     * The data needed to create a hero.
     */
    data: XOR<heroCreateInput, heroUncheckedCreateInput>
  }

  /**
   * hero createMany
   */
  export type heroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many heroes.
     */
    data: heroCreateManyInput | heroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hero update
   */
  export type heroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null
    /**
     * The data needed to update a hero.
     */
    data: XOR<heroUpdateInput, heroUncheckedUpdateInput>
    /**
     * Choose, which hero to update.
     */
    where: heroWhereUniqueInput
  }

  /**
   * hero updateMany
   */
  export type heroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update heroes.
     */
    data: XOR<heroUpdateManyMutationInput, heroUncheckedUpdateManyInput>
    /**
     * Filter which heroes to update
     */
    where?: heroWhereInput
    /**
     * Limit how many heroes to update.
     */
    limit?: number
  }

  /**
   * hero upsert
   */
  export type heroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null
    /**
     * The filter to search for the hero to update in case it exists.
     */
    where: heroWhereUniqueInput
    /**
     * In case the hero found by the `where` argument doesn't exist, create a new hero with this data.
     */
    create: XOR<heroCreateInput, heroUncheckedCreateInput>
    /**
     * In case the hero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<heroUpdateInput, heroUncheckedUpdateInput>
  }

  /**
   * hero delete
   */
  export type heroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null
    /**
     * Filter which hero to delete.
     */
    where: heroWhereUniqueInput
  }

  /**
   * hero deleteMany
   */
  export type heroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which heroes to delete
     */
    where?: heroWhereInput
    /**
     * Limit how many heroes to delete.
     */
    limit?: number
  }

  /**
   * hero without action
   */
  export type heroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null
  }


  /**
   * Model skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillAvgAggregateOutputType = {
    id: number | null
    displayOrder: number | null
  }

  export type SkillSumAggregateOutputType = {
    id: number | null
    displayOrder: number | null
  }

  export type SkillMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    category: string | null
    level: string | null
    iconKey: string | null
    enabled: boolean | null
    displayOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    category: string | null
    level: string | null
    iconKey: string | null
    enabled: boolean | null
    displayOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    description: number
    category: number
    level: number
    iconKey: number
    enabled: number
    displayOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SkillAvgAggregateInputType = {
    id?: true
    displayOrder?: true
  }

  export type SkillSumAggregateInputType = {
    id?: true
    displayOrder?: true
  }

  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    level?: true
    iconKey?: true
    enabled?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    level?: true
    iconKey?: true
    enabled?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    level?: true
    iconKey?: true
    enabled?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skill to aggregate.
     */
    where?: skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type skillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skillWhereInput
    orderBy?: skillOrderByWithAggregationInput | skillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: skillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _avg?: SkillAvgAggregateInputType
    _sum?: SkillSumAggregateInputType
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: number
    name: string
    description: string
    category: string
    level: string | null
    iconKey: string | null
    enabled: boolean
    displayOrder: number
    createdAt: Date
    updatedAt: Date
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends skillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type skillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    level?: boolean
    iconKey?: boolean
    enabled?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skill"]>



  export type skillSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    level?: boolean
    iconKey?: boolean
    enabled?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type skillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "category" | "level" | "iconKey" | "enabled" | "displayOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["skill"]>

  export type $skillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "skill"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      category: string
      level: string | null
      iconKey: string | null
      enabled: boolean
      displayOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type skillGetPayload<S extends boolean | null | undefined | skillDefaultArgs> = $Result.GetResult<Prisma.$skillPayload, S>

  type skillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<skillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface skillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['skill'], meta: { name: 'skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {skillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends skillFindUniqueArgs>(args: SelectSubset<T, skillFindUniqueArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {skillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends skillFindUniqueOrThrowArgs>(args: SelectSubset<T, skillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends skillFindFirstArgs>(args?: SelectSubset<T, skillFindFirstArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends skillFindFirstOrThrowArgs>(args?: SelectSubset<T, skillFindFirstOrThrowArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends skillFindManyArgs>(args?: SelectSubset<T, skillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {skillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends skillCreateArgs>(args: SelectSubset<T, skillCreateArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {skillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends skillCreateManyArgs>(args?: SelectSubset<T, skillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Skill.
     * @param {skillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends skillDeleteArgs>(args: SelectSubset<T, skillDeleteArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {skillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends skillUpdateArgs>(args: SelectSubset<T, skillUpdateArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {skillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends skillDeleteManyArgs>(args?: SelectSubset<T, skillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends skillUpdateManyArgs>(args: SelectSubset<T, skillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Skill.
     * @param {skillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends skillUpsertArgs>(args: SelectSubset<T, skillUpsertArgs<ExtArgs>>): Prisma__skillClient<$Result.GetResult<Prisma.$skillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends skillCountArgs>(
      args?: Subset<T, skillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skillGroupByArgs} args - Group by arguments.
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
      T extends skillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: skillGroupByArgs['orderBy'] }
        : { orderBy?: skillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, skillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the skill model
   */
  readonly fields: skillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__skillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the skill model
   */
  interface skillFieldRefs {
    readonly id: FieldRef<"skill", 'Int'>
    readonly name: FieldRef<"skill", 'String'>
    readonly description: FieldRef<"skill", 'String'>
    readonly category: FieldRef<"skill", 'String'>
    readonly level: FieldRef<"skill", 'String'>
    readonly iconKey: FieldRef<"skill", 'String'>
    readonly enabled: FieldRef<"skill", 'Boolean'>
    readonly displayOrder: FieldRef<"skill", 'Int'>
    readonly createdAt: FieldRef<"skill", 'DateTime'>
    readonly updatedAt: FieldRef<"skill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * skill findUnique
   */
  export type skillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Filter, which skill to fetch.
     */
    where: skillWhereUniqueInput
  }

  /**
   * skill findUniqueOrThrow
   */
  export type skillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Filter, which skill to fetch.
     */
    where: skillWhereUniqueInput
  }

  /**
   * skill findFirst
   */
  export type skillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Filter, which skill to fetch.
     */
    where?: skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skills.
     */
    cursor?: skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * skill findFirstOrThrow
   */
  export type skillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Filter, which skill to fetch.
     */
    where?: skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skills.
     */
    cursor?: skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * skill findMany
   */
  export type skillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Filter, which skills to fetch.
     */
    where?: skillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skills to fetch.
     */
    orderBy?: skillOrderByWithRelationInput | skillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing skills.
     */
    cursor?: skillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * skill create
   */
  export type skillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * The data needed to create a skill.
     */
    data: XOR<skillCreateInput, skillUncheckedCreateInput>
  }

  /**
   * skill createMany
   */
  export type skillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many skills.
     */
    data: skillCreateManyInput | skillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * skill update
   */
  export type skillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * The data needed to update a skill.
     */
    data: XOR<skillUpdateInput, skillUncheckedUpdateInput>
    /**
     * Choose, which skill to update.
     */
    where: skillWhereUniqueInput
  }

  /**
   * skill updateMany
   */
  export type skillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update skills.
     */
    data: XOR<skillUpdateManyMutationInput, skillUncheckedUpdateManyInput>
    /**
     * Filter which skills to update
     */
    where?: skillWhereInput
    /**
     * Limit how many skills to update.
     */
    limit?: number
  }

  /**
   * skill upsert
   */
  export type skillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * The filter to search for the skill to update in case it exists.
     */
    where: skillWhereUniqueInput
    /**
     * In case the skill found by the `where` argument doesn't exist, create a new skill with this data.
     */
    create: XOR<skillCreateInput, skillUncheckedCreateInput>
    /**
     * In case the skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<skillUpdateInput, skillUncheckedUpdateInput>
  }

  /**
   * skill delete
   */
  export type skillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
    /**
     * Filter which skill to delete.
     */
    where: skillWhereUniqueInput
  }

  /**
   * skill deleteMany
   */
  export type skillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skills to delete
     */
    where?: skillWhereInput
    /**
     * Limit how many skills to delete.
     */
    limit?: number
  }

  /**
   * skill without action
   */
  export type skillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skill
     */
    select?: skillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skill
     */
    omit?: skillOmit<ExtArgs> | null
  }


  /**
   * Model project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
    displayOrder: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
    displayOrder: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    title: string | null
    shortDesc: string | null
    longDesc: string | null
    tagsJson: string | null
    imageUrl: string | null
    demoUrl: string | null
    codeUrl: string | null
    featured: boolean | null
    enabled: boolean | null
    displayOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    title: string | null
    shortDesc: string | null
    longDesc: string | null
    tagsJson: string | null
    imageUrl: string | null
    demoUrl: string | null
    codeUrl: string | null
    featured: boolean | null
    enabled: boolean | null
    displayOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    title: number
    shortDesc: number
    longDesc: number
    tagsJson: number
    imageUrl: number
    demoUrl: number
    codeUrl: number
    featured: number
    enabled: number
    displayOrder: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
    displayOrder?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
    displayOrder?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    title?: true
    shortDesc?: true
    longDesc?: true
    tagsJson?: true
    imageUrl?: true
    demoUrl?: true
    codeUrl?: true
    featured?: true
    enabled?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    title?: true
    shortDesc?: true
    longDesc?: true
    tagsJson?: true
    imageUrl?: true
    demoUrl?: true
    codeUrl?: true
    featured?: true
    enabled?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    title?: true
    shortDesc?: true
    longDesc?: true
    tagsJson?: true
    imageUrl?: true
    demoUrl?: true
    codeUrl?: true
    featured?: true
    enabled?: true
    displayOrder?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which project to aggregate.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type projectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: projectWhereInput
    orderBy?: projectOrderByWithAggregationInput | projectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: projectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    title: string
    shortDesc: string
    longDesc: string
    tagsJson: string | null
    imageUrl: string | null
    demoUrl: string | null
    codeUrl: string | null
    featured: boolean
    enabled: boolean
    displayOrder: number
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends projectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type projectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    shortDesc?: boolean
    longDesc?: boolean
    tagsJson?: boolean
    imageUrl?: boolean
    demoUrl?: boolean
    codeUrl?: boolean
    featured?: boolean
    enabled?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>



  export type projectSelectScalar = {
    id?: boolean
    title?: boolean
    shortDesc?: boolean
    longDesc?: boolean
    tagsJson?: boolean
    imageUrl?: boolean
    demoUrl?: boolean
    codeUrl?: boolean
    featured?: boolean
    enabled?: boolean
    displayOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type projectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "shortDesc" | "longDesc" | "tagsJson" | "imageUrl" | "demoUrl" | "codeUrl" | "featured" | "enabled" | "displayOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>

  export type $projectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "project"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      shortDesc: string
      longDesc: string
      tagsJson: string | null
      imageUrl: string | null
      demoUrl: string | null
      codeUrl: string | null
      featured: boolean
      enabled: boolean
      displayOrder: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type projectGetPayload<S extends boolean | null | undefined | projectDefaultArgs> = $Result.GetResult<Prisma.$projectPayload, S>

  type projectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<projectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface projectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['project'], meta: { name: 'project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {projectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends projectFindUniqueArgs>(args: SelectSubset<T, projectFindUniqueArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {projectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends projectFindUniqueOrThrowArgs>(args: SelectSubset<T, projectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends projectFindFirstArgs>(args?: SelectSubset<T, projectFindFirstArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends projectFindFirstOrThrowArgs>(args?: SelectSubset<T, projectFindFirstOrThrowArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends projectFindManyArgs>(args?: SelectSubset<T, projectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {projectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends projectCreateArgs>(args: SelectSubset<T, projectCreateArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {projectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends projectCreateManyArgs>(args?: SelectSubset<T, projectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Project.
     * @param {projectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends projectDeleteArgs>(args: SelectSubset<T, projectDeleteArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {projectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends projectUpdateArgs>(args: SelectSubset<T, projectUpdateArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {projectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends projectDeleteManyArgs>(args?: SelectSubset<T, projectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends projectUpdateManyArgs>(args: SelectSubset<T, projectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {projectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends projectUpsertArgs>(args: SelectSubset<T, projectUpsertArgs<ExtArgs>>): Prisma__projectClient<$Result.GetResult<Prisma.$projectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends projectCountArgs>(
      args?: Subset<T, projectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {projectGroupByArgs} args - Group by arguments.
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
      T extends projectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: projectGroupByArgs['orderBy'] }
        : { orderBy?: projectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, projectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the project model
   */
  readonly fields: projectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__projectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the project model
   */
  interface projectFieldRefs {
    readonly id: FieldRef<"project", 'Int'>
    readonly title: FieldRef<"project", 'String'>
    readonly shortDesc: FieldRef<"project", 'String'>
    readonly longDesc: FieldRef<"project", 'String'>
    readonly tagsJson: FieldRef<"project", 'String'>
    readonly imageUrl: FieldRef<"project", 'String'>
    readonly demoUrl: FieldRef<"project", 'String'>
    readonly codeUrl: FieldRef<"project", 'String'>
    readonly featured: FieldRef<"project", 'Boolean'>
    readonly enabled: FieldRef<"project", 'Boolean'>
    readonly displayOrder: FieldRef<"project", 'Int'>
    readonly createdAt: FieldRef<"project", 'DateTime'>
    readonly updatedAt: FieldRef<"project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * project findUnique
   */
  export type projectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project findUniqueOrThrow
   */
  export type projectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project findFirst
   */
  export type projectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project findFirstOrThrow
   */
  export type projectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Filter, which project to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project findMany
   */
  export type projectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Filter, which projects to fetch.
     */
    where?: projectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of projects to fetch.
     */
    orderBy?: projectOrderByWithRelationInput | projectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing projects.
     */
    cursor?: projectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * project create
   */
  export type projectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * The data needed to create a project.
     */
    data: XOR<projectCreateInput, projectUncheckedCreateInput>
  }

  /**
   * project createMany
   */
  export type projectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many projects.
     */
    data: projectCreateManyInput | projectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * project update
   */
  export type projectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * The data needed to update a project.
     */
    data: XOR<projectUpdateInput, projectUncheckedUpdateInput>
    /**
     * Choose, which project to update.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project updateMany
   */
  export type projectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update projects.
     */
    data: XOR<projectUpdateManyMutationInput, projectUncheckedUpdateManyInput>
    /**
     * Filter which projects to update
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to update.
     */
    limit?: number
  }

  /**
   * project upsert
   */
  export type projectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * The filter to search for the project to update in case it exists.
     */
    where: projectWhereUniqueInput
    /**
     * In case the project found by the `where` argument doesn't exist, create a new project with this data.
     */
    create: XOR<projectCreateInput, projectUncheckedCreateInput>
    /**
     * In case the project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<projectUpdateInput, projectUncheckedUpdateInput>
  }

  /**
   * project delete
   */
  export type projectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
    /**
     * Filter which project to delete.
     */
    where: projectWhereUniqueInput
  }

  /**
   * project deleteMany
   */
  export type projectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which projects to delete
     */
    where?: projectWhereInput
    /**
     * Limit how many projects to delete.
     */
    limit?: number
  }

  /**
   * project without action
   */
  export type projectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the project
     */
    select?: projectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the project
     */
    omit?: projectOmit<ExtArgs> | null
  }


  /**
   * Model contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactSumAggregateOutputType = {
    id: number | null
  }

  export type ContactMinAggregateOutputType = {
    id: number | null
    email: string | null
    whatsapp: string | null
    linkedin: string | null
    github: string | null
    ctaTitle: string | null
    ctaSubtitle: string | null
    ctaButtonText: string | null
    ctaButtonHref: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactMaxAggregateOutputType = {
    id: number | null
    email: string | null
    whatsapp: string | null
    linkedin: string | null
    github: string | null
    ctaTitle: string | null
    ctaSubtitle: string | null
    ctaButtonText: string | null
    ctaButtonHref: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    email: number
    whatsapp: number
    linkedin: number
    github: number
    ctaTitle: number
    ctaSubtitle: number
    ctaButtonText: number
    ctaButtonHref: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactAvgAggregateInputType = {
    id?: true
  }

  export type ContactSumAggregateInputType = {
    id?: true
  }

  export type ContactMinAggregateInputType = {
    id?: true
    email?: true
    whatsapp?: true
    linkedin?: true
    github?: true
    ctaTitle?: true
    ctaSubtitle?: true
    ctaButtonText?: true
    ctaButtonHref?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    email?: true
    whatsapp?: true
    linkedin?: true
    github?: true
    ctaTitle?: true
    ctaSubtitle?: true
    ctaButtonText?: true
    ctaButtonHref?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    email?: true
    whatsapp?: true
    linkedin?: true
    github?: true
    ctaTitle?: true
    ctaSubtitle?: true
    ctaButtonText?: true
    ctaButtonHref?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contact to aggregate.
     */
    where?: contactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactOrderByWithRelationInput | contactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: contactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type contactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contactWhereInput
    orderBy?: contactOrderByWithAggregationInput | contactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: contactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _avg?: ContactAvgAggregateInputType
    _sum?: ContactSumAggregateInputType
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: number
    email: string
    whatsapp: string
    linkedin: string
    github: string
    ctaTitle: string
    ctaSubtitle: string
    ctaButtonText: string
    ctaButtonHref: string
    createdAt: Date
    updatedAt: Date
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends contactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type contactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    whatsapp?: boolean
    linkedin?: boolean
    github?: boolean
    ctaTitle?: boolean
    ctaSubtitle?: boolean
    ctaButtonText?: boolean
    ctaButtonHref?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contact"]>



  export type contactSelectScalar = {
    id?: boolean
    email?: boolean
    whatsapp?: boolean
    linkedin?: boolean
    github?: boolean
    ctaTitle?: boolean
    ctaSubtitle?: boolean
    ctaButtonText?: boolean
    ctaButtonHref?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type contactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "whatsapp" | "linkedin" | "github" | "ctaTitle" | "ctaSubtitle" | "ctaButtonText" | "ctaButtonHref" | "createdAt" | "updatedAt", ExtArgs["result"]["contact"]>

  export type $contactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "contact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      whatsapp: string
      linkedin: string
      github: string
      ctaTitle: string
      ctaSubtitle: string
      ctaButtonText: string
      ctaButtonHref: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type contactGetPayload<S extends boolean | null | undefined | contactDefaultArgs> = $Result.GetResult<Prisma.$contactPayload, S>

  type contactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<contactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface contactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['contact'], meta: { name: 'contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {contactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends contactFindUniqueArgs>(args: SelectSubset<T, contactFindUniqueArgs<ExtArgs>>): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {contactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends contactFindUniqueOrThrowArgs>(args: SelectSubset<T, contactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends contactFindFirstArgs>(args?: SelectSubset<T, contactFindFirstArgs<ExtArgs>>): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends contactFindFirstOrThrowArgs>(args?: SelectSubset<T, contactFindFirstOrThrowArgs<ExtArgs>>): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends contactFindManyArgs>(args?: SelectSubset<T, contactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact.
     * @param {contactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends contactCreateArgs>(args: SelectSubset<T, contactCreateArgs<ExtArgs>>): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {contactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends contactCreateManyArgs>(args?: SelectSubset<T, contactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contact.
     * @param {contactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends contactDeleteArgs>(args: SelectSubset<T, contactDeleteArgs<ExtArgs>>): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact.
     * @param {contactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends contactUpdateArgs>(args: SelectSubset<T, contactUpdateArgs<ExtArgs>>): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {contactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends contactDeleteManyArgs>(args?: SelectSubset<T, contactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends contactUpdateManyArgs>(args: SelectSubset<T, contactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contact.
     * @param {contactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends contactUpsertArgs>(args: SelectSubset<T, contactUpsertArgs<ExtArgs>>): Prisma__contactClient<$Result.GetResult<Prisma.$contactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends contactCountArgs>(
      args?: Subset<T, contactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contactGroupByArgs} args - Group by arguments.
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
      T extends contactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contactGroupByArgs['orderBy'] }
        : { orderBy?: contactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, contactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the contact model
   */
  readonly fields: contactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the contact model
   */
  interface contactFieldRefs {
    readonly id: FieldRef<"contact", 'Int'>
    readonly email: FieldRef<"contact", 'String'>
    readonly whatsapp: FieldRef<"contact", 'String'>
    readonly linkedin: FieldRef<"contact", 'String'>
    readonly github: FieldRef<"contact", 'String'>
    readonly ctaTitle: FieldRef<"contact", 'String'>
    readonly ctaSubtitle: FieldRef<"contact", 'String'>
    readonly ctaButtonText: FieldRef<"contact", 'String'>
    readonly ctaButtonHref: FieldRef<"contact", 'String'>
    readonly createdAt: FieldRef<"contact", 'DateTime'>
    readonly updatedAt: FieldRef<"contact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * contact findUnique
   */
  export type contactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * Filter, which contact to fetch.
     */
    where: contactWhereUniqueInput
  }

  /**
   * contact findUniqueOrThrow
   */
  export type contactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * Filter, which contact to fetch.
     */
    where: contactWhereUniqueInput
  }

  /**
   * contact findFirst
   */
  export type contactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * Filter, which contact to fetch.
     */
    where?: contactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactOrderByWithRelationInput | contactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contacts.
     */
    cursor?: contactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * contact findFirstOrThrow
   */
  export type contactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * Filter, which contact to fetch.
     */
    where?: contactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactOrderByWithRelationInput | contactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contacts.
     */
    cursor?: contactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * contact findMany
   */
  export type contactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * Filter, which contacts to fetch.
     */
    where?: contactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contacts to fetch.
     */
    orderBy?: contactOrderByWithRelationInput | contactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing contacts.
     */
    cursor?: contactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * contact create
   */
  export type contactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * The data needed to create a contact.
     */
    data: XOR<contactCreateInput, contactUncheckedCreateInput>
  }

  /**
   * contact createMany
   */
  export type contactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contacts.
     */
    data: contactCreateManyInput | contactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contact update
   */
  export type contactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * The data needed to update a contact.
     */
    data: XOR<contactUpdateInput, contactUncheckedUpdateInput>
    /**
     * Choose, which contact to update.
     */
    where: contactWhereUniqueInput
  }

  /**
   * contact updateMany
   */
  export type contactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contacts.
     */
    data: XOR<contactUpdateManyMutationInput, contactUncheckedUpdateManyInput>
    /**
     * Filter which contacts to update
     */
    where?: contactWhereInput
    /**
     * Limit how many contacts to update.
     */
    limit?: number
  }

  /**
   * contact upsert
   */
  export type contactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * The filter to search for the contact to update in case it exists.
     */
    where: contactWhereUniqueInput
    /**
     * In case the contact found by the `where` argument doesn't exist, create a new contact with this data.
     */
    create: XOR<contactCreateInput, contactUncheckedCreateInput>
    /**
     * In case the contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contactUpdateInput, contactUncheckedUpdateInput>
  }

  /**
   * contact delete
   */
  export type contactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
    /**
     * Filter which contact to delete.
     */
    where: contactWhereUniqueInput
  }

  /**
   * contact deleteMany
   */
  export type contactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contacts to delete
     */
    where?: contactWhereInput
    /**
     * Limit how many contacts to delete.
     */
    limit?: number
  }

  /**
   * contact without action
   */
  export type contactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contact
     */
    select?: contactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the contact
     */
    omit?: contactOmit<ExtArgs> | null
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


  export const AboutScalarFieldEnum: {
    id: 'id',
    title: 'title',
    text: 'text',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AboutScalarFieldEnum = (typeof AboutScalarFieldEnum)[keyof typeof AboutScalarFieldEnum]


  export const AbouthighlightScalarFieldEnum: {
    id: 'id',
    aboutId: 'aboutId',
    title: 'title'
  };

  export type AbouthighlightScalarFieldEnum = (typeof AbouthighlightScalarFieldEnum)[keyof typeof AbouthighlightScalarFieldEnum]


  export const HeroScalarFieldEnum: {
    id: 'id',
    greeting: 'greeting',
    title: 'title',
    subtitle: 'subtitle',
    cta1Text: 'cta1Text',
    cta1Href: 'cta1Href',
    cta2Text: 'cta2Text',
    cta2Href: 'cta2Href',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HeroScalarFieldEnum = (typeof HeroScalarFieldEnum)[keyof typeof HeroScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    category: 'category',
    level: 'level',
    iconKey: 'iconKey',
    enabled: 'enabled',
    displayOrder: 'displayOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    title: 'title',
    shortDesc: 'shortDesc',
    longDesc: 'longDesc',
    tagsJson: 'tagsJson',
    imageUrl: 'imageUrl',
    demoUrl: 'demoUrl',
    codeUrl: 'codeUrl',
    featured: 'featured',
    enabled: 'enabled',
    displayOrder: 'displayOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    email: 'email',
    whatsapp: 'whatsapp',
    linkedin: 'linkedin',
    github: 'github',
    ctaTitle: 'ctaTitle',
    ctaSubtitle: 'ctaSubtitle',
    ctaButtonText: 'ctaButtonText',
    ctaButtonHref: 'ctaButtonHref',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const aboutOrderByRelevanceFieldEnum: {
    title: 'title',
    text: 'text'
  };

  export type aboutOrderByRelevanceFieldEnum = (typeof aboutOrderByRelevanceFieldEnum)[keyof typeof aboutOrderByRelevanceFieldEnum]


  export const abouthighlightOrderByRelevanceFieldEnum: {
    title: 'title'
  };

  export type abouthighlightOrderByRelevanceFieldEnum = (typeof abouthighlightOrderByRelevanceFieldEnum)[keyof typeof abouthighlightOrderByRelevanceFieldEnum]


  export const heroOrderByRelevanceFieldEnum: {
    greeting: 'greeting',
    title: 'title',
    subtitle: 'subtitle',
    cta1Text: 'cta1Text',
    cta1Href: 'cta1Href',
    cta2Text: 'cta2Text',
    cta2Href: 'cta2Href'
  };

  export type heroOrderByRelevanceFieldEnum = (typeof heroOrderByRelevanceFieldEnum)[keyof typeof heroOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const skillOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    category: 'category',
    level: 'level',
    iconKey: 'iconKey'
  };

  export type skillOrderByRelevanceFieldEnum = (typeof skillOrderByRelevanceFieldEnum)[keyof typeof skillOrderByRelevanceFieldEnum]


  export const projectOrderByRelevanceFieldEnum: {
    title: 'title',
    shortDesc: 'shortDesc',
    longDesc: 'longDesc',
    tagsJson: 'tagsJson',
    imageUrl: 'imageUrl',
    demoUrl: 'demoUrl',
    codeUrl: 'codeUrl'
  };

  export type projectOrderByRelevanceFieldEnum = (typeof projectOrderByRelevanceFieldEnum)[keyof typeof projectOrderByRelevanceFieldEnum]


  export const contactOrderByRelevanceFieldEnum: {
    email: 'email',
    whatsapp: 'whatsapp',
    linkedin: 'linkedin',
    github: 'github',
    ctaTitle: 'ctaTitle',
    ctaSubtitle: 'ctaSubtitle',
    ctaButtonText: 'ctaButtonText',
    ctaButtonHref: 'ctaButtonHref'
  };

  export type contactOrderByRelevanceFieldEnum = (typeof contactOrderByRelevanceFieldEnum)[keyof typeof contactOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type aboutWhereInput = {
    AND?: aboutWhereInput | aboutWhereInput[]
    OR?: aboutWhereInput[]
    NOT?: aboutWhereInput | aboutWhereInput[]
    id?: IntFilter<"about"> | number
    title?: StringFilter<"about"> | string
    text?: StringFilter<"about"> | string
    createdAt?: DateTimeFilter<"about"> | Date | string
    updatedAt?: DateTimeFilter<"about"> | Date | string
    abouthighlight?: AbouthighlightListRelationFilter
  }

  export type aboutOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    abouthighlight?: abouthighlightOrderByRelationAggregateInput
    _relevance?: aboutOrderByRelevanceInput
  }

  export type aboutWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: aboutWhereInput | aboutWhereInput[]
    OR?: aboutWhereInput[]
    NOT?: aboutWhereInput | aboutWhereInput[]
    title?: StringFilter<"about"> | string
    text?: StringFilter<"about"> | string
    createdAt?: DateTimeFilter<"about"> | Date | string
    updatedAt?: DateTimeFilter<"about"> | Date | string
    abouthighlight?: AbouthighlightListRelationFilter
  }, "id">

  export type aboutOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: aboutCountOrderByAggregateInput
    _avg?: aboutAvgOrderByAggregateInput
    _max?: aboutMaxOrderByAggregateInput
    _min?: aboutMinOrderByAggregateInput
    _sum?: aboutSumOrderByAggregateInput
  }

  export type aboutScalarWhereWithAggregatesInput = {
    AND?: aboutScalarWhereWithAggregatesInput | aboutScalarWhereWithAggregatesInput[]
    OR?: aboutScalarWhereWithAggregatesInput[]
    NOT?: aboutScalarWhereWithAggregatesInput | aboutScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"about"> | number
    title?: StringWithAggregatesFilter<"about"> | string
    text?: StringWithAggregatesFilter<"about"> | string
    createdAt?: DateTimeWithAggregatesFilter<"about"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"about"> | Date | string
  }

  export type abouthighlightWhereInput = {
    AND?: abouthighlightWhereInput | abouthighlightWhereInput[]
    OR?: abouthighlightWhereInput[]
    NOT?: abouthighlightWhereInput | abouthighlightWhereInput[]
    id?: IntFilter<"abouthighlight"> | number
    aboutId?: IntFilter<"abouthighlight"> | number
    title?: StringFilter<"abouthighlight"> | string
    about?: XOR<AboutScalarRelationFilter, aboutWhereInput>
  }

  export type abouthighlightOrderByWithRelationInput = {
    id?: SortOrder
    aboutId?: SortOrder
    title?: SortOrder
    about?: aboutOrderByWithRelationInput
    _relevance?: abouthighlightOrderByRelevanceInput
  }

  export type abouthighlightWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: abouthighlightWhereInput | abouthighlightWhereInput[]
    OR?: abouthighlightWhereInput[]
    NOT?: abouthighlightWhereInput | abouthighlightWhereInput[]
    aboutId?: IntFilter<"abouthighlight"> | number
    title?: StringFilter<"abouthighlight"> | string
    about?: XOR<AboutScalarRelationFilter, aboutWhereInput>
  }, "id">

  export type abouthighlightOrderByWithAggregationInput = {
    id?: SortOrder
    aboutId?: SortOrder
    title?: SortOrder
    _count?: abouthighlightCountOrderByAggregateInput
    _avg?: abouthighlightAvgOrderByAggregateInput
    _max?: abouthighlightMaxOrderByAggregateInput
    _min?: abouthighlightMinOrderByAggregateInput
    _sum?: abouthighlightSumOrderByAggregateInput
  }

  export type abouthighlightScalarWhereWithAggregatesInput = {
    AND?: abouthighlightScalarWhereWithAggregatesInput | abouthighlightScalarWhereWithAggregatesInput[]
    OR?: abouthighlightScalarWhereWithAggregatesInput[]
    NOT?: abouthighlightScalarWhereWithAggregatesInput | abouthighlightScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"abouthighlight"> | number
    aboutId?: IntWithAggregatesFilter<"abouthighlight"> | number
    title?: StringWithAggregatesFilter<"abouthighlight"> | string
  }

  export type heroWhereInput = {
    AND?: heroWhereInput | heroWhereInput[]
    OR?: heroWhereInput[]
    NOT?: heroWhereInput | heroWhereInput[]
    id?: IntFilter<"hero"> | number
    greeting?: StringFilter<"hero"> | string
    title?: StringFilter<"hero"> | string
    subtitle?: StringFilter<"hero"> | string
    cta1Text?: StringFilter<"hero"> | string
    cta1Href?: StringFilter<"hero"> | string
    cta2Text?: StringFilter<"hero"> | string
    cta2Href?: StringFilter<"hero"> | string
    createdAt?: DateTimeFilter<"hero"> | Date | string
    updatedAt?: DateTimeFilter<"hero"> | Date | string
  }

  export type heroOrderByWithRelationInput = {
    id?: SortOrder
    greeting?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    cta1Text?: SortOrder
    cta1Href?: SortOrder
    cta2Text?: SortOrder
    cta2Href?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: heroOrderByRelevanceInput
  }

  export type heroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: heroWhereInput | heroWhereInput[]
    OR?: heroWhereInput[]
    NOT?: heroWhereInput | heroWhereInput[]
    greeting?: StringFilter<"hero"> | string
    title?: StringFilter<"hero"> | string
    subtitle?: StringFilter<"hero"> | string
    cta1Text?: StringFilter<"hero"> | string
    cta1Href?: StringFilter<"hero"> | string
    cta2Text?: StringFilter<"hero"> | string
    cta2Href?: StringFilter<"hero"> | string
    createdAt?: DateTimeFilter<"hero"> | Date | string
    updatedAt?: DateTimeFilter<"hero"> | Date | string
  }, "id">

  export type heroOrderByWithAggregationInput = {
    id?: SortOrder
    greeting?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    cta1Text?: SortOrder
    cta1Href?: SortOrder
    cta2Text?: SortOrder
    cta2Href?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: heroCountOrderByAggregateInput
    _avg?: heroAvgOrderByAggregateInput
    _max?: heroMaxOrderByAggregateInput
    _min?: heroMinOrderByAggregateInput
    _sum?: heroSumOrderByAggregateInput
  }

  export type heroScalarWhereWithAggregatesInput = {
    AND?: heroScalarWhereWithAggregatesInput | heroScalarWhereWithAggregatesInput[]
    OR?: heroScalarWhereWithAggregatesInput[]
    NOT?: heroScalarWhereWithAggregatesInput | heroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"hero"> | number
    greeting?: StringWithAggregatesFilter<"hero"> | string
    title?: StringWithAggregatesFilter<"hero"> | string
    subtitle?: StringWithAggregatesFilter<"hero"> | string
    cta1Text?: StringWithAggregatesFilter<"hero"> | string
    cta1Href?: StringWithAggregatesFilter<"hero"> | string
    cta2Text?: StringWithAggregatesFilter<"hero"> | string
    cta2Href?: StringWithAggregatesFilter<"hero"> | string
    createdAt?: DateTimeWithAggregatesFilter<"hero"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"hero"> | Date | string
  }

  export type skillWhereInput = {
    AND?: skillWhereInput | skillWhereInput[]
    OR?: skillWhereInput[]
    NOT?: skillWhereInput | skillWhereInput[]
    id?: IntFilter<"skill"> | number
    name?: StringFilter<"skill"> | string
    description?: StringFilter<"skill"> | string
    category?: StringFilter<"skill"> | string
    level?: StringNullableFilter<"skill"> | string | null
    iconKey?: StringNullableFilter<"skill"> | string | null
    enabled?: BoolFilter<"skill"> | boolean
    displayOrder?: IntFilter<"skill"> | number
    createdAt?: DateTimeFilter<"skill"> | Date | string
    updatedAt?: DateTimeFilter<"skill"> | Date | string
  }

  export type skillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    level?: SortOrderInput | SortOrder
    iconKey?: SortOrderInput | SortOrder
    enabled?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: skillOrderByRelevanceInput
  }

  export type skillWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: skillWhereInput | skillWhereInput[]
    OR?: skillWhereInput[]
    NOT?: skillWhereInput | skillWhereInput[]
    name?: StringFilter<"skill"> | string
    description?: StringFilter<"skill"> | string
    category?: StringFilter<"skill"> | string
    level?: StringNullableFilter<"skill"> | string | null
    iconKey?: StringNullableFilter<"skill"> | string | null
    enabled?: BoolFilter<"skill"> | boolean
    displayOrder?: IntFilter<"skill"> | number
    createdAt?: DateTimeFilter<"skill"> | Date | string
    updatedAt?: DateTimeFilter<"skill"> | Date | string
  }, "id">

  export type skillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    level?: SortOrderInput | SortOrder
    iconKey?: SortOrderInput | SortOrder
    enabled?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: skillCountOrderByAggregateInput
    _avg?: skillAvgOrderByAggregateInput
    _max?: skillMaxOrderByAggregateInput
    _min?: skillMinOrderByAggregateInput
    _sum?: skillSumOrderByAggregateInput
  }

  export type skillScalarWhereWithAggregatesInput = {
    AND?: skillScalarWhereWithAggregatesInput | skillScalarWhereWithAggregatesInput[]
    OR?: skillScalarWhereWithAggregatesInput[]
    NOT?: skillScalarWhereWithAggregatesInput | skillScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"skill"> | number
    name?: StringWithAggregatesFilter<"skill"> | string
    description?: StringWithAggregatesFilter<"skill"> | string
    category?: StringWithAggregatesFilter<"skill"> | string
    level?: StringNullableWithAggregatesFilter<"skill"> | string | null
    iconKey?: StringNullableWithAggregatesFilter<"skill"> | string | null
    enabled?: BoolWithAggregatesFilter<"skill"> | boolean
    displayOrder?: IntWithAggregatesFilter<"skill"> | number
    createdAt?: DateTimeWithAggregatesFilter<"skill"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"skill"> | Date | string
  }

  export type projectWhereInput = {
    AND?: projectWhereInput | projectWhereInput[]
    OR?: projectWhereInput[]
    NOT?: projectWhereInput | projectWhereInput[]
    id?: IntFilter<"project"> | number
    title?: StringFilter<"project"> | string
    shortDesc?: StringFilter<"project"> | string
    longDesc?: StringFilter<"project"> | string
    tagsJson?: StringNullableFilter<"project"> | string | null
    imageUrl?: StringNullableFilter<"project"> | string | null
    demoUrl?: StringNullableFilter<"project"> | string | null
    codeUrl?: StringNullableFilter<"project"> | string | null
    featured?: BoolFilter<"project"> | boolean
    enabled?: BoolFilter<"project"> | boolean
    displayOrder?: IntFilter<"project"> | number
    createdAt?: DateTimeFilter<"project"> | Date | string
    updatedAt?: DateTimeFilter<"project"> | Date | string
  }

  export type projectOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    shortDesc?: SortOrder
    longDesc?: SortOrder
    tagsJson?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    demoUrl?: SortOrderInput | SortOrder
    codeUrl?: SortOrderInput | SortOrder
    featured?: SortOrder
    enabled?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: projectOrderByRelevanceInput
  }

  export type projectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: projectWhereInput | projectWhereInput[]
    OR?: projectWhereInput[]
    NOT?: projectWhereInput | projectWhereInput[]
    title?: StringFilter<"project"> | string
    shortDesc?: StringFilter<"project"> | string
    longDesc?: StringFilter<"project"> | string
    tagsJson?: StringNullableFilter<"project"> | string | null
    imageUrl?: StringNullableFilter<"project"> | string | null
    demoUrl?: StringNullableFilter<"project"> | string | null
    codeUrl?: StringNullableFilter<"project"> | string | null
    featured?: BoolFilter<"project"> | boolean
    enabled?: BoolFilter<"project"> | boolean
    displayOrder?: IntFilter<"project"> | number
    createdAt?: DateTimeFilter<"project"> | Date | string
    updatedAt?: DateTimeFilter<"project"> | Date | string
  }, "id">

  export type projectOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    shortDesc?: SortOrder
    longDesc?: SortOrder
    tagsJson?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    demoUrl?: SortOrderInput | SortOrder
    codeUrl?: SortOrderInput | SortOrder
    featured?: SortOrder
    enabled?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: projectCountOrderByAggregateInput
    _avg?: projectAvgOrderByAggregateInput
    _max?: projectMaxOrderByAggregateInput
    _min?: projectMinOrderByAggregateInput
    _sum?: projectSumOrderByAggregateInput
  }

  export type projectScalarWhereWithAggregatesInput = {
    AND?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[]
    OR?: projectScalarWhereWithAggregatesInput[]
    NOT?: projectScalarWhereWithAggregatesInput | projectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"project"> | number
    title?: StringWithAggregatesFilter<"project"> | string
    shortDesc?: StringWithAggregatesFilter<"project"> | string
    longDesc?: StringWithAggregatesFilter<"project"> | string
    tagsJson?: StringNullableWithAggregatesFilter<"project"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"project"> | string | null
    demoUrl?: StringNullableWithAggregatesFilter<"project"> | string | null
    codeUrl?: StringNullableWithAggregatesFilter<"project"> | string | null
    featured?: BoolWithAggregatesFilter<"project"> | boolean
    enabled?: BoolWithAggregatesFilter<"project"> | boolean
    displayOrder?: IntWithAggregatesFilter<"project"> | number
    createdAt?: DateTimeWithAggregatesFilter<"project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"project"> | Date | string
  }

  export type contactWhereInput = {
    AND?: contactWhereInput | contactWhereInput[]
    OR?: contactWhereInput[]
    NOT?: contactWhereInput | contactWhereInput[]
    id?: IntFilter<"contact"> | number
    email?: StringFilter<"contact"> | string
    whatsapp?: StringFilter<"contact"> | string
    linkedin?: StringFilter<"contact"> | string
    github?: StringFilter<"contact"> | string
    ctaTitle?: StringFilter<"contact"> | string
    ctaSubtitle?: StringFilter<"contact"> | string
    ctaButtonText?: StringFilter<"contact"> | string
    ctaButtonHref?: StringFilter<"contact"> | string
    createdAt?: DateTimeFilter<"contact"> | Date | string
    updatedAt?: DateTimeFilter<"contact"> | Date | string
  }

  export type contactOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    linkedin?: SortOrder
    github?: SortOrder
    ctaTitle?: SortOrder
    ctaSubtitle?: SortOrder
    ctaButtonText?: SortOrder
    ctaButtonHref?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: contactOrderByRelevanceInput
  }

  export type contactWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: contactWhereInput | contactWhereInput[]
    OR?: contactWhereInput[]
    NOT?: contactWhereInput | contactWhereInput[]
    email?: StringFilter<"contact"> | string
    whatsapp?: StringFilter<"contact"> | string
    linkedin?: StringFilter<"contact"> | string
    github?: StringFilter<"contact"> | string
    ctaTitle?: StringFilter<"contact"> | string
    ctaSubtitle?: StringFilter<"contact"> | string
    ctaButtonText?: StringFilter<"contact"> | string
    ctaButtonHref?: StringFilter<"contact"> | string
    createdAt?: DateTimeFilter<"contact"> | Date | string
    updatedAt?: DateTimeFilter<"contact"> | Date | string
  }, "id">

  export type contactOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    linkedin?: SortOrder
    github?: SortOrder
    ctaTitle?: SortOrder
    ctaSubtitle?: SortOrder
    ctaButtonText?: SortOrder
    ctaButtonHref?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: contactCountOrderByAggregateInput
    _avg?: contactAvgOrderByAggregateInput
    _max?: contactMaxOrderByAggregateInput
    _min?: contactMinOrderByAggregateInput
    _sum?: contactSumOrderByAggregateInput
  }

  export type contactScalarWhereWithAggregatesInput = {
    AND?: contactScalarWhereWithAggregatesInput | contactScalarWhereWithAggregatesInput[]
    OR?: contactScalarWhereWithAggregatesInput[]
    NOT?: contactScalarWhereWithAggregatesInput | contactScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"contact"> | number
    email?: StringWithAggregatesFilter<"contact"> | string
    whatsapp?: StringWithAggregatesFilter<"contact"> | string
    linkedin?: StringWithAggregatesFilter<"contact"> | string
    github?: StringWithAggregatesFilter<"contact"> | string
    ctaTitle?: StringWithAggregatesFilter<"contact"> | string
    ctaSubtitle?: StringWithAggregatesFilter<"contact"> | string
    ctaButtonText?: StringWithAggregatesFilter<"contact"> | string
    ctaButtonHref?: StringWithAggregatesFilter<"contact"> | string
    createdAt?: DateTimeWithAggregatesFilter<"contact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"contact"> | Date | string
  }

  export type aboutCreateInput = {
    title: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    abouthighlight?: abouthighlightCreateNestedManyWithoutAboutInput
  }

  export type aboutUncheckedCreateInput = {
    id?: number
    title: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    abouthighlight?: abouthighlightUncheckedCreateNestedManyWithoutAboutInput
  }

  export type aboutUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    abouthighlight?: abouthighlightUpdateManyWithoutAboutNestedInput
  }

  export type aboutUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    abouthighlight?: abouthighlightUncheckedUpdateManyWithoutAboutNestedInput
  }

  export type aboutCreateManyInput = {
    id?: number
    title: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type aboutUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type aboutUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type abouthighlightCreateInput = {
    title: string
    about: aboutCreateNestedOneWithoutAbouthighlightInput
  }

  export type abouthighlightUncheckedCreateInput = {
    id?: number
    aboutId: number
    title: string
  }

  export type abouthighlightUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    about?: aboutUpdateOneRequiredWithoutAbouthighlightNestedInput
  }

  export type abouthighlightUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    aboutId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type abouthighlightCreateManyInput = {
    id?: number
    aboutId: number
    title: string
  }

  export type abouthighlightUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type abouthighlightUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    aboutId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type heroCreateInput = {
    greeting: string
    title: string
    subtitle: string
    cta1Text: string
    cta1Href: string
    cta2Text: string
    cta2Href: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type heroUncheckedCreateInput = {
    id?: number
    greeting: string
    title: string
    subtitle: string
    cta1Text: string
    cta1Href: string
    cta2Text: string
    cta2Href: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type heroUpdateInput = {
    greeting?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    cta1Text?: StringFieldUpdateOperationsInput | string
    cta1Href?: StringFieldUpdateOperationsInput | string
    cta2Text?: StringFieldUpdateOperationsInput | string
    cta2Href?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type heroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    greeting?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    cta1Text?: StringFieldUpdateOperationsInput | string
    cta1Href?: StringFieldUpdateOperationsInput | string
    cta2Text?: StringFieldUpdateOperationsInput | string
    cta2Href?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type heroCreateManyInput = {
    id?: number
    greeting: string
    title: string
    subtitle: string
    cta1Text: string
    cta1Href: string
    cta2Text: string
    cta2Href: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type heroUpdateManyMutationInput = {
    greeting?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    cta1Text?: StringFieldUpdateOperationsInput | string
    cta1Href?: StringFieldUpdateOperationsInput | string
    cta2Text?: StringFieldUpdateOperationsInput | string
    cta2Href?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type heroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    greeting?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    cta1Text?: StringFieldUpdateOperationsInput | string
    cta1Href?: StringFieldUpdateOperationsInput | string
    cta2Text?: StringFieldUpdateOperationsInput | string
    cta2Href?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillCreateInput = {
    name: string
    description: string
    category: string
    level?: string | null
    iconKey?: string | null
    enabled?: boolean
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type skillUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    category: string
    level?: string | null
    iconKey?: string | null
    enabled?: boolean
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type skillUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    iconKey?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    iconKey?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillCreateManyInput = {
    id?: number
    name: string
    description: string
    category: string
    level?: string | null
    iconKey?: string | null
    enabled?: boolean
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type skillUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    iconKey?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type skillUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    iconKey?: NullableStringFieldUpdateOperationsInput | string | null
    enabled?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectCreateInput = {
    title: string
    shortDesc: string
    longDesc: string
    tagsJson?: string | null
    imageUrl?: string | null
    demoUrl?: string | null
    codeUrl?: string | null
    featured?: boolean
    enabled?: boolean
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type projectUncheckedCreateInput = {
    id?: number
    title: string
    shortDesc: string
    longDesc: string
    tagsJson?: string | null
    imageUrl?: string | null
    demoUrl?: string | null
    codeUrl?: string | null
    featured?: boolean
    enabled?: boolean
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type projectUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    shortDesc?: StringFieldUpdateOperationsInput | string
    longDesc?: StringFieldUpdateOperationsInput | string
    tagsJson?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    demoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    codeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    enabled?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    shortDesc?: StringFieldUpdateOperationsInput | string
    longDesc?: StringFieldUpdateOperationsInput | string
    tagsJson?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    demoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    codeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    enabled?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectCreateManyInput = {
    id?: number
    title: string
    shortDesc: string
    longDesc: string
    tagsJson?: string | null
    imageUrl?: string | null
    demoUrl?: string | null
    codeUrl?: string | null
    featured?: boolean
    enabled?: boolean
    displayOrder?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type projectUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    shortDesc?: StringFieldUpdateOperationsInput | string
    longDesc?: StringFieldUpdateOperationsInput | string
    tagsJson?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    demoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    codeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    enabled?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type projectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    shortDesc?: StringFieldUpdateOperationsInput | string
    longDesc?: StringFieldUpdateOperationsInput | string
    tagsJson?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    demoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    codeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    featured?: BoolFieldUpdateOperationsInput | boolean
    enabled?: BoolFieldUpdateOperationsInput | boolean
    displayOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contactCreateInput = {
    email: string
    whatsapp: string
    linkedin: string
    github: string
    ctaTitle: string
    ctaSubtitle: string
    ctaButtonText: string
    ctaButtonHref: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type contactUncheckedCreateInput = {
    id?: number
    email: string
    whatsapp: string
    linkedin: string
    github: string
    ctaTitle: string
    ctaSubtitle: string
    ctaButtonText: string
    ctaButtonHref: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type contactUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    ctaTitle?: StringFieldUpdateOperationsInput | string
    ctaSubtitle?: StringFieldUpdateOperationsInput | string
    ctaButtonText?: StringFieldUpdateOperationsInput | string
    ctaButtonHref?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contactUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    ctaTitle?: StringFieldUpdateOperationsInput | string
    ctaSubtitle?: StringFieldUpdateOperationsInput | string
    ctaButtonText?: StringFieldUpdateOperationsInput | string
    ctaButtonHref?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contactCreateManyInput = {
    id?: number
    email: string
    whatsapp: string
    linkedin: string
    github: string
    ctaTitle: string
    ctaSubtitle: string
    ctaButtonText: string
    ctaButtonHref: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type contactUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    ctaTitle?: StringFieldUpdateOperationsInput | string
    ctaSubtitle?: StringFieldUpdateOperationsInput | string
    ctaButtonText?: StringFieldUpdateOperationsInput | string
    ctaButtonHref?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type contactUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    whatsapp?: StringFieldUpdateOperationsInput | string
    linkedin?: StringFieldUpdateOperationsInput | string
    github?: StringFieldUpdateOperationsInput | string
    ctaTitle?: StringFieldUpdateOperationsInput | string
    ctaSubtitle?: StringFieldUpdateOperationsInput | string
    ctaButtonText?: StringFieldUpdateOperationsInput | string
    ctaButtonHref?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AbouthighlightListRelationFilter = {
    every?: abouthighlightWhereInput
    some?: abouthighlightWhereInput
    none?: abouthighlightWhereInput
  }

  export type abouthighlightOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type aboutOrderByRelevanceInput = {
    fields: aboutOrderByRelevanceFieldEnum | aboutOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type aboutCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type aboutAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type aboutMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type aboutMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type aboutSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AboutScalarRelationFilter = {
    is?: aboutWhereInput
    isNot?: aboutWhereInput
  }

  export type abouthighlightOrderByRelevanceInput = {
    fields: abouthighlightOrderByRelevanceFieldEnum | abouthighlightOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type abouthighlightCountOrderByAggregateInput = {
    id?: SortOrder
    aboutId?: SortOrder
    title?: SortOrder
  }

  export type abouthighlightAvgOrderByAggregateInput = {
    id?: SortOrder
    aboutId?: SortOrder
  }

  export type abouthighlightMaxOrderByAggregateInput = {
    id?: SortOrder
    aboutId?: SortOrder
    title?: SortOrder
  }

  export type abouthighlightMinOrderByAggregateInput = {
    id?: SortOrder
    aboutId?: SortOrder
    title?: SortOrder
  }

  export type abouthighlightSumOrderByAggregateInput = {
    id?: SortOrder
    aboutId?: SortOrder
  }

  export type heroOrderByRelevanceInput = {
    fields: heroOrderByRelevanceFieldEnum | heroOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type heroCountOrderByAggregateInput = {
    id?: SortOrder
    greeting?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    cta1Text?: SortOrder
    cta1Href?: SortOrder
    cta2Text?: SortOrder
    cta2Href?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type heroAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type heroMaxOrderByAggregateInput = {
    id?: SortOrder
    greeting?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    cta1Text?: SortOrder
    cta1Href?: SortOrder
    cta2Text?: SortOrder
    cta2Href?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type heroMinOrderByAggregateInput = {
    id?: SortOrder
    greeting?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    cta1Text?: SortOrder
    cta1Href?: SortOrder
    cta2Text?: SortOrder
    cta2Href?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type heroSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type skillOrderByRelevanceInput = {
    fields: skillOrderByRelevanceFieldEnum | skillOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type skillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    level?: SortOrder
    iconKey?: SortOrder
    enabled?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type skillAvgOrderByAggregateInput = {
    id?: SortOrder
    displayOrder?: SortOrder
  }

  export type skillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    level?: SortOrder
    iconKey?: SortOrder
    enabled?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type skillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    level?: SortOrder
    iconKey?: SortOrder
    enabled?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type skillSumOrderByAggregateInput = {
    id?: SortOrder
    displayOrder?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type projectOrderByRelevanceInput = {
    fields: projectOrderByRelevanceFieldEnum | projectOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type projectCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    shortDesc?: SortOrder
    longDesc?: SortOrder
    tagsJson?: SortOrder
    imageUrl?: SortOrder
    demoUrl?: SortOrder
    codeUrl?: SortOrder
    featured?: SortOrder
    enabled?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type projectAvgOrderByAggregateInput = {
    id?: SortOrder
    displayOrder?: SortOrder
  }

  export type projectMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    shortDesc?: SortOrder
    longDesc?: SortOrder
    tagsJson?: SortOrder
    imageUrl?: SortOrder
    demoUrl?: SortOrder
    codeUrl?: SortOrder
    featured?: SortOrder
    enabled?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type projectMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    shortDesc?: SortOrder
    longDesc?: SortOrder
    tagsJson?: SortOrder
    imageUrl?: SortOrder
    demoUrl?: SortOrder
    codeUrl?: SortOrder
    featured?: SortOrder
    enabled?: SortOrder
    displayOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type projectSumOrderByAggregateInput = {
    id?: SortOrder
    displayOrder?: SortOrder
  }

  export type contactOrderByRelevanceInput = {
    fields: contactOrderByRelevanceFieldEnum | contactOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type contactCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    linkedin?: SortOrder
    github?: SortOrder
    ctaTitle?: SortOrder
    ctaSubtitle?: SortOrder
    ctaButtonText?: SortOrder
    ctaButtonHref?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type contactAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type contactMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    linkedin?: SortOrder
    github?: SortOrder
    ctaTitle?: SortOrder
    ctaSubtitle?: SortOrder
    ctaButtonText?: SortOrder
    ctaButtonHref?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type contactMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    whatsapp?: SortOrder
    linkedin?: SortOrder
    github?: SortOrder
    ctaTitle?: SortOrder
    ctaSubtitle?: SortOrder
    ctaButtonText?: SortOrder
    ctaButtonHref?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type contactSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type abouthighlightCreateNestedManyWithoutAboutInput = {
    create?: XOR<abouthighlightCreateWithoutAboutInput, abouthighlightUncheckedCreateWithoutAboutInput> | abouthighlightCreateWithoutAboutInput[] | abouthighlightUncheckedCreateWithoutAboutInput[]
    connectOrCreate?: abouthighlightCreateOrConnectWithoutAboutInput | abouthighlightCreateOrConnectWithoutAboutInput[]
    createMany?: abouthighlightCreateManyAboutInputEnvelope
    connect?: abouthighlightWhereUniqueInput | abouthighlightWhereUniqueInput[]
  }

  export type abouthighlightUncheckedCreateNestedManyWithoutAboutInput = {
    create?: XOR<abouthighlightCreateWithoutAboutInput, abouthighlightUncheckedCreateWithoutAboutInput> | abouthighlightCreateWithoutAboutInput[] | abouthighlightUncheckedCreateWithoutAboutInput[]
    connectOrCreate?: abouthighlightCreateOrConnectWithoutAboutInput | abouthighlightCreateOrConnectWithoutAboutInput[]
    createMany?: abouthighlightCreateManyAboutInputEnvelope
    connect?: abouthighlightWhereUniqueInput | abouthighlightWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type abouthighlightUpdateManyWithoutAboutNestedInput = {
    create?: XOR<abouthighlightCreateWithoutAboutInput, abouthighlightUncheckedCreateWithoutAboutInput> | abouthighlightCreateWithoutAboutInput[] | abouthighlightUncheckedCreateWithoutAboutInput[]
    connectOrCreate?: abouthighlightCreateOrConnectWithoutAboutInput | abouthighlightCreateOrConnectWithoutAboutInput[]
    upsert?: abouthighlightUpsertWithWhereUniqueWithoutAboutInput | abouthighlightUpsertWithWhereUniqueWithoutAboutInput[]
    createMany?: abouthighlightCreateManyAboutInputEnvelope
    set?: abouthighlightWhereUniqueInput | abouthighlightWhereUniqueInput[]
    disconnect?: abouthighlightWhereUniqueInput | abouthighlightWhereUniqueInput[]
    delete?: abouthighlightWhereUniqueInput | abouthighlightWhereUniqueInput[]
    connect?: abouthighlightWhereUniqueInput | abouthighlightWhereUniqueInput[]
    update?: abouthighlightUpdateWithWhereUniqueWithoutAboutInput | abouthighlightUpdateWithWhereUniqueWithoutAboutInput[]
    updateMany?: abouthighlightUpdateManyWithWhereWithoutAboutInput | abouthighlightUpdateManyWithWhereWithoutAboutInput[]
    deleteMany?: abouthighlightScalarWhereInput | abouthighlightScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type abouthighlightUncheckedUpdateManyWithoutAboutNestedInput = {
    create?: XOR<abouthighlightCreateWithoutAboutInput, abouthighlightUncheckedCreateWithoutAboutInput> | abouthighlightCreateWithoutAboutInput[] | abouthighlightUncheckedCreateWithoutAboutInput[]
    connectOrCreate?: abouthighlightCreateOrConnectWithoutAboutInput | abouthighlightCreateOrConnectWithoutAboutInput[]
    upsert?: abouthighlightUpsertWithWhereUniqueWithoutAboutInput | abouthighlightUpsertWithWhereUniqueWithoutAboutInput[]
    createMany?: abouthighlightCreateManyAboutInputEnvelope
    set?: abouthighlightWhereUniqueInput | abouthighlightWhereUniqueInput[]
    disconnect?: abouthighlightWhereUniqueInput | abouthighlightWhereUniqueInput[]
    delete?: abouthighlightWhereUniqueInput | abouthighlightWhereUniqueInput[]
    connect?: abouthighlightWhereUniqueInput | abouthighlightWhereUniqueInput[]
    update?: abouthighlightUpdateWithWhereUniqueWithoutAboutInput | abouthighlightUpdateWithWhereUniqueWithoutAboutInput[]
    updateMany?: abouthighlightUpdateManyWithWhereWithoutAboutInput | abouthighlightUpdateManyWithWhereWithoutAboutInput[]
    deleteMany?: abouthighlightScalarWhereInput | abouthighlightScalarWhereInput[]
  }

  export type aboutCreateNestedOneWithoutAbouthighlightInput = {
    create?: XOR<aboutCreateWithoutAbouthighlightInput, aboutUncheckedCreateWithoutAbouthighlightInput>
    connectOrCreate?: aboutCreateOrConnectWithoutAbouthighlightInput
    connect?: aboutWhereUniqueInput
  }

  export type aboutUpdateOneRequiredWithoutAbouthighlightNestedInput = {
    create?: XOR<aboutCreateWithoutAbouthighlightInput, aboutUncheckedCreateWithoutAbouthighlightInput>
    connectOrCreate?: aboutCreateOrConnectWithoutAbouthighlightInput
    upsert?: aboutUpsertWithoutAbouthighlightInput
    connect?: aboutWhereUniqueInput
    update?: XOR<XOR<aboutUpdateToOneWithWhereWithoutAbouthighlightInput, aboutUpdateWithoutAbouthighlightInput>, aboutUncheckedUpdateWithoutAbouthighlightInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type abouthighlightCreateWithoutAboutInput = {
    title: string
  }

  export type abouthighlightUncheckedCreateWithoutAboutInput = {
    id?: number
    title: string
  }

  export type abouthighlightCreateOrConnectWithoutAboutInput = {
    where: abouthighlightWhereUniqueInput
    create: XOR<abouthighlightCreateWithoutAboutInput, abouthighlightUncheckedCreateWithoutAboutInput>
  }

  export type abouthighlightCreateManyAboutInputEnvelope = {
    data: abouthighlightCreateManyAboutInput | abouthighlightCreateManyAboutInput[]
    skipDuplicates?: boolean
  }

  export type abouthighlightUpsertWithWhereUniqueWithoutAboutInput = {
    where: abouthighlightWhereUniqueInput
    update: XOR<abouthighlightUpdateWithoutAboutInput, abouthighlightUncheckedUpdateWithoutAboutInput>
    create: XOR<abouthighlightCreateWithoutAboutInput, abouthighlightUncheckedCreateWithoutAboutInput>
  }

  export type abouthighlightUpdateWithWhereUniqueWithoutAboutInput = {
    where: abouthighlightWhereUniqueInput
    data: XOR<abouthighlightUpdateWithoutAboutInput, abouthighlightUncheckedUpdateWithoutAboutInput>
  }

  export type abouthighlightUpdateManyWithWhereWithoutAboutInput = {
    where: abouthighlightScalarWhereInput
    data: XOR<abouthighlightUpdateManyMutationInput, abouthighlightUncheckedUpdateManyWithoutAboutInput>
  }

  export type abouthighlightScalarWhereInput = {
    AND?: abouthighlightScalarWhereInput | abouthighlightScalarWhereInput[]
    OR?: abouthighlightScalarWhereInput[]
    NOT?: abouthighlightScalarWhereInput | abouthighlightScalarWhereInput[]
    id?: IntFilter<"abouthighlight"> | number
    aboutId?: IntFilter<"abouthighlight"> | number
    title?: StringFilter<"abouthighlight"> | string
  }

  export type aboutCreateWithoutAbouthighlightInput = {
    title: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type aboutUncheckedCreateWithoutAbouthighlightInput = {
    id?: number
    title: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type aboutCreateOrConnectWithoutAbouthighlightInput = {
    where: aboutWhereUniqueInput
    create: XOR<aboutCreateWithoutAbouthighlightInput, aboutUncheckedCreateWithoutAbouthighlightInput>
  }

  export type aboutUpsertWithoutAbouthighlightInput = {
    update: XOR<aboutUpdateWithoutAbouthighlightInput, aboutUncheckedUpdateWithoutAbouthighlightInput>
    create: XOR<aboutCreateWithoutAbouthighlightInput, aboutUncheckedCreateWithoutAbouthighlightInput>
    where?: aboutWhereInput
  }

  export type aboutUpdateToOneWithWhereWithoutAbouthighlightInput = {
    where?: aboutWhereInput
    data: XOR<aboutUpdateWithoutAbouthighlightInput, aboutUncheckedUpdateWithoutAbouthighlightInput>
  }

  export type aboutUpdateWithoutAbouthighlightInput = {
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type aboutUncheckedUpdateWithoutAbouthighlightInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type abouthighlightCreateManyAboutInput = {
    id?: number
    title: string
  }

  export type abouthighlightUpdateWithoutAboutInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type abouthighlightUncheckedUpdateWithoutAboutInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type abouthighlightUncheckedUpdateManyWithoutAboutInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }



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