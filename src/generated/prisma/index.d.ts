
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
 * Model User
 * Користувачі
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Anime
 * Аніме
 */
export type Anime = $Result.DefaultSelection<Prisma.$AnimePayload>
/**
 * Model Manga
 * Манга
 */
export type Manga = $Result.DefaultSelection<Prisma.$MangaPayload>
/**
 * Model AnimeGenre
 * Жанри аніме
 */
export type AnimeGenre = $Result.DefaultSelection<Prisma.$AnimeGenrePayload>
/**
 * Model MangaGenre
 * Жанри манги
 */
export type MangaGenre = $Result.DefaultSelection<Prisma.$MangaGenrePayload>
/**
 * Model AnimeGenreOnAnime
 * Зв'язки аніме та жанрів
 */
export type AnimeGenreOnAnime = $Result.DefaultSelection<Prisma.$AnimeGenreOnAnimePayload>
/**
 * Model MangaGenreOnManga
 * Зв'язки манги та жанрів
 */
export type MangaGenreOnManga = $Result.DefaultSelection<Prisma.$MangaGenreOnMangaPayload>
/**
 * Model Studio
 * Студія
 */
export type Studio = $Result.DefaultSelection<Prisma.$StudioPayload>
/**
 * Model Publisher
 * Видавництва
 */
export type Publisher = $Result.DefaultSelection<Prisma.$PublisherPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.anime`: Exposes CRUD operations for the **Anime** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Anime
    * const anime = await prisma.anime.findMany()
    * ```
    */
  get anime(): Prisma.AnimeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.manga`: Exposes CRUD operations for the **Manga** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Manga
    * const manga = await prisma.manga.findMany()
    * ```
    */
  get manga(): Prisma.MangaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.animeGenre`: Exposes CRUD operations for the **AnimeGenre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnimeGenres
    * const animeGenres = await prisma.animeGenre.findMany()
    * ```
    */
  get animeGenre(): Prisma.AnimeGenreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mangaGenre`: Exposes CRUD operations for the **MangaGenre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MangaGenres
    * const mangaGenres = await prisma.mangaGenre.findMany()
    * ```
    */
  get mangaGenre(): Prisma.MangaGenreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.animeGenreOnAnime`: Exposes CRUD operations for the **AnimeGenreOnAnime** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnimeGenreOnAnimes
    * const animeGenreOnAnimes = await prisma.animeGenreOnAnime.findMany()
    * ```
    */
  get animeGenreOnAnime(): Prisma.AnimeGenreOnAnimeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mangaGenreOnManga`: Exposes CRUD operations for the **MangaGenreOnManga** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MangaGenreOnMangas
    * const mangaGenreOnMangas = await prisma.mangaGenreOnManga.findMany()
    * ```
    */
  get mangaGenreOnManga(): Prisma.MangaGenreOnMangaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studio`: Exposes CRUD operations for the **Studio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Studios
    * const studios = await prisma.studio.findMany()
    * ```
    */
  get studio(): Prisma.StudioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publisher`: Exposes CRUD operations for the **Publisher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Publishers
    * const publishers = await prisma.publisher.findMany()
    * ```
    */
  get publisher(): Prisma.PublisherDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    User: 'User',
    Anime: 'Anime',
    Manga: 'Manga',
    AnimeGenre: 'AnimeGenre',
    MangaGenre: 'MangaGenre',
    AnimeGenreOnAnime: 'AnimeGenreOnAnime',
    MangaGenreOnManga: 'MangaGenreOnManga',
    Studio: 'Studio',
    Publisher: 'Publisher'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "anime" | "manga" | "animeGenre" | "mangaGenre" | "animeGenreOnAnime" | "mangaGenreOnManga" | "studio" | "publisher"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Anime: {
        payload: Prisma.$AnimePayload<ExtArgs>
        fields: Prisma.AnimeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnimeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnimeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>
          }
          findFirst: {
            args: Prisma.AnimeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnimeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>
          }
          findMany: {
            args: Prisma.AnimeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>[]
          }
          create: {
            args: Prisma.AnimeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>
          }
          createMany: {
            args: Prisma.AnimeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnimeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>[]
          }
          delete: {
            args: Prisma.AnimeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>
          }
          update: {
            args: Prisma.AnimeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>
          }
          deleteMany: {
            args: Prisma.AnimeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnimeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnimeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>[]
          }
          upsert: {
            args: Prisma.AnimeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimePayload>
          }
          aggregate: {
            args: Prisma.AnimeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnime>
          }
          groupBy: {
            args: Prisma.AnimeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnimeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnimeCountArgs<ExtArgs>
            result: $Utils.Optional<AnimeCountAggregateOutputType> | number
          }
        }
      }
      Manga: {
        payload: Prisma.$MangaPayload<ExtArgs>
        fields: Prisma.MangaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MangaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MangaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaPayload>
          }
          findFirst: {
            args: Prisma.MangaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MangaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaPayload>
          }
          findMany: {
            args: Prisma.MangaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaPayload>[]
          }
          create: {
            args: Prisma.MangaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaPayload>
          }
          createMany: {
            args: Prisma.MangaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MangaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaPayload>[]
          }
          delete: {
            args: Prisma.MangaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaPayload>
          }
          update: {
            args: Prisma.MangaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaPayload>
          }
          deleteMany: {
            args: Prisma.MangaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MangaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MangaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaPayload>[]
          }
          upsert: {
            args: Prisma.MangaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaPayload>
          }
          aggregate: {
            args: Prisma.MangaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateManga>
          }
          groupBy: {
            args: Prisma.MangaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MangaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MangaCountArgs<ExtArgs>
            result: $Utils.Optional<MangaCountAggregateOutputType> | number
          }
        }
      }
      AnimeGenre: {
        payload: Prisma.$AnimeGenrePayload<ExtArgs>
        fields: Prisma.AnimeGenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnimeGenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeGenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnimeGenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeGenrePayload>
          }
          findFirst: {
            args: Prisma.AnimeGenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeGenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnimeGenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeGenrePayload>
          }
          findMany: {
            args: Prisma.AnimeGenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeGenrePayload>[]
          }
          create: {
            args: Prisma.AnimeGenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeGenrePayload>
          }
          createMany: {
            args: Prisma.AnimeGenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnimeGenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeGenrePayload>[]
          }
          delete: {
            args: Prisma.AnimeGenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeGenrePayload>
          }
          update: {
            args: Prisma.AnimeGenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeGenrePayload>
          }
          deleteMany: {
            args: Prisma.AnimeGenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnimeGenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnimeGenreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeGenrePayload>[]
          }
          upsert: {
            args: Prisma.AnimeGenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeGenrePayload>
          }
          aggregate: {
            args: Prisma.AnimeGenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnimeGenre>
          }
          groupBy: {
            args: Prisma.AnimeGenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnimeGenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnimeGenreCountArgs<ExtArgs>
            result: $Utils.Optional<AnimeGenreCountAggregateOutputType> | number
          }
        }
      }
      MangaGenre: {
        payload: Prisma.$MangaGenrePayload<ExtArgs>
        fields: Prisma.MangaGenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MangaGenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaGenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MangaGenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaGenrePayload>
          }
          findFirst: {
            args: Prisma.MangaGenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaGenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MangaGenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaGenrePayload>
          }
          findMany: {
            args: Prisma.MangaGenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaGenrePayload>[]
          }
          create: {
            args: Prisma.MangaGenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaGenrePayload>
          }
          createMany: {
            args: Prisma.MangaGenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MangaGenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaGenrePayload>[]
          }
          delete: {
            args: Prisma.MangaGenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaGenrePayload>
          }
          update: {
            args: Prisma.MangaGenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaGenrePayload>
          }
          deleteMany: {
            args: Prisma.MangaGenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MangaGenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MangaGenreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaGenrePayload>[]
          }
          upsert: {
            args: Prisma.MangaGenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaGenrePayload>
          }
          aggregate: {
            args: Prisma.MangaGenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMangaGenre>
          }
          groupBy: {
            args: Prisma.MangaGenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<MangaGenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.MangaGenreCountArgs<ExtArgs>
            result: $Utils.Optional<MangaGenreCountAggregateOutputType> | number
          }
        }
      }
      AnimeGenreOnAnime: {
        payload: Prisma.$AnimeGenreOnAnimePayload<ExtArgs>
        fields: Prisma.AnimeGenreOnAnimeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnimeGenreOnAnimeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeGenreOnAnimePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnimeGenreOnAnimeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeGenreOnAnimePayload>
          }
          findFirst: {
            args: Prisma.AnimeGenreOnAnimeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeGenreOnAnimePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnimeGenreOnAnimeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeGenreOnAnimePayload>
          }
          findMany: {
            args: Prisma.AnimeGenreOnAnimeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeGenreOnAnimePayload>[]
          }
          create: {
            args: Prisma.AnimeGenreOnAnimeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeGenreOnAnimePayload>
          }
          createMany: {
            args: Prisma.AnimeGenreOnAnimeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnimeGenreOnAnimeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeGenreOnAnimePayload>[]
          }
          delete: {
            args: Prisma.AnimeGenreOnAnimeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeGenreOnAnimePayload>
          }
          update: {
            args: Prisma.AnimeGenreOnAnimeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeGenreOnAnimePayload>
          }
          deleteMany: {
            args: Prisma.AnimeGenreOnAnimeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnimeGenreOnAnimeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnimeGenreOnAnimeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeGenreOnAnimePayload>[]
          }
          upsert: {
            args: Prisma.AnimeGenreOnAnimeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeGenreOnAnimePayload>
          }
          aggregate: {
            args: Prisma.AnimeGenreOnAnimeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnimeGenreOnAnime>
          }
          groupBy: {
            args: Prisma.AnimeGenreOnAnimeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnimeGenreOnAnimeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnimeGenreOnAnimeCountArgs<ExtArgs>
            result: $Utils.Optional<AnimeGenreOnAnimeCountAggregateOutputType> | number
          }
        }
      }
      MangaGenreOnManga: {
        payload: Prisma.$MangaGenreOnMangaPayload<ExtArgs>
        fields: Prisma.MangaGenreOnMangaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MangaGenreOnMangaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaGenreOnMangaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MangaGenreOnMangaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaGenreOnMangaPayload>
          }
          findFirst: {
            args: Prisma.MangaGenreOnMangaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaGenreOnMangaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MangaGenreOnMangaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaGenreOnMangaPayload>
          }
          findMany: {
            args: Prisma.MangaGenreOnMangaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaGenreOnMangaPayload>[]
          }
          create: {
            args: Prisma.MangaGenreOnMangaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaGenreOnMangaPayload>
          }
          createMany: {
            args: Prisma.MangaGenreOnMangaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MangaGenreOnMangaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaGenreOnMangaPayload>[]
          }
          delete: {
            args: Prisma.MangaGenreOnMangaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaGenreOnMangaPayload>
          }
          update: {
            args: Prisma.MangaGenreOnMangaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaGenreOnMangaPayload>
          }
          deleteMany: {
            args: Prisma.MangaGenreOnMangaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MangaGenreOnMangaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MangaGenreOnMangaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaGenreOnMangaPayload>[]
          }
          upsert: {
            args: Prisma.MangaGenreOnMangaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MangaGenreOnMangaPayload>
          }
          aggregate: {
            args: Prisma.MangaGenreOnMangaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMangaGenreOnManga>
          }
          groupBy: {
            args: Prisma.MangaGenreOnMangaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MangaGenreOnMangaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MangaGenreOnMangaCountArgs<ExtArgs>
            result: $Utils.Optional<MangaGenreOnMangaCountAggregateOutputType> | number
          }
        }
      }
      Studio: {
        payload: Prisma.$StudioPayload<ExtArgs>
        fields: Prisma.StudioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload>
          }
          findFirst: {
            args: Prisma.StudioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload>
          }
          findMany: {
            args: Prisma.StudioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload>[]
          }
          create: {
            args: Prisma.StudioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload>
          }
          createMany: {
            args: Prisma.StudioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload>[]
          }
          delete: {
            args: Prisma.StudioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload>
          }
          update: {
            args: Prisma.StudioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload>
          }
          deleteMany: {
            args: Prisma.StudioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload>[]
          }
          upsert: {
            args: Prisma.StudioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudioPayload>
          }
          aggregate: {
            args: Prisma.StudioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudio>
          }
          groupBy: {
            args: Prisma.StudioGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudioGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudioCountArgs<ExtArgs>
            result: $Utils.Optional<StudioCountAggregateOutputType> | number
          }
        }
      }
      Publisher: {
        payload: Prisma.$PublisherPayload<ExtArgs>
        fields: Prisma.PublisherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublisherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublisherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
          }
          findFirst: {
            args: Prisma.PublisherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublisherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
          }
          findMany: {
            args: Prisma.PublisherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>[]
          }
          create: {
            args: Prisma.PublisherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
          }
          createMany: {
            args: Prisma.PublisherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublisherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>[]
          }
          delete: {
            args: Prisma.PublisherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
          }
          update: {
            args: Prisma.PublisherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
          }
          deleteMany: {
            args: Prisma.PublisherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublisherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PublisherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>[]
          }
          upsert: {
            args: Prisma.PublisherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherPayload>
          }
          aggregate: {
            args: Prisma.PublisherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublisher>
          }
          groupBy: {
            args: Prisma.PublisherGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublisherGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublisherCountArgs<ExtArgs>
            result: $Utils.Optional<PublisherCountAggregateOutputType> | number
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    anime?: AnimeOmit
    manga?: MangaOmit
    animeGenre?: AnimeGenreOmit
    mangaGenre?: MangaGenreOmit
    animeGenreOnAnime?: AnimeGenreOnAnimeOmit
    mangaGenreOnManga?: MangaGenreOnMangaOmit
    studio?: StudioOmit
    publisher?: PublisherOmit
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
   * Count Type AnimeCountOutputType
   */

  export type AnimeCountOutputType = {
    genres: number
  }

  export type AnimeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genres?: boolean | AnimeCountOutputTypeCountGenresArgs
  }

  // Custom InputTypes
  /**
   * AnimeCountOutputType without action
   */
  export type AnimeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeCountOutputType
     */
    select?: AnimeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnimeCountOutputType without action
   */
  export type AnimeCountOutputTypeCountGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeGenreOnAnimeWhereInput
  }


  /**
   * Count Type MangaCountOutputType
   */

  export type MangaCountOutputType = {
    genres: number
  }

  export type MangaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genres?: boolean | MangaCountOutputTypeCountGenresArgs
  }

  // Custom InputTypes
  /**
   * MangaCountOutputType without action
   */
  export type MangaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaCountOutputType
     */
    select?: MangaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MangaCountOutputType without action
   */
  export type MangaCountOutputTypeCountGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MangaGenreOnMangaWhereInput
  }


  /**
   * Count Type AnimeGenreCountOutputType
   */

  export type AnimeGenreCountOutputType = {
    animes: number
  }

  export type AnimeGenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animes?: boolean | AnimeGenreCountOutputTypeCountAnimesArgs
  }

  // Custom InputTypes
  /**
   * AnimeGenreCountOutputType without action
   */
  export type AnimeGenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeGenreCountOutputType
     */
    select?: AnimeGenreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnimeGenreCountOutputType without action
   */
  export type AnimeGenreCountOutputTypeCountAnimesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeGenreOnAnimeWhereInput
  }


  /**
   * Count Type MangaGenreCountOutputType
   */

  export type MangaGenreCountOutputType = {
    mangas: number
  }

  export type MangaGenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mangas?: boolean | MangaGenreCountOutputTypeCountMangasArgs
  }

  // Custom InputTypes
  /**
   * MangaGenreCountOutputType without action
   */
  export type MangaGenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaGenreCountOutputType
     */
    select?: MangaGenreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MangaGenreCountOutputType without action
   */
  export type MangaGenreCountOutputTypeCountMangasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MangaGenreOnMangaWhereInput
  }


  /**
   * Count Type StudioCountOutputType
   */

  export type StudioCountOutputType = {
    animes: number
  }

  export type StudioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animes?: boolean | StudioCountOutputTypeCountAnimesArgs
  }

  // Custom InputTypes
  /**
   * StudioCountOutputType without action
   */
  export type StudioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudioCountOutputType
     */
    select?: StudioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudioCountOutputType without action
   */
  export type StudioCountOutputTypeCountAnimesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeWhereInput
  }


  /**
   * Count Type PublisherCountOutputType
   */

  export type PublisherCountOutputType = {
    mangas: number
  }

  export type PublisherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mangas?: boolean | PublisherCountOutputTypeCountMangasArgs
  }

  // Custom InputTypes
  /**
   * PublisherCountOutputType without action
   */
  export type PublisherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublisherCountOutputType
     */
    select?: PublisherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PublisherCountOutputType without action
   */
  export type PublisherCountOutputTypeCountMangasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MangaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    imageUrl: string | null
    isAdmin: boolean | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    imageUrl: string | null
    isAdmin: boolean | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    imageUrl: number
    isAdmin: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    imageUrl?: true
    isAdmin?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    imageUrl?: true
    isAdmin?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    imageUrl?: true
    isAdmin?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    imageUrl: string | null
    isAdmin: boolean
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    imageUrl?: boolean
    isAdmin?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    imageUrl?: boolean
    isAdmin?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    imageUrl?: boolean
    isAdmin?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    imageUrl?: boolean
    isAdmin?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "imageUrl" | "isAdmin" | "createdAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Ідентифікатор користувача
       */
      id: string
      /**
       * Унікальна почта користувача
       */
      email: string
      /**
       * Пароль користувача
       */
      password: string
      /**
       * Ім'я користувача
       */
      name: string
      /**
       * Ззображення користувача
       */
      imageUrl: string | null
      /**
       * Чи є адміном користувач?
       */
      isAdmin: boolean
      /**
       * Коли створений користувач?
       */
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly imageUrl: FieldRef<"User", 'String'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Anime
   */

  export type AggregateAnime = {
    _count: AnimeCountAggregateOutputType | null
    _avg: AnimeAvgAggregateOutputType | null
    _sum: AnimeSumAggregateOutputType | null
    _min: AnimeMinAggregateOutputType | null
    _max: AnimeMaxAggregateOutputType | null
  }

  export type AnimeAvgAggregateOutputType = {
    rating: number | null
  }

  export type AnimeSumAggregateOutputType = {
    rating: number | null
  }

  export type AnimeMinAggregateOutputType = {
    id: string | null
    titleUa: string | null
    titleEn: string | null
    titleJp: string | null
    description: string | null
    rating: number | null
    kind: string | null
    episodes: string | null
    status: string | null
    dateRelease: Date | null
    imageUrl: string | null
    studioId: string | null
  }

  export type AnimeMaxAggregateOutputType = {
    id: string | null
    titleUa: string | null
    titleEn: string | null
    titleJp: string | null
    description: string | null
    rating: number | null
    kind: string | null
    episodes: string | null
    status: string | null
    dateRelease: Date | null
    imageUrl: string | null
    studioId: string | null
  }

  export type AnimeCountAggregateOutputType = {
    id: number
    titleUa: number
    titleEn: number
    titleJp: number
    description: number
    rating: number
    kind: number
    episodes: number
    status: number
    dateRelease: number
    imageUrl: number
    studioId: number
    _all: number
  }


  export type AnimeAvgAggregateInputType = {
    rating?: true
  }

  export type AnimeSumAggregateInputType = {
    rating?: true
  }

  export type AnimeMinAggregateInputType = {
    id?: true
    titleUa?: true
    titleEn?: true
    titleJp?: true
    description?: true
    rating?: true
    kind?: true
    episodes?: true
    status?: true
    dateRelease?: true
    imageUrl?: true
    studioId?: true
  }

  export type AnimeMaxAggregateInputType = {
    id?: true
    titleUa?: true
    titleEn?: true
    titleJp?: true
    description?: true
    rating?: true
    kind?: true
    episodes?: true
    status?: true
    dateRelease?: true
    imageUrl?: true
    studioId?: true
  }

  export type AnimeCountAggregateInputType = {
    id?: true
    titleUa?: true
    titleEn?: true
    titleJp?: true
    description?: true
    rating?: true
    kind?: true
    episodes?: true
    status?: true
    dateRelease?: true
    imageUrl?: true
    studioId?: true
    _all?: true
  }

  export type AnimeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Anime to aggregate.
     */
    where?: AnimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anime to fetch.
     */
    orderBy?: AnimeOrderByWithRelationInput | AnimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anime from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anime.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Anime
    **/
    _count?: true | AnimeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnimeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnimeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimeMaxAggregateInputType
  }

  export type GetAnimeAggregateType<T extends AnimeAggregateArgs> = {
        [P in keyof T & keyof AggregateAnime]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnime[P]>
      : GetScalarType<T[P], AggregateAnime[P]>
  }




  export type AnimeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeWhereInput
    orderBy?: AnimeOrderByWithAggregationInput | AnimeOrderByWithAggregationInput[]
    by: AnimeScalarFieldEnum[] | AnimeScalarFieldEnum
    having?: AnimeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimeCountAggregateInputType | true
    _avg?: AnimeAvgAggregateInputType
    _sum?: AnimeSumAggregateInputType
    _min?: AnimeMinAggregateInputType
    _max?: AnimeMaxAggregateInputType
  }

  export type AnimeGroupByOutputType = {
    id: string
    titleUa: string | null
    titleEn: string
    titleJp: string
    description: string
    rating: number
    kind: string
    episodes: string
    status: string
    dateRelease: Date | null
    imageUrl: string
    studioId: string
    _count: AnimeCountAggregateOutputType | null
    _avg: AnimeAvgAggregateOutputType | null
    _sum: AnimeSumAggregateOutputType | null
    _min: AnimeMinAggregateOutputType | null
    _max: AnimeMaxAggregateOutputType | null
  }

  type GetAnimeGroupByPayload<T extends AnimeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnimeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimeGroupByOutputType[P]>
            : GetScalarType<T[P], AnimeGroupByOutputType[P]>
        }
      >
    >


  export type AnimeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titleUa?: boolean
    titleEn?: boolean
    titleJp?: boolean
    description?: boolean
    rating?: boolean
    kind?: boolean
    episodes?: boolean
    status?: boolean
    dateRelease?: boolean
    imageUrl?: boolean
    studioId?: boolean
    studio?: boolean | StudioDefaultArgs<ExtArgs>
    genres?: boolean | Anime$genresArgs<ExtArgs>
    _count?: boolean | AnimeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anime"]>

  export type AnimeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titleUa?: boolean
    titleEn?: boolean
    titleJp?: boolean
    description?: boolean
    rating?: boolean
    kind?: boolean
    episodes?: boolean
    status?: boolean
    dateRelease?: boolean
    imageUrl?: boolean
    studioId?: boolean
    studio?: boolean | StudioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anime"]>

  export type AnimeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titleUa?: boolean
    titleEn?: boolean
    titleJp?: boolean
    description?: boolean
    rating?: boolean
    kind?: boolean
    episodes?: boolean
    status?: boolean
    dateRelease?: boolean
    imageUrl?: boolean
    studioId?: boolean
    studio?: boolean | StudioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["anime"]>

  export type AnimeSelectScalar = {
    id?: boolean
    titleUa?: boolean
    titleEn?: boolean
    titleJp?: boolean
    description?: boolean
    rating?: boolean
    kind?: boolean
    episodes?: boolean
    status?: boolean
    dateRelease?: boolean
    imageUrl?: boolean
    studioId?: boolean
  }

  export type AnimeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titleUa" | "titleEn" | "titleJp" | "description" | "rating" | "kind" | "episodes" | "status" | "dateRelease" | "imageUrl" | "studioId", ExtArgs["result"]["anime"]>
  export type AnimeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studio?: boolean | StudioDefaultArgs<ExtArgs>
    genres?: boolean | Anime$genresArgs<ExtArgs>
    _count?: boolean | AnimeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnimeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studio?: boolean | StudioDefaultArgs<ExtArgs>
  }
  export type AnimeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studio?: boolean | StudioDefaultArgs<ExtArgs>
  }

  export type $AnimePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Anime"
    objects: {
      studio: Prisma.$StudioPayload<ExtArgs>
      /**
       * Жанри аніме
       */
      genres: Prisma.$AnimeGenreOnAnimePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Ідентифікатор аніме
       */
      id: string
      /**
       * Назва аніме українською
       */
      titleUa: string | null
      /**
       * Назва аніме англійською
       */
      titleEn: string
      /**
       * Назва аніме японською
       */
      titleJp: string
      /**
       * Опис аніме
       */
      description: string
      /**
       * Віковий рейтинг аніме
       */
      rating: number
      /**
       * Тип аніме (TV-серіал, Фільм і тощо)
       */
      kind: string
      /**
       * Кількість випущених серій в епізоді
       */
      episodes: string
      /**
       * Статус аніме (онгоїнг, вийшло, ще випускається)
       */
      status: string
      /**
       * Коли створене аніме
       */
      dateRelease: Date | null
      /**
       * Зображення аніме в URL
       */
      imageUrl: string
      /**
       * Студія яка виробляла це аніме
       */
      studioId: string
    }, ExtArgs["result"]["anime"]>
    composites: {}
  }

  type AnimeGetPayload<S extends boolean | null | undefined | AnimeDefaultArgs> = $Result.GetResult<Prisma.$AnimePayload, S>

  type AnimeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnimeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnimeCountAggregateInputType | true
    }

  export interface AnimeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Anime'], meta: { name: 'Anime' } }
    /**
     * Find zero or one Anime that matches the filter.
     * @param {AnimeFindUniqueArgs} args - Arguments to find a Anime
     * @example
     * // Get one Anime
     * const anime = await prisma.anime.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnimeFindUniqueArgs>(args: SelectSubset<T, AnimeFindUniqueArgs<ExtArgs>>): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Anime that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnimeFindUniqueOrThrowArgs} args - Arguments to find a Anime
     * @example
     * // Get one Anime
     * const anime = await prisma.anime.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnimeFindUniqueOrThrowArgs>(args: SelectSubset<T, AnimeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Anime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeFindFirstArgs} args - Arguments to find a Anime
     * @example
     * // Get one Anime
     * const anime = await prisma.anime.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnimeFindFirstArgs>(args?: SelectSubset<T, AnimeFindFirstArgs<ExtArgs>>): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Anime that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeFindFirstOrThrowArgs} args - Arguments to find a Anime
     * @example
     * // Get one Anime
     * const anime = await prisma.anime.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnimeFindFirstOrThrowArgs>(args?: SelectSubset<T, AnimeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Anime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Anime
     * const anime = await prisma.anime.findMany()
     * 
     * // Get first 10 Anime
     * const anime = await prisma.anime.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const animeWithIdOnly = await prisma.anime.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnimeFindManyArgs>(args?: SelectSubset<T, AnimeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Anime.
     * @param {AnimeCreateArgs} args - Arguments to create a Anime.
     * @example
     * // Create one Anime
     * const Anime = await prisma.anime.create({
     *   data: {
     *     // ... data to create a Anime
     *   }
     * })
     * 
     */
    create<T extends AnimeCreateArgs>(args: SelectSubset<T, AnimeCreateArgs<ExtArgs>>): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Anime.
     * @param {AnimeCreateManyArgs} args - Arguments to create many Anime.
     * @example
     * // Create many Anime
     * const anime = await prisma.anime.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnimeCreateManyArgs>(args?: SelectSubset<T, AnimeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Anime and returns the data saved in the database.
     * @param {AnimeCreateManyAndReturnArgs} args - Arguments to create many Anime.
     * @example
     * // Create many Anime
     * const anime = await prisma.anime.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Anime and only return the `id`
     * const animeWithIdOnly = await prisma.anime.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnimeCreateManyAndReturnArgs>(args?: SelectSubset<T, AnimeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Anime.
     * @param {AnimeDeleteArgs} args - Arguments to delete one Anime.
     * @example
     * // Delete one Anime
     * const Anime = await prisma.anime.delete({
     *   where: {
     *     // ... filter to delete one Anime
     *   }
     * })
     * 
     */
    delete<T extends AnimeDeleteArgs>(args: SelectSubset<T, AnimeDeleteArgs<ExtArgs>>): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Anime.
     * @param {AnimeUpdateArgs} args - Arguments to update one Anime.
     * @example
     * // Update one Anime
     * const anime = await prisma.anime.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnimeUpdateArgs>(args: SelectSubset<T, AnimeUpdateArgs<ExtArgs>>): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Anime.
     * @param {AnimeDeleteManyArgs} args - Arguments to filter Anime to delete.
     * @example
     * // Delete a few Anime
     * const { count } = await prisma.anime.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnimeDeleteManyArgs>(args?: SelectSubset<T, AnimeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Anime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Anime
     * const anime = await prisma.anime.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnimeUpdateManyArgs>(args: SelectSubset<T, AnimeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Anime and returns the data updated in the database.
     * @param {AnimeUpdateManyAndReturnArgs} args - Arguments to update many Anime.
     * @example
     * // Update many Anime
     * const anime = await prisma.anime.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Anime and only return the `id`
     * const animeWithIdOnly = await prisma.anime.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnimeUpdateManyAndReturnArgs>(args: SelectSubset<T, AnimeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Anime.
     * @param {AnimeUpsertArgs} args - Arguments to update or create a Anime.
     * @example
     * // Update or create a Anime
     * const anime = await prisma.anime.upsert({
     *   create: {
     *     // ... data to create a Anime
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Anime we want to update
     *   }
     * })
     */
    upsert<T extends AnimeUpsertArgs>(args: SelectSubset<T, AnimeUpsertArgs<ExtArgs>>): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Anime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeCountArgs} args - Arguments to filter Anime to count.
     * @example
     * // Count the number of Anime
     * const count = await prisma.anime.count({
     *   where: {
     *     // ... the filter for the Anime we want to count
     *   }
     * })
    **/
    count<T extends AnimeCountArgs>(
      args?: Subset<T, AnimeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Anime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnimeAggregateArgs>(args: Subset<T, AnimeAggregateArgs>): Prisma.PrismaPromise<GetAnimeAggregateType<T>>

    /**
     * Group by Anime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeGroupByArgs} args - Group by arguments.
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
      T extends AnimeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimeGroupByArgs['orderBy'] }
        : { orderBy?: AnimeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnimeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Anime model
   */
  readonly fields: AnimeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Anime.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnimeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studio<T extends StudioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudioDefaultArgs<ExtArgs>>): Prisma__StudioClient<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    genres<T extends Anime$genresArgs<ExtArgs> = {}>(args?: Subset<T, Anime$genresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeGenreOnAnimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Anime model
   */
  interface AnimeFieldRefs {
    readonly id: FieldRef<"Anime", 'String'>
    readonly titleUa: FieldRef<"Anime", 'String'>
    readonly titleEn: FieldRef<"Anime", 'String'>
    readonly titleJp: FieldRef<"Anime", 'String'>
    readonly description: FieldRef<"Anime", 'String'>
    readonly rating: FieldRef<"Anime", 'Float'>
    readonly kind: FieldRef<"Anime", 'String'>
    readonly episodes: FieldRef<"Anime", 'String'>
    readonly status: FieldRef<"Anime", 'String'>
    readonly dateRelease: FieldRef<"Anime", 'DateTime'>
    readonly imageUrl: FieldRef<"Anime", 'String'>
    readonly studioId: FieldRef<"Anime", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Anime findUnique
   */
  export type AnimeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * Filter, which Anime to fetch.
     */
    where: AnimeWhereUniqueInput
  }

  /**
   * Anime findUniqueOrThrow
   */
  export type AnimeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * Filter, which Anime to fetch.
     */
    where: AnimeWhereUniqueInput
  }

  /**
   * Anime findFirst
   */
  export type AnimeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * Filter, which Anime to fetch.
     */
    where?: AnimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anime to fetch.
     */
    orderBy?: AnimeOrderByWithRelationInput | AnimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Anime.
     */
    cursor?: AnimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anime from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anime.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Anime.
     */
    distinct?: AnimeScalarFieldEnum | AnimeScalarFieldEnum[]
  }

  /**
   * Anime findFirstOrThrow
   */
  export type AnimeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * Filter, which Anime to fetch.
     */
    where?: AnimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anime to fetch.
     */
    orderBy?: AnimeOrderByWithRelationInput | AnimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Anime.
     */
    cursor?: AnimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anime from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anime.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Anime.
     */
    distinct?: AnimeScalarFieldEnum | AnimeScalarFieldEnum[]
  }

  /**
   * Anime findMany
   */
  export type AnimeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * Filter, which Anime to fetch.
     */
    where?: AnimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Anime to fetch.
     */
    orderBy?: AnimeOrderByWithRelationInput | AnimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Anime.
     */
    cursor?: AnimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Anime from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Anime.
     */
    skip?: number
    distinct?: AnimeScalarFieldEnum | AnimeScalarFieldEnum[]
  }

  /**
   * Anime create
   */
  export type AnimeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * The data needed to create a Anime.
     */
    data: XOR<AnimeCreateInput, AnimeUncheckedCreateInput>
  }

  /**
   * Anime createMany
   */
  export type AnimeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Anime.
     */
    data: AnimeCreateManyInput | AnimeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Anime createManyAndReturn
   */
  export type AnimeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * The data used to create many Anime.
     */
    data: AnimeCreateManyInput | AnimeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Anime update
   */
  export type AnimeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * The data needed to update a Anime.
     */
    data: XOR<AnimeUpdateInput, AnimeUncheckedUpdateInput>
    /**
     * Choose, which Anime to update.
     */
    where: AnimeWhereUniqueInput
  }

  /**
   * Anime updateMany
   */
  export type AnimeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Anime.
     */
    data: XOR<AnimeUpdateManyMutationInput, AnimeUncheckedUpdateManyInput>
    /**
     * Filter which Anime to update
     */
    where?: AnimeWhereInput
    /**
     * Limit how many Anime to update.
     */
    limit?: number
  }

  /**
   * Anime updateManyAndReturn
   */
  export type AnimeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * The data used to update Anime.
     */
    data: XOR<AnimeUpdateManyMutationInput, AnimeUncheckedUpdateManyInput>
    /**
     * Filter which Anime to update
     */
    where?: AnimeWhereInput
    /**
     * Limit how many Anime to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Anime upsert
   */
  export type AnimeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * The filter to search for the Anime to update in case it exists.
     */
    where: AnimeWhereUniqueInput
    /**
     * In case the Anime found by the `where` argument doesn't exist, create a new Anime with this data.
     */
    create: XOR<AnimeCreateInput, AnimeUncheckedCreateInput>
    /**
     * In case the Anime was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnimeUpdateInput, AnimeUncheckedUpdateInput>
  }

  /**
   * Anime delete
   */
  export type AnimeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    /**
     * Filter which Anime to delete.
     */
    where: AnimeWhereUniqueInput
  }

  /**
   * Anime deleteMany
   */
  export type AnimeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Anime to delete
     */
    where?: AnimeWhereInput
    /**
     * Limit how many Anime to delete.
     */
    limit?: number
  }

  /**
   * Anime.genres
   */
  export type Anime$genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeGenreOnAnime
     */
    select?: AnimeGenreOnAnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeGenreOnAnime
     */
    omit?: AnimeGenreOnAnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeGenreOnAnimeInclude<ExtArgs> | null
    where?: AnimeGenreOnAnimeWhereInput
    orderBy?: AnimeGenreOnAnimeOrderByWithRelationInput | AnimeGenreOnAnimeOrderByWithRelationInput[]
    cursor?: AnimeGenreOnAnimeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimeGenreOnAnimeScalarFieldEnum | AnimeGenreOnAnimeScalarFieldEnum[]
  }

  /**
   * Anime without action
   */
  export type AnimeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
  }


  /**
   * Model Manga
   */

  export type AggregateManga = {
    _count: MangaCountAggregateOutputType | null
    _min: MangaMinAggregateOutputType | null
    _max: MangaMaxAggregateOutputType | null
  }

  export type MangaMinAggregateOutputType = {
    id: string | null
    titleUa: string | null
    titleEn: string | null
    titleJp: string | null
    description: string | null
    kind: string | null
    chapters: string | null
    volumes: string | null
    dateRelease: Date | null
    status: string | null
    imageUrl: string | null
    publisherId: string | null
  }

  export type MangaMaxAggregateOutputType = {
    id: string | null
    titleUa: string | null
    titleEn: string | null
    titleJp: string | null
    description: string | null
    kind: string | null
    chapters: string | null
    volumes: string | null
    dateRelease: Date | null
    status: string | null
    imageUrl: string | null
    publisherId: string | null
  }

  export type MangaCountAggregateOutputType = {
    id: number
    titleUa: number
    titleEn: number
    titleJp: number
    description: number
    kind: number
    chapters: number
    volumes: number
    dateRelease: number
    status: number
    imageUrl: number
    publisherId: number
    _all: number
  }


  export type MangaMinAggregateInputType = {
    id?: true
    titleUa?: true
    titleEn?: true
    titleJp?: true
    description?: true
    kind?: true
    chapters?: true
    volumes?: true
    dateRelease?: true
    status?: true
    imageUrl?: true
    publisherId?: true
  }

  export type MangaMaxAggregateInputType = {
    id?: true
    titleUa?: true
    titleEn?: true
    titleJp?: true
    description?: true
    kind?: true
    chapters?: true
    volumes?: true
    dateRelease?: true
    status?: true
    imageUrl?: true
    publisherId?: true
  }

  export type MangaCountAggregateInputType = {
    id?: true
    titleUa?: true
    titleEn?: true
    titleJp?: true
    description?: true
    kind?: true
    chapters?: true
    volumes?: true
    dateRelease?: true
    status?: true
    imageUrl?: true
    publisherId?: true
    _all?: true
  }

  export type MangaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Manga to aggregate.
     */
    where?: MangaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manga to fetch.
     */
    orderBy?: MangaOrderByWithRelationInput | MangaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MangaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manga from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manga.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Manga
    **/
    _count?: true | MangaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MangaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MangaMaxAggregateInputType
  }

  export type GetMangaAggregateType<T extends MangaAggregateArgs> = {
        [P in keyof T & keyof AggregateManga]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManga[P]>
      : GetScalarType<T[P], AggregateManga[P]>
  }




  export type MangaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MangaWhereInput
    orderBy?: MangaOrderByWithAggregationInput | MangaOrderByWithAggregationInput[]
    by: MangaScalarFieldEnum[] | MangaScalarFieldEnum
    having?: MangaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MangaCountAggregateInputType | true
    _min?: MangaMinAggregateInputType
    _max?: MangaMaxAggregateInputType
  }

  export type MangaGroupByOutputType = {
    id: string
    titleUa: string
    titleEn: string
    titleJp: string
    description: string
    kind: string
    chapters: string
    volumes: string
    dateRelease: Date | null
    status: string
    imageUrl: string
    publisherId: string
    _count: MangaCountAggregateOutputType | null
    _min: MangaMinAggregateOutputType | null
    _max: MangaMaxAggregateOutputType | null
  }

  type GetMangaGroupByPayload<T extends MangaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MangaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MangaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MangaGroupByOutputType[P]>
            : GetScalarType<T[P], MangaGroupByOutputType[P]>
        }
      >
    >


  export type MangaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titleUa?: boolean
    titleEn?: boolean
    titleJp?: boolean
    description?: boolean
    kind?: boolean
    chapters?: boolean
    volumes?: boolean
    dateRelease?: boolean
    status?: boolean
    imageUrl?: boolean
    publisherId?: boolean
    publisher?: boolean | PublisherDefaultArgs<ExtArgs>
    genres?: boolean | Manga$genresArgs<ExtArgs>
    _count?: boolean | MangaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["manga"]>

  export type MangaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titleUa?: boolean
    titleEn?: boolean
    titleJp?: boolean
    description?: boolean
    kind?: boolean
    chapters?: boolean
    volumes?: boolean
    dateRelease?: boolean
    status?: boolean
    imageUrl?: boolean
    publisherId?: boolean
    publisher?: boolean | PublisherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["manga"]>

  export type MangaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titleUa?: boolean
    titleEn?: boolean
    titleJp?: boolean
    description?: boolean
    kind?: boolean
    chapters?: boolean
    volumes?: boolean
    dateRelease?: boolean
    status?: boolean
    imageUrl?: boolean
    publisherId?: boolean
    publisher?: boolean | PublisherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["manga"]>

  export type MangaSelectScalar = {
    id?: boolean
    titleUa?: boolean
    titleEn?: boolean
    titleJp?: boolean
    description?: boolean
    kind?: boolean
    chapters?: boolean
    volumes?: boolean
    dateRelease?: boolean
    status?: boolean
    imageUrl?: boolean
    publisherId?: boolean
  }

  export type MangaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titleUa" | "titleEn" | "titleJp" | "description" | "kind" | "chapters" | "volumes" | "dateRelease" | "status" | "imageUrl" | "publisherId", ExtArgs["result"]["manga"]>
  export type MangaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publisher?: boolean | PublisherDefaultArgs<ExtArgs>
    genres?: boolean | Manga$genresArgs<ExtArgs>
    _count?: boolean | MangaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MangaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publisher?: boolean | PublisherDefaultArgs<ExtArgs>
  }
  export type MangaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    publisher?: boolean | PublisherDefaultArgs<ExtArgs>
  }

  export type $MangaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Manga"
    objects: {
      publisher: Prisma.$PublisherPayload<ExtArgs>
      /**
       * Жанри
       */
      genres: Prisma.$MangaGenreOnMangaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Ідентифікатор манги
       */
      id: string
      /**
       * Назва манги українською
       */
      titleUa: string
      /**
       * Назва манги англійскьою
       */
      titleEn: string
      /**
       * Назва манги японською
       */
      titleJp: string
      /**
       * Опис манги
       */
      description: string
      /**
       * Тип манги (Манга, Манхва і тощо)
       */
      kind: string
      /**
       * Кількість розділів в творі
       */
      chapters: string
      /**
       * Кількість томів в творі
       */
      volumes: string
      /**
       * Дата релізу манги
       */
      dateRelease: Date | null
      /**
       * Статус манги (Видається, Видано і тощо)
       */
      status: string
      /**
       * Зображення манги
       */
      imageUrl: string
      /**
       * Видавництва які випускають мангу
       */
      publisherId: string
    }, ExtArgs["result"]["manga"]>
    composites: {}
  }

  type MangaGetPayload<S extends boolean | null | undefined | MangaDefaultArgs> = $Result.GetResult<Prisma.$MangaPayload, S>

  type MangaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MangaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MangaCountAggregateInputType | true
    }

  export interface MangaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Manga'], meta: { name: 'Manga' } }
    /**
     * Find zero or one Manga that matches the filter.
     * @param {MangaFindUniqueArgs} args - Arguments to find a Manga
     * @example
     * // Get one Manga
     * const manga = await prisma.manga.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MangaFindUniqueArgs>(args: SelectSubset<T, MangaFindUniqueArgs<ExtArgs>>): Prisma__MangaClient<$Result.GetResult<Prisma.$MangaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Manga that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MangaFindUniqueOrThrowArgs} args - Arguments to find a Manga
     * @example
     * // Get one Manga
     * const manga = await prisma.manga.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MangaFindUniqueOrThrowArgs>(args: SelectSubset<T, MangaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MangaClient<$Result.GetResult<Prisma.$MangaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Manga that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaFindFirstArgs} args - Arguments to find a Manga
     * @example
     * // Get one Manga
     * const manga = await prisma.manga.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MangaFindFirstArgs>(args?: SelectSubset<T, MangaFindFirstArgs<ExtArgs>>): Prisma__MangaClient<$Result.GetResult<Prisma.$MangaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Manga that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaFindFirstOrThrowArgs} args - Arguments to find a Manga
     * @example
     * // Get one Manga
     * const manga = await prisma.manga.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MangaFindFirstOrThrowArgs>(args?: SelectSubset<T, MangaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MangaClient<$Result.GetResult<Prisma.$MangaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Manga that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Manga
     * const manga = await prisma.manga.findMany()
     * 
     * // Get first 10 Manga
     * const manga = await prisma.manga.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mangaWithIdOnly = await prisma.manga.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MangaFindManyArgs>(args?: SelectSubset<T, MangaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Manga.
     * @param {MangaCreateArgs} args - Arguments to create a Manga.
     * @example
     * // Create one Manga
     * const Manga = await prisma.manga.create({
     *   data: {
     *     // ... data to create a Manga
     *   }
     * })
     * 
     */
    create<T extends MangaCreateArgs>(args: SelectSubset<T, MangaCreateArgs<ExtArgs>>): Prisma__MangaClient<$Result.GetResult<Prisma.$MangaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Manga.
     * @param {MangaCreateManyArgs} args - Arguments to create many Manga.
     * @example
     * // Create many Manga
     * const manga = await prisma.manga.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MangaCreateManyArgs>(args?: SelectSubset<T, MangaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Manga and returns the data saved in the database.
     * @param {MangaCreateManyAndReturnArgs} args - Arguments to create many Manga.
     * @example
     * // Create many Manga
     * const manga = await prisma.manga.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Manga and only return the `id`
     * const mangaWithIdOnly = await prisma.manga.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MangaCreateManyAndReturnArgs>(args?: SelectSubset<T, MangaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Manga.
     * @param {MangaDeleteArgs} args - Arguments to delete one Manga.
     * @example
     * // Delete one Manga
     * const Manga = await prisma.manga.delete({
     *   where: {
     *     // ... filter to delete one Manga
     *   }
     * })
     * 
     */
    delete<T extends MangaDeleteArgs>(args: SelectSubset<T, MangaDeleteArgs<ExtArgs>>): Prisma__MangaClient<$Result.GetResult<Prisma.$MangaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Manga.
     * @param {MangaUpdateArgs} args - Arguments to update one Manga.
     * @example
     * // Update one Manga
     * const manga = await prisma.manga.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MangaUpdateArgs>(args: SelectSubset<T, MangaUpdateArgs<ExtArgs>>): Prisma__MangaClient<$Result.GetResult<Prisma.$MangaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Manga.
     * @param {MangaDeleteManyArgs} args - Arguments to filter Manga to delete.
     * @example
     * // Delete a few Manga
     * const { count } = await prisma.manga.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MangaDeleteManyArgs>(args?: SelectSubset<T, MangaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Manga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Manga
     * const manga = await prisma.manga.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MangaUpdateManyArgs>(args: SelectSubset<T, MangaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Manga and returns the data updated in the database.
     * @param {MangaUpdateManyAndReturnArgs} args - Arguments to update many Manga.
     * @example
     * // Update many Manga
     * const manga = await prisma.manga.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Manga and only return the `id`
     * const mangaWithIdOnly = await prisma.manga.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MangaUpdateManyAndReturnArgs>(args: SelectSubset<T, MangaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Manga.
     * @param {MangaUpsertArgs} args - Arguments to update or create a Manga.
     * @example
     * // Update or create a Manga
     * const manga = await prisma.manga.upsert({
     *   create: {
     *     // ... data to create a Manga
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Manga we want to update
     *   }
     * })
     */
    upsert<T extends MangaUpsertArgs>(args: SelectSubset<T, MangaUpsertArgs<ExtArgs>>): Prisma__MangaClient<$Result.GetResult<Prisma.$MangaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Manga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaCountArgs} args - Arguments to filter Manga to count.
     * @example
     * // Count the number of Manga
     * const count = await prisma.manga.count({
     *   where: {
     *     // ... the filter for the Manga we want to count
     *   }
     * })
    **/
    count<T extends MangaCountArgs>(
      args?: Subset<T, MangaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MangaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Manga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MangaAggregateArgs>(args: Subset<T, MangaAggregateArgs>): Prisma.PrismaPromise<GetMangaAggregateType<T>>

    /**
     * Group by Manga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaGroupByArgs} args - Group by arguments.
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
      T extends MangaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MangaGroupByArgs['orderBy'] }
        : { orderBy?: MangaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MangaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMangaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Manga model
   */
  readonly fields: MangaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Manga.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MangaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    publisher<T extends PublisherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PublisherDefaultArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    genres<T extends Manga$genresArgs<ExtArgs> = {}>(args?: Subset<T, Manga$genresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangaGenreOnMangaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Manga model
   */
  interface MangaFieldRefs {
    readonly id: FieldRef<"Manga", 'String'>
    readonly titleUa: FieldRef<"Manga", 'String'>
    readonly titleEn: FieldRef<"Manga", 'String'>
    readonly titleJp: FieldRef<"Manga", 'String'>
    readonly description: FieldRef<"Manga", 'String'>
    readonly kind: FieldRef<"Manga", 'String'>
    readonly chapters: FieldRef<"Manga", 'String'>
    readonly volumes: FieldRef<"Manga", 'String'>
    readonly dateRelease: FieldRef<"Manga", 'DateTime'>
    readonly status: FieldRef<"Manga", 'String'>
    readonly imageUrl: FieldRef<"Manga", 'String'>
    readonly publisherId: FieldRef<"Manga", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Manga findUnique
   */
  export type MangaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manga
     */
    select?: MangaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manga
     */
    omit?: MangaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaInclude<ExtArgs> | null
    /**
     * Filter, which Manga to fetch.
     */
    where: MangaWhereUniqueInput
  }

  /**
   * Manga findUniqueOrThrow
   */
  export type MangaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manga
     */
    select?: MangaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manga
     */
    omit?: MangaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaInclude<ExtArgs> | null
    /**
     * Filter, which Manga to fetch.
     */
    where: MangaWhereUniqueInput
  }

  /**
   * Manga findFirst
   */
  export type MangaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manga
     */
    select?: MangaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manga
     */
    omit?: MangaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaInclude<ExtArgs> | null
    /**
     * Filter, which Manga to fetch.
     */
    where?: MangaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manga to fetch.
     */
    orderBy?: MangaOrderByWithRelationInput | MangaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Manga.
     */
    cursor?: MangaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manga from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manga.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Manga.
     */
    distinct?: MangaScalarFieldEnum | MangaScalarFieldEnum[]
  }

  /**
   * Manga findFirstOrThrow
   */
  export type MangaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manga
     */
    select?: MangaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manga
     */
    omit?: MangaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaInclude<ExtArgs> | null
    /**
     * Filter, which Manga to fetch.
     */
    where?: MangaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manga to fetch.
     */
    orderBy?: MangaOrderByWithRelationInput | MangaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Manga.
     */
    cursor?: MangaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manga from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manga.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Manga.
     */
    distinct?: MangaScalarFieldEnum | MangaScalarFieldEnum[]
  }

  /**
   * Manga findMany
   */
  export type MangaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manga
     */
    select?: MangaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manga
     */
    omit?: MangaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaInclude<ExtArgs> | null
    /**
     * Filter, which Manga to fetch.
     */
    where?: MangaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Manga to fetch.
     */
    orderBy?: MangaOrderByWithRelationInput | MangaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Manga.
     */
    cursor?: MangaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Manga from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Manga.
     */
    skip?: number
    distinct?: MangaScalarFieldEnum | MangaScalarFieldEnum[]
  }

  /**
   * Manga create
   */
  export type MangaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manga
     */
    select?: MangaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manga
     */
    omit?: MangaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaInclude<ExtArgs> | null
    /**
     * The data needed to create a Manga.
     */
    data: XOR<MangaCreateInput, MangaUncheckedCreateInput>
  }

  /**
   * Manga createMany
   */
  export type MangaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Manga.
     */
    data: MangaCreateManyInput | MangaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Manga createManyAndReturn
   */
  export type MangaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manga
     */
    select?: MangaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Manga
     */
    omit?: MangaOmit<ExtArgs> | null
    /**
     * The data used to create many Manga.
     */
    data: MangaCreateManyInput | MangaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Manga update
   */
  export type MangaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manga
     */
    select?: MangaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manga
     */
    omit?: MangaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaInclude<ExtArgs> | null
    /**
     * The data needed to update a Manga.
     */
    data: XOR<MangaUpdateInput, MangaUncheckedUpdateInput>
    /**
     * Choose, which Manga to update.
     */
    where: MangaWhereUniqueInput
  }

  /**
   * Manga updateMany
   */
  export type MangaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Manga.
     */
    data: XOR<MangaUpdateManyMutationInput, MangaUncheckedUpdateManyInput>
    /**
     * Filter which Manga to update
     */
    where?: MangaWhereInput
    /**
     * Limit how many Manga to update.
     */
    limit?: number
  }

  /**
   * Manga updateManyAndReturn
   */
  export type MangaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manga
     */
    select?: MangaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Manga
     */
    omit?: MangaOmit<ExtArgs> | null
    /**
     * The data used to update Manga.
     */
    data: XOR<MangaUpdateManyMutationInput, MangaUncheckedUpdateManyInput>
    /**
     * Filter which Manga to update
     */
    where?: MangaWhereInput
    /**
     * Limit how many Manga to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Manga upsert
   */
  export type MangaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manga
     */
    select?: MangaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manga
     */
    omit?: MangaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaInclude<ExtArgs> | null
    /**
     * The filter to search for the Manga to update in case it exists.
     */
    where: MangaWhereUniqueInput
    /**
     * In case the Manga found by the `where` argument doesn't exist, create a new Manga with this data.
     */
    create: XOR<MangaCreateInput, MangaUncheckedCreateInput>
    /**
     * In case the Manga was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MangaUpdateInput, MangaUncheckedUpdateInput>
  }

  /**
   * Manga delete
   */
  export type MangaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manga
     */
    select?: MangaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manga
     */
    omit?: MangaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaInclude<ExtArgs> | null
    /**
     * Filter which Manga to delete.
     */
    where: MangaWhereUniqueInput
  }

  /**
   * Manga deleteMany
   */
  export type MangaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Manga to delete
     */
    where?: MangaWhereInput
    /**
     * Limit how many Manga to delete.
     */
    limit?: number
  }

  /**
   * Manga.genres
   */
  export type Manga$genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaGenreOnManga
     */
    select?: MangaGenreOnMangaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaGenreOnManga
     */
    omit?: MangaGenreOnMangaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaGenreOnMangaInclude<ExtArgs> | null
    where?: MangaGenreOnMangaWhereInput
    orderBy?: MangaGenreOnMangaOrderByWithRelationInput | MangaGenreOnMangaOrderByWithRelationInput[]
    cursor?: MangaGenreOnMangaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MangaGenreOnMangaScalarFieldEnum | MangaGenreOnMangaScalarFieldEnum[]
  }

  /**
   * Manga without action
   */
  export type MangaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manga
     */
    select?: MangaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manga
     */
    omit?: MangaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaInclude<ExtArgs> | null
  }


  /**
   * Model AnimeGenre
   */

  export type AggregateAnimeGenre = {
    _count: AnimeGenreCountAggregateOutputType | null
    _min: AnimeGenreMinAggregateOutputType | null
    _max: AnimeGenreMaxAggregateOutputType | null
  }

  export type AnimeGenreMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AnimeGenreMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AnimeGenreCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type AnimeGenreMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type AnimeGenreMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type AnimeGenreCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type AnimeGenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnimeGenre to aggregate.
     */
    where?: AnimeGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeGenres to fetch.
     */
    orderBy?: AnimeGenreOrderByWithRelationInput | AnimeGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnimeGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnimeGenres
    **/
    _count?: true | AnimeGenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimeGenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimeGenreMaxAggregateInputType
  }

  export type GetAnimeGenreAggregateType<T extends AnimeGenreAggregateArgs> = {
        [P in keyof T & keyof AggregateAnimeGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnimeGenre[P]>
      : GetScalarType<T[P], AggregateAnimeGenre[P]>
  }




  export type AnimeGenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeGenreWhereInput
    orderBy?: AnimeGenreOrderByWithAggregationInput | AnimeGenreOrderByWithAggregationInput[]
    by: AnimeGenreScalarFieldEnum[] | AnimeGenreScalarFieldEnum
    having?: AnimeGenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimeGenreCountAggregateInputType | true
    _min?: AnimeGenreMinAggregateInputType
    _max?: AnimeGenreMaxAggregateInputType
  }

  export type AnimeGenreGroupByOutputType = {
    id: string
    name: string
    _count: AnimeGenreCountAggregateOutputType | null
    _min: AnimeGenreMinAggregateOutputType | null
    _max: AnimeGenreMaxAggregateOutputType | null
  }

  type GetAnimeGenreGroupByPayload<T extends AnimeGenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnimeGenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimeGenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimeGenreGroupByOutputType[P]>
            : GetScalarType<T[P], AnimeGenreGroupByOutputType[P]>
        }
      >
    >


  export type AnimeGenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    animes?: boolean | AnimeGenre$animesArgs<ExtArgs>
    _count?: boolean | AnimeGenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animeGenre"]>

  export type AnimeGenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["animeGenre"]>

  export type AnimeGenreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["animeGenre"]>

  export type AnimeGenreSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type AnimeGenreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["animeGenre"]>
  export type AnimeGenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animes?: boolean | AnimeGenre$animesArgs<ExtArgs>
    _count?: boolean | AnimeGenreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnimeGenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AnimeGenreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AnimeGenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnimeGenre"
    objects: {
      /**
       * Зв'язок жанру і аніме
       */
      animes: Prisma.$AnimeGenreOnAnimePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      /**
       * Назва жанру
       */
      name: string
    }, ExtArgs["result"]["animeGenre"]>
    composites: {}
  }

  type AnimeGenreGetPayload<S extends boolean | null | undefined | AnimeGenreDefaultArgs> = $Result.GetResult<Prisma.$AnimeGenrePayload, S>

  type AnimeGenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnimeGenreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnimeGenreCountAggregateInputType | true
    }

  export interface AnimeGenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnimeGenre'], meta: { name: 'AnimeGenre' } }
    /**
     * Find zero or one AnimeGenre that matches the filter.
     * @param {AnimeGenreFindUniqueArgs} args - Arguments to find a AnimeGenre
     * @example
     * // Get one AnimeGenre
     * const animeGenre = await prisma.animeGenre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnimeGenreFindUniqueArgs>(args: SelectSubset<T, AnimeGenreFindUniqueArgs<ExtArgs>>): Prisma__AnimeGenreClient<$Result.GetResult<Prisma.$AnimeGenrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnimeGenre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnimeGenreFindUniqueOrThrowArgs} args - Arguments to find a AnimeGenre
     * @example
     * // Get one AnimeGenre
     * const animeGenre = await prisma.animeGenre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnimeGenreFindUniqueOrThrowArgs>(args: SelectSubset<T, AnimeGenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnimeGenreClient<$Result.GetResult<Prisma.$AnimeGenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnimeGenre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeGenreFindFirstArgs} args - Arguments to find a AnimeGenre
     * @example
     * // Get one AnimeGenre
     * const animeGenre = await prisma.animeGenre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnimeGenreFindFirstArgs>(args?: SelectSubset<T, AnimeGenreFindFirstArgs<ExtArgs>>): Prisma__AnimeGenreClient<$Result.GetResult<Prisma.$AnimeGenrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnimeGenre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeGenreFindFirstOrThrowArgs} args - Arguments to find a AnimeGenre
     * @example
     * // Get one AnimeGenre
     * const animeGenre = await prisma.animeGenre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnimeGenreFindFirstOrThrowArgs>(args?: SelectSubset<T, AnimeGenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnimeGenreClient<$Result.GetResult<Prisma.$AnimeGenrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnimeGenres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeGenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnimeGenres
     * const animeGenres = await prisma.animeGenre.findMany()
     * 
     * // Get first 10 AnimeGenres
     * const animeGenres = await prisma.animeGenre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const animeGenreWithIdOnly = await prisma.animeGenre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnimeGenreFindManyArgs>(args?: SelectSubset<T, AnimeGenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeGenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnimeGenre.
     * @param {AnimeGenreCreateArgs} args - Arguments to create a AnimeGenre.
     * @example
     * // Create one AnimeGenre
     * const AnimeGenre = await prisma.animeGenre.create({
     *   data: {
     *     // ... data to create a AnimeGenre
     *   }
     * })
     * 
     */
    create<T extends AnimeGenreCreateArgs>(args: SelectSubset<T, AnimeGenreCreateArgs<ExtArgs>>): Prisma__AnimeGenreClient<$Result.GetResult<Prisma.$AnimeGenrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnimeGenres.
     * @param {AnimeGenreCreateManyArgs} args - Arguments to create many AnimeGenres.
     * @example
     * // Create many AnimeGenres
     * const animeGenre = await prisma.animeGenre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnimeGenreCreateManyArgs>(args?: SelectSubset<T, AnimeGenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnimeGenres and returns the data saved in the database.
     * @param {AnimeGenreCreateManyAndReturnArgs} args - Arguments to create many AnimeGenres.
     * @example
     * // Create many AnimeGenres
     * const animeGenre = await prisma.animeGenre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnimeGenres and only return the `id`
     * const animeGenreWithIdOnly = await prisma.animeGenre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnimeGenreCreateManyAndReturnArgs>(args?: SelectSubset<T, AnimeGenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeGenrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnimeGenre.
     * @param {AnimeGenreDeleteArgs} args - Arguments to delete one AnimeGenre.
     * @example
     * // Delete one AnimeGenre
     * const AnimeGenre = await prisma.animeGenre.delete({
     *   where: {
     *     // ... filter to delete one AnimeGenre
     *   }
     * })
     * 
     */
    delete<T extends AnimeGenreDeleteArgs>(args: SelectSubset<T, AnimeGenreDeleteArgs<ExtArgs>>): Prisma__AnimeGenreClient<$Result.GetResult<Prisma.$AnimeGenrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnimeGenre.
     * @param {AnimeGenreUpdateArgs} args - Arguments to update one AnimeGenre.
     * @example
     * // Update one AnimeGenre
     * const animeGenre = await prisma.animeGenre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnimeGenreUpdateArgs>(args: SelectSubset<T, AnimeGenreUpdateArgs<ExtArgs>>): Prisma__AnimeGenreClient<$Result.GetResult<Prisma.$AnimeGenrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnimeGenres.
     * @param {AnimeGenreDeleteManyArgs} args - Arguments to filter AnimeGenres to delete.
     * @example
     * // Delete a few AnimeGenres
     * const { count } = await prisma.animeGenre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnimeGenreDeleteManyArgs>(args?: SelectSubset<T, AnimeGenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnimeGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeGenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnimeGenres
     * const animeGenre = await prisma.animeGenre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnimeGenreUpdateManyArgs>(args: SelectSubset<T, AnimeGenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnimeGenres and returns the data updated in the database.
     * @param {AnimeGenreUpdateManyAndReturnArgs} args - Arguments to update many AnimeGenres.
     * @example
     * // Update many AnimeGenres
     * const animeGenre = await prisma.animeGenre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnimeGenres and only return the `id`
     * const animeGenreWithIdOnly = await prisma.animeGenre.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnimeGenreUpdateManyAndReturnArgs>(args: SelectSubset<T, AnimeGenreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeGenrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnimeGenre.
     * @param {AnimeGenreUpsertArgs} args - Arguments to update or create a AnimeGenre.
     * @example
     * // Update or create a AnimeGenre
     * const animeGenre = await prisma.animeGenre.upsert({
     *   create: {
     *     // ... data to create a AnimeGenre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnimeGenre we want to update
     *   }
     * })
     */
    upsert<T extends AnimeGenreUpsertArgs>(args: SelectSubset<T, AnimeGenreUpsertArgs<ExtArgs>>): Prisma__AnimeGenreClient<$Result.GetResult<Prisma.$AnimeGenrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnimeGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeGenreCountArgs} args - Arguments to filter AnimeGenres to count.
     * @example
     * // Count the number of AnimeGenres
     * const count = await prisma.animeGenre.count({
     *   where: {
     *     // ... the filter for the AnimeGenres we want to count
     *   }
     * })
    **/
    count<T extends AnimeGenreCountArgs>(
      args?: Subset<T, AnimeGenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimeGenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnimeGenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeGenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnimeGenreAggregateArgs>(args: Subset<T, AnimeGenreAggregateArgs>): Prisma.PrismaPromise<GetAnimeGenreAggregateType<T>>

    /**
     * Group by AnimeGenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeGenreGroupByArgs} args - Group by arguments.
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
      T extends AnimeGenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimeGenreGroupByArgs['orderBy'] }
        : { orderBy?: AnimeGenreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnimeGenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimeGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnimeGenre model
   */
  readonly fields: AnimeGenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnimeGenre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnimeGenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    animes<T extends AnimeGenre$animesArgs<ExtArgs> = {}>(args?: Subset<T, AnimeGenre$animesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeGenreOnAnimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AnimeGenre model
   */
  interface AnimeGenreFieldRefs {
    readonly id: FieldRef<"AnimeGenre", 'String'>
    readonly name: FieldRef<"AnimeGenre", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AnimeGenre findUnique
   */
  export type AnimeGenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeGenre
     */
    select?: AnimeGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeGenre
     */
    omit?: AnimeGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeGenreInclude<ExtArgs> | null
    /**
     * Filter, which AnimeGenre to fetch.
     */
    where: AnimeGenreWhereUniqueInput
  }

  /**
   * AnimeGenre findUniqueOrThrow
   */
  export type AnimeGenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeGenre
     */
    select?: AnimeGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeGenre
     */
    omit?: AnimeGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeGenreInclude<ExtArgs> | null
    /**
     * Filter, which AnimeGenre to fetch.
     */
    where: AnimeGenreWhereUniqueInput
  }

  /**
   * AnimeGenre findFirst
   */
  export type AnimeGenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeGenre
     */
    select?: AnimeGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeGenre
     */
    omit?: AnimeGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeGenreInclude<ExtArgs> | null
    /**
     * Filter, which AnimeGenre to fetch.
     */
    where?: AnimeGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeGenres to fetch.
     */
    orderBy?: AnimeGenreOrderByWithRelationInput | AnimeGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnimeGenres.
     */
    cursor?: AnimeGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnimeGenres.
     */
    distinct?: AnimeGenreScalarFieldEnum | AnimeGenreScalarFieldEnum[]
  }

  /**
   * AnimeGenre findFirstOrThrow
   */
  export type AnimeGenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeGenre
     */
    select?: AnimeGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeGenre
     */
    omit?: AnimeGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeGenreInclude<ExtArgs> | null
    /**
     * Filter, which AnimeGenre to fetch.
     */
    where?: AnimeGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeGenres to fetch.
     */
    orderBy?: AnimeGenreOrderByWithRelationInput | AnimeGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnimeGenres.
     */
    cursor?: AnimeGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnimeGenres.
     */
    distinct?: AnimeGenreScalarFieldEnum | AnimeGenreScalarFieldEnum[]
  }

  /**
   * AnimeGenre findMany
   */
  export type AnimeGenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeGenre
     */
    select?: AnimeGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeGenre
     */
    omit?: AnimeGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeGenreInclude<ExtArgs> | null
    /**
     * Filter, which AnimeGenres to fetch.
     */
    where?: AnimeGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeGenres to fetch.
     */
    orderBy?: AnimeGenreOrderByWithRelationInput | AnimeGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnimeGenres.
     */
    cursor?: AnimeGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeGenres.
     */
    skip?: number
    distinct?: AnimeGenreScalarFieldEnum | AnimeGenreScalarFieldEnum[]
  }

  /**
   * AnimeGenre create
   */
  export type AnimeGenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeGenre
     */
    select?: AnimeGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeGenre
     */
    omit?: AnimeGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeGenreInclude<ExtArgs> | null
    /**
     * The data needed to create a AnimeGenre.
     */
    data: XOR<AnimeGenreCreateInput, AnimeGenreUncheckedCreateInput>
  }

  /**
   * AnimeGenre createMany
   */
  export type AnimeGenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnimeGenres.
     */
    data: AnimeGenreCreateManyInput | AnimeGenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnimeGenre createManyAndReturn
   */
  export type AnimeGenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeGenre
     */
    select?: AnimeGenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeGenre
     */
    omit?: AnimeGenreOmit<ExtArgs> | null
    /**
     * The data used to create many AnimeGenres.
     */
    data: AnimeGenreCreateManyInput | AnimeGenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnimeGenre update
   */
  export type AnimeGenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeGenre
     */
    select?: AnimeGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeGenre
     */
    omit?: AnimeGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeGenreInclude<ExtArgs> | null
    /**
     * The data needed to update a AnimeGenre.
     */
    data: XOR<AnimeGenreUpdateInput, AnimeGenreUncheckedUpdateInput>
    /**
     * Choose, which AnimeGenre to update.
     */
    where: AnimeGenreWhereUniqueInput
  }

  /**
   * AnimeGenre updateMany
   */
  export type AnimeGenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnimeGenres.
     */
    data: XOR<AnimeGenreUpdateManyMutationInput, AnimeGenreUncheckedUpdateManyInput>
    /**
     * Filter which AnimeGenres to update
     */
    where?: AnimeGenreWhereInput
    /**
     * Limit how many AnimeGenres to update.
     */
    limit?: number
  }

  /**
   * AnimeGenre updateManyAndReturn
   */
  export type AnimeGenreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeGenre
     */
    select?: AnimeGenreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeGenre
     */
    omit?: AnimeGenreOmit<ExtArgs> | null
    /**
     * The data used to update AnimeGenres.
     */
    data: XOR<AnimeGenreUpdateManyMutationInput, AnimeGenreUncheckedUpdateManyInput>
    /**
     * Filter which AnimeGenres to update
     */
    where?: AnimeGenreWhereInput
    /**
     * Limit how many AnimeGenres to update.
     */
    limit?: number
  }

  /**
   * AnimeGenre upsert
   */
  export type AnimeGenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeGenre
     */
    select?: AnimeGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeGenre
     */
    omit?: AnimeGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeGenreInclude<ExtArgs> | null
    /**
     * The filter to search for the AnimeGenre to update in case it exists.
     */
    where: AnimeGenreWhereUniqueInput
    /**
     * In case the AnimeGenre found by the `where` argument doesn't exist, create a new AnimeGenre with this data.
     */
    create: XOR<AnimeGenreCreateInput, AnimeGenreUncheckedCreateInput>
    /**
     * In case the AnimeGenre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnimeGenreUpdateInput, AnimeGenreUncheckedUpdateInput>
  }

  /**
   * AnimeGenre delete
   */
  export type AnimeGenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeGenre
     */
    select?: AnimeGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeGenre
     */
    omit?: AnimeGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeGenreInclude<ExtArgs> | null
    /**
     * Filter which AnimeGenre to delete.
     */
    where: AnimeGenreWhereUniqueInput
  }

  /**
   * AnimeGenre deleteMany
   */
  export type AnimeGenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnimeGenres to delete
     */
    where?: AnimeGenreWhereInput
    /**
     * Limit how many AnimeGenres to delete.
     */
    limit?: number
  }

  /**
   * AnimeGenre.animes
   */
  export type AnimeGenre$animesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeGenreOnAnime
     */
    select?: AnimeGenreOnAnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeGenreOnAnime
     */
    omit?: AnimeGenreOnAnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeGenreOnAnimeInclude<ExtArgs> | null
    where?: AnimeGenreOnAnimeWhereInput
    orderBy?: AnimeGenreOnAnimeOrderByWithRelationInput | AnimeGenreOnAnimeOrderByWithRelationInput[]
    cursor?: AnimeGenreOnAnimeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimeGenreOnAnimeScalarFieldEnum | AnimeGenreOnAnimeScalarFieldEnum[]
  }

  /**
   * AnimeGenre without action
   */
  export type AnimeGenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeGenre
     */
    select?: AnimeGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeGenre
     */
    omit?: AnimeGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeGenreInclude<ExtArgs> | null
  }


  /**
   * Model MangaGenre
   */

  export type AggregateMangaGenre = {
    _count: MangaGenreCountAggregateOutputType | null
    _min: MangaGenreMinAggregateOutputType | null
    _max: MangaGenreMaxAggregateOutputType | null
  }

  export type MangaGenreMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type MangaGenreMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type MangaGenreCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type MangaGenreMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type MangaGenreMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type MangaGenreCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type MangaGenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MangaGenre to aggregate.
     */
    where?: MangaGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MangaGenres to fetch.
     */
    orderBy?: MangaGenreOrderByWithRelationInput | MangaGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MangaGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MangaGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MangaGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MangaGenres
    **/
    _count?: true | MangaGenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MangaGenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MangaGenreMaxAggregateInputType
  }

  export type GetMangaGenreAggregateType<T extends MangaGenreAggregateArgs> = {
        [P in keyof T & keyof AggregateMangaGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMangaGenre[P]>
      : GetScalarType<T[P], AggregateMangaGenre[P]>
  }




  export type MangaGenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MangaGenreWhereInput
    orderBy?: MangaGenreOrderByWithAggregationInput | MangaGenreOrderByWithAggregationInput[]
    by: MangaGenreScalarFieldEnum[] | MangaGenreScalarFieldEnum
    having?: MangaGenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MangaGenreCountAggregateInputType | true
    _min?: MangaGenreMinAggregateInputType
    _max?: MangaGenreMaxAggregateInputType
  }

  export type MangaGenreGroupByOutputType = {
    id: string
    name: string
    _count: MangaGenreCountAggregateOutputType | null
    _min: MangaGenreMinAggregateOutputType | null
    _max: MangaGenreMaxAggregateOutputType | null
  }

  type GetMangaGenreGroupByPayload<T extends MangaGenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MangaGenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MangaGenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MangaGenreGroupByOutputType[P]>
            : GetScalarType<T[P], MangaGenreGroupByOutputType[P]>
        }
      >
    >


  export type MangaGenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mangas?: boolean | MangaGenre$mangasArgs<ExtArgs>
    _count?: boolean | MangaGenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mangaGenre"]>

  export type MangaGenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["mangaGenre"]>

  export type MangaGenreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["mangaGenre"]>

  export type MangaGenreSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type MangaGenreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["mangaGenre"]>
  export type MangaGenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mangas?: boolean | MangaGenre$mangasArgs<ExtArgs>
    _count?: boolean | MangaGenreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MangaGenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MangaGenreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MangaGenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MangaGenre"
    objects: {
      /**
       * Зв'язок жанру і манги
       */
      mangas: Prisma.$MangaGenreOnMangaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      /**
       * Назва жанру
       */
      name: string
    }, ExtArgs["result"]["mangaGenre"]>
    composites: {}
  }

  type MangaGenreGetPayload<S extends boolean | null | undefined | MangaGenreDefaultArgs> = $Result.GetResult<Prisma.$MangaGenrePayload, S>

  type MangaGenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MangaGenreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MangaGenreCountAggregateInputType | true
    }

  export interface MangaGenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MangaGenre'], meta: { name: 'MangaGenre' } }
    /**
     * Find zero or one MangaGenre that matches the filter.
     * @param {MangaGenreFindUniqueArgs} args - Arguments to find a MangaGenre
     * @example
     * // Get one MangaGenre
     * const mangaGenre = await prisma.mangaGenre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MangaGenreFindUniqueArgs>(args: SelectSubset<T, MangaGenreFindUniqueArgs<ExtArgs>>): Prisma__MangaGenreClient<$Result.GetResult<Prisma.$MangaGenrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MangaGenre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MangaGenreFindUniqueOrThrowArgs} args - Arguments to find a MangaGenre
     * @example
     * // Get one MangaGenre
     * const mangaGenre = await prisma.mangaGenre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MangaGenreFindUniqueOrThrowArgs>(args: SelectSubset<T, MangaGenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MangaGenreClient<$Result.GetResult<Prisma.$MangaGenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MangaGenre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaGenreFindFirstArgs} args - Arguments to find a MangaGenre
     * @example
     * // Get one MangaGenre
     * const mangaGenre = await prisma.mangaGenre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MangaGenreFindFirstArgs>(args?: SelectSubset<T, MangaGenreFindFirstArgs<ExtArgs>>): Prisma__MangaGenreClient<$Result.GetResult<Prisma.$MangaGenrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MangaGenre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaGenreFindFirstOrThrowArgs} args - Arguments to find a MangaGenre
     * @example
     * // Get one MangaGenre
     * const mangaGenre = await prisma.mangaGenre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MangaGenreFindFirstOrThrowArgs>(args?: SelectSubset<T, MangaGenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__MangaGenreClient<$Result.GetResult<Prisma.$MangaGenrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MangaGenres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaGenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MangaGenres
     * const mangaGenres = await prisma.mangaGenre.findMany()
     * 
     * // Get first 10 MangaGenres
     * const mangaGenres = await prisma.mangaGenre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mangaGenreWithIdOnly = await prisma.mangaGenre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MangaGenreFindManyArgs>(args?: SelectSubset<T, MangaGenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangaGenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MangaGenre.
     * @param {MangaGenreCreateArgs} args - Arguments to create a MangaGenre.
     * @example
     * // Create one MangaGenre
     * const MangaGenre = await prisma.mangaGenre.create({
     *   data: {
     *     // ... data to create a MangaGenre
     *   }
     * })
     * 
     */
    create<T extends MangaGenreCreateArgs>(args: SelectSubset<T, MangaGenreCreateArgs<ExtArgs>>): Prisma__MangaGenreClient<$Result.GetResult<Prisma.$MangaGenrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MangaGenres.
     * @param {MangaGenreCreateManyArgs} args - Arguments to create many MangaGenres.
     * @example
     * // Create many MangaGenres
     * const mangaGenre = await prisma.mangaGenre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MangaGenreCreateManyArgs>(args?: SelectSubset<T, MangaGenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MangaGenres and returns the data saved in the database.
     * @param {MangaGenreCreateManyAndReturnArgs} args - Arguments to create many MangaGenres.
     * @example
     * // Create many MangaGenres
     * const mangaGenre = await prisma.mangaGenre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MangaGenres and only return the `id`
     * const mangaGenreWithIdOnly = await prisma.mangaGenre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MangaGenreCreateManyAndReturnArgs>(args?: SelectSubset<T, MangaGenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangaGenrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MangaGenre.
     * @param {MangaGenreDeleteArgs} args - Arguments to delete one MangaGenre.
     * @example
     * // Delete one MangaGenre
     * const MangaGenre = await prisma.mangaGenre.delete({
     *   where: {
     *     // ... filter to delete one MangaGenre
     *   }
     * })
     * 
     */
    delete<T extends MangaGenreDeleteArgs>(args: SelectSubset<T, MangaGenreDeleteArgs<ExtArgs>>): Prisma__MangaGenreClient<$Result.GetResult<Prisma.$MangaGenrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MangaGenre.
     * @param {MangaGenreUpdateArgs} args - Arguments to update one MangaGenre.
     * @example
     * // Update one MangaGenre
     * const mangaGenre = await prisma.mangaGenre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MangaGenreUpdateArgs>(args: SelectSubset<T, MangaGenreUpdateArgs<ExtArgs>>): Prisma__MangaGenreClient<$Result.GetResult<Prisma.$MangaGenrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MangaGenres.
     * @param {MangaGenreDeleteManyArgs} args - Arguments to filter MangaGenres to delete.
     * @example
     * // Delete a few MangaGenres
     * const { count } = await prisma.mangaGenre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MangaGenreDeleteManyArgs>(args?: SelectSubset<T, MangaGenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MangaGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaGenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MangaGenres
     * const mangaGenre = await prisma.mangaGenre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MangaGenreUpdateManyArgs>(args: SelectSubset<T, MangaGenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MangaGenres and returns the data updated in the database.
     * @param {MangaGenreUpdateManyAndReturnArgs} args - Arguments to update many MangaGenres.
     * @example
     * // Update many MangaGenres
     * const mangaGenre = await prisma.mangaGenre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MangaGenres and only return the `id`
     * const mangaGenreWithIdOnly = await prisma.mangaGenre.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MangaGenreUpdateManyAndReturnArgs>(args: SelectSubset<T, MangaGenreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangaGenrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MangaGenre.
     * @param {MangaGenreUpsertArgs} args - Arguments to update or create a MangaGenre.
     * @example
     * // Update or create a MangaGenre
     * const mangaGenre = await prisma.mangaGenre.upsert({
     *   create: {
     *     // ... data to create a MangaGenre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MangaGenre we want to update
     *   }
     * })
     */
    upsert<T extends MangaGenreUpsertArgs>(args: SelectSubset<T, MangaGenreUpsertArgs<ExtArgs>>): Prisma__MangaGenreClient<$Result.GetResult<Prisma.$MangaGenrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MangaGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaGenreCountArgs} args - Arguments to filter MangaGenres to count.
     * @example
     * // Count the number of MangaGenres
     * const count = await prisma.mangaGenre.count({
     *   where: {
     *     // ... the filter for the MangaGenres we want to count
     *   }
     * })
    **/
    count<T extends MangaGenreCountArgs>(
      args?: Subset<T, MangaGenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MangaGenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MangaGenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaGenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MangaGenreAggregateArgs>(args: Subset<T, MangaGenreAggregateArgs>): Prisma.PrismaPromise<GetMangaGenreAggregateType<T>>

    /**
     * Group by MangaGenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaGenreGroupByArgs} args - Group by arguments.
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
      T extends MangaGenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MangaGenreGroupByArgs['orderBy'] }
        : { orderBy?: MangaGenreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MangaGenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMangaGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MangaGenre model
   */
  readonly fields: MangaGenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MangaGenre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MangaGenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mangas<T extends MangaGenre$mangasArgs<ExtArgs> = {}>(args?: Subset<T, MangaGenre$mangasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangaGenreOnMangaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MangaGenre model
   */
  interface MangaGenreFieldRefs {
    readonly id: FieldRef<"MangaGenre", 'String'>
    readonly name: FieldRef<"MangaGenre", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MangaGenre findUnique
   */
  export type MangaGenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaGenre
     */
    select?: MangaGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaGenre
     */
    omit?: MangaGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaGenreInclude<ExtArgs> | null
    /**
     * Filter, which MangaGenre to fetch.
     */
    where: MangaGenreWhereUniqueInput
  }

  /**
   * MangaGenre findUniqueOrThrow
   */
  export type MangaGenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaGenre
     */
    select?: MangaGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaGenre
     */
    omit?: MangaGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaGenreInclude<ExtArgs> | null
    /**
     * Filter, which MangaGenre to fetch.
     */
    where: MangaGenreWhereUniqueInput
  }

  /**
   * MangaGenre findFirst
   */
  export type MangaGenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaGenre
     */
    select?: MangaGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaGenre
     */
    omit?: MangaGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaGenreInclude<ExtArgs> | null
    /**
     * Filter, which MangaGenre to fetch.
     */
    where?: MangaGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MangaGenres to fetch.
     */
    orderBy?: MangaGenreOrderByWithRelationInput | MangaGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MangaGenres.
     */
    cursor?: MangaGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MangaGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MangaGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MangaGenres.
     */
    distinct?: MangaGenreScalarFieldEnum | MangaGenreScalarFieldEnum[]
  }

  /**
   * MangaGenre findFirstOrThrow
   */
  export type MangaGenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaGenre
     */
    select?: MangaGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaGenre
     */
    omit?: MangaGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaGenreInclude<ExtArgs> | null
    /**
     * Filter, which MangaGenre to fetch.
     */
    where?: MangaGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MangaGenres to fetch.
     */
    orderBy?: MangaGenreOrderByWithRelationInput | MangaGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MangaGenres.
     */
    cursor?: MangaGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MangaGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MangaGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MangaGenres.
     */
    distinct?: MangaGenreScalarFieldEnum | MangaGenreScalarFieldEnum[]
  }

  /**
   * MangaGenre findMany
   */
  export type MangaGenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaGenre
     */
    select?: MangaGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaGenre
     */
    omit?: MangaGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaGenreInclude<ExtArgs> | null
    /**
     * Filter, which MangaGenres to fetch.
     */
    where?: MangaGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MangaGenres to fetch.
     */
    orderBy?: MangaGenreOrderByWithRelationInput | MangaGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MangaGenres.
     */
    cursor?: MangaGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MangaGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MangaGenres.
     */
    skip?: number
    distinct?: MangaGenreScalarFieldEnum | MangaGenreScalarFieldEnum[]
  }

  /**
   * MangaGenre create
   */
  export type MangaGenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaGenre
     */
    select?: MangaGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaGenre
     */
    omit?: MangaGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaGenreInclude<ExtArgs> | null
    /**
     * The data needed to create a MangaGenre.
     */
    data: XOR<MangaGenreCreateInput, MangaGenreUncheckedCreateInput>
  }

  /**
   * MangaGenre createMany
   */
  export type MangaGenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MangaGenres.
     */
    data: MangaGenreCreateManyInput | MangaGenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MangaGenre createManyAndReturn
   */
  export type MangaGenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaGenre
     */
    select?: MangaGenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MangaGenre
     */
    omit?: MangaGenreOmit<ExtArgs> | null
    /**
     * The data used to create many MangaGenres.
     */
    data: MangaGenreCreateManyInput | MangaGenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MangaGenre update
   */
  export type MangaGenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaGenre
     */
    select?: MangaGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaGenre
     */
    omit?: MangaGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaGenreInclude<ExtArgs> | null
    /**
     * The data needed to update a MangaGenre.
     */
    data: XOR<MangaGenreUpdateInput, MangaGenreUncheckedUpdateInput>
    /**
     * Choose, which MangaGenre to update.
     */
    where: MangaGenreWhereUniqueInput
  }

  /**
   * MangaGenre updateMany
   */
  export type MangaGenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MangaGenres.
     */
    data: XOR<MangaGenreUpdateManyMutationInput, MangaGenreUncheckedUpdateManyInput>
    /**
     * Filter which MangaGenres to update
     */
    where?: MangaGenreWhereInput
    /**
     * Limit how many MangaGenres to update.
     */
    limit?: number
  }

  /**
   * MangaGenre updateManyAndReturn
   */
  export type MangaGenreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaGenre
     */
    select?: MangaGenreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MangaGenre
     */
    omit?: MangaGenreOmit<ExtArgs> | null
    /**
     * The data used to update MangaGenres.
     */
    data: XOR<MangaGenreUpdateManyMutationInput, MangaGenreUncheckedUpdateManyInput>
    /**
     * Filter which MangaGenres to update
     */
    where?: MangaGenreWhereInput
    /**
     * Limit how many MangaGenres to update.
     */
    limit?: number
  }

  /**
   * MangaGenre upsert
   */
  export type MangaGenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaGenre
     */
    select?: MangaGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaGenre
     */
    omit?: MangaGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaGenreInclude<ExtArgs> | null
    /**
     * The filter to search for the MangaGenre to update in case it exists.
     */
    where: MangaGenreWhereUniqueInput
    /**
     * In case the MangaGenre found by the `where` argument doesn't exist, create a new MangaGenre with this data.
     */
    create: XOR<MangaGenreCreateInput, MangaGenreUncheckedCreateInput>
    /**
     * In case the MangaGenre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MangaGenreUpdateInput, MangaGenreUncheckedUpdateInput>
  }

  /**
   * MangaGenre delete
   */
  export type MangaGenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaGenre
     */
    select?: MangaGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaGenre
     */
    omit?: MangaGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaGenreInclude<ExtArgs> | null
    /**
     * Filter which MangaGenre to delete.
     */
    where: MangaGenreWhereUniqueInput
  }

  /**
   * MangaGenre deleteMany
   */
  export type MangaGenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MangaGenres to delete
     */
    where?: MangaGenreWhereInput
    /**
     * Limit how many MangaGenres to delete.
     */
    limit?: number
  }

  /**
   * MangaGenre.mangas
   */
  export type MangaGenre$mangasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaGenreOnManga
     */
    select?: MangaGenreOnMangaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaGenreOnManga
     */
    omit?: MangaGenreOnMangaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaGenreOnMangaInclude<ExtArgs> | null
    where?: MangaGenreOnMangaWhereInput
    orderBy?: MangaGenreOnMangaOrderByWithRelationInput | MangaGenreOnMangaOrderByWithRelationInput[]
    cursor?: MangaGenreOnMangaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MangaGenreOnMangaScalarFieldEnum | MangaGenreOnMangaScalarFieldEnum[]
  }

  /**
   * MangaGenre without action
   */
  export type MangaGenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaGenre
     */
    select?: MangaGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaGenre
     */
    omit?: MangaGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaGenreInclude<ExtArgs> | null
  }


  /**
   * Model AnimeGenreOnAnime
   */

  export type AggregateAnimeGenreOnAnime = {
    _count: AnimeGenreOnAnimeCountAggregateOutputType | null
    _min: AnimeGenreOnAnimeMinAggregateOutputType | null
    _max: AnimeGenreOnAnimeMaxAggregateOutputType | null
  }

  export type AnimeGenreOnAnimeMinAggregateOutputType = {
    animeId: string | null
    genreId: string | null
  }

  export type AnimeGenreOnAnimeMaxAggregateOutputType = {
    animeId: string | null
    genreId: string | null
  }

  export type AnimeGenreOnAnimeCountAggregateOutputType = {
    animeId: number
    genreId: number
    _all: number
  }


  export type AnimeGenreOnAnimeMinAggregateInputType = {
    animeId?: true
    genreId?: true
  }

  export type AnimeGenreOnAnimeMaxAggregateInputType = {
    animeId?: true
    genreId?: true
  }

  export type AnimeGenreOnAnimeCountAggregateInputType = {
    animeId?: true
    genreId?: true
    _all?: true
  }

  export type AnimeGenreOnAnimeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnimeGenreOnAnime to aggregate.
     */
    where?: AnimeGenreOnAnimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeGenreOnAnimes to fetch.
     */
    orderBy?: AnimeGenreOnAnimeOrderByWithRelationInput | AnimeGenreOnAnimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnimeGenreOnAnimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeGenreOnAnimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeGenreOnAnimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnimeGenreOnAnimes
    **/
    _count?: true | AnimeGenreOnAnimeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimeGenreOnAnimeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimeGenreOnAnimeMaxAggregateInputType
  }

  export type GetAnimeGenreOnAnimeAggregateType<T extends AnimeGenreOnAnimeAggregateArgs> = {
        [P in keyof T & keyof AggregateAnimeGenreOnAnime]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnimeGenreOnAnime[P]>
      : GetScalarType<T[P], AggregateAnimeGenreOnAnime[P]>
  }




  export type AnimeGenreOnAnimeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeGenreOnAnimeWhereInput
    orderBy?: AnimeGenreOnAnimeOrderByWithAggregationInput | AnimeGenreOnAnimeOrderByWithAggregationInput[]
    by: AnimeGenreOnAnimeScalarFieldEnum[] | AnimeGenreOnAnimeScalarFieldEnum
    having?: AnimeGenreOnAnimeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimeGenreOnAnimeCountAggregateInputType | true
    _min?: AnimeGenreOnAnimeMinAggregateInputType
    _max?: AnimeGenreOnAnimeMaxAggregateInputType
  }

  export type AnimeGenreOnAnimeGroupByOutputType = {
    animeId: string
    genreId: string
    _count: AnimeGenreOnAnimeCountAggregateOutputType | null
    _min: AnimeGenreOnAnimeMinAggregateOutputType | null
    _max: AnimeGenreOnAnimeMaxAggregateOutputType | null
  }

  type GetAnimeGenreOnAnimeGroupByPayload<T extends AnimeGenreOnAnimeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnimeGenreOnAnimeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimeGenreOnAnimeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimeGenreOnAnimeGroupByOutputType[P]>
            : GetScalarType<T[P], AnimeGenreOnAnimeGroupByOutputType[P]>
        }
      >
    >


  export type AnimeGenreOnAnimeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    animeId?: boolean
    genreId?: boolean
    anime?: boolean | AnimeDefaultArgs<ExtArgs>
    genre?: boolean | AnimeGenreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animeGenreOnAnime"]>

  export type AnimeGenreOnAnimeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    animeId?: boolean
    genreId?: boolean
    anime?: boolean | AnimeDefaultArgs<ExtArgs>
    genre?: boolean | AnimeGenreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animeGenreOnAnime"]>

  export type AnimeGenreOnAnimeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    animeId?: boolean
    genreId?: boolean
    anime?: boolean | AnimeDefaultArgs<ExtArgs>
    genre?: boolean | AnimeGenreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animeGenreOnAnime"]>

  export type AnimeGenreOnAnimeSelectScalar = {
    animeId?: boolean
    genreId?: boolean
  }

  export type AnimeGenreOnAnimeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"animeId" | "genreId", ExtArgs["result"]["animeGenreOnAnime"]>
  export type AnimeGenreOnAnimeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anime?: boolean | AnimeDefaultArgs<ExtArgs>
    genre?: boolean | AnimeGenreDefaultArgs<ExtArgs>
  }
  export type AnimeGenreOnAnimeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anime?: boolean | AnimeDefaultArgs<ExtArgs>
    genre?: boolean | AnimeGenreDefaultArgs<ExtArgs>
  }
  export type AnimeGenreOnAnimeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    anime?: boolean | AnimeDefaultArgs<ExtArgs>
    genre?: boolean | AnimeGenreDefaultArgs<ExtArgs>
  }

  export type $AnimeGenreOnAnimePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnimeGenreOnAnime"
    objects: {
      anime: Prisma.$AnimePayload<ExtArgs>
      genre: Prisma.$AnimeGenrePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      animeId: string
      genreId: string
    }, ExtArgs["result"]["animeGenreOnAnime"]>
    composites: {}
  }

  type AnimeGenreOnAnimeGetPayload<S extends boolean | null | undefined | AnimeGenreOnAnimeDefaultArgs> = $Result.GetResult<Prisma.$AnimeGenreOnAnimePayload, S>

  type AnimeGenreOnAnimeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnimeGenreOnAnimeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnimeGenreOnAnimeCountAggregateInputType | true
    }

  export interface AnimeGenreOnAnimeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnimeGenreOnAnime'], meta: { name: 'AnimeGenreOnAnime' } }
    /**
     * Find zero or one AnimeGenreOnAnime that matches the filter.
     * @param {AnimeGenreOnAnimeFindUniqueArgs} args - Arguments to find a AnimeGenreOnAnime
     * @example
     * // Get one AnimeGenreOnAnime
     * const animeGenreOnAnime = await prisma.animeGenreOnAnime.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnimeGenreOnAnimeFindUniqueArgs>(args: SelectSubset<T, AnimeGenreOnAnimeFindUniqueArgs<ExtArgs>>): Prisma__AnimeGenreOnAnimeClient<$Result.GetResult<Prisma.$AnimeGenreOnAnimePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnimeGenreOnAnime that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnimeGenreOnAnimeFindUniqueOrThrowArgs} args - Arguments to find a AnimeGenreOnAnime
     * @example
     * // Get one AnimeGenreOnAnime
     * const animeGenreOnAnime = await prisma.animeGenreOnAnime.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnimeGenreOnAnimeFindUniqueOrThrowArgs>(args: SelectSubset<T, AnimeGenreOnAnimeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnimeGenreOnAnimeClient<$Result.GetResult<Prisma.$AnimeGenreOnAnimePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnimeGenreOnAnime that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeGenreOnAnimeFindFirstArgs} args - Arguments to find a AnimeGenreOnAnime
     * @example
     * // Get one AnimeGenreOnAnime
     * const animeGenreOnAnime = await prisma.animeGenreOnAnime.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnimeGenreOnAnimeFindFirstArgs>(args?: SelectSubset<T, AnimeGenreOnAnimeFindFirstArgs<ExtArgs>>): Prisma__AnimeGenreOnAnimeClient<$Result.GetResult<Prisma.$AnimeGenreOnAnimePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnimeGenreOnAnime that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeGenreOnAnimeFindFirstOrThrowArgs} args - Arguments to find a AnimeGenreOnAnime
     * @example
     * // Get one AnimeGenreOnAnime
     * const animeGenreOnAnime = await prisma.animeGenreOnAnime.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnimeGenreOnAnimeFindFirstOrThrowArgs>(args?: SelectSubset<T, AnimeGenreOnAnimeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnimeGenreOnAnimeClient<$Result.GetResult<Prisma.$AnimeGenreOnAnimePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnimeGenreOnAnimes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeGenreOnAnimeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnimeGenreOnAnimes
     * const animeGenreOnAnimes = await prisma.animeGenreOnAnime.findMany()
     * 
     * // Get first 10 AnimeGenreOnAnimes
     * const animeGenreOnAnimes = await prisma.animeGenreOnAnime.findMany({ take: 10 })
     * 
     * // Only select the `animeId`
     * const animeGenreOnAnimeWithAnimeIdOnly = await prisma.animeGenreOnAnime.findMany({ select: { animeId: true } })
     * 
     */
    findMany<T extends AnimeGenreOnAnimeFindManyArgs>(args?: SelectSubset<T, AnimeGenreOnAnimeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeGenreOnAnimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnimeGenreOnAnime.
     * @param {AnimeGenreOnAnimeCreateArgs} args - Arguments to create a AnimeGenreOnAnime.
     * @example
     * // Create one AnimeGenreOnAnime
     * const AnimeGenreOnAnime = await prisma.animeGenreOnAnime.create({
     *   data: {
     *     // ... data to create a AnimeGenreOnAnime
     *   }
     * })
     * 
     */
    create<T extends AnimeGenreOnAnimeCreateArgs>(args: SelectSubset<T, AnimeGenreOnAnimeCreateArgs<ExtArgs>>): Prisma__AnimeGenreOnAnimeClient<$Result.GetResult<Prisma.$AnimeGenreOnAnimePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnimeGenreOnAnimes.
     * @param {AnimeGenreOnAnimeCreateManyArgs} args - Arguments to create many AnimeGenreOnAnimes.
     * @example
     * // Create many AnimeGenreOnAnimes
     * const animeGenreOnAnime = await prisma.animeGenreOnAnime.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnimeGenreOnAnimeCreateManyArgs>(args?: SelectSubset<T, AnimeGenreOnAnimeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnimeGenreOnAnimes and returns the data saved in the database.
     * @param {AnimeGenreOnAnimeCreateManyAndReturnArgs} args - Arguments to create many AnimeGenreOnAnimes.
     * @example
     * // Create many AnimeGenreOnAnimes
     * const animeGenreOnAnime = await prisma.animeGenreOnAnime.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnimeGenreOnAnimes and only return the `animeId`
     * const animeGenreOnAnimeWithAnimeIdOnly = await prisma.animeGenreOnAnime.createManyAndReturn({
     *   select: { animeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnimeGenreOnAnimeCreateManyAndReturnArgs>(args?: SelectSubset<T, AnimeGenreOnAnimeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeGenreOnAnimePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnimeGenreOnAnime.
     * @param {AnimeGenreOnAnimeDeleteArgs} args - Arguments to delete one AnimeGenreOnAnime.
     * @example
     * // Delete one AnimeGenreOnAnime
     * const AnimeGenreOnAnime = await prisma.animeGenreOnAnime.delete({
     *   where: {
     *     // ... filter to delete one AnimeGenreOnAnime
     *   }
     * })
     * 
     */
    delete<T extends AnimeGenreOnAnimeDeleteArgs>(args: SelectSubset<T, AnimeGenreOnAnimeDeleteArgs<ExtArgs>>): Prisma__AnimeGenreOnAnimeClient<$Result.GetResult<Prisma.$AnimeGenreOnAnimePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnimeGenreOnAnime.
     * @param {AnimeGenreOnAnimeUpdateArgs} args - Arguments to update one AnimeGenreOnAnime.
     * @example
     * // Update one AnimeGenreOnAnime
     * const animeGenreOnAnime = await prisma.animeGenreOnAnime.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnimeGenreOnAnimeUpdateArgs>(args: SelectSubset<T, AnimeGenreOnAnimeUpdateArgs<ExtArgs>>): Prisma__AnimeGenreOnAnimeClient<$Result.GetResult<Prisma.$AnimeGenreOnAnimePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnimeGenreOnAnimes.
     * @param {AnimeGenreOnAnimeDeleteManyArgs} args - Arguments to filter AnimeGenreOnAnimes to delete.
     * @example
     * // Delete a few AnimeGenreOnAnimes
     * const { count } = await prisma.animeGenreOnAnime.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnimeGenreOnAnimeDeleteManyArgs>(args?: SelectSubset<T, AnimeGenreOnAnimeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnimeGenreOnAnimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeGenreOnAnimeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnimeGenreOnAnimes
     * const animeGenreOnAnime = await prisma.animeGenreOnAnime.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnimeGenreOnAnimeUpdateManyArgs>(args: SelectSubset<T, AnimeGenreOnAnimeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnimeGenreOnAnimes and returns the data updated in the database.
     * @param {AnimeGenreOnAnimeUpdateManyAndReturnArgs} args - Arguments to update many AnimeGenreOnAnimes.
     * @example
     * // Update many AnimeGenreOnAnimes
     * const animeGenreOnAnime = await prisma.animeGenreOnAnime.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnimeGenreOnAnimes and only return the `animeId`
     * const animeGenreOnAnimeWithAnimeIdOnly = await prisma.animeGenreOnAnime.updateManyAndReturn({
     *   select: { animeId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnimeGenreOnAnimeUpdateManyAndReturnArgs>(args: SelectSubset<T, AnimeGenreOnAnimeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeGenreOnAnimePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnimeGenreOnAnime.
     * @param {AnimeGenreOnAnimeUpsertArgs} args - Arguments to update or create a AnimeGenreOnAnime.
     * @example
     * // Update or create a AnimeGenreOnAnime
     * const animeGenreOnAnime = await prisma.animeGenreOnAnime.upsert({
     *   create: {
     *     // ... data to create a AnimeGenreOnAnime
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnimeGenreOnAnime we want to update
     *   }
     * })
     */
    upsert<T extends AnimeGenreOnAnimeUpsertArgs>(args: SelectSubset<T, AnimeGenreOnAnimeUpsertArgs<ExtArgs>>): Prisma__AnimeGenreOnAnimeClient<$Result.GetResult<Prisma.$AnimeGenreOnAnimePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnimeGenreOnAnimes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeGenreOnAnimeCountArgs} args - Arguments to filter AnimeGenreOnAnimes to count.
     * @example
     * // Count the number of AnimeGenreOnAnimes
     * const count = await prisma.animeGenreOnAnime.count({
     *   where: {
     *     // ... the filter for the AnimeGenreOnAnimes we want to count
     *   }
     * })
    **/
    count<T extends AnimeGenreOnAnimeCountArgs>(
      args?: Subset<T, AnimeGenreOnAnimeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimeGenreOnAnimeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnimeGenreOnAnime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeGenreOnAnimeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnimeGenreOnAnimeAggregateArgs>(args: Subset<T, AnimeGenreOnAnimeAggregateArgs>): Prisma.PrismaPromise<GetAnimeGenreOnAnimeAggregateType<T>>

    /**
     * Group by AnimeGenreOnAnime.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeGenreOnAnimeGroupByArgs} args - Group by arguments.
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
      T extends AnimeGenreOnAnimeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimeGenreOnAnimeGroupByArgs['orderBy'] }
        : { orderBy?: AnimeGenreOnAnimeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnimeGenreOnAnimeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimeGenreOnAnimeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnimeGenreOnAnime model
   */
  readonly fields: AnimeGenreOnAnimeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnimeGenreOnAnime.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnimeGenreOnAnimeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    anime<T extends AnimeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimeDefaultArgs<ExtArgs>>): Prisma__AnimeClient<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    genre<T extends AnimeGenreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimeGenreDefaultArgs<ExtArgs>>): Prisma__AnimeGenreClient<$Result.GetResult<Prisma.$AnimeGenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AnimeGenreOnAnime model
   */
  interface AnimeGenreOnAnimeFieldRefs {
    readonly animeId: FieldRef<"AnimeGenreOnAnime", 'String'>
    readonly genreId: FieldRef<"AnimeGenreOnAnime", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AnimeGenreOnAnime findUnique
   */
  export type AnimeGenreOnAnimeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeGenreOnAnime
     */
    select?: AnimeGenreOnAnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeGenreOnAnime
     */
    omit?: AnimeGenreOnAnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeGenreOnAnimeInclude<ExtArgs> | null
    /**
     * Filter, which AnimeGenreOnAnime to fetch.
     */
    where: AnimeGenreOnAnimeWhereUniqueInput
  }

  /**
   * AnimeGenreOnAnime findUniqueOrThrow
   */
  export type AnimeGenreOnAnimeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeGenreOnAnime
     */
    select?: AnimeGenreOnAnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeGenreOnAnime
     */
    omit?: AnimeGenreOnAnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeGenreOnAnimeInclude<ExtArgs> | null
    /**
     * Filter, which AnimeGenreOnAnime to fetch.
     */
    where: AnimeGenreOnAnimeWhereUniqueInput
  }

  /**
   * AnimeGenreOnAnime findFirst
   */
  export type AnimeGenreOnAnimeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeGenreOnAnime
     */
    select?: AnimeGenreOnAnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeGenreOnAnime
     */
    omit?: AnimeGenreOnAnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeGenreOnAnimeInclude<ExtArgs> | null
    /**
     * Filter, which AnimeGenreOnAnime to fetch.
     */
    where?: AnimeGenreOnAnimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeGenreOnAnimes to fetch.
     */
    orderBy?: AnimeGenreOnAnimeOrderByWithRelationInput | AnimeGenreOnAnimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnimeGenreOnAnimes.
     */
    cursor?: AnimeGenreOnAnimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeGenreOnAnimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeGenreOnAnimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnimeGenreOnAnimes.
     */
    distinct?: AnimeGenreOnAnimeScalarFieldEnum | AnimeGenreOnAnimeScalarFieldEnum[]
  }

  /**
   * AnimeGenreOnAnime findFirstOrThrow
   */
  export type AnimeGenreOnAnimeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeGenreOnAnime
     */
    select?: AnimeGenreOnAnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeGenreOnAnime
     */
    omit?: AnimeGenreOnAnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeGenreOnAnimeInclude<ExtArgs> | null
    /**
     * Filter, which AnimeGenreOnAnime to fetch.
     */
    where?: AnimeGenreOnAnimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeGenreOnAnimes to fetch.
     */
    orderBy?: AnimeGenreOnAnimeOrderByWithRelationInput | AnimeGenreOnAnimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnimeGenreOnAnimes.
     */
    cursor?: AnimeGenreOnAnimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeGenreOnAnimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeGenreOnAnimes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnimeGenreOnAnimes.
     */
    distinct?: AnimeGenreOnAnimeScalarFieldEnum | AnimeGenreOnAnimeScalarFieldEnum[]
  }

  /**
   * AnimeGenreOnAnime findMany
   */
  export type AnimeGenreOnAnimeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeGenreOnAnime
     */
    select?: AnimeGenreOnAnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeGenreOnAnime
     */
    omit?: AnimeGenreOnAnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeGenreOnAnimeInclude<ExtArgs> | null
    /**
     * Filter, which AnimeGenreOnAnimes to fetch.
     */
    where?: AnimeGenreOnAnimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeGenreOnAnimes to fetch.
     */
    orderBy?: AnimeGenreOnAnimeOrderByWithRelationInput | AnimeGenreOnAnimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnimeGenreOnAnimes.
     */
    cursor?: AnimeGenreOnAnimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeGenreOnAnimes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeGenreOnAnimes.
     */
    skip?: number
    distinct?: AnimeGenreOnAnimeScalarFieldEnum | AnimeGenreOnAnimeScalarFieldEnum[]
  }

  /**
   * AnimeGenreOnAnime create
   */
  export type AnimeGenreOnAnimeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeGenreOnAnime
     */
    select?: AnimeGenreOnAnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeGenreOnAnime
     */
    omit?: AnimeGenreOnAnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeGenreOnAnimeInclude<ExtArgs> | null
    /**
     * The data needed to create a AnimeGenreOnAnime.
     */
    data: XOR<AnimeGenreOnAnimeCreateInput, AnimeGenreOnAnimeUncheckedCreateInput>
  }

  /**
   * AnimeGenreOnAnime createMany
   */
  export type AnimeGenreOnAnimeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnimeGenreOnAnimes.
     */
    data: AnimeGenreOnAnimeCreateManyInput | AnimeGenreOnAnimeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnimeGenreOnAnime createManyAndReturn
   */
  export type AnimeGenreOnAnimeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeGenreOnAnime
     */
    select?: AnimeGenreOnAnimeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeGenreOnAnime
     */
    omit?: AnimeGenreOnAnimeOmit<ExtArgs> | null
    /**
     * The data used to create many AnimeGenreOnAnimes.
     */
    data: AnimeGenreOnAnimeCreateManyInput | AnimeGenreOnAnimeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeGenreOnAnimeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnimeGenreOnAnime update
   */
  export type AnimeGenreOnAnimeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeGenreOnAnime
     */
    select?: AnimeGenreOnAnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeGenreOnAnime
     */
    omit?: AnimeGenreOnAnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeGenreOnAnimeInclude<ExtArgs> | null
    /**
     * The data needed to update a AnimeGenreOnAnime.
     */
    data: XOR<AnimeGenreOnAnimeUpdateInput, AnimeGenreOnAnimeUncheckedUpdateInput>
    /**
     * Choose, which AnimeGenreOnAnime to update.
     */
    where: AnimeGenreOnAnimeWhereUniqueInput
  }

  /**
   * AnimeGenreOnAnime updateMany
   */
  export type AnimeGenreOnAnimeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnimeGenreOnAnimes.
     */
    data: XOR<AnimeGenreOnAnimeUpdateManyMutationInput, AnimeGenreOnAnimeUncheckedUpdateManyInput>
    /**
     * Filter which AnimeGenreOnAnimes to update
     */
    where?: AnimeGenreOnAnimeWhereInput
    /**
     * Limit how many AnimeGenreOnAnimes to update.
     */
    limit?: number
  }

  /**
   * AnimeGenreOnAnime updateManyAndReturn
   */
  export type AnimeGenreOnAnimeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeGenreOnAnime
     */
    select?: AnimeGenreOnAnimeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeGenreOnAnime
     */
    omit?: AnimeGenreOnAnimeOmit<ExtArgs> | null
    /**
     * The data used to update AnimeGenreOnAnimes.
     */
    data: XOR<AnimeGenreOnAnimeUpdateManyMutationInput, AnimeGenreOnAnimeUncheckedUpdateManyInput>
    /**
     * Filter which AnimeGenreOnAnimes to update
     */
    where?: AnimeGenreOnAnimeWhereInput
    /**
     * Limit how many AnimeGenreOnAnimes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeGenreOnAnimeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnimeGenreOnAnime upsert
   */
  export type AnimeGenreOnAnimeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeGenreOnAnime
     */
    select?: AnimeGenreOnAnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeGenreOnAnime
     */
    omit?: AnimeGenreOnAnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeGenreOnAnimeInclude<ExtArgs> | null
    /**
     * The filter to search for the AnimeGenreOnAnime to update in case it exists.
     */
    where: AnimeGenreOnAnimeWhereUniqueInput
    /**
     * In case the AnimeGenreOnAnime found by the `where` argument doesn't exist, create a new AnimeGenreOnAnime with this data.
     */
    create: XOR<AnimeGenreOnAnimeCreateInput, AnimeGenreOnAnimeUncheckedCreateInput>
    /**
     * In case the AnimeGenreOnAnime was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnimeGenreOnAnimeUpdateInput, AnimeGenreOnAnimeUncheckedUpdateInput>
  }

  /**
   * AnimeGenreOnAnime delete
   */
  export type AnimeGenreOnAnimeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeGenreOnAnime
     */
    select?: AnimeGenreOnAnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeGenreOnAnime
     */
    omit?: AnimeGenreOnAnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeGenreOnAnimeInclude<ExtArgs> | null
    /**
     * Filter which AnimeGenreOnAnime to delete.
     */
    where: AnimeGenreOnAnimeWhereUniqueInput
  }

  /**
   * AnimeGenreOnAnime deleteMany
   */
  export type AnimeGenreOnAnimeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnimeGenreOnAnimes to delete
     */
    where?: AnimeGenreOnAnimeWhereInput
    /**
     * Limit how many AnimeGenreOnAnimes to delete.
     */
    limit?: number
  }

  /**
   * AnimeGenreOnAnime without action
   */
  export type AnimeGenreOnAnimeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeGenreOnAnime
     */
    select?: AnimeGenreOnAnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeGenreOnAnime
     */
    omit?: AnimeGenreOnAnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeGenreOnAnimeInclude<ExtArgs> | null
  }


  /**
   * Model MangaGenreOnManga
   */

  export type AggregateMangaGenreOnManga = {
    _count: MangaGenreOnMangaCountAggregateOutputType | null
    _min: MangaGenreOnMangaMinAggregateOutputType | null
    _max: MangaGenreOnMangaMaxAggregateOutputType | null
  }

  export type MangaGenreOnMangaMinAggregateOutputType = {
    mangaId: string | null
    genreId: string | null
  }

  export type MangaGenreOnMangaMaxAggregateOutputType = {
    mangaId: string | null
    genreId: string | null
  }

  export type MangaGenreOnMangaCountAggregateOutputType = {
    mangaId: number
    genreId: number
    _all: number
  }


  export type MangaGenreOnMangaMinAggregateInputType = {
    mangaId?: true
    genreId?: true
  }

  export type MangaGenreOnMangaMaxAggregateInputType = {
    mangaId?: true
    genreId?: true
  }

  export type MangaGenreOnMangaCountAggregateInputType = {
    mangaId?: true
    genreId?: true
    _all?: true
  }

  export type MangaGenreOnMangaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MangaGenreOnManga to aggregate.
     */
    where?: MangaGenreOnMangaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MangaGenreOnMangas to fetch.
     */
    orderBy?: MangaGenreOnMangaOrderByWithRelationInput | MangaGenreOnMangaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MangaGenreOnMangaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MangaGenreOnMangas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MangaGenreOnMangas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MangaGenreOnMangas
    **/
    _count?: true | MangaGenreOnMangaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MangaGenreOnMangaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MangaGenreOnMangaMaxAggregateInputType
  }

  export type GetMangaGenreOnMangaAggregateType<T extends MangaGenreOnMangaAggregateArgs> = {
        [P in keyof T & keyof AggregateMangaGenreOnManga]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMangaGenreOnManga[P]>
      : GetScalarType<T[P], AggregateMangaGenreOnManga[P]>
  }




  export type MangaGenreOnMangaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MangaGenreOnMangaWhereInput
    orderBy?: MangaGenreOnMangaOrderByWithAggregationInput | MangaGenreOnMangaOrderByWithAggregationInput[]
    by: MangaGenreOnMangaScalarFieldEnum[] | MangaGenreOnMangaScalarFieldEnum
    having?: MangaGenreOnMangaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MangaGenreOnMangaCountAggregateInputType | true
    _min?: MangaGenreOnMangaMinAggregateInputType
    _max?: MangaGenreOnMangaMaxAggregateInputType
  }

  export type MangaGenreOnMangaGroupByOutputType = {
    mangaId: string
    genreId: string
    _count: MangaGenreOnMangaCountAggregateOutputType | null
    _min: MangaGenreOnMangaMinAggregateOutputType | null
    _max: MangaGenreOnMangaMaxAggregateOutputType | null
  }

  type GetMangaGenreOnMangaGroupByPayload<T extends MangaGenreOnMangaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MangaGenreOnMangaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MangaGenreOnMangaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MangaGenreOnMangaGroupByOutputType[P]>
            : GetScalarType<T[P], MangaGenreOnMangaGroupByOutputType[P]>
        }
      >
    >


  export type MangaGenreOnMangaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mangaId?: boolean
    genreId?: boolean
    manga?: boolean | MangaDefaultArgs<ExtArgs>
    genre?: boolean | MangaGenreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mangaGenreOnManga"]>

  export type MangaGenreOnMangaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mangaId?: boolean
    genreId?: boolean
    manga?: boolean | MangaDefaultArgs<ExtArgs>
    genre?: boolean | MangaGenreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mangaGenreOnManga"]>

  export type MangaGenreOnMangaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mangaId?: boolean
    genreId?: boolean
    manga?: boolean | MangaDefaultArgs<ExtArgs>
    genre?: boolean | MangaGenreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mangaGenreOnManga"]>

  export type MangaGenreOnMangaSelectScalar = {
    mangaId?: boolean
    genreId?: boolean
  }

  export type MangaGenreOnMangaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"mangaId" | "genreId", ExtArgs["result"]["mangaGenreOnManga"]>
  export type MangaGenreOnMangaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manga?: boolean | MangaDefaultArgs<ExtArgs>
    genre?: boolean | MangaGenreDefaultArgs<ExtArgs>
  }
  export type MangaGenreOnMangaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manga?: boolean | MangaDefaultArgs<ExtArgs>
    genre?: boolean | MangaGenreDefaultArgs<ExtArgs>
  }
  export type MangaGenreOnMangaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    manga?: boolean | MangaDefaultArgs<ExtArgs>
    genre?: boolean | MangaGenreDefaultArgs<ExtArgs>
  }

  export type $MangaGenreOnMangaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MangaGenreOnManga"
    objects: {
      manga: Prisma.$MangaPayload<ExtArgs>
      genre: Prisma.$MangaGenrePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      mangaId: string
      genreId: string
    }, ExtArgs["result"]["mangaGenreOnManga"]>
    composites: {}
  }

  type MangaGenreOnMangaGetPayload<S extends boolean | null | undefined | MangaGenreOnMangaDefaultArgs> = $Result.GetResult<Prisma.$MangaGenreOnMangaPayload, S>

  type MangaGenreOnMangaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MangaGenreOnMangaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MangaGenreOnMangaCountAggregateInputType | true
    }

  export interface MangaGenreOnMangaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MangaGenreOnManga'], meta: { name: 'MangaGenreOnManga' } }
    /**
     * Find zero or one MangaGenreOnManga that matches the filter.
     * @param {MangaGenreOnMangaFindUniqueArgs} args - Arguments to find a MangaGenreOnManga
     * @example
     * // Get one MangaGenreOnManga
     * const mangaGenreOnManga = await prisma.mangaGenreOnManga.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MangaGenreOnMangaFindUniqueArgs>(args: SelectSubset<T, MangaGenreOnMangaFindUniqueArgs<ExtArgs>>): Prisma__MangaGenreOnMangaClient<$Result.GetResult<Prisma.$MangaGenreOnMangaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MangaGenreOnManga that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MangaGenreOnMangaFindUniqueOrThrowArgs} args - Arguments to find a MangaGenreOnManga
     * @example
     * // Get one MangaGenreOnManga
     * const mangaGenreOnManga = await prisma.mangaGenreOnManga.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MangaGenreOnMangaFindUniqueOrThrowArgs>(args: SelectSubset<T, MangaGenreOnMangaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MangaGenreOnMangaClient<$Result.GetResult<Prisma.$MangaGenreOnMangaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MangaGenreOnManga that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaGenreOnMangaFindFirstArgs} args - Arguments to find a MangaGenreOnManga
     * @example
     * // Get one MangaGenreOnManga
     * const mangaGenreOnManga = await prisma.mangaGenreOnManga.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MangaGenreOnMangaFindFirstArgs>(args?: SelectSubset<T, MangaGenreOnMangaFindFirstArgs<ExtArgs>>): Prisma__MangaGenreOnMangaClient<$Result.GetResult<Prisma.$MangaGenreOnMangaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MangaGenreOnManga that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaGenreOnMangaFindFirstOrThrowArgs} args - Arguments to find a MangaGenreOnManga
     * @example
     * // Get one MangaGenreOnManga
     * const mangaGenreOnManga = await prisma.mangaGenreOnManga.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MangaGenreOnMangaFindFirstOrThrowArgs>(args?: SelectSubset<T, MangaGenreOnMangaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MangaGenreOnMangaClient<$Result.GetResult<Prisma.$MangaGenreOnMangaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MangaGenreOnMangas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaGenreOnMangaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MangaGenreOnMangas
     * const mangaGenreOnMangas = await prisma.mangaGenreOnManga.findMany()
     * 
     * // Get first 10 MangaGenreOnMangas
     * const mangaGenreOnMangas = await prisma.mangaGenreOnManga.findMany({ take: 10 })
     * 
     * // Only select the `mangaId`
     * const mangaGenreOnMangaWithMangaIdOnly = await prisma.mangaGenreOnManga.findMany({ select: { mangaId: true } })
     * 
     */
    findMany<T extends MangaGenreOnMangaFindManyArgs>(args?: SelectSubset<T, MangaGenreOnMangaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangaGenreOnMangaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MangaGenreOnManga.
     * @param {MangaGenreOnMangaCreateArgs} args - Arguments to create a MangaGenreOnManga.
     * @example
     * // Create one MangaGenreOnManga
     * const MangaGenreOnManga = await prisma.mangaGenreOnManga.create({
     *   data: {
     *     // ... data to create a MangaGenreOnManga
     *   }
     * })
     * 
     */
    create<T extends MangaGenreOnMangaCreateArgs>(args: SelectSubset<T, MangaGenreOnMangaCreateArgs<ExtArgs>>): Prisma__MangaGenreOnMangaClient<$Result.GetResult<Prisma.$MangaGenreOnMangaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MangaGenreOnMangas.
     * @param {MangaGenreOnMangaCreateManyArgs} args - Arguments to create many MangaGenreOnMangas.
     * @example
     * // Create many MangaGenreOnMangas
     * const mangaGenreOnManga = await prisma.mangaGenreOnManga.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MangaGenreOnMangaCreateManyArgs>(args?: SelectSubset<T, MangaGenreOnMangaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MangaGenreOnMangas and returns the data saved in the database.
     * @param {MangaGenreOnMangaCreateManyAndReturnArgs} args - Arguments to create many MangaGenreOnMangas.
     * @example
     * // Create many MangaGenreOnMangas
     * const mangaGenreOnManga = await prisma.mangaGenreOnManga.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MangaGenreOnMangas and only return the `mangaId`
     * const mangaGenreOnMangaWithMangaIdOnly = await prisma.mangaGenreOnManga.createManyAndReturn({
     *   select: { mangaId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MangaGenreOnMangaCreateManyAndReturnArgs>(args?: SelectSubset<T, MangaGenreOnMangaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangaGenreOnMangaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MangaGenreOnManga.
     * @param {MangaGenreOnMangaDeleteArgs} args - Arguments to delete one MangaGenreOnManga.
     * @example
     * // Delete one MangaGenreOnManga
     * const MangaGenreOnManga = await prisma.mangaGenreOnManga.delete({
     *   where: {
     *     // ... filter to delete one MangaGenreOnManga
     *   }
     * })
     * 
     */
    delete<T extends MangaGenreOnMangaDeleteArgs>(args: SelectSubset<T, MangaGenreOnMangaDeleteArgs<ExtArgs>>): Prisma__MangaGenreOnMangaClient<$Result.GetResult<Prisma.$MangaGenreOnMangaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MangaGenreOnManga.
     * @param {MangaGenreOnMangaUpdateArgs} args - Arguments to update one MangaGenreOnManga.
     * @example
     * // Update one MangaGenreOnManga
     * const mangaGenreOnManga = await prisma.mangaGenreOnManga.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MangaGenreOnMangaUpdateArgs>(args: SelectSubset<T, MangaGenreOnMangaUpdateArgs<ExtArgs>>): Prisma__MangaGenreOnMangaClient<$Result.GetResult<Prisma.$MangaGenreOnMangaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MangaGenreOnMangas.
     * @param {MangaGenreOnMangaDeleteManyArgs} args - Arguments to filter MangaGenreOnMangas to delete.
     * @example
     * // Delete a few MangaGenreOnMangas
     * const { count } = await prisma.mangaGenreOnManga.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MangaGenreOnMangaDeleteManyArgs>(args?: SelectSubset<T, MangaGenreOnMangaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MangaGenreOnMangas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaGenreOnMangaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MangaGenreOnMangas
     * const mangaGenreOnManga = await prisma.mangaGenreOnManga.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MangaGenreOnMangaUpdateManyArgs>(args: SelectSubset<T, MangaGenreOnMangaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MangaGenreOnMangas and returns the data updated in the database.
     * @param {MangaGenreOnMangaUpdateManyAndReturnArgs} args - Arguments to update many MangaGenreOnMangas.
     * @example
     * // Update many MangaGenreOnMangas
     * const mangaGenreOnManga = await prisma.mangaGenreOnManga.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MangaGenreOnMangas and only return the `mangaId`
     * const mangaGenreOnMangaWithMangaIdOnly = await prisma.mangaGenreOnManga.updateManyAndReturn({
     *   select: { mangaId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MangaGenreOnMangaUpdateManyAndReturnArgs>(args: SelectSubset<T, MangaGenreOnMangaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangaGenreOnMangaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MangaGenreOnManga.
     * @param {MangaGenreOnMangaUpsertArgs} args - Arguments to update or create a MangaGenreOnManga.
     * @example
     * // Update or create a MangaGenreOnManga
     * const mangaGenreOnManga = await prisma.mangaGenreOnManga.upsert({
     *   create: {
     *     // ... data to create a MangaGenreOnManga
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MangaGenreOnManga we want to update
     *   }
     * })
     */
    upsert<T extends MangaGenreOnMangaUpsertArgs>(args: SelectSubset<T, MangaGenreOnMangaUpsertArgs<ExtArgs>>): Prisma__MangaGenreOnMangaClient<$Result.GetResult<Prisma.$MangaGenreOnMangaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MangaGenreOnMangas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaGenreOnMangaCountArgs} args - Arguments to filter MangaGenreOnMangas to count.
     * @example
     * // Count the number of MangaGenreOnMangas
     * const count = await prisma.mangaGenreOnManga.count({
     *   where: {
     *     // ... the filter for the MangaGenreOnMangas we want to count
     *   }
     * })
    **/
    count<T extends MangaGenreOnMangaCountArgs>(
      args?: Subset<T, MangaGenreOnMangaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MangaGenreOnMangaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MangaGenreOnManga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaGenreOnMangaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MangaGenreOnMangaAggregateArgs>(args: Subset<T, MangaGenreOnMangaAggregateArgs>): Prisma.PrismaPromise<GetMangaGenreOnMangaAggregateType<T>>

    /**
     * Group by MangaGenreOnManga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MangaGenreOnMangaGroupByArgs} args - Group by arguments.
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
      T extends MangaGenreOnMangaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MangaGenreOnMangaGroupByArgs['orderBy'] }
        : { orderBy?: MangaGenreOnMangaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MangaGenreOnMangaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMangaGenreOnMangaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MangaGenreOnManga model
   */
  readonly fields: MangaGenreOnMangaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MangaGenreOnManga.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MangaGenreOnMangaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    manga<T extends MangaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MangaDefaultArgs<ExtArgs>>): Prisma__MangaClient<$Result.GetResult<Prisma.$MangaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    genre<T extends MangaGenreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MangaGenreDefaultArgs<ExtArgs>>): Prisma__MangaGenreClient<$Result.GetResult<Prisma.$MangaGenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MangaGenreOnManga model
   */
  interface MangaGenreOnMangaFieldRefs {
    readonly mangaId: FieldRef<"MangaGenreOnManga", 'String'>
    readonly genreId: FieldRef<"MangaGenreOnManga", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MangaGenreOnManga findUnique
   */
  export type MangaGenreOnMangaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaGenreOnManga
     */
    select?: MangaGenreOnMangaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaGenreOnManga
     */
    omit?: MangaGenreOnMangaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaGenreOnMangaInclude<ExtArgs> | null
    /**
     * Filter, which MangaGenreOnManga to fetch.
     */
    where: MangaGenreOnMangaWhereUniqueInput
  }

  /**
   * MangaGenreOnManga findUniqueOrThrow
   */
  export type MangaGenreOnMangaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaGenreOnManga
     */
    select?: MangaGenreOnMangaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaGenreOnManga
     */
    omit?: MangaGenreOnMangaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaGenreOnMangaInclude<ExtArgs> | null
    /**
     * Filter, which MangaGenreOnManga to fetch.
     */
    where: MangaGenreOnMangaWhereUniqueInput
  }

  /**
   * MangaGenreOnManga findFirst
   */
  export type MangaGenreOnMangaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaGenreOnManga
     */
    select?: MangaGenreOnMangaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaGenreOnManga
     */
    omit?: MangaGenreOnMangaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaGenreOnMangaInclude<ExtArgs> | null
    /**
     * Filter, which MangaGenreOnManga to fetch.
     */
    where?: MangaGenreOnMangaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MangaGenreOnMangas to fetch.
     */
    orderBy?: MangaGenreOnMangaOrderByWithRelationInput | MangaGenreOnMangaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MangaGenreOnMangas.
     */
    cursor?: MangaGenreOnMangaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MangaGenreOnMangas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MangaGenreOnMangas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MangaGenreOnMangas.
     */
    distinct?: MangaGenreOnMangaScalarFieldEnum | MangaGenreOnMangaScalarFieldEnum[]
  }

  /**
   * MangaGenreOnManga findFirstOrThrow
   */
  export type MangaGenreOnMangaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaGenreOnManga
     */
    select?: MangaGenreOnMangaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaGenreOnManga
     */
    omit?: MangaGenreOnMangaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaGenreOnMangaInclude<ExtArgs> | null
    /**
     * Filter, which MangaGenreOnManga to fetch.
     */
    where?: MangaGenreOnMangaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MangaGenreOnMangas to fetch.
     */
    orderBy?: MangaGenreOnMangaOrderByWithRelationInput | MangaGenreOnMangaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MangaGenreOnMangas.
     */
    cursor?: MangaGenreOnMangaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MangaGenreOnMangas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MangaGenreOnMangas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MangaGenreOnMangas.
     */
    distinct?: MangaGenreOnMangaScalarFieldEnum | MangaGenreOnMangaScalarFieldEnum[]
  }

  /**
   * MangaGenreOnManga findMany
   */
  export type MangaGenreOnMangaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaGenreOnManga
     */
    select?: MangaGenreOnMangaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaGenreOnManga
     */
    omit?: MangaGenreOnMangaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaGenreOnMangaInclude<ExtArgs> | null
    /**
     * Filter, which MangaGenreOnMangas to fetch.
     */
    where?: MangaGenreOnMangaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MangaGenreOnMangas to fetch.
     */
    orderBy?: MangaGenreOnMangaOrderByWithRelationInput | MangaGenreOnMangaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MangaGenreOnMangas.
     */
    cursor?: MangaGenreOnMangaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MangaGenreOnMangas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MangaGenreOnMangas.
     */
    skip?: number
    distinct?: MangaGenreOnMangaScalarFieldEnum | MangaGenreOnMangaScalarFieldEnum[]
  }

  /**
   * MangaGenreOnManga create
   */
  export type MangaGenreOnMangaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaGenreOnManga
     */
    select?: MangaGenreOnMangaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaGenreOnManga
     */
    omit?: MangaGenreOnMangaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaGenreOnMangaInclude<ExtArgs> | null
    /**
     * The data needed to create a MangaGenreOnManga.
     */
    data: XOR<MangaGenreOnMangaCreateInput, MangaGenreOnMangaUncheckedCreateInput>
  }

  /**
   * MangaGenreOnManga createMany
   */
  export type MangaGenreOnMangaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MangaGenreOnMangas.
     */
    data: MangaGenreOnMangaCreateManyInput | MangaGenreOnMangaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MangaGenreOnManga createManyAndReturn
   */
  export type MangaGenreOnMangaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaGenreOnManga
     */
    select?: MangaGenreOnMangaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MangaGenreOnManga
     */
    omit?: MangaGenreOnMangaOmit<ExtArgs> | null
    /**
     * The data used to create many MangaGenreOnMangas.
     */
    data: MangaGenreOnMangaCreateManyInput | MangaGenreOnMangaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaGenreOnMangaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MangaGenreOnManga update
   */
  export type MangaGenreOnMangaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaGenreOnManga
     */
    select?: MangaGenreOnMangaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaGenreOnManga
     */
    omit?: MangaGenreOnMangaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaGenreOnMangaInclude<ExtArgs> | null
    /**
     * The data needed to update a MangaGenreOnManga.
     */
    data: XOR<MangaGenreOnMangaUpdateInput, MangaGenreOnMangaUncheckedUpdateInput>
    /**
     * Choose, which MangaGenreOnManga to update.
     */
    where: MangaGenreOnMangaWhereUniqueInput
  }

  /**
   * MangaGenreOnManga updateMany
   */
  export type MangaGenreOnMangaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MangaGenreOnMangas.
     */
    data: XOR<MangaGenreOnMangaUpdateManyMutationInput, MangaGenreOnMangaUncheckedUpdateManyInput>
    /**
     * Filter which MangaGenreOnMangas to update
     */
    where?: MangaGenreOnMangaWhereInput
    /**
     * Limit how many MangaGenreOnMangas to update.
     */
    limit?: number
  }

  /**
   * MangaGenreOnManga updateManyAndReturn
   */
  export type MangaGenreOnMangaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaGenreOnManga
     */
    select?: MangaGenreOnMangaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MangaGenreOnManga
     */
    omit?: MangaGenreOnMangaOmit<ExtArgs> | null
    /**
     * The data used to update MangaGenreOnMangas.
     */
    data: XOR<MangaGenreOnMangaUpdateManyMutationInput, MangaGenreOnMangaUncheckedUpdateManyInput>
    /**
     * Filter which MangaGenreOnMangas to update
     */
    where?: MangaGenreOnMangaWhereInput
    /**
     * Limit how many MangaGenreOnMangas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaGenreOnMangaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MangaGenreOnManga upsert
   */
  export type MangaGenreOnMangaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaGenreOnManga
     */
    select?: MangaGenreOnMangaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaGenreOnManga
     */
    omit?: MangaGenreOnMangaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaGenreOnMangaInclude<ExtArgs> | null
    /**
     * The filter to search for the MangaGenreOnManga to update in case it exists.
     */
    where: MangaGenreOnMangaWhereUniqueInput
    /**
     * In case the MangaGenreOnManga found by the `where` argument doesn't exist, create a new MangaGenreOnManga with this data.
     */
    create: XOR<MangaGenreOnMangaCreateInput, MangaGenreOnMangaUncheckedCreateInput>
    /**
     * In case the MangaGenreOnManga was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MangaGenreOnMangaUpdateInput, MangaGenreOnMangaUncheckedUpdateInput>
  }

  /**
   * MangaGenreOnManga delete
   */
  export type MangaGenreOnMangaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaGenreOnManga
     */
    select?: MangaGenreOnMangaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaGenreOnManga
     */
    omit?: MangaGenreOnMangaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaGenreOnMangaInclude<ExtArgs> | null
    /**
     * Filter which MangaGenreOnManga to delete.
     */
    where: MangaGenreOnMangaWhereUniqueInput
  }

  /**
   * MangaGenreOnManga deleteMany
   */
  export type MangaGenreOnMangaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MangaGenreOnMangas to delete
     */
    where?: MangaGenreOnMangaWhereInput
    /**
     * Limit how many MangaGenreOnMangas to delete.
     */
    limit?: number
  }

  /**
   * MangaGenreOnManga without action
   */
  export type MangaGenreOnMangaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MangaGenreOnManga
     */
    select?: MangaGenreOnMangaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MangaGenreOnManga
     */
    omit?: MangaGenreOnMangaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaGenreOnMangaInclude<ExtArgs> | null
  }


  /**
   * Model Studio
   */

  export type AggregateStudio = {
    _count: StudioCountAggregateOutputType | null
    _min: StudioMinAggregateOutputType | null
    _max: StudioMaxAggregateOutputType | null
  }

  export type StudioMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type StudioMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type StudioCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type StudioMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type StudioMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type StudioCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type StudioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Studio to aggregate.
     */
    where?: StudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Studios to fetch.
     */
    orderBy?: StudioOrderByWithRelationInput | StudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Studios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Studios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Studios
    **/
    _count?: true | StudioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudioMaxAggregateInputType
  }

  export type GetStudioAggregateType<T extends StudioAggregateArgs> = {
        [P in keyof T & keyof AggregateStudio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudio[P]>
      : GetScalarType<T[P], AggregateStudio[P]>
  }




  export type StudioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudioWhereInput
    orderBy?: StudioOrderByWithAggregationInput | StudioOrderByWithAggregationInput[]
    by: StudioScalarFieldEnum[] | StudioScalarFieldEnum
    having?: StudioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudioCountAggregateInputType | true
    _min?: StudioMinAggregateInputType
    _max?: StudioMaxAggregateInputType
  }

  export type StudioGroupByOutputType = {
    id: string
    name: string
    _count: StudioCountAggregateOutputType | null
    _min: StudioMinAggregateOutputType | null
    _max: StudioMaxAggregateOutputType | null
  }

  type GetStudioGroupByPayload<T extends StudioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudioGroupByOutputType[P]>
            : GetScalarType<T[P], StudioGroupByOutputType[P]>
        }
      >
    >


  export type StudioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    animes?: boolean | Studio$animesArgs<ExtArgs>
    _count?: boolean | StudioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studio"]>

  export type StudioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["studio"]>

  export type StudioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["studio"]>

  export type StudioSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type StudioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["studio"]>
  export type StudioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animes?: boolean | Studio$animesArgs<ExtArgs>
    _count?: boolean | StudioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StudioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StudioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Studio"
    objects: {
      /**
       * Студії які виробляли аніме
       */
      animes: Prisma.$AnimePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Ідентифікатор студії
       */
      id: string
      /**
       * Назва студії
       */
      name: string
    }, ExtArgs["result"]["studio"]>
    composites: {}
  }

  type StudioGetPayload<S extends boolean | null | undefined | StudioDefaultArgs> = $Result.GetResult<Prisma.$StudioPayload, S>

  type StudioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudioCountAggregateInputType | true
    }

  export interface StudioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Studio'], meta: { name: 'Studio' } }
    /**
     * Find zero or one Studio that matches the filter.
     * @param {StudioFindUniqueArgs} args - Arguments to find a Studio
     * @example
     * // Get one Studio
     * const studio = await prisma.studio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudioFindUniqueArgs>(args: SelectSubset<T, StudioFindUniqueArgs<ExtArgs>>): Prisma__StudioClient<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Studio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudioFindUniqueOrThrowArgs} args - Arguments to find a Studio
     * @example
     * // Get one Studio
     * const studio = await prisma.studio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudioFindUniqueOrThrowArgs>(args: SelectSubset<T, StudioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudioClient<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Studio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioFindFirstArgs} args - Arguments to find a Studio
     * @example
     * // Get one Studio
     * const studio = await prisma.studio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudioFindFirstArgs>(args?: SelectSubset<T, StudioFindFirstArgs<ExtArgs>>): Prisma__StudioClient<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Studio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioFindFirstOrThrowArgs} args - Arguments to find a Studio
     * @example
     * // Get one Studio
     * const studio = await prisma.studio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudioFindFirstOrThrowArgs>(args?: SelectSubset<T, StudioFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudioClient<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Studios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Studios
     * const studios = await prisma.studio.findMany()
     * 
     * // Get first 10 Studios
     * const studios = await prisma.studio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studioWithIdOnly = await prisma.studio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudioFindManyArgs>(args?: SelectSubset<T, StudioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Studio.
     * @param {StudioCreateArgs} args - Arguments to create a Studio.
     * @example
     * // Create one Studio
     * const Studio = await prisma.studio.create({
     *   data: {
     *     // ... data to create a Studio
     *   }
     * })
     * 
     */
    create<T extends StudioCreateArgs>(args: SelectSubset<T, StudioCreateArgs<ExtArgs>>): Prisma__StudioClient<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Studios.
     * @param {StudioCreateManyArgs} args - Arguments to create many Studios.
     * @example
     * // Create many Studios
     * const studio = await prisma.studio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudioCreateManyArgs>(args?: SelectSubset<T, StudioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Studios and returns the data saved in the database.
     * @param {StudioCreateManyAndReturnArgs} args - Arguments to create many Studios.
     * @example
     * // Create many Studios
     * const studio = await prisma.studio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Studios and only return the `id`
     * const studioWithIdOnly = await prisma.studio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudioCreateManyAndReturnArgs>(args?: SelectSubset<T, StudioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Studio.
     * @param {StudioDeleteArgs} args - Arguments to delete one Studio.
     * @example
     * // Delete one Studio
     * const Studio = await prisma.studio.delete({
     *   where: {
     *     // ... filter to delete one Studio
     *   }
     * })
     * 
     */
    delete<T extends StudioDeleteArgs>(args: SelectSubset<T, StudioDeleteArgs<ExtArgs>>): Prisma__StudioClient<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Studio.
     * @param {StudioUpdateArgs} args - Arguments to update one Studio.
     * @example
     * // Update one Studio
     * const studio = await prisma.studio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudioUpdateArgs>(args: SelectSubset<T, StudioUpdateArgs<ExtArgs>>): Prisma__StudioClient<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Studios.
     * @param {StudioDeleteManyArgs} args - Arguments to filter Studios to delete.
     * @example
     * // Delete a few Studios
     * const { count } = await prisma.studio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudioDeleteManyArgs>(args?: SelectSubset<T, StudioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Studios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Studios
     * const studio = await prisma.studio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudioUpdateManyArgs>(args: SelectSubset<T, StudioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Studios and returns the data updated in the database.
     * @param {StudioUpdateManyAndReturnArgs} args - Arguments to update many Studios.
     * @example
     * // Update many Studios
     * const studio = await prisma.studio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Studios and only return the `id`
     * const studioWithIdOnly = await prisma.studio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudioUpdateManyAndReturnArgs>(args: SelectSubset<T, StudioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Studio.
     * @param {StudioUpsertArgs} args - Arguments to update or create a Studio.
     * @example
     * // Update or create a Studio
     * const studio = await prisma.studio.upsert({
     *   create: {
     *     // ... data to create a Studio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Studio we want to update
     *   }
     * })
     */
    upsert<T extends StudioUpsertArgs>(args: SelectSubset<T, StudioUpsertArgs<ExtArgs>>): Prisma__StudioClient<$Result.GetResult<Prisma.$StudioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Studios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioCountArgs} args - Arguments to filter Studios to count.
     * @example
     * // Count the number of Studios
     * const count = await prisma.studio.count({
     *   where: {
     *     // ... the filter for the Studios we want to count
     *   }
     * })
    **/
    count<T extends StudioCountArgs>(
      args?: Subset<T, StudioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Studio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudioAggregateArgs>(args: Subset<T, StudioAggregateArgs>): Prisma.PrismaPromise<GetStudioAggregateType<T>>

    /**
     * Group by Studio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioGroupByArgs} args - Group by arguments.
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
      T extends StudioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudioGroupByArgs['orderBy'] }
        : { orderBy?: StudioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Studio model
   */
  readonly fields: StudioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Studio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    animes<T extends Studio$animesArgs<ExtArgs> = {}>(args?: Subset<T, Studio$animesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Studio model
   */
  interface StudioFieldRefs {
    readonly id: FieldRef<"Studio", 'String'>
    readonly name: FieldRef<"Studio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Studio findUnique
   */
  export type StudioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
    /**
     * Filter, which Studio to fetch.
     */
    where: StudioWhereUniqueInput
  }

  /**
   * Studio findUniqueOrThrow
   */
  export type StudioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
    /**
     * Filter, which Studio to fetch.
     */
    where: StudioWhereUniqueInput
  }

  /**
   * Studio findFirst
   */
  export type StudioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
    /**
     * Filter, which Studio to fetch.
     */
    where?: StudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Studios to fetch.
     */
    orderBy?: StudioOrderByWithRelationInput | StudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Studios.
     */
    cursor?: StudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Studios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Studios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Studios.
     */
    distinct?: StudioScalarFieldEnum | StudioScalarFieldEnum[]
  }

  /**
   * Studio findFirstOrThrow
   */
  export type StudioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
    /**
     * Filter, which Studio to fetch.
     */
    where?: StudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Studios to fetch.
     */
    orderBy?: StudioOrderByWithRelationInput | StudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Studios.
     */
    cursor?: StudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Studios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Studios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Studios.
     */
    distinct?: StudioScalarFieldEnum | StudioScalarFieldEnum[]
  }

  /**
   * Studio findMany
   */
  export type StudioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
    /**
     * Filter, which Studios to fetch.
     */
    where?: StudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Studios to fetch.
     */
    orderBy?: StudioOrderByWithRelationInput | StudioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Studios.
     */
    cursor?: StudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Studios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Studios.
     */
    skip?: number
    distinct?: StudioScalarFieldEnum | StudioScalarFieldEnum[]
  }

  /**
   * Studio create
   */
  export type StudioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
    /**
     * The data needed to create a Studio.
     */
    data: XOR<StudioCreateInput, StudioUncheckedCreateInput>
  }

  /**
   * Studio createMany
   */
  export type StudioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Studios.
     */
    data: StudioCreateManyInput | StudioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Studio createManyAndReturn
   */
  export type StudioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * The data used to create many Studios.
     */
    data: StudioCreateManyInput | StudioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Studio update
   */
  export type StudioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
    /**
     * The data needed to update a Studio.
     */
    data: XOR<StudioUpdateInput, StudioUncheckedUpdateInput>
    /**
     * Choose, which Studio to update.
     */
    where: StudioWhereUniqueInput
  }

  /**
   * Studio updateMany
   */
  export type StudioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Studios.
     */
    data: XOR<StudioUpdateManyMutationInput, StudioUncheckedUpdateManyInput>
    /**
     * Filter which Studios to update
     */
    where?: StudioWhereInput
    /**
     * Limit how many Studios to update.
     */
    limit?: number
  }

  /**
   * Studio updateManyAndReturn
   */
  export type StudioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * The data used to update Studios.
     */
    data: XOR<StudioUpdateManyMutationInput, StudioUncheckedUpdateManyInput>
    /**
     * Filter which Studios to update
     */
    where?: StudioWhereInput
    /**
     * Limit how many Studios to update.
     */
    limit?: number
  }

  /**
   * Studio upsert
   */
  export type StudioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
    /**
     * The filter to search for the Studio to update in case it exists.
     */
    where: StudioWhereUniqueInput
    /**
     * In case the Studio found by the `where` argument doesn't exist, create a new Studio with this data.
     */
    create: XOR<StudioCreateInput, StudioUncheckedCreateInput>
    /**
     * In case the Studio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudioUpdateInput, StudioUncheckedUpdateInput>
  }

  /**
   * Studio delete
   */
  export type StudioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
    /**
     * Filter which Studio to delete.
     */
    where: StudioWhereUniqueInput
  }

  /**
   * Studio deleteMany
   */
  export type StudioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Studios to delete
     */
    where?: StudioWhereInput
    /**
     * Limit how many Studios to delete.
     */
    limit?: number
  }

  /**
   * Studio.animes
   */
  export type Studio$animesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Anime
     */
    select?: AnimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Anime
     */
    omit?: AnimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeInclude<ExtArgs> | null
    where?: AnimeWhereInput
    orderBy?: AnimeOrderByWithRelationInput | AnimeOrderByWithRelationInput[]
    cursor?: AnimeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimeScalarFieldEnum | AnimeScalarFieldEnum[]
  }

  /**
   * Studio without action
   */
  export type StudioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Studio
     */
    select?: StudioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Studio
     */
    omit?: StudioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudioInclude<ExtArgs> | null
  }


  /**
   * Model Publisher
   */

  export type AggregatePublisher = {
    _count: PublisherCountAggregateOutputType | null
    _min: PublisherMinAggregateOutputType | null
    _max: PublisherMaxAggregateOutputType | null
  }

  export type PublisherMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type PublisherMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type PublisherCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type PublisherMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type PublisherMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type PublisherCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type PublisherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publisher to aggregate.
     */
    where?: PublisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publishers to fetch.
     */
    orderBy?: PublisherOrderByWithRelationInput | PublisherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publishers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Publishers
    **/
    _count?: true | PublisherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublisherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublisherMaxAggregateInputType
  }

  export type GetPublisherAggregateType<T extends PublisherAggregateArgs> = {
        [P in keyof T & keyof AggregatePublisher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublisher[P]>
      : GetScalarType<T[P], AggregatePublisher[P]>
  }




  export type PublisherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublisherWhereInput
    orderBy?: PublisherOrderByWithAggregationInput | PublisherOrderByWithAggregationInput[]
    by: PublisherScalarFieldEnum[] | PublisherScalarFieldEnum
    having?: PublisherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublisherCountAggregateInputType | true
    _min?: PublisherMinAggregateInputType
    _max?: PublisherMaxAggregateInputType
  }

  export type PublisherGroupByOutputType = {
    id: string
    name: string
    _count: PublisherCountAggregateOutputType | null
    _min: PublisherMinAggregateOutputType | null
    _max: PublisherMaxAggregateOutputType | null
  }

  type GetPublisherGroupByPayload<T extends PublisherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublisherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublisherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublisherGroupByOutputType[P]>
            : GetScalarType<T[P], PublisherGroupByOutputType[P]>
        }
      >
    >


  export type PublisherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mangas?: boolean | Publisher$mangasArgs<ExtArgs>
    _count?: boolean | PublisherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publisher"]>

  export type PublisherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["publisher"]>

  export type PublisherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["publisher"]>

  export type PublisherSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type PublisherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["publisher"]>
  export type PublisherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mangas?: boolean | Publisher$mangasArgs<ExtArgs>
    _count?: boolean | PublisherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PublisherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PublisherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PublisherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Publisher"
    objects: {
      /**
       * Видавництва які видають манги
       */
      mangas: Prisma.$MangaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      /**
       * Ідентифікатор видавництва
       */
      id: string
      /**
       * Назва видавництва
       */
      name: string
    }, ExtArgs["result"]["publisher"]>
    composites: {}
  }

  type PublisherGetPayload<S extends boolean | null | undefined | PublisherDefaultArgs> = $Result.GetResult<Prisma.$PublisherPayload, S>

  type PublisherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PublisherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublisherCountAggregateInputType | true
    }

  export interface PublisherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Publisher'], meta: { name: 'Publisher' } }
    /**
     * Find zero or one Publisher that matches the filter.
     * @param {PublisherFindUniqueArgs} args - Arguments to find a Publisher
     * @example
     * // Get one Publisher
     * const publisher = await prisma.publisher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublisherFindUniqueArgs>(args: SelectSubset<T, PublisherFindUniqueArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Publisher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PublisherFindUniqueOrThrowArgs} args - Arguments to find a Publisher
     * @example
     * // Get one Publisher
     * const publisher = await prisma.publisher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublisherFindUniqueOrThrowArgs>(args: SelectSubset<T, PublisherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publisher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherFindFirstArgs} args - Arguments to find a Publisher
     * @example
     * // Get one Publisher
     * const publisher = await prisma.publisher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublisherFindFirstArgs>(args?: SelectSubset<T, PublisherFindFirstArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Publisher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherFindFirstOrThrowArgs} args - Arguments to find a Publisher
     * @example
     * // Get one Publisher
     * const publisher = await prisma.publisher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublisherFindFirstOrThrowArgs>(args?: SelectSubset<T, PublisherFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Publishers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Publishers
     * const publishers = await prisma.publisher.findMany()
     * 
     * // Get first 10 Publishers
     * const publishers = await prisma.publisher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publisherWithIdOnly = await prisma.publisher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublisherFindManyArgs>(args?: SelectSubset<T, PublisherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Publisher.
     * @param {PublisherCreateArgs} args - Arguments to create a Publisher.
     * @example
     * // Create one Publisher
     * const Publisher = await prisma.publisher.create({
     *   data: {
     *     // ... data to create a Publisher
     *   }
     * })
     * 
     */
    create<T extends PublisherCreateArgs>(args: SelectSubset<T, PublisherCreateArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Publishers.
     * @param {PublisherCreateManyArgs} args - Arguments to create many Publishers.
     * @example
     * // Create many Publishers
     * const publisher = await prisma.publisher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublisherCreateManyArgs>(args?: SelectSubset<T, PublisherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Publishers and returns the data saved in the database.
     * @param {PublisherCreateManyAndReturnArgs} args - Arguments to create many Publishers.
     * @example
     * // Create many Publishers
     * const publisher = await prisma.publisher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Publishers and only return the `id`
     * const publisherWithIdOnly = await prisma.publisher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PublisherCreateManyAndReturnArgs>(args?: SelectSubset<T, PublisherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Publisher.
     * @param {PublisherDeleteArgs} args - Arguments to delete one Publisher.
     * @example
     * // Delete one Publisher
     * const Publisher = await prisma.publisher.delete({
     *   where: {
     *     // ... filter to delete one Publisher
     *   }
     * })
     * 
     */
    delete<T extends PublisherDeleteArgs>(args: SelectSubset<T, PublisherDeleteArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Publisher.
     * @param {PublisherUpdateArgs} args - Arguments to update one Publisher.
     * @example
     * // Update one Publisher
     * const publisher = await prisma.publisher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublisherUpdateArgs>(args: SelectSubset<T, PublisherUpdateArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Publishers.
     * @param {PublisherDeleteManyArgs} args - Arguments to filter Publishers to delete.
     * @example
     * // Delete a few Publishers
     * const { count } = await prisma.publisher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublisherDeleteManyArgs>(args?: SelectSubset<T, PublisherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publishers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Publishers
     * const publisher = await prisma.publisher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublisherUpdateManyArgs>(args: SelectSubset<T, PublisherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Publishers and returns the data updated in the database.
     * @param {PublisherUpdateManyAndReturnArgs} args - Arguments to update many Publishers.
     * @example
     * // Update many Publishers
     * const publisher = await prisma.publisher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Publishers and only return the `id`
     * const publisherWithIdOnly = await prisma.publisher.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PublisherUpdateManyAndReturnArgs>(args: SelectSubset<T, PublisherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Publisher.
     * @param {PublisherUpsertArgs} args - Arguments to update or create a Publisher.
     * @example
     * // Update or create a Publisher
     * const publisher = await prisma.publisher.upsert({
     *   create: {
     *     // ... data to create a Publisher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Publisher we want to update
     *   }
     * })
     */
    upsert<T extends PublisherUpsertArgs>(args: SelectSubset<T, PublisherUpsertArgs<ExtArgs>>): Prisma__PublisherClient<$Result.GetResult<Prisma.$PublisherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Publishers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherCountArgs} args - Arguments to filter Publishers to count.
     * @example
     * // Count the number of Publishers
     * const count = await prisma.publisher.count({
     *   where: {
     *     // ... the filter for the Publishers we want to count
     *   }
     * })
    **/
    count<T extends PublisherCountArgs>(
      args?: Subset<T, PublisherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublisherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Publisher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PublisherAggregateArgs>(args: Subset<T, PublisherAggregateArgs>): Prisma.PrismaPromise<GetPublisherAggregateType<T>>

    /**
     * Group by Publisher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherGroupByArgs} args - Group by arguments.
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
      T extends PublisherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublisherGroupByArgs['orderBy'] }
        : { orderBy?: PublisherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PublisherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublisherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Publisher model
   */
  readonly fields: PublisherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Publisher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublisherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mangas<T extends Publisher$mangasArgs<ExtArgs> = {}>(args?: Subset<T, Publisher$mangasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MangaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Publisher model
   */
  interface PublisherFieldRefs {
    readonly id: FieldRef<"Publisher", 'String'>
    readonly name: FieldRef<"Publisher", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Publisher findUnique
   */
  export type PublisherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * Filter, which Publisher to fetch.
     */
    where: PublisherWhereUniqueInput
  }

  /**
   * Publisher findUniqueOrThrow
   */
  export type PublisherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * Filter, which Publisher to fetch.
     */
    where: PublisherWhereUniqueInput
  }

  /**
   * Publisher findFirst
   */
  export type PublisherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * Filter, which Publisher to fetch.
     */
    where?: PublisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publishers to fetch.
     */
    orderBy?: PublisherOrderByWithRelationInput | PublisherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publishers.
     */
    cursor?: PublisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publishers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publishers.
     */
    distinct?: PublisherScalarFieldEnum | PublisherScalarFieldEnum[]
  }

  /**
   * Publisher findFirstOrThrow
   */
  export type PublisherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * Filter, which Publisher to fetch.
     */
    where?: PublisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publishers to fetch.
     */
    orderBy?: PublisherOrderByWithRelationInput | PublisherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Publishers.
     */
    cursor?: PublisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publishers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Publishers.
     */
    distinct?: PublisherScalarFieldEnum | PublisherScalarFieldEnum[]
  }

  /**
   * Publisher findMany
   */
  export type PublisherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * Filter, which Publishers to fetch.
     */
    where?: PublisherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Publishers to fetch.
     */
    orderBy?: PublisherOrderByWithRelationInput | PublisherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Publishers.
     */
    cursor?: PublisherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Publishers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Publishers.
     */
    skip?: number
    distinct?: PublisherScalarFieldEnum | PublisherScalarFieldEnum[]
  }

  /**
   * Publisher create
   */
  export type PublisherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * The data needed to create a Publisher.
     */
    data: XOR<PublisherCreateInput, PublisherUncheckedCreateInput>
  }

  /**
   * Publisher createMany
   */
  export type PublisherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Publishers.
     */
    data: PublisherCreateManyInput | PublisherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Publisher createManyAndReturn
   */
  export type PublisherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * The data used to create many Publishers.
     */
    data: PublisherCreateManyInput | PublisherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Publisher update
   */
  export type PublisherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * The data needed to update a Publisher.
     */
    data: XOR<PublisherUpdateInput, PublisherUncheckedUpdateInput>
    /**
     * Choose, which Publisher to update.
     */
    where: PublisherWhereUniqueInput
  }

  /**
   * Publisher updateMany
   */
  export type PublisherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Publishers.
     */
    data: XOR<PublisherUpdateManyMutationInput, PublisherUncheckedUpdateManyInput>
    /**
     * Filter which Publishers to update
     */
    where?: PublisherWhereInput
    /**
     * Limit how many Publishers to update.
     */
    limit?: number
  }

  /**
   * Publisher updateManyAndReturn
   */
  export type PublisherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * The data used to update Publishers.
     */
    data: XOR<PublisherUpdateManyMutationInput, PublisherUncheckedUpdateManyInput>
    /**
     * Filter which Publishers to update
     */
    where?: PublisherWhereInput
    /**
     * Limit how many Publishers to update.
     */
    limit?: number
  }

  /**
   * Publisher upsert
   */
  export type PublisherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * The filter to search for the Publisher to update in case it exists.
     */
    where: PublisherWhereUniqueInput
    /**
     * In case the Publisher found by the `where` argument doesn't exist, create a new Publisher with this data.
     */
    create: XOR<PublisherCreateInput, PublisherUncheckedCreateInput>
    /**
     * In case the Publisher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublisherUpdateInput, PublisherUncheckedUpdateInput>
  }

  /**
   * Publisher delete
   */
  export type PublisherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
    /**
     * Filter which Publisher to delete.
     */
    where: PublisherWhereUniqueInput
  }

  /**
   * Publisher deleteMany
   */
  export type PublisherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Publishers to delete
     */
    where?: PublisherWhereInput
    /**
     * Limit how many Publishers to delete.
     */
    limit?: number
  }

  /**
   * Publisher.mangas
   */
  export type Publisher$mangasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Manga
     */
    select?: MangaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Manga
     */
    omit?: MangaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MangaInclude<ExtArgs> | null
    where?: MangaWhereInput
    orderBy?: MangaOrderByWithRelationInput | MangaOrderByWithRelationInput[]
    cursor?: MangaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MangaScalarFieldEnum | MangaScalarFieldEnum[]
  }

  /**
   * Publisher without action
   */
  export type PublisherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Publisher
     */
    select?: PublisherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Publisher
     */
    omit?: PublisherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    imageUrl: 'imageUrl',
    isAdmin: 'isAdmin',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AnimeScalarFieldEnum: {
    id: 'id',
    titleUa: 'titleUa',
    titleEn: 'titleEn',
    titleJp: 'titleJp',
    description: 'description',
    rating: 'rating',
    kind: 'kind',
    episodes: 'episodes',
    status: 'status',
    dateRelease: 'dateRelease',
    imageUrl: 'imageUrl',
    studioId: 'studioId'
  };

  export type AnimeScalarFieldEnum = (typeof AnimeScalarFieldEnum)[keyof typeof AnimeScalarFieldEnum]


  export const MangaScalarFieldEnum: {
    id: 'id',
    titleUa: 'titleUa',
    titleEn: 'titleEn',
    titleJp: 'titleJp',
    description: 'description',
    kind: 'kind',
    chapters: 'chapters',
    volumes: 'volumes',
    dateRelease: 'dateRelease',
    status: 'status',
    imageUrl: 'imageUrl',
    publisherId: 'publisherId'
  };

  export type MangaScalarFieldEnum = (typeof MangaScalarFieldEnum)[keyof typeof MangaScalarFieldEnum]


  export const AnimeGenreScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type AnimeGenreScalarFieldEnum = (typeof AnimeGenreScalarFieldEnum)[keyof typeof AnimeGenreScalarFieldEnum]


  export const MangaGenreScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type MangaGenreScalarFieldEnum = (typeof MangaGenreScalarFieldEnum)[keyof typeof MangaGenreScalarFieldEnum]


  export const AnimeGenreOnAnimeScalarFieldEnum: {
    animeId: 'animeId',
    genreId: 'genreId'
  };

  export type AnimeGenreOnAnimeScalarFieldEnum = (typeof AnimeGenreOnAnimeScalarFieldEnum)[keyof typeof AnimeGenreOnAnimeScalarFieldEnum]


  export const MangaGenreOnMangaScalarFieldEnum: {
    mangaId: 'mangaId',
    genreId: 'genreId'
  };

  export type MangaGenreOnMangaScalarFieldEnum = (typeof MangaGenreOnMangaScalarFieldEnum)[keyof typeof MangaGenreOnMangaScalarFieldEnum]


  export const StudioScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type StudioScalarFieldEnum = (typeof StudioScalarFieldEnum)[keyof typeof StudioScalarFieldEnum]


  export const PublisherScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type PublisherScalarFieldEnum = (typeof PublisherScalarFieldEnum)[keyof typeof PublisherScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    imageUrl?: StringNullableFilter<"User"> | string | null
    isAdmin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    imageUrl?: StringNullableFilter<"User"> | string | null
    isAdmin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AnimeWhereInput = {
    AND?: AnimeWhereInput | AnimeWhereInput[]
    OR?: AnimeWhereInput[]
    NOT?: AnimeWhereInput | AnimeWhereInput[]
    id?: StringFilter<"Anime"> | string
    titleUa?: StringNullableFilter<"Anime"> | string | null
    titleEn?: StringFilter<"Anime"> | string
    titleJp?: StringFilter<"Anime"> | string
    description?: StringFilter<"Anime"> | string
    rating?: FloatFilter<"Anime"> | number
    kind?: StringFilter<"Anime"> | string
    episodes?: StringFilter<"Anime"> | string
    status?: StringFilter<"Anime"> | string
    dateRelease?: DateTimeNullableFilter<"Anime"> | Date | string | null
    imageUrl?: StringFilter<"Anime"> | string
    studioId?: StringFilter<"Anime"> | string
    studio?: XOR<StudioScalarRelationFilter, StudioWhereInput>
    genres?: AnimeGenreOnAnimeListRelationFilter
  }

  export type AnimeOrderByWithRelationInput = {
    id?: SortOrder
    titleUa?: SortOrderInput | SortOrder
    titleEn?: SortOrder
    titleJp?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    kind?: SortOrder
    episodes?: SortOrder
    status?: SortOrder
    dateRelease?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    studioId?: SortOrder
    studio?: StudioOrderByWithRelationInput
    genres?: AnimeGenreOnAnimeOrderByRelationAggregateInput
  }

  export type AnimeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnimeWhereInput | AnimeWhereInput[]
    OR?: AnimeWhereInput[]
    NOT?: AnimeWhereInput | AnimeWhereInput[]
    titleUa?: StringNullableFilter<"Anime"> | string | null
    titleEn?: StringFilter<"Anime"> | string
    titleJp?: StringFilter<"Anime"> | string
    description?: StringFilter<"Anime"> | string
    rating?: FloatFilter<"Anime"> | number
    kind?: StringFilter<"Anime"> | string
    episodes?: StringFilter<"Anime"> | string
    status?: StringFilter<"Anime"> | string
    dateRelease?: DateTimeNullableFilter<"Anime"> | Date | string | null
    imageUrl?: StringFilter<"Anime"> | string
    studioId?: StringFilter<"Anime"> | string
    studio?: XOR<StudioScalarRelationFilter, StudioWhereInput>
    genres?: AnimeGenreOnAnimeListRelationFilter
  }, "id">

  export type AnimeOrderByWithAggregationInput = {
    id?: SortOrder
    titleUa?: SortOrderInput | SortOrder
    titleEn?: SortOrder
    titleJp?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    kind?: SortOrder
    episodes?: SortOrder
    status?: SortOrder
    dateRelease?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    studioId?: SortOrder
    _count?: AnimeCountOrderByAggregateInput
    _avg?: AnimeAvgOrderByAggregateInput
    _max?: AnimeMaxOrderByAggregateInput
    _min?: AnimeMinOrderByAggregateInput
    _sum?: AnimeSumOrderByAggregateInput
  }

  export type AnimeScalarWhereWithAggregatesInput = {
    AND?: AnimeScalarWhereWithAggregatesInput | AnimeScalarWhereWithAggregatesInput[]
    OR?: AnimeScalarWhereWithAggregatesInput[]
    NOT?: AnimeScalarWhereWithAggregatesInput | AnimeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Anime"> | string
    titleUa?: StringNullableWithAggregatesFilter<"Anime"> | string | null
    titleEn?: StringWithAggregatesFilter<"Anime"> | string
    titleJp?: StringWithAggregatesFilter<"Anime"> | string
    description?: StringWithAggregatesFilter<"Anime"> | string
    rating?: FloatWithAggregatesFilter<"Anime"> | number
    kind?: StringWithAggregatesFilter<"Anime"> | string
    episodes?: StringWithAggregatesFilter<"Anime"> | string
    status?: StringWithAggregatesFilter<"Anime"> | string
    dateRelease?: DateTimeNullableWithAggregatesFilter<"Anime"> | Date | string | null
    imageUrl?: StringWithAggregatesFilter<"Anime"> | string
    studioId?: StringWithAggregatesFilter<"Anime"> | string
  }

  export type MangaWhereInput = {
    AND?: MangaWhereInput | MangaWhereInput[]
    OR?: MangaWhereInput[]
    NOT?: MangaWhereInput | MangaWhereInput[]
    id?: StringFilter<"Manga"> | string
    titleUa?: StringFilter<"Manga"> | string
    titleEn?: StringFilter<"Manga"> | string
    titleJp?: StringFilter<"Manga"> | string
    description?: StringFilter<"Manga"> | string
    kind?: StringFilter<"Manga"> | string
    chapters?: StringFilter<"Manga"> | string
    volumes?: StringFilter<"Manga"> | string
    dateRelease?: DateTimeNullableFilter<"Manga"> | Date | string | null
    status?: StringFilter<"Manga"> | string
    imageUrl?: StringFilter<"Manga"> | string
    publisherId?: StringFilter<"Manga"> | string
    publisher?: XOR<PublisherScalarRelationFilter, PublisherWhereInput>
    genres?: MangaGenreOnMangaListRelationFilter
  }

  export type MangaOrderByWithRelationInput = {
    id?: SortOrder
    titleUa?: SortOrder
    titleEn?: SortOrder
    titleJp?: SortOrder
    description?: SortOrder
    kind?: SortOrder
    chapters?: SortOrder
    volumes?: SortOrder
    dateRelease?: SortOrderInput | SortOrder
    status?: SortOrder
    imageUrl?: SortOrder
    publisherId?: SortOrder
    publisher?: PublisherOrderByWithRelationInput
    genres?: MangaGenreOnMangaOrderByRelationAggregateInput
  }

  export type MangaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MangaWhereInput | MangaWhereInput[]
    OR?: MangaWhereInput[]
    NOT?: MangaWhereInput | MangaWhereInput[]
    titleUa?: StringFilter<"Manga"> | string
    titleEn?: StringFilter<"Manga"> | string
    titleJp?: StringFilter<"Manga"> | string
    description?: StringFilter<"Manga"> | string
    kind?: StringFilter<"Manga"> | string
    chapters?: StringFilter<"Manga"> | string
    volumes?: StringFilter<"Manga"> | string
    dateRelease?: DateTimeNullableFilter<"Manga"> | Date | string | null
    status?: StringFilter<"Manga"> | string
    imageUrl?: StringFilter<"Manga"> | string
    publisherId?: StringFilter<"Manga"> | string
    publisher?: XOR<PublisherScalarRelationFilter, PublisherWhereInput>
    genres?: MangaGenreOnMangaListRelationFilter
  }, "id">

  export type MangaOrderByWithAggregationInput = {
    id?: SortOrder
    titleUa?: SortOrder
    titleEn?: SortOrder
    titleJp?: SortOrder
    description?: SortOrder
    kind?: SortOrder
    chapters?: SortOrder
    volumes?: SortOrder
    dateRelease?: SortOrderInput | SortOrder
    status?: SortOrder
    imageUrl?: SortOrder
    publisherId?: SortOrder
    _count?: MangaCountOrderByAggregateInput
    _max?: MangaMaxOrderByAggregateInput
    _min?: MangaMinOrderByAggregateInput
  }

  export type MangaScalarWhereWithAggregatesInput = {
    AND?: MangaScalarWhereWithAggregatesInput | MangaScalarWhereWithAggregatesInput[]
    OR?: MangaScalarWhereWithAggregatesInput[]
    NOT?: MangaScalarWhereWithAggregatesInput | MangaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Manga"> | string
    titleUa?: StringWithAggregatesFilter<"Manga"> | string
    titleEn?: StringWithAggregatesFilter<"Manga"> | string
    titleJp?: StringWithAggregatesFilter<"Manga"> | string
    description?: StringWithAggregatesFilter<"Manga"> | string
    kind?: StringWithAggregatesFilter<"Manga"> | string
    chapters?: StringWithAggregatesFilter<"Manga"> | string
    volumes?: StringWithAggregatesFilter<"Manga"> | string
    dateRelease?: DateTimeNullableWithAggregatesFilter<"Manga"> | Date | string | null
    status?: StringWithAggregatesFilter<"Manga"> | string
    imageUrl?: StringWithAggregatesFilter<"Manga"> | string
    publisherId?: StringWithAggregatesFilter<"Manga"> | string
  }

  export type AnimeGenreWhereInput = {
    AND?: AnimeGenreWhereInput | AnimeGenreWhereInput[]
    OR?: AnimeGenreWhereInput[]
    NOT?: AnimeGenreWhereInput | AnimeGenreWhereInput[]
    id?: StringFilter<"AnimeGenre"> | string
    name?: StringFilter<"AnimeGenre"> | string
    animes?: AnimeGenreOnAnimeListRelationFilter
  }

  export type AnimeGenreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    animes?: AnimeGenreOnAnimeOrderByRelationAggregateInput
  }

  export type AnimeGenreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: AnimeGenreWhereInput | AnimeGenreWhereInput[]
    OR?: AnimeGenreWhereInput[]
    NOT?: AnimeGenreWhereInput | AnimeGenreWhereInput[]
    animes?: AnimeGenreOnAnimeListRelationFilter
  }, "id" | "name">

  export type AnimeGenreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: AnimeGenreCountOrderByAggregateInput
    _max?: AnimeGenreMaxOrderByAggregateInput
    _min?: AnimeGenreMinOrderByAggregateInput
  }

  export type AnimeGenreScalarWhereWithAggregatesInput = {
    AND?: AnimeGenreScalarWhereWithAggregatesInput | AnimeGenreScalarWhereWithAggregatesInput[]
    OR?: AnimeGenreScalarWhereWithAggregatesInput[]
    NOT?: AnimeGenreScalarWhereWithAggregatesInput | AnimeGenreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnimeGenre"> | string
    name?: StringWithAggregatesFilter<"AnimeGenre"> | string
  }

  export type MangaGenreWhereInput = {
    AND?: MangaGenreWhereInput | MangaGenreWhereInput[]
    OR?: MangaGenreWhereInput[]
    NOT?: MangaGenreWhereInput | MangaGenreWhereInput[]
    id?: StringFilter<"MangaGenre"> | string
    name?: StringFilter<"MangaGenre"> | string
    mangas?: MangaGenreOnMangaListRelationFilter
  }

  export type MangaGenreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    mangas?: MangaGenreOnMangaOrderByRelationAggregateInput
  }

  export type MangaGenreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: MangaGenreWhereInput | MangaGenreWhereInput[]
    OR?: MangaGenreWhereInput[]
    NOT?: MangaGenreWhereInput | MangaGenreWhereInput[]
    mangas?: MangaGenreOnMangaListRelationFilter
  }, "id" | "name">

  export type MangaGenreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: MangaGenreCountOrderByAggregateInput
    _max?: MangaGenreMaxOrderByAggregateInput
    _min?: MangaGenreMinOrderByAggregateInput
  }

  export type MangaGenreScalarWhereWithAggregatesInput = {
    AND?: MangaGenreScalarWhereWithAggregatesInput | MangaGenreScalarWhereWithAggregatesInput[]
    OR?: MangaGenreScalarWhereWithAggregatesInput[]
    NOT?: MangaGenreScalarWhereWithAggregatesInput | MangaGenreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MangaGenre"> | string
    name?: StringWithAggregatesFilter<"MangaGenre"> | string
  }

  export type AnimeGenreOnAnimeWhereInput = {
    AND?: AnimeGenreOnAnimeWhereInput | AnimeGenreOnAnimeWhereInput[]
    OR?: AnimeGenreOnAnimeWhereInput[]
    NOT?: AnimeGenreOnAnimeWhereInput | AnimeGenreOnAnimeWhereInput[]
    animeId?: StringFilter<"AnimeGenreOnAnime"> | string
    genreId?: StringFilter<"AnimeGenreOnAnime"> | string
    anime?: XOR<AnimeScalarRelationFilter, AnimeWhereInput>
    genre?: XOR<AnimeGenreScalarRelationFilter, AnimeGenreWhereInput>
  }

  export type AnimeGenreOnAnimeOrderByWithRelationInput = {
    animeId?: SortOrder
    genreId?: SortOrder
    anime?: AnimeOrderByWithRelationInput
    genre?: AnimeGenreOrderByWithRelationInput
  }

  export type AnimeGenreOnAnimeWhereUniqueInput = Prisma.AtLeast<{
    animeId_genreId?: AnimeGenreOnAnimeAnimeIdGenreIdCompoundUniqueInput
    AND?: AnimeGenreOnAnimeWhereInput | AnimeGenreOnAnimeWhereInput[]
    OR?: AnimeGenreOnAnimeWhereInput[]
    NOT?: AnimeGenreOnAnimeWhereInput | AnimeGenreOnAnimeWhereInput[]
    animeId?: StringFilter<"AnimeGenreOnAnime"> | string
    genreId?: StringFilter<"AnimeGenreOnAnime"> | string
    anime?: XOR<AnimeScalarRelationFilter, AnimeWhereInput>
    genre?: XOR<AnimeGenreScalarRelationFilter, AnimeGenreWhereInput>
  }, "animeId_genreId">

  export type AnimeGenreOnAnimeOrderByWithAggregationInput = {
    animeId?: SortOrder
    genreId?: SortOrder
    _count?: AnimeGenreOnAnimeCountOrderByAggregateInput
    _max?: AnimeGenreOnAnimeMaxOrderByAggregateInput
    _min?: AnimeGenreOnAnimeMinOrderByAggregateInput
  }

  export type AnimeGenreOnAnimeScalarWhereWithAggregatesInput = {
    AND?: AnimeGenreOnAnimeScalarWhereWithAggregatesInput | AnimeGenreOnAnimeScalarWhereWithAggregatesInput[]
    OR?: AnimeGenreOnAnimeScalarWhereWithAggregatesInput[]
    NOT?: AnimeGenreOnAnimeScalarWhereWithAggregatesInput | AnimeGenreOnAnimeScalarWhereWithAggregatesInput[]
    animeId?: StringWithAggregatesFilter<"AnimeGenreOnAnime"> | string
    genreId?: StringWithAggregatesFilter<"AnimeGenreOnAnime"> | string
  }

  export type MangaGenreOnMangaWhereInput = {
    AND?: MangaGenreOnMangaWhereInput | MangaGenreOnMangaWhereInput[]
    OR?: MangaGenreOnMangaWhereInput[]
    NOT?: MangaGenreOnMangaWhereInput | MangaGenreOnMangaWhereInput[]
    mangaId?: StringFilter<"MangaGenreOnManga"> | string
    genreId?: StringFilter<"MangaGenreOnManga"> | string
    manga?: XOR<MangaScalarRelationFilter, MangaWhereInput>
    genre?: XOR<MangaGenreScalarRelationFilter, MangaGenreWhereInput>
  }

  export type MangaGenreOnMangaOrderByWithRelationInput = {
    mangaId?: SortOrder
    genreId?: SortOrder
    manga?: MangaOrderByWithRelationInput
    genre?: MangaGenreOrderByWithRelationInput
  }

  export type MangaGenreOnMangaWhereUniqueInput = Prisma.AtLeast<{
    mangaId_genreId?: MangaGenreOnMangaMangaIdGenreIdCompoundUniqueInput
    AND?: MangaGenreOnMangaWhereInput | MangaGenreOnMangaWhereInput[]
    OR?: MangaGenreOnMangaWhereInput[]
    NOT?: MangaGenreOnMangaWhereInput | MangaGenreOnMangaWhereInput[]
    mangaId?: StringFilter<"MangaGenreOnManga"> | string
    genreId?: StringFilter<"MangaGenreOnManga"> | string
    manga?: XOR<MangaScalarRelationFilter, MangaWhereInput>
    genre?: XOR<MangaGenreScalarRelationFilter, MangaGenreWhereInput>
  }, "mangaId_genreId">

  export type MangaGenreOnMangaOrderByWithAggregationInput = {
    mangaId?: SortOrder
    genreId?: SortOrder
    _count?: MangaGenreOnMangaCountOrderByAggregateInput
    _max?: MangaGenreOnMangaMaxOrderByAggregateInput
    _min?: MangaGenreOnMangaMinOrderByAggregateInput
  }

  export type MangaGenreOnMangaScalarWhereWithAggregatesInput = {
    AND?: MangaGenreOnMangaScalarWhereWithAggregatesInput | MangaGenreOnMangaScalarWhereWithAggregatesInput[]
    OR?: MangaGenreOnMangaScalarWhereWithAggregatesInput[]
    NOT?: MangaGenreOnMangaScalarWhereWithAggregatesInput | MangaGenreOnMangaScalarWhereWithAggregatesInput[]
    mangaId?: StringWithAggregatesFilter<"MangaGenreOnManga"> | string
    genreId?: StringWithAggregatesFilter<"MangaGenreOnManga"> | string
  }

  export type StudioWhereInput = {
    AND?: StudioWhereInput | StudioWhereInput[]
    OR?: StudioWhereInput[]
    NOT?: StudioWhereInput | StudioWhereInput[]
    id?: StringFilter<"Studio"> | string
    name?: StringFilter<"Studio"> | string
    animes?: AnimeListRelationFilter
  }

  export type StudioOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    animes?: AnimeOrderByRelationAggregateInput
  }

  export type StudioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: StudioWhereInput | StudioWhereInput[]
    OR?: StudioWhereInput[]
    NOT?: StudioWhereInput | StudioWhereInput[]
    animes?: AnimeListRelationFilter
  }, "id" | "name">

  export type StudioOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: StudioCountOrderByAggregateInput
    _max?: StudioMaxOrderByAggregateInput
    _min?: StudioMinOrderByAggregateInput
  }

  export type StudioScalarWhereWithAggregatesInput = {
    AND?: StudioScalarWhereWithAggregatesInput | StudioScalarWhereWithAggregatesInput[]
    OR?: StudioScalarWhereWithAggregatesInput[]
    NOT?: StudioScalarWhereWithAggregatesInput | StudioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Studio"> | string
    name?: StringWithAggregatesFilter<"Studio"> | string
  }

  export type PublisherWhereInput = {
    AND?: PublisherWhereInput | PublisherWhereInput[]
    OR?: PublisherWhereInput[]
    NOT?: PublisherWhereInput | PublisherWhereInput[]
    id?: StringFilter<"Publisher"> | string
    name?: StringFilter<"Publisher"> | string
    mangas?: MangaListRelationFilter
  }

  export type PublisherOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    mangas?: MangaOrderByRelationAggregateInput
  }

  export type PublisherWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: PublisherWhereInput | PublisherWhereInput[]
    OR?: PublisherWhereInput[]
    NOT?: PublisherWhereInput | PublisherWhereInput[]
    mangas?: MangaListRelationFilter
  }, "id" | "name">

  export type PublisherOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: PublisherCountOrderByAggregateInput
    _max?: PublisherMaxOrderByAggregateInput
    _min?: PublisherMinOrderByAggregateInput
  }

  export type PublisherScalarWhereWithAggregatesInput = {
    AND?: PublisherScalarWhereWithAggregatesInput | PublisherScalarWhereWithAggregatesInput[]
    OR?: PublisherScalarWhereWithAggregatesInput[]
    NOT?: PublisherScalarWhereWithAggregatesInput | PublisherScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Publisher"> | string
    name?: StringWithAggregatesFilter<"Publisher"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    imageUrl?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    imageUrl?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    imageUrl?: string | null
    isAdmin?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeCreateInput = {
    id?: string
    titleUa?: string | null
    titleEn: string
    titleJp: string
    description: string
    rating: number
    kind: string
    episodes: string
    status: string
    dateRelease?: Date | string | null
    imageUrl: string
    studio: StudioCreateNestedOneWithoutAnimesInput
    genres?: AnimeGenreOnAnimeCreateNestedManyWithoutAnimeInput
  }

  export type AnimeUncheckedCreateInput = {
    id?: string
    titleUa?: string | null
    titleEn: string
    titleJp: string
    description: string
    rating: number
    kind: string
    episodes: string
    status: string
    dateRelease?: Date | string | null
    imageUrl: string
    studioId: string
    genres?: AnimeGenreOnAnimeUncheckedCreateNestedManyWithoutAnimeInput
  }

  export type AnimeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleUa?: NullableStringFieldUpdateOperationsInput | string | null
    titleEn?: StringFieldUpdateOperationsInput | string
    titleJp?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    kind?: StringFieldUpdateOperationsInput | string
    episodes?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dateRelease?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    studio?: StudioUpdateOneRequiredWithoutAnimesNestedInput
    genres?: AnimeGenreOnAnimeUpdateManyWithoutAnimeNestedInput
  }

  export type AnimeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleUa?: NullableStringFieldUpdateOperationsInput | string | null
    titleEn?: StringFieldUpdateOperationsInput | string
    titleJp?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    kind?: StringFieldUpdateOperationsInput | string
    episodes?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dateRelease?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    studioId?: StringFieldUpdateOperationsInput | string
    genres?: AnimeGenreOnAnimeUncheckedUpdateManyWithoutAnimeNestedInput
  }

  export type AnimeCreateManyInput = {
    id?: string
    titleUa?: string | null
    titleEn: string
    titleJp: string
    description: string
    rating: number
    kind: string
    episodes: string
    status: string
    dateRelease?: Date | string | null
    imageUrl: string
    studioId: string
  }

  export type AnimeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleUa?: NullableStringFieldUpdateOperationsInput | string | null
    titleEn?: StringFieldUpdateOperationsInput | string
    titleJp?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    kind?: StringFieldUpdateOperationsInput | string
    episodes?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dateRelease?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type AnimeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleUa?: NullableStringFieldUpdateOperationsInput | string | null
    titleEn?: StringFieldUpdateOperationsInput | string
    titleJp?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    kind?: StringFieldUpdateOperationsInput | string
    episodes?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dateRelease?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    studioId?: StringFieldUpdateOperationsInput | string
  }

  export type MangaCreateInput = {
    id?: string
    titleUa: string
    titleEn: string
    titleJp: string
    description: string
    kind: string
    chapters: string
    volumes: string
    dateRelease?: Date | string | null
    status: string
    imageUrl: string
    publisher: PublisherCreateNestedOneWithoutMangasInput
    genres?: MangaGenreOnMangaCreateNestedManyWithoutMangaInput
  }

  export type MangaUncheckedCreateInput = {
    id?: string
    titleUa: string
    titleEn: string
    titleJp: string
    description: string
    kind: string
    chapters: string
    volumes: string
    dateRelease?: Date | string | null
    status: string
    imageUrl: string
    publisherId: string
    genres?: MangaGenreOnMangaUncheckedCreateNestedManyWithoutMangaInput
  }

  export type MangaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleUa?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    titleJp?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    chapters?: StringFieldUpdateOperationsInput | string
    volumes?: StringFieldUpdateOperationsInput | string
    dateRelease?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    publisher?: PublisherUpdateOneRequiredWithoutMangasNestedInput
    genres?: MangaGenreOnMangaUpdateManyWithoutMangaNestedInput
  }

  export type MangaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleUa?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    titleJp?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    chapters?: StringFieldUpdateOperationsInput | string
    volumes?: StringFieldUpdateOperationsInput | string
    dateRelease?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    publisherId?: StringFieldUpdateOperationsInput | string
    genres?: MangaGenreOnMangaUncheckedUpdateManyWithoutMangaNestedInput
  }

  export type MangaCreateManyInput = {
    id?: string
    titleUa: string
    titleEn: string
    titleJp: string
    description: string
    kind: string
    chapters: string
    volumes: string
    dateRelease?: Date | string | null
    status: string
    imageUrl: string
    publisherId: string
  }

  export type MangaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleUa?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    titleJp?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    chapters?: StringFieldUpdateOperationsInput | string
    volumes?: StringFieldUpdateOperationsInput | string
    dateRelease?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type MangaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleUa?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    titleJp?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    chapters?: StringFieldUpdateOperationsInput | string
    volumes?: StringFieldUpdateOperationsInput | string
    dateRelease?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    publisherId?: StringFieldUpdateOperationsInput | string
  }

  export type AnimeGenreCreateInput = {
    id?: string
    name: string
    animes?: AnimeGenreOnAnimeCreateNestedManyWithoutGenreInput
  }

  export type AnimeGenreUncheckedCreateInput = {
    id?: string
    name: string
    animes?: AnimeGenreOnAnimeUncheckedCreateNestedManyWithoutGenreInput
  }

  export type AnimeGenreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    animes?: AnimeGenreOnAnimeUpdateManyWithoutGenreNestedInput
  }

  export type AnimeGenreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    animes?: AnimeGenreOnAnimeUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type AnimeGenreCreateManyInput = {
    id?: string
    name: string
  }

  export type AnimeGenreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AnimeGenreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MangaGenreCreateInput = {
    id?: string
    name: string
    mangas?: MangaGenreOnMangaCreateNestedManyWithoutGenreInput
  }

  export type MangaGenreUncheckedCreateInput = {
    id?: string
    name: string
    mangas?: MangaGenreOnMangaUncheckedCreateNestedManyWithoutGenreInput
  }

  export type MangaGenreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mangas?: MangaGenreOnMangaUpdateManyWithoutGenreNestedInput
  }

  export type MangaGenreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mangas?: MangaGenreOnMangaUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type MangaGenreCreateManyInput = {
    id?: string
    name: string
  }

  export type MangaGenreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MangaGenreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AnimeGenreOnAnimeCreateInput = {
    anime: AnimeCreateNestedOneWithoutGenresInput
    genre: AnimeGenreCreateNestedOneWithoutAnimesInput
  }

  export type AnimeGenreOnAnimeUncheckedCreateInput = {
    animeId: string
    genreId: string
  }

  export type AnimeGenreOnAnimeUpdateInput = {
    anime?: AnimeUpdateOneRequiredWithoutGenresNestedInput
    genre?: AnimeGenreUpdateOneRequiredWithoutAnimesNestedInput
  }

  export type AnimeGenreOnAnimeUncheckedUpdateInput = {
    animeId?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type AnimeGenreOnAnimeCreateManyInput = {
    animeId: string
    genreId: string
  }

  export type AnimeGenreOnAnimeUpdateManyMutationInput = {

  }

  export type AnimeGenreOnAnimeUncheckedUpdateManyInput = {
    animeId?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type MangaGenreOnMangaCreateInput = {
    manga: MangaCreateNestedOneWithoutGenresInput
    genre: MangaGenreCreateNestedOneWithoutMangasInput
  }

  export type MangaGenreOnMangaUncheckedCreateInput = {
    mangaId: string
    genreId: string
  }

  export type MangaGenreOnMangaUpdateInput = {
    manga?: MangaUpdateOneRequiredWithoutGenresNestedInput
    genre?: MangaGenreUpdateOneRequiredWithoutMangasNestedInput
  }

  export type MangaGenreOnMangaUncheckedUpdateInput = {
    mangaId?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type MangaGenreOnMangaCreateManyInput = {
    mangaId: string
    genreId: string
  }

  export type MangaGenreOnMangaUpdateManyMutationInput = {

  }

  export type MangaGenreOnMangaUncheckedUpdateManyInput = {
    mangaId?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type StudioCreateInput = {
    id?: string
    name: string
    animes?: AnimeCreateNestedManyWithoutStudioInput
  }

  export type StudioUncheckedCreateInput = {
    id?: string
    name: string
    animes?: AnimeUncheckedCreateNestedManyWithoutStudioInput
  }

  export type StudioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    animes?: AnimeUpdateManyWithoutStudioNestedInput
  }

  export type StudioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    animes?: AnimeUncheckedUpdateManyWithoutStudioNestedInput
  }

  export type StudioCreateManyInput = {
    id?: string
    name: string
  }

  export type StudioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StudioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PublisherCreateInput = {
    id?: string
    name: string
    mangas?: MangaCreateNestedManyWithoutPublisherInput
  }

  export type PublisherUncheckedCreateInput = {
    id?: string
    name: string
    mangas?: MangaUncheckedCreateNestedManyWithoutPublisherInput
  }

  export type PublisherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mangas?: MangaUpdateManyWithoutPublisherNestedInput
  }

  export type PublisherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    mangas?: MangaUncheckedUpdateManyWithoutPublisherNestedInput
  }

  export type PublisherCreateManyInput = {
    id?: string
    name: string
  }

  export type PublisherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PublisherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type StudioScalarRelationFilter = {
    is?: StudioWhereInput
    isNot?: StudioWhereInput
  }

  export type AnimeGenreOnAnimeListRelationFilter = {
    every?: AnimeGenreOnAnimeWhereInput
    some?: AnimeGenreOnAnimeWhereInput
    none?: AnimeGenreOnAnimeWhereInput
  }

  export type AnimeGenreOnAnimeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnimeCountOrderByAggregateInput = {
    id?: SortOrder
    titleUa?: SortOrder
    titleEn?: SortOrder
    titleJp?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    kind?: SortOrder
    episodes?: SortOrder
    status?: SortOrder
    dateRelease?: SortOrder
    imageUrl?: SortOrder
    studioId?: SortOrder
  }

  export type AnimeAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type AnimeMaxOrderByAggregateInput = {
    id?: SortOrder
    titleUa?: SortOrder
    titleEn?: SortOrder
    titleJp?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    kind?: SortOrder
    episodes?: SortOrder
    status?: SortOrder
    dateRelease?: SortOrder
    imageUrl?: SortOrder
    studioId?: SortOrder
  }

  export type AnimeMinOrderByAggregateInput = {
    id?: SortOrder
    titleUa?: SortOrder
    titleEn?: SortOrder
    titleJp?: SortOrder
    description?: SortOrder
    rating?: SortOrder
    kind?: SortOrder
    episodes?: SortOrder
    status?: SortOrder
    dateRelease?: SortOrder
    imageUrl?: SortOrder
    studioId?: SortOrder
  }

  export type AnimeSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type PublisherScalarRelationFilter = {
    is?: PublisherWhereInput
    isNot?: PublisherWhereInput
  }

  export type MangaGenreOnMangaListRelationFilter = {
    every?: MangaGenreOnMangaWhereInput
    some?: MangaGenreOnMangaWhereInput
    none?: MangaGenreOnMangaWhereInput
  }

  export type MangaGenreOnMangaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MangaCountOrderByAggregateInput = {
    id?: SortOrder
    titleUa?: SortOrder
    titleEn?: SortOrder
    titleJp?: SortOrder
    description?: SortOrder
    kind?: SortOrder
    chapters?: SortOrder
    volumes?: SortOrder
    dateRelease?: SortOrder
    status?: SortOrder
    imageUrl?: SortOrder
    publisherId?: SortOrder
  }

  export type MangaMaxOrderByAggregateInput = {
    id?: SortOrder
    titleUa?: SortOrder
    titleEn?: SortOrder
    titleJp?: SortOrder
    description?: SortOrder
    kind?: SortOrder
    chapters?: SortOrder
    volumes?: SortOrder
    dateRelease?: SortOrder
    status?: SortOrder
    imageUrl?: SortOrder
    publisherId?: SortOrder
  }

  export type MangaMinOrderByAggregateInput = {
    id?: SortOrder
    titleUa?: SortOrder
    titleEn?: SortOrder
    titleJp?: SortOrder
    description?: SortOrder
    kind?: SortOrder
    chapters?: SortOrder
    volumes?: SortOrder
    dateRelease?: SortOrder
    status?: SortOrder
    imageUrl?: SortOrder
    publisherId?: SortOrder
  }

  export type AnimeGenreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AnimeGenreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AnimeGenreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MangaGenreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MangaGenreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MangaGenreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AnimeScalarRelationFilter = {
    is?: AnimeWhereInput
    isNot?: AnimeWhereInput
  }

  export type AnimeGenreScalarRelationFilter = {
    is?: AnimeGenreWhereInput
    isNot?: AnimeGenreWhereInput
  }

  export type AnimeGenreOnAnimeAnimeIdGenreIdCompoundUniqueInput = {
    animeId: string
    genreId: string
  }

  export type AnimeGenreOnAnimeCountOrderByAggregateInput = {
    animeId?: SortOrder
    genreId?: SortOrder
  }

  export type AnimeGenreOnAnimeMaxOrderByAggregateInput = {
    animeId?: SortOrder
    genreId?: SortOrder
  }

  export type AnimeGenreOnAnimeMinOrderByAggregateInput = {
    animeId?: SortOrder
    genreId?: SortOrder
  }

  export type MangaScalarRelationFilter = {
    is?: MangaWhereInput
    isNot?: MangaWhereInput
  }

  export type MangaGenreScalarRelationFilter = {
    is?: MangaGenreWhereInput
    isNot?: MangaGenreWhereInput
  }

  export type MangaGenreOnMangaMangaIdGenreIdCompoundUniqueInput = {
    mangaId: string
    genreId: string
  }

  export type MangaGenreOnMangaCountOrderByAggregateInput = {
    mangaId?: SortOrder
    genreId?: SortOrder
  }

  export type MangaGenreOnMangaMaxOrderByAggregateInput = {
    mangaId?: SortOrder
    genreId?: SortOrder
  }

  export type MangaGenreOnMangaMinOrderByAggregateInput = {
    mangaId?: SortOrder
    genreId?: SortOrder
  }

  export type AnimeListRelationFilter = {
    every?: AnimeWhereInput
    some?: AnimeWhereInput
    none?: AnimeWhereInput
  }

  export type AnimeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudioCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StudioMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StudioMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MangaListRelationFilter = {
    every?: MangaWhereInput
    some?: MangaWhereInput
    none?: MangaWhereInput
  }

  export type MangaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PublisherCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PublisherMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PublisherMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StudioCreateNestedOneWithoutAnimesInput = {
    create?: XOR<StudioCreateWithoutAnimesInput, StudioUncheckedCreateWithoutAnimesInput>
    connectOrCreate?: StudioCreateOrConnectWithoutAnimesInput
    connect?: StudioWhereUniqueInput
  }

  export type AnimeGenreOnAnimeCreateNestedManyWithoutAnimeInput = {
    create?: XOR<AnimeGenreOnAnimeCreateWithoutAnimeInput, AnimeGenreOnAnimeUncheckedCreateWithoutAnimeInput> | AnimeGenreOnAnimeCreateWithoutAnimeInput[] | AnimeGenreOnAnimeUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: AnimeGenreOnAnimeCreateOrConnectWithoutAnimeInput | AnimeGenreOnAnimeCreateOrConnectWithoutAnimeInput[]
    createMany?: AnimeGenreOnAnimeCreateManyAnimeInputEnvelope
    connect?: AnimeGenreOnAnimeWhereUniqueInput | AnimeGenreOnAnimeWhereUniqueInput[]
  }

  export type AnimeGenreOnAnimeUncheckedCreateNestedManyWithoutAnimeInput = {
    create?: XOR<AnimeGenreOnAnimeCreateWithoutAnimeInput, AnimeGenreOnAnimeUncheckedCreateWithoutAnimeInput> | AnimeGenreOnAnimeCreateWithoutAnimeInput[] | AnimeGenreOnAnimeUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: AnimeGenreOnAnimeCreateOrConnectWithoutAnimeInput | AnimeGenreOnAnimeCreateOrConnectWithoutAnimeInput[]
    createMany?: AnimeGenreOnAnimeCreateManyAnimeInputEnvelope
    connect?: AnimeGenreOnAnimeWhereUniqueInput | AnimeGenreOnAnimeWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StudioUpdateOneRequiredWithoutAnimesNestedInput = {
    create?: XOR<StudioCreateWithoutAnimesInput, StudioUncheckedCreateWithoutAnimesInput>
    connectOrCreate?: StudioCreateOrConnectWithoutAnimesInput
    upsert?: StudioUpsertWithoutAnimesInput
    connect?: StudioWhereUniqueInput
    update?: XOR<XOR<StudioUpdateToOneWithWhereWithoutAnimesInput, StudioUpdateWithoutAnimesInput>, StudioUncheckedUpdateWithoutAnimesInput>
  }

  export type AnimeGenreOnAnimeUpdateManyWithoutAnimeNestedInput = {
    create?: XOR<AnimeGenreOnAnimeCreateWithoutAnimeInput, AnimeGenreOnAnimeUncheckedCreateWithoutAnimeInput> | AnimeGenreOnAnimeCreateWithoutAnimeInput[] | AnimeGenreOnAnimeUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: AnimeGenreOnAnimeCreateOrConnectWithoutAnimeInput | AnimeGenreOnAnimeCreateOrConnectWithoutAnimeInput[]
    upsert?: AnimeGenreOnAnimeUpsertWithWhereUniqueWithoutAnimeInput | AnimeGenreOnAnimeUpsertWithWhereUniqueWithoutAnimeInput[]
    createMany?: AnimeGenreOnAnimeCreateManyAnimeInputEnvelope
    set?: AnimeGenreOnAnimeWhereUniqueInput | AnimeGenreOnAnimeWhereUniqueInput[]
    disconnect?: AnimeGenreOnAnimeWhereUniqueInput | AnimeGenreOnAnimeWhereUniqueInput[]
    delete?: AnimeGenreOnAnimeWhereUniqueInput | AnimeGenreOnAnimeWhereUniqueInput[]
    connect?: AnimeGenreOnAnimeWhereUniqueInput | AnimeGenreOnAnimeWhereUniqueInput[]
    update?: AnimeGenreOnAnimeUpdateWithWhereUniqueWithoutAnimeInput | AnimeGenreOnAnimeUpdateWithWhereUniqueWithoutAnimeInput[]
    updateMany?: AnimeGenreOnAnimeUpdateManyWithWhereWithoutAnimeInput | AnimeGenreOnAnimeUpdateManyWithWhereWithoutAnimeInput[]
    deleteMany?: AnimeGenreOnAnimeScalarWhereInput | AnimeGenreOnAnimeScalarWhereInput[]
  }

  export type AnimeGenreOnAnimeUncheckedUpdateManyWithoutAnimeNestedInput = {
    create?: XOR<AnimeGenreOnAnimeCreateWithoutAnimeInput, AnimeGenreOnAnimeUncheckedCreateWithoutAnimeInput> | AnimeGenreOnAnimeCreateWithoutAnimeInput[] | AnimeGenreOnAnimeUncheckedCreateWithoutAnimeInput[]
    connectOrCreate?: AnimeGenreOnAnimeCreateOrConnectWithoutAnimeInput | AnimeGenreOnAnimeCreateOrConnectWithoutAnimeInput[]
    upsert?: AnimeGenreOnAnimeUpsertWithWhereUniqueWithoutAnimeInput | AnimeGenreOnAnimeUpsertWithWhereUniqueWithoutAnimeInput[]
    createMany?: AnimeGenreOnAnimeCreateManyAnimeInputEnvelope
    set?: AnimeGenreOnAnimeWhereUniqueInput | AnimeGenreOnAnimeWhereUniqueInput[]
    disconnect?: AnimeGenreOnAnimeWhereUniqueInput | AnimeGenreOnAnimeWhereUniqueInput[]
    delete?: AnimeGenreOnAnimeWhereUniqueInput | AnimeGenreOnAnimeWhereUniqueInput[]
    connect?: AnimeGenreOnAnimeWhereUniqueInput | AnimeGenreOnAnimeWhereUniqueInput[]
    update?: AnimeGenreOnAnimeUpdateWithWhereUniqueWithoutAnimeInput | AnimeGenreOnAnimeUpdateWithWhereUniqueWithoutAnimeInput[]
    updateMany?: AnimeGenreOnAnimeUpdateManyWithWhereWithoutAnimeInput | AnimeGenreOnAnimeUpdateManyWithWhereWithoutAnimeInput[]
    deleteMany?: AnimeGenreOnAnimeScalarWhereInput | AnimeGenreOnAnimeScalarWhereInput[]
  }

  export type PublisherCreateNestedOneWithoutMangasInput = {
    create?: XOR<PublisherCreateWithoutMangasInput, PublisherUncheckedCreateWithoutMangasInput>
    connectOrCreate?: PublisherCreateOrConnectWithoutMangasInput
    connect?: PublisherWhereUniqueInput
  }

  export type MangaGenreOnMangaCreateNestedManyWithoutMangaInput = {
    create?: XOR<MangaGenreOnMangaCreateWithoutMangaInput, MangaGenreOnMangaUncheckedCreateWithoutMangaInput> | MangaGenreOnMangaCreateWithoutMangaInput[] | MangaGenreOnMangaUncheckedCreateWithoutMangaInput[]
    connectOrCreate?: MangaGenreOnMangaCreateOrConnectWithoutMangaInput | MangaGenreOnMangaCreateOrConnectWithoutMangaInput[]
    createMany?: MangaGenreOnMangaCreateManyMangaInputEnvelope
    connect?: MangaGenreOnMangaWhereUniqueInput | MangaGenreOnMangaWhereUniqueInput[]
  }

  export type MangaGenreOnMangaUncheckedCreateNestedManyWithoutMangaInput = {
    create?: XOR<MangaGenreOnMangaCreateWithoutMangaInput, MangaGenreOnMangaUncheckedCreateWithoutMangaInput> | MangaGenreOnMangaCreateWithoutMangaInput[] | MangaGenreOnMangaUncheckedCreateWithoutMangaInput[]
    connectOrCreate?: MangaGenreOnMangaCreateOrConnectWithoutMangaInput | MangaGenreOnMangaCreateOrConnectWithoutMangaInput[]
    createMany?: MangaGenreOnMangaCreateManyMangaInputEnvelope
    connect?: MangaGenreOnMangaWhereUniqueInput | MangaGenreOnMangaWhereUniqueInput[]
  }

  export type PublisherUpdateOneRequiredWithoutMangasNestedInput = {
    create?: XOR<PublisherCreateWithoutMangasInput, PublisherUncheckedCreateWithoutMangasInput>
    connectOrCreate?: PublisherCreateOrConnectWithoutMangasInput
    upsert?: PublisherUpsertWithoutMangasInput
    connect?: PublisherWhereUniqueInput
    update?: XOR<XOR<PublisherUpdateToOneWithWhereWithoutMangasInput, PublisherUpdateWithoutMangasInput>, PublisherUncheckedUpdateWithoutMangasInput>
  }

  export type MangaGenreOnMangaUpdateManyWithoutMangaNestedInput = {
    create?: XOR<MangaGenreOnMangaCreateWithoutMangaInput, MangaGenreOnMangaUncheckedCreateWithoutMangaInput> | MangaGenreOnMangaCreateWithoutMangaInput[] | MangaGenreOnMangaUncheckedCreateWithoutMangaInput[]
    connectOrCreate?: MangaGenreOnMangaCreateOrConnectWithoutMangaInput | MangaGenreOnMangaCreateOrConnectWithoutMangaInput[]
    upsert?: MangaGenreOnMangaUpsertWithWhereUniqueWithoutMangaInput | MangaGenreOnMangaUpsertWithWhereUniqueWithoutMangaInput[]
    createMany?: MangaGenreOnMangaCreateManyMangaInputEnvelope
    set?: MangaGenreOnMangaWhereUniqueInput | MangaGenreOnMangaWhereUniqueInput[]
    disconnect?: MangaGenreOnMangaWhereUniqueInput | MangaGenreOnMangaWhereUniqueInput[]
    delete?: MangaGenreOnMangaWhereUniqueInput | MangaGenreOnMangaWhereUniqueInput[]
    connect?: MangaGenreOnMangaWhereUniqueInput | MangaGenreOnMangaWhereUniqueInput[]
    update?: MangaGenreOnMangaUpdateWithWhereUniqueWithoutMangaInput | MangaGenreOnMangaUpdateWithWhereUniqueWithoutMangaInput[]
    updateMany?: MangaGenreOnMangaUpdateManyWithWhereWithoutMangaInput | MangaGenreOnMangaUpdateManyWithWhereWithoutMangaInput[]
    deleteMany?: MangaGenreOnMangaScalarWhereInput | MangaGenreOnMangaScalarWhereInput[]
  }

  export type MangaGenreOnMangaUncheckedUpdateManyWithoutMangaNestedInput = {
    create?: XOR<MangaGenreOnMangaCreateWithoutMangaInput, MangaGenreOnMangaUncheckedCreateWithoutMangaInput> | MangaGenreOnMangaCreateWithoutMangaInput[] | MangaGenreOnMangaUncheckedCreateWithoutMangaInput[]
    connectOrCreate?: MangaGenreOnMangaCreateOrConnectWithoutMangaInput | MangaGenreOnMangaCreateOrConnectWithoutMangaInput[]
    upsert?: MangaGenreOnMangaUpsertWithWhereUniqueWithoutMangaInput | MangaGenreOnMangaUpsertWithWhereUniqueWithoutMangaInput[]
    createMany?: MangaGenreOnMangaCreateManyMangaInputEnvelope
    set?: MangaGenreOnMangaWhereUniqueInput | MangaGenreOnMangaWhereUniqueInput[]
    disconnect?: MangaGenreOnMangaWhereUniqueInput | MangaGenreOnMangaWhereUniqueInput[]
    delete?: MangaGenreOnMangaWhereUniqueInput | MangaGenreOnMangaWhereUniqueInput[]
    connect?: MangaGenreOnMangaWhereUniqueInput | MangaGenreOnMangaWhereUniqueInput[]
    update?: MangaGenreOnMangaUpdateWithWhereUniqueWithoutMangaInput | MangaGenreOnMangaUpdateWithWhereUniqueWithoutMangaInput[]
    updateMany?: MangaGenreOnMangaUpdateManyWithWhereWithoutMangaInput | MangaGenreOnMangaUpdateManyWithWhereWithoutMangaInput[]
    deleteMany?: MangaGenreOnMangaScalarWhereInput | MangaGenreOnMangaScalarWhereInput[]
  }

  export type AnimeGenreOnAnimeCreateNestedManyWithoutGenreInput = {
    create?: XOR<AnimeGenreOnAnimeCreateWithoutGenreInput, AnimeGenreOnAnimeUncheckedCreateWithoutGenreInput> | AnimeGenreOnAnimeCreateWithoutGenreInput[] | AnimeGenreOnAnimeUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: AnimeGenreOnAnimeCreateOrConnectWithoutGenreInput | AnimeGenreOnAnimeCreateOrConnectWithoutGenreInput[]
    createMany?: AnimeGenreOnAnimeCreateManyGenreInputEnvelope
    connect?: AnimeGenreOnAnimeWhereUniqueInput | AnimeGenreOnAnimeWhereUniqueInput[]
  }

  export type AnimeGenreOnAnimeUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<AnimeGenreOnAnimeCreateWithoutGenreInput, AnimeGenreOnAnimeUncheckedCreateWithoutGenreInput> | AnimeGenreOnAnimeCreateWithoutGenreInput[] | AnimeGenreOnAnimeUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: AnimeGenreOnAnimeCreateOrConnectWithoutGenreInput | AnimeGenreOnAnimeCreateOrConnectWithoutGenreInput[]
    createMany?: AnimeGenreOnAnimeCreateManyGenreInputEnvelope
    connect?: AnimeGenreOnAnimeWhereUniqueInput | AnimeGenreOnAnimeWhereUniqueInput[]
  }

  export type AnimeGenreOnAnimeUpdateManyWithoutGenreNestedInput = {
    create?: XOR<AnimeGenreOnAnimeCreateWithoutGenreInput, AnimeGenreOnAnimeUncheckedCreateWithoutGenreInput> | AnimeGenreOnAnimeCreateWithoutGenreInput[] | AnimeGenreOnAnimeUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: AnimeGenreOnAnimeCreateOrConnectWithoutGenreInput | AnimeGenreOnAnimeCreateOrConnectWithoutGenreInput[]
    upsert?: AnimeGenreOnAnimeUpsertWithWhereUniqueWithoutGenreInput | AnimeGenreOnAnimeUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: AnimeGenreOnAnimeCreateManyGenreInputEnvelope
    set?: AnimeGenreOnAnimeWhereUniqueInput | AnimeGenreOnAnimeWhereUniqueInput[]
    disconnect?: AnimeGenreOnAnimeWhereUniqueInput | AnimeGenreOnAnimeWhereUniqueInput[]
    delete?: AnimeGenreOnAnimeWhereUniqueInput | AnimeGenreOnAnimeWhereUniqueInput[]
    connect?: AnimeGenreOnAnimeWhereUniqueInput | AnimeGenreOnAnimeWhereUniqueInput[]
    update?: AnimeGenreOnAnimeUpdateWithWhereUniqueWithoutGenreInput | AnimeGenreOnAnimeUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: AnimeGenreOnAnimeUpdateManyWithWhereWithoutGenreInput | AnimeGenreOnAnimeUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: AnimeGenreOnAnimeScalarWhereInput | AnimeGenreOnAnimeScalarWhereInput[]
  }

  export type AnimeGenreOnAnimeUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<AnimeGenreOnAnimeCreateWithoutGenreInput, AnimeGenreOnAnimeUncheckedCreateWithoutGenreInput> | AnimeGenreOnAnimeCreateWithoutGenreInput[] | AnimeGenreOnAnimeUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: AnimeGenreOnAnimeCreateOrConnectWithoutGenreInput | AnimeGenreOnAnimeCreateOrConnectWithoutGenreInput[]
    upsert?: AnimeGenreOnAnimeUpsertWithWhereUniqueWithoutGenreInput | AnimeGenreOnAnimeUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: AnimeGenreOnAnimeCreateManyGenreInputEnvelope
    set?: AnimeGenreOnAnimeWhereUniqueInput | AnimeGenreOnAnimeWhereUniqueInput[]
    disconnect?: AnimeGenreOnAnimeWhereUniqueInput | AnimeGenreOnAnimeWhereUniqueInput[]
    delete?: AnimeGenreOnAnimeWhereUniqueInput | AnimeGenreOnAnimeWhereUniqueInput[]
    connect?: AnimeGenreOnAnimeWhereUniqueInput | AnimeGenreOnAnimeWhereUniqueInput[]
    update?: AnimeGenreOnAnimeUpdateWithWhereUniqueWithoutGenreInput | AnimeGenreOnAnimeUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: AnimeGenreOnAnimeUpdateManyWithWhereWithoutGenreInput | AnimeGenreOnAnimeUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: AnimeGenreOnAnimeScalarWhereInput | AnimeGenreOnAnimeScalarWhereInput[]
  }

  export type MangaGenreOnMangaCreateNestedManyWithoutGenreInput = {
    create?: XOR<MangaGenreOnMangaCreateWithoutGenreInput, MangaGenreOnMangaUncheckedCreateWithoutGenreInput> | MangaGenreOnMangaCreateWithoutGenreInput[] | MangaGenreOnMangaUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: MangaGenreOnMangaCreateOrConnectWithoutGenreInput | MangaGenreOnMangaCreateOrConnectWithoutGenreInput[]
    createMany?: MangaGenreOnMangaCreateManyGenreInputEnvelope
    connect?: MangaGenreOnMangaWhereUniqueInput | MangaGenreOnMangaWhereUniqueInput[]
  }

  export type MangaGenreOnMangaUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<MangaGenreOnMangaCreateWithoutGenreInput, MangaGenreOnMangaUncheckedCreateWithoutGenreInput> | MangaGenreOnMangaCreateWithoutGenreInput[] | MangaGenreOnMangaUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: MangaGenreOnMangaCreateOrConnectWithoutGenreInput | MangaGenreOnMangaCreateOrConnectWithoutGenreInput[]
    createMany?: MangaGenreOnMangaCreateManyGenreInputEnvelope
    connect?: MangaGenreOnMangaWhereUniqueInput | MangaGenreOnMangaWhereUniqueInput[]
  }

  export type MangaGenreOnMangaUpdateManyWithoutGenreNestedInput = {
    create?: XOR<MangaGenreOnMangaCreateWithoutGenreInput, MangaGenreOnMangaUncheckedCreateWithoutGenreInput> | MangaGenreOnMangaCreateWithoutGenreInput[] | MangaGenreOnMangaUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: MangaGenreOnMangaCreateOrConnectWithoutGenreInput | MangaGenreOnMangaCreateOrConnectWithoutGenreInput[]
    upsert?: MangaGenreOnMangaUpsertWithWhereUniqueWithoutGenreInput | MangaGenreOnMangaUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: MangaGenreOnMangaCreateManyGenreInputEnvelope
    set?: MangaGenreOnMangaWhereUniqueInput | MangaGenreOnMangaWhereUniqueInput[]
    disconnect?: MangaGenreOnMangaWhereUniqueInput | MangaGenreOnMangaWhereUniqueInput[]
    delete?: MangaGenreOnMangaWhereUniqueInput | MangaGenreOnMangaWhereUniqueInput[]
    connect?: MangaGenreOnMangaWhereUniqueInput | MangaGenreOnMangaWhereUniqueInput[]
    update?: MangaGenreOnMangaUpdateWithWhereUniqueWithoutGenreInput | MangaGenreOnMangaUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: MangaGenreOnMangaUpdateManyWithWhereWithoutGenreInput | MangaGenreOnMangaUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: MangaGenreOnMangaScalarWhereInput | MangaGenreOnMangaScalarWhereInput[]
  }

  export type MangaGenreOnMangaUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<MangaGenreOnMangaCreateWithoutGenreInput, MangaGenreOnMangaUncheckedCreateWithoutGenreInput> | MangaGenreOnMangaCreateWithoutGenreInput[] | MangaGenreOnMangaUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: MangaGenreOnMangaCreateOrConnectWithoutGenreInput | MangaGenreOnMangaCreateOrConnectWithoutGenreInput[]
    upsert?: MangaGenreOnMangaUpsertWithWhereUniqueWithoutGenreInput | MangaGenreOnMangaUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: MangaGenreOnMangaCreateManyGenreInputEnvelope
    set?: MangaGenreOnMangaWhereUniqueInput | MangaGenreOnMangaWhereUniqueInput[]
    disconnect?: MangaGenreOnMangaWhereUniqueInput | MangaGenreOnMangaWhereUniqueInput[]
    delete?: MangaGenreOnMangaWhereUniqueInput | MangaGenreOnMangaWhereUniqueInput[]
    connect?: MangaGenreOnMangaWhereUniqueInput | MangaGenreOnMangaWhereUniqueInput[]
    update?: MangaGenreOnMangaUpdateWithWhereUniqueWithoutGenreInput | MangaGenreOnMangaUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: MangaGenreOnMangaUpdateManyWithWhereWithoutGenreInput | MangaGenreOnMangaUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: MangaGenreOnMangaScalarWhereInput | MangaGenreOnMangaScalarWhereInput[]
  }

  export type AnimeCreateNestedOneWithoutGenresInput = {
    create?: XOR<AnimeCreateWithoutGenresInput, AnimeUncheckedCreateWithoutGenresInput>
    connectOrCreate?: AnimeCreateOrConnectWithoutGenresInput
    connect?: AnimeWhereUniqueInput
  }

  export type AnimeGenreCreateNestedOneWithoutAnimesInput = {
    create?: XOR<AnimeGenreCreateWithoutAnimesInput, AnimeGenreUncheckedCreateWithoutAnimesInput>
    connectOrCreate?: AnimeGenreCreateOrConnectWithoutAnimesInput
    connect?: AnimeGenreWhereUniqueInput
  }

  export type AnimeUpdateOneRequiredWithoutGenresNestedInput = {
    create?: XOR<AnimeCreateWithoutGenresInput, AnimeUncheckedCreateWithoutGenresInput>
    connectOrCreate?: AnimeCreateOrConnectWithoutGenresInput
    upsert?: AnimeUpsertWithoutGenresInput
    connect?: AnimeWhereUniqueInput
    update?: XOR<XOR<AnimeUpdateToOneWithWhereWithoutGenresInput, AnimeUpdateWithoutGenresInput>, AnimeUncheckedUpdateWithoutGenresInput>
  }

  export type AnimeGenreUpdateOneRequiredWithoutAnimesNestedInput = {
    create?: XOR<AnimeGenreCreateWithoutAnimesInput, AnimeGenreUncheckedCreateWithoutAnimesInput>
    connectOrCreate?: AnimeGenreCreateOrConnectWithoutAnimesInput
    upsert?: AnimeGenreUpsertWithoutAnimesInput
    connect?: AnimeGenreWhereUniqueInput
    update?: XOR<XOR<AnimeGenreUpdateToOneWithWhereWithoutAnimesInput, AnimeGenreUpdateWithoutAnimesInput>, AnimeGenreUncheckedUpdateWithoutAnimesInput>
  }

  export type MangaCreateNestedOneWithoutGenresInput = {
    create?: XOR<MangaCreateWithoutGenresInput, MangaUncheckedCreateWithoutGenresInput>
    connectOrCreate?: MangaCreateOrConnectWithoutGenresInput
    connect?: MangaWhereUniqueInput
  }

  export type MangaGenreCreateNestedOneWithoutMangasInput = {
    create?: XOR<MangaGenreCreateWithoutMangasInput, MangaGenreUncheckedCreateWithoutMangasInput>
    connectOrCreate?: MangaGenreCreateOrConnectWithoutMangasInput
    connect?: MangaGenreWhereUniqueInput
  }

  export type MangaUpdateOneRequiredWithoutGenresNestedInput = {
    create?: XOR<MangaCreateWithoutGenresInput, MangaUncheckedCreateWithoutGenresInput>
    connectOrCreate?: MangaCreateOrConnectWithoutGenresInput
    upsert?: MangaUpsertWithoutGenresInput
    connect?: MangaWhereUniqueInput
    update?: XOR<XOR<MangaUpdateToOneWithWhereWithoutGenresInput, MangaUpdateWithoutGenresInput>, MangaUncheckedUpdateWithoutGenresInput>
  }

  export type MangaGenreUpdateOneRequiredWithoutMangasNestedInput = {
    create?: XOR<MangaGenreCreateWithoutMangasInput, MangaGenreUncheckedCreateWithoutMangasInput>
    connectOrCreate?: MangaGenreCreateOrConnectWithoutMangasInput
    upsert?: MangaGenreUpsertWithoutMangasInput
    connect?: MangaGenreWhereUniqueInput
    update?: XOR<XOR<MangaGenreUpdateToOneWithWhereWithoutMangasInput, MangaGenreUpdateWithoutMangasInput>, MangaGenreUncheckedUpdateWithoutMangasInput>
  }

  export type AnimeCreateNestedManyWithoutStudioInput = {
    create?: XOR<AnimeCreateWithoutStudioInput, AnimeUncheckedCreateWithoutStudioInput> | AnimeCreateWithoutStudioInput[] | AnimeUncheckedCreateWithoutStudioInput[]
    connectOrCreate?: AnimeCreateOrConnectWithoutStudioInput | AnimeCreateOrConnectWithoutStudioInput[]
    createMany?: AnimeCreateManyStudioInputEnvelope
    connect?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
  }

  export type AnimeUncheckedCreateNestedManyWithoutStudioInput = {
    create?: XOR<AnimeCreateWithoutStudioInput, AnimeUncheckedCreateWithoutStudioInput> | AnimeCreateWithoutStudioInput[] | AnimeUncheckedCreateWithoutStudioInput[]
    connectOrCreate?: AnimeCreateOrConnectWithoutStudioInput | AnimeCreateOrConnectWithoutStudioInput[]
    createMany?: AnimeCreateManyStudioInputEnvelope
    connect?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
  }

  export type AnimeUpdateManyWithoutStudioNestedInput = {
    create?: XOR<AnimeCreateWithoutStudioInput, AnimeUncheckedCreateWithoutStudioInput> | AnimeCreateWithoutStudioInput[] | AnimeUncheckedCreateWithoutStudioInput[]
    connectOrCreate?: AnimeCreateOrConnectWithoutStudioInput | AnimeCreateOrConnectWithoutStudioInput[]
    upsert?: AnimeUpsertWithWhereUniqueWithoutStudioInput | AnimeUpsertWithWhereUniqueWithoutStudioInput[]
    createMany?: AnimeCreateManyStudioInputEnvelope
    set?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
    disconnect?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
    delete?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
    connect?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
    update?: AnimeUpdateWithWhereUniqueWithoutStudioInput | AnimeUpdateWithWhereUniqueWithoutStudioInput[]
    updateMany?: AnimeUpdateManyWithWhereWithoutStudioInput | AnimeUpdateManyWithWhereWithoutStudioInput[]
    deleteMany?: AnimeScalarWhereInput | AnimeScalarWhereInput[]
  }

  export type AnimeUncheckedUpdateManyWithoutStudioNestedInput = {
    create?: XOR<AnimeCreateWithoutStudioInput, AnimeUncheckedCreateWithoutStudioInput> | AnimeCreateWithoutStudioInput[] | AnimeUncheckedCreateWithoutStudioInput[]
    connectOrCreate?: AnimeCreateOrConnectWithoutStudioInput | AnimeCreateOrConnectWithoutStudioInput[]
    upsert?: AnimeUpsertWithWhereUniqueWithoutStudioInput | AnimeUpsertWithWhereUniqueWithoutStudioInput[]
    createMany?: AnimeCreateManyStudioInputEnvelope
    set?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
    disconnect?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
    delete?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
    connect?: AnimeWhereUniqueInput | AnimeWhereUniqueInput[]
    update?: AnimeUpdateWithWhereUniqueWithoutStudioInput | AnimeUpdateWithWhereUniqueWithoutStudioInput[]
    updateMany?: AnimeUpdateManyWithWhereWithoutStudioInput | AnimeUpdateManyWithWhereWithoutStudioInput[]
    deleteMany?: AnimeScalarWhereInput | AnimeScalarWhereInput[]
  }

  export type MangaCreateNestedManyWithoutPublisherInput = {
    create?: XOR<MangaCreateWithoutPublisherInput, MangaUncheckedCreateWithoutPublisherInput> | MangaCreateWithoutPublisherInput[] | MangaUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: MangaCreateOrConnectWithoutPublisherInput | MangaCreateOrConnectWithoutPublisherInput[]
    createMany?: MangaCreateManyPublisherInputEnvelope
    connect?: MangaWhereUniqueInput | MangaWhereUniqueInput[]
  }

  export type MangaUncheckedCreateNestedManyWithoutPublisherInput = {
    create?: XOR<MangaCreateWithoutPublisherInput, MangaUncheckedCreateWithoutPublisherInput> | MangaCreateWithoutPublisherInput[] | MangaUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: MangaCreateOrConnectWithoutPublisherInput | MangaCreateOrConnectWithoutPublisherInput[]
    createMany?: MangaCreateManyPublisherInputEnvelope
    connect?: MangaWhereUniqueInput | MangaWhereUniqueInput[]
  }

  export type MangaUpdateManyWithoutPublisherNestedInput = {
    create?: XOR<MangaCreateWithoutPublisherInput, MangaUncheckedCreateWithoutPublisherInput> | MangaCreateWithoutPublisherInput[] | MangaUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: MangaCreateOrConnectWithoutPublisherInput | MangaCreateOrConnectWithoutPublisherInput[]
    upsert?: MangaUpsertWithWhereUniqueWithoutPublisherInput | MangaUpsertWithWhereUniqueWithoutPublisherInput[]
    createMany?: MangaCreateManyPublisherInputEnvelope
    set?: MangaWhereUniqueInput | MangaWhereUniqueInput[]
    disconnect?: MangaWhereUniqueInput | MangaWhereUniqueInput[]
    delete?: MangaWhereUniqueInput | MangaWhereUniqueInput[]
    connect?: MangaWhereUniqueInput | MangaWhereUniqueInput[]
    update?: MangaUpdateWithWhereUniqueWithoutPublisherInput | MangaUpdateWithWhereUniqueWithoutPublisherInput[]
    updateMany?: MangaUpdateManyWithWhereWithoutPublisherInput | MangaUpdateManyWithWhereWithoutPublisherInput[]
    deleteMany?: MangaScalarWhereInput | MangaScalarWhereInput[]
  }

  export type MangaUncheckedUpdateManyWithoutPublisherNestedInput = {
    create?: XOR<MangaCreateWithoutPublisherInput, MangaUncheckedCreateWithoutPublisherInput> | MangaCreateWithoutPublisherInput[] | MangaUncheckedCreateWithoutPublisherInput[]
    connectOrCreate?: MangaCreateOrConnectWithoutPublisherInput | MangaCreateOrConnectWithoutPublisherInput[]
    upsert?: MangaUpsertWithWhereUniqueWithoutPublisherInput | MangaUpsertWithWhereUniqueWithoutPublisherInput[]
    createMany?: MangaCreateManyPublisherInputEnvelope
    set?: MangaWhereUniqueInput | MangaWhereUniqueInput[]
    disconnect?: MangaWhereUniqueInput | MangaWhereUniqueInput[]
    delete?: MangaWhereUniqueInput | MangaWhereUniqueInput[]
    connect?: MangaWhereUniqueInput | MangaWhereUniqueInput[]
    update?: MangaUpdateWithWhereUniqueWithoutPublisherInput | MangaUpdateWithWhereUniqueWithoutPublisherInput[]
    updateMany?: MangaUpdateManyWithWhereWithoutPublisherInput | MangaUpdateManyWithWhereWithoutPublisherInput[]
    deleteMany?: MangaScalarWhereInput | MangaScalarWhereInput[]
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type StudioCreateWithoutAnimesInput = {
    id?: string
    name: string
  }

  export type StudioUncheckedCreateWithoutAnimesInput = {
    id?: string
    name: string
  }

  export type StudioCreateOrConnectWithoutAnimesInput = {
    where: StudioWhereUniqueInput
    create: XOR<StudioCreateWithoutAnimesInput, StudioUncheckedCreateWithoutAnimesInput>
  }

  export type AnimeGenreOnAnimeCreateWithoutAnimeInput = {
    genre: AnimeGenreCreateNestedOneWithoutAnimesInput
  }

  export type AnimeGenreOnAnimeUncheckedCreateWithoutAnimeInput = {
    genreId: string
  }

  export type AnimeGenreOnAnimeCreateOrConnectWithoutAnimeInput = {
    where: AnimeGenreOnAnimeWhereUniqueInput
    create: XOR<AnimeGenreOnAnimeCreateWithoutAnimeInput, AnimeGenreOnAnimeUncheckedCreateWithoutAnimeInput>
  }

  export type AnimeGenreOnAnimeCreateManyAnimeInputEnvelope = {
    data: AnimeGenreOnAnimeCreateManyAnimeInput | AnimeGenreOnAnimeCreateManyAnimeInput[]
    skipDuplicates?: boolean
  }

  export type StudioUpsertWithoutAnimesInput = {
    update: XOR<StudioUpdateWithoutAnimesInput, StudioUncheckedUpdateWithoutAnimesInput>
    create: XOR<StudioCreateWithoutAnimesInput, StudioUncheckedCreateWithoutAnimesInput>
    where?: StudioWhereInput
  }

  export type StudioUpdateToOneWithWhereWithoutAnimesInput = {
    where?: StudioWhereInput
    data: XOR<StudioUpdateWithoutAnimesInput, StudioUncheckedUpdateWithoutAnimesInput>
  }

  export type StudioUpdateWithoutAnimesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StudioUncheckedUpdateWithoutAnimesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AnimeGenreOnAnimeUpsertWithWhereUniqueWithoutAnimeInput = {
    where: AnimeGenreOnAnimeWhereUniqueInput
    update: XOR<AnimeGenreOnAnimeUpdateWithoutAnimeInput, AnimeGenreOnAnimeUncheckedUpdateWithoutAnimeInput>
    create: XOR<AnimeGenreOnAnimeCreateWithoutAnimeInput, AnimeGenreOnAnimeUncheckedCreateWithoutAnimeInput>
  }

  export type AnimeGenreOnAnimeUpdateWithWhereUniqueWithoutAnimeInput = {
    where: AnimeGenreOnAnimeWhereUniqueInput
    data: XOR<AnimeGenreOnAnimeUpdateWithoutAnimeInput, AnimeGenreOnAnimeUncheckedUpdateWithoutAnimeInput>
  }

  export type AnimeGenreOnAnimeUpdateManyWithWhereWithoutAnimeInput = {
    where: AnimeGenreOnAnimeScalarWhereInput
    data: XOR<AnimeGenreOnAnimeUpdateManyMutationInput, AnimeGenreOnAnimeUncheckedUpdateManyWithoutAnimeInput>
  }

  export type AnimeGenreOnAnimeScalarWhereInput = {
    AND?: AnimeGenreOnAnimeScalarWhereInput | AnimeGenreOnAnimeScalarWhereInput[]
    OR?: AnimeGenreOnAnimeScalarWhereInput[]
    NOT?: AnimeGenreOnAnimeScalarWhereInput | AnimeGenreOnAnimeScalarWhereInput[]
    animeId?: StringFilter<"AnimeGenreOnAnime"> | string
    genreId?: StringFilter<"AnimeGenreOnAnime"> | string
  }

  export type PublisherCreateWithoutMangasInput = {
    id?: string
    name: string
  }

  export type PublisherUncheckedCreateWithoutMangasInput = {
    id?: string
    name: string
  }

  export type PublisherCreateOrConnectWithoutMangasInput = {
    where: PublisherWhereUniqueInput
    create: XOR<PublisherCreateWithoutMangasInput, PublisherUncheckedCreateWithoutMangasInput>
  }

  export type MangaGenreOnMangaCreateWithoutMangaInput = {
    genre: MangaGenreCreateNestedOneWithoutMangasInput
  }

  export type MangaGenreOnMangaUncheckedCreateWithoutMangaInput = {
    genreId: string
  }

  export type MangaGenreOnMangaCreateOrConnectWithoutMangaInput = {
    where: MangaGenreOnMangaWhereUniqueInput
    create: XOR<MangaGenreOnMangaCreateWithoutMangaInput, MangaGenreOnMangaUncheckedCreateWithoutMangaInput>
  }

  export type MangaGenreOnMangaCreateManyMangaInputEnvelope = {
    data: MangaGenreOnMangaCreateManyMangaInput | MangaGenreOnMangaCreateManyMangaInput[]
    skipDuplicates?: boolean
  }

  export type PublisherUpsertWithoutMangasInput = {
    update: XOR<PublisherUpdateWithoutMangasInput, PublisherUncheckedUpdateWithoutMangasInput>
    create: XOR<PublisherCreateWithoutMangasInput, PublisherUncheckedCreateWithoutMangasInput>
    where?: PublisherWhereInput
  }

  export type PublisherUpdateToOneWithWhereWithoutMangasInput = {
    where?: PublisherWhereInput
    data: XOR<PublisherUpdateWithoutMangasInput, PublisherUncheckedUpdateWithoutMangasInput>
  }

  export type PublisherUpdateWithoutMangasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PublisherUncheckedUpdateWithoutMangasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MangaGenreOnMangaUpsertWithWhereUniqueWithoutMangaInput = {
    where: MangaGenreOnMangaWhereUniqueInput
    update: XOR<MangaGenreOnMangaUpdateWithoutMangaInput, MangaGenreOnMangaUncheckedUpdateWithoutMangaInput>
    create: XOR<MangaGenreOnMangaCreateWithoutMangaInput, MangaGenreOnMangaUncheckedCreateWithoutMangaInput>
  }

  export type MangaGenreOnMangaUpdateWithWhereUniqueWithoutMangaInput = {
    where: MangaGenreOnMangaWhereUniqueInput
    data: XOR<MangaGenreOnMangaUpdateWithoutMangaInput, MangaGenreOnMangaUncheckedUpdateWithoutMangaInput>
  }

  export type MangaGenreOnMangaUpdateManyWithWhereWithoutMangaInput = {
    where: MangaGenreOnMangaScalarWhereInput
    data: XOR<MangaGenreOnMangaUpdateManyMutationInput, MangaGenreOnMangaUncheckedUpdateManyWithoutMangaInput>
  }

  export type MangaGenreOnMangaScalarWhereInput = {
    AND?: MangaGenreOnMangaScalarWhereInput | MangaGenreOnMangaScalarWhereInput[]
    OR?: MangaGenreOnMangaScalarWhereInput[]
    NOT?: MangaGenreOnMangaScalarWhereInput | MangaGenreOnMangaScalarWhereInput[]
    mangaId?: StringFilter<"MangaGenreOnManga"> | string
    genreId?: StringFilter<"MangaGenreOnManga"> | string
  }

  export type AnimeGenreOnAnimeCreateWithoutGenreInput = {
    anime: AnimeCreateNestedOneWithoutGenresInput
  }

  export type AnimeGenreOnAnimeUncheckedCreateWithoutGenreInput = {
    animeId: string
  }

  export type AnimeGenreOnAnimeCreateOrConnectWithoutGenreInput = {
    where: AnimeGenreOnAnimeWhereUniqueInput
    create: XOR<AnimeGenreOnAnimeCreateWithoutGenreInput, AnimeGenreOnAnimeUncheckedCreateWithoutGenreInput>
  }

  export type AnimeGenreOnAnimeCreateManyGenreInputEnvelope = {
    data: AnimeGenreOnAnimeCreateManyGenreInput | AnimeGenreOnAnimeCreateManyGenreInput[]
    skipDuplicates?: boolean
  }

  export type AnimeGenreOnAnimeUpsertWithWhereUniqueWithoutGenreInput = {
    where: AnimeGenreOnAnimeWhereUniqueInput
    update: XOR<AnimeGenreOnAnimeUpdateWithoutGenreInput, AnimeGenreOnAnimeUncheckedUpdateWithoutGenreInput>
    create: XOR<AnimeGenreOnAnimeCreateWithoutGenreInput, AnimeGenreOnAnimeUncheckedCreateWithoutGenreInput>
  }

  export type AnimeGenreOnAnimeUpdateWithWhereUniqueWithoutGenreInput = {
    where: AnimeGenreOnAnimeWhereUniqueInput
    data: XOR<AnimeGenreOnAnimeUpdateWithoutGenreInput, AnimeGenreOnAnimeUncheckedUpdateWithoutGenreInput>
  }

  export type AnimeGenreOnAnimeUpdateManyWithWhereWithoutGenreInput = {
    where: AnimeGenreOnAnimeScalarWhereInput
    data: XOR<AnimeGenreOnAnimeUpdateManyMutationInput, AnimeGenreOnAnimeUncheckedUpdateManyWithoutGenreInput>
  }

  export type MangaGenreOnMangaCreateWithoutGenreInput = {
    manga: MangaCreateNestedOneWithoutGenresInput
  }

  export type MangaGenreOnMangaUncheckedCreateWithoutGenreInput = {
    mangaId: string
  }

  export type MangaGenreOnMangaCreateOrConnectWithoutGenreInput = {
    where: MangaGenreOnMangaWhereUniqueInput
    create: XOR<MangaGenreOnMangaCreateWithoutGenreInput, MangaGenreOnMangaUncheckedCreateWithoutGenreInput>
  }

  export type MangaGenreOnMangaCreateManyGenreInputEnvelope = {
    data: MangaGenreOnMangaCreateManyGenreInput | MangaGenreOnMangaCreateManyGenreInput[]
    skipDuplicates?: boolean
  }

  export type MangaGenreOnMangaUpsertWithWhereUniqueWithoutGenreInput = {
    where: MangaGenreOnMangaWhereUniqueInput
    update: XOR<MangaGenreOnMangaUpdateWithoutGenreInput, MangaGenreOnMangaUncheckedUpdateWithoutGenreInput>
    create: XOR<MangaGenreOnMangaCreateWithoutGenreInput, MangaGenreOnMangaUncheckedCreateWithoutGenreInput>
  }

  export type MangaGenreOnMangaUpdateWithWhereUniqueWithoutGenreInput = {
    where: MangaGenreOnMangaWhereUniqueInput
    data: XOR<MangaGenreOnMangaUpdateWithoutGenreInput, MangaGenreOnMangaUncheckedUpdateWithoutGenreInput>
  }

  export type MangaGenreOnMangaUpdateManyWithWhereWithoutGenreInput = {
    where: MangaGenreOnMangaScalarWhereInput
    data: XOR<MangaGenreOnMangaUpdateManyMutationInput, MangaGenreOnMangaUncheckedUpdateManyWithoutGenreInput>
  }

  export type AnimeCreateWithoutGenresInput = {
    id?: string
    titleUa?: string | null
    titleEn: string
    titleJp: string
    description: string
    rating: number
    kind: string
    episodes: string
    status: string
    dateRelease?: Date | string | null
    imageUrl: string
    studio: StudioCreateNestedOneWithoutAnimesInput
  }

  export type AnimeUncheckedCreateWithoutGenresInput = {
    id?: string
    titleUa?: string | null
    titleEn: string
    titleJp: string
    description: string
    rating: number
    kind: string
    episodes: string
    status: string
    dateRelease?: Date | string | null
    imageUrl: string
    studioId: string
  }

  export type AnimeCreateOrConnectWithoutGenresInput = {
    where: AnimeWhereUniqueInput
    create: XOR<AnimeCreateWithoutGenresInput, AnimeUncheckedCreateWithoutGenresInput>
  }

  export type AnimeGenreCreateWithoutAnimesInput = {
    id?: string
    name: string
  }

  export type AnimeGenreUncheckedCreateWithoutAnimesInput = {
    id?: string
    name: string
  }

  export type AnimeGenreCreateOrConnectWithoutAnimesInput = {
    where: AnimeGenreWhereUniqueInput
    create: XOR<AnimeGenreCreateWithoutAnimesInput, AnimeGenreUncheckedCreateWithoutAnimesInput>
  }

  export type AnimeUpsertWithoutGenresInput = {
    update: XOR<AnimeUpdateWithoutGenresInput, AnimeUncheckedUpdateWithoutGenresInput>
    create: XOR<AnimeCreateWithoutGenresInput, AnimeUncheckedCreateWithoutGenresInput>
    where?: AnimeWhereInput
  }

  export type AnimeUpdateToOneWithWhereWithoutGenresInput = {
    where?: AnimeWhereInput
    data: XOR<AnimeUpdateWithoutGenresInput, AnimeUncheckedUpdateWithoutGenresInput>
  }

  export type AnimeUpdateWithoutGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleUa?: NullableStringFieldUpdateOperationsInput | string | null
    titleEn?: StringFieldUpdateOperationsInput | string
    titleJp?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    kind?: StringFieldUpdateOperationsInput | string
    episodes?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dateRelease?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    studio?: StudioUpdateOneRequiredWithoutAnimesNestedInput
  }

  export type AnimeUncheckedUpdateWithoutGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleUa?: NullableStringFieldUpdateOperationsInput | string | null
    titleEn?: StringFieldUpdateOperationsInput | string
    titleJp?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    kind?: StringFieldUpdateOperationsInput | string
    episodes?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dateRelease?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    studioId?: StringFieldUpdateOperationsInput | string
  }

  export type AnimeGenreUpsertWithoutAnimesInput = {
    update: XOR<AnimeGenreUpdateWithoutAnimesInput, AnimeGenreUncheckedUpdateWithoutAnimesInput>
    create: XOR<AnimeGenreCreateWithoutAnimesInput, AnimeGenreUncheckedCreateWithoutAnimesInput>
    where?: AnimeGenreWhereInput
  }

  export type AnimeGenreUpdateToOneWithWhereWithoutAnimesInput = {
    where?: AnimeGenreWhereInput
    data: XOR<AnimeGenreUpdateWithoutAnimesInput, AnimeGenreUncheckedUpdateWithoutAnimesInput>
  }

  export type AnimeGenreUpdateWithoutAnimesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AnimeGenreUncheckedUpdateWithoutAnimesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MangaCreateWithoutGenresInput = {
    id?: string
    titleUa: string
    titleEn: string
    titleJp: string
    description: string
    kind: string
    chapters: string
    volumes: string
    dateRelease?: Date | string | null
    status: string
    imageUrl: string
    publisher: PublisherCreateNestedOneWithoutMangasInput
  }

  export type MangaUncheckedCreateWithoutGenresInput = {
    id?: string
    titleUa: string
    titleEn: string
    titleJp: string
    description: string
    kind: string
    chapters: string
    volumes: string
    dateRelease?: Date | string | null
    status: string
    imageUrl: string
    publisherId: string
  }

  export type MangaCreateOrConnectWithoutGenresInput = {
    where: MangaWhereUniqueInput
    create: XOR<MangaCreateWithoutGenresInput, MangaUncheckedCreateWithoutGenresInput>
  }

  export type MangaGenreCreateWithoutMangasInput = {
    id?: string
    name: string
  }

  export type MangaGenreUncheckedCreateWithoutMangasInput = {
    id?: string
    name: string
  }

  export type MangaGenreCreateOrConnectWithoutMangasInput = {
    where: MangaGenreWhereUniqueInput
    create: XOR<MangaGenreCreateWithoutMangasInput, MangaGenreUncheckedCreateWithoutMangasInput>
  }

  export type MangaUpsertWithoutGenresInput = {
    update: XOR<MangaUpdateWithoutGenresInput, MangaUncheckedUpdateWithoutGenresInput>
    create: XOR<MangaCreateWithoutGenresInput, MangaUncheckedCreateWithoutGenresInput>
    where?: MangaWhereInput
  }

  export type MangaUpdateToOneWithWhereWithoutGenresInput = {
    where?: MangaWhereInput
    data: XOR<MangaUpdateWithoutGenresInput, MangaUncheckedUpdateWithoutGenresInput>
  }

  export type MangaUpdateWithoutGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleUa?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    titleJp?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    chapters?: StringFieldUpdateOperationsInput | string
    volumes?: StringFieldUpdateOperationsInput | string
    dateRelease?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    publisher?: PublisherUpdateOneRequiredWithoutMangasNestedInput
  }

  export type MangaUncheckedUpdateWithoutGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleUa?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    titleJp?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    chapters?: StringFieldUpdateOperationsInput | string
    volumes?: StringFieldUpdateOperationsInput | string
    dateRelease?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    publisherId?: StringFieldUpdateOperationsInput | string
  }

  export type MangaGenreUpsertWithoutMangasInput = {
    update: XOR<MangaGenreUpdateWithoutMangasInput, MangaGenreUncheckedUpdateWithoutMangasInput>
    create: XOR<MangaGenreCreateWithoutMangasInput, MangaGenreUncheckedCreateWithoutMangasInput>
    where?: MangaGenreWhereInput
  }

  export type MangaGenreUpdateToOneWithWhereWithoutMangasInput = {
    where?: MangaGenreWhereInput
    data: XOR<MangaGenreUpdateWithoutMangasInput, MangaGenreUncheckedUpdateWithoutMangasInput>
  }

  export type MangaGenreUpdateWithoutMangasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MangaGenreUncheckedUpdateWithoutMangasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AnimeCreateWithoutStudioInput = {
    id?: string
    titleUa?: string | null
    titleEn: string
    titleJp: string
    description: string
    rating: number
    kind: string
    episodes: string
    status: string
    dateRelease?: Date | string | null
    imageUrl: string
    genres?: AnimeGenreOnAnimeCreateNestedManyWithoutAnimeInput
  }

  export type AnimeUncheckedCreateWithoutStudioInput = {
    id?: string
    titleUa?: string | null
    titleEn: string
    titleJp: string
    description: string
    rating: number
    kind: string
    episodes: string
    status: string
    dateRelease?: Date | string | null
    imageUrl: string
    genres?: AnimeGenreOnAnimeUncheckedCreateNestedManyWithoutAnimeInput
  }

  export type AnimeCreateOrConnectWithoutStudioInput = {
    where: AnimeWhereUniqueInput
    create: XOR<AnimeCreateWithoutStudioInput, AnimeUncheckedCreateWithoutStudioInput>
  }

  export type AnimeCreateManyStudioInputEnvelope = {
    data: AnimeCreateManyStudioInput | AnimeCreateManyStudioInput[]
    skipDuplicates?: boolean
  }

  export type AnimeUpsertWithWhereUniqueWithoutStudioInput = {
    where: AnimeWhereUniqueInput
    update: XOR<AnimeUpdateWithoutStudioInput, AnimeUncheckedUpdateWithoutStudioInput>
    create: XOR<AnimeCreateWithoutStudioInput, AnimeUncheckedCreateWithoutStudioInput>
  }

  export type AnimeUpdateWithWhereUniqueWithoutStudioInput = {
    where: AnimeWhereUniqueInput
    data: XOR<AnimeUpdateWithoutStudioInput, AnimeUncheckedUpdateWithoutStudioInput>
  }

  export type AnimeUpdateManyWithWhereWithoutStudioInput = {
    where: AnimeScalarWhereInput
    data: XOR<AnimeUpdateManyMutationInput, AnimeUncheckedUpdateManyWithoutStudioInput>
  }

  export type AnimeScalarWhereInput = {
    AND?: AnimeScalarWhereInput | AnimeScalarWhereInput[]
    OR?: AnimeScalarWhereInput[]
    NOT?: AnimeScalarWhereInput | AnimeScalarWhereInput[]
    id?: StringFilter<"Anime"> | string
    titleUa?: StringNullableFilter<"Anime"> | string | null
    titleEn?: StringFilter<"Anime"> | string
    titleJp?: StringFilter<"Anime"> | string
    description?: StringFilter<"Anime"> | string
    rating?: FloatFilter<"Anime"> | number
    kind?: StringFilter<"Anime"> | string
    episodes?: StringFilter<"Anime"> | string
    status?: StringFilter<"Anime"> | string
    dateRelease?: DateTimeNullableFilter<"Anime"> | Date | string | null
    imageUrl?: StringFilter<"Anime"> | string
    studioId?: StringFilter<"Anime"> | string
  }

  export type MangaCreateWithoutPublisherInput = {
    id?: string
    titleUa: string
    titleEn: string
    titleJp: string
    description: string
    kind: string
    chapters: string
    volumes: string
    dateRelease?: Date | string | null
    status: string
    imageUrl: string
    genres?: MangaGenreOnMangaCreateNestedManyWithoutMangaInput
  }

  export type MangaUncheckedCreateWithoutPublisherInput = {
    id?: string
    titleUa: string
    titleEn: string
    titleJp: string
    description: string
    kind: string
    chapters: string
    volumes: string
    dateRelease?: Date | string | null
    status: string
    imageUrl: string
    genres?: MangaGenreOnMangaUncheckedCreateNestedManyWithoutMangaInput
  }

  export type MangaCreateOrConnectWithoutPublisherInput = {
    where: MangaWhereUniqueInput
    create: XOR<MangaCreateWithoutPublisherInput, MangaUncheckedCreateWithoutPublisherInput>
  }

  export type MangaCreateManyPublisherInputEnvelope = {
    data: MangaCreateManyPublisherInput | MangaCreateManyPublisherInput[]
    skipDuplicates?: boolean
  }

  export type MangaUpsertWithWhereUniqueWithoutPublisherInput = {
    where: MangaWhereUniqueInput
    update: XOR<MangaUpdateWithoutPublisherInput, MangaUncheckedUpdateWithoutPublisherInput>
    create: XOR<MangaCreateWithoutPublisherInput, MangaUncheckedCreateWithoutPublisherInput>
  }

  export type MangaUpdateWithWhereUniqueWithoutPublisherInput = {
    where: MangaWhereUniqueInput
    data: XOR<MangaUpdateWithoutPublisherInput, MangaUncheckedUpdateWithoutPublisherInput>
  }

  export type MangaUpdateManyWithWhereWithoutPublisherInput = {
    where: MangaScalarWhereInput
    data: XOR<MangaUpdateManyMutationInput, MangaUncheckedUpdateManyWithoutPublisherInput>
  }

  export type MangaScalarWhereInput = {
    AND?: MangaScalarWhereInput | MangaScalarWhereInput[]
    OR?: MangaScalarWhereInput[]
    NOT?: MangaScalarWhereInput | MangaScalarWhereInput[]
    id?: StringFilter<"Manga"> | string
    titleUa?: StringFilter<"Manga"> | string
    titleEn?: StringFilter<"Manga"> | string
    titleJp?: StringFilter<"Manga"> | string
    description?: StringFilter<"Manga"> | string
    kind?: StringFilter<"Manga"> | string
    chapters?: StringFilter<"Manga"> | string
    volumes?: StringFilter<"Manga"> | string
    dateRelease?: DateTimeNullableFilter<"Manga"> | Date | string | null
    status?: StringFilter<"Manga"> | string
    imageUrl?: StringFilter<"Manga"> | string
    publisherId?: StringFilter<"Manga"> | string
  }

  export type AnimeGenreOnAnimeCreateManyAnimeInput = {
    genreId: string
  }

  export type AnimeGenreOnAnimeUpdateWithoutAnimeInput = {
    genre?: AnimeGenreUpdateOneRequiredWithoutAnimesNestedInput
  }

  export type AnimeGenreOnAnimeUncheckedUpdateWithoutAnimeInput = {
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type AnimeGenreOnAnimeUncheckedUpdateManyWithoutAnimeInput = {
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type MangaGenreOnMangaCreateManyMangaInput = {
    genreId: string
  }

  export type MangaGenreOnMangaUpdateWithoutMangaInput = {
    genre?: MangaGenreUpdateOneRequiredWithoutMangasNestedInput
  }

  export type MangaGenreOnMangaUncheckedUpdateWithoutMangaInput = {
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type MangaGenreOnMangaUncheckedUpdateManyWithoutMangaInput = {
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type AnimeGenreOnAnimeCreateManyGenreInput = {
    animeId: string
  }

  export type AnimeGenreOnAnimeUpdateWithoutGenreInput = {
    anime?: AnimeUpdateOneRequiredWithoutGenresNestedInput
  }

  export type AnimeGenreOnAnimeUncheckedUpdateWithoutGenreInput = {
    animeId?: StringFieldUpdateOperationsInput | string
  }

  export type AnimeGenreOnAnimeUncheckedUpdateManyWithoutGenreInput = {
    animeId?: StringFieldUpdateOperationsInput | string
  }

  export type MangaGenreOnMangaCreateManyGenreInput = {
    mangaId: string
  }

  export type MangaGenreOnMangaUpdateWithoutGenreInput = {
    manga?: MangaUpdateOneRequiredWithoutGenresNestedInput
  }

  export type MangaGenreOnMangaUncheckedUpdateWithoutGenreInput = {
    mangaId?: StringFieldUpdateOperationsInput | string
  }

  export type MangaGenreOnMangaUncheckedUpdateManyWithoutGenreInput = {
    mangaId?: StringFieldUpdateOperationsInput | string
  }

  export type AnimeCreateManyStudioInput = {
    id?: string
    titleUa?: string | null
    titleEn: string
    titleJp: string
    description: string
    rating: number
    kind: string
    episodes: string
    status: string
    dateRelease?: Date | string | null
    imageUrl: string
  }

  export type AnimeUpdateWithoutStudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleUa?: NullableStringFieldUpdateOperationsInput | string | null
    titleEn?: StringFieldUpdateOperationsInput | string
    titleJp?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    kind?: StringFieldUpdateOperationsInput | string
    episodes?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dateRelease?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    genres?: AnimeGenreOnAnimeUpdateManyWithoutAnimeNestedInput
  }

  export type AnimeUncheckedUpdateWithoutStudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleUa?: NullableStringFieldUpdateOperationsInput | string | null
    titleEn?: StringFieldUpdateOperationsInput | string
    titleJp?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    kind?: StringFieldUpdateOperationsInput | string
    episodes?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dateRelease?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    genres?: AnimeGenreOnAnimeUncheckedUpdateManyWithoutAnimeNestedInput
  }

  export type AnimeUncheckedUpdateManyWithoutStudioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleUa?: NullableStringFieldUpdateOperationsInput | string | null
    titleEn?: StringFieldUpdateOperationsInput | string
    titleJp?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    kind?: StringFieldUpdateOperationsInput | string
    episodes?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    dateRelease?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type MangaCreateManyPublisherInput = {
    id?: string
    titleUa: string
    titleEn: string
    titleJp: string
    description: string
    kind: string
    chapters: string
    volumes: string
    dateRelease?: Date | string | null
    status: string
    imageUrl: string
  }

  export type MangaUpdateWithoutPublisherInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleUa?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    titleJp?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    chapters?: StringFieldUpdateOperationsInput | string
    volumes?: StringFieldUpdateOperationsInput | string
    dateRelease?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    genres?: MangaGenreOnMangaUpdateManyWithoutMangaNestedInput
  }

  export type MangaUncheckedUpdateWithoutPublisherInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleUa?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    titleJp?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    chapters?: StringFieldUpdateOperationsInput | string
    volumes?: StringFieldUpdateOperationsInput | string
    dateRelease?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    genres?: MangaGenreOnMangaUncheckedUpdateManyWithoutMangaNestedInput
  }

  export type MangaUncheckedUpdateManyWithoutPublisherInput = {
    id?: StringFieldUpdateOperationsInput | string
    titleUa?: StringFieldUpdateOperationsInput | string
    titleEn?: StringFieldUpdateOperationsInput | string
    titleJp?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    chapters?: StringFieldUpdateOperationsInput | string
    volumes?: StringFieldUpdateOperationsInput | string
    dateRelease?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
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