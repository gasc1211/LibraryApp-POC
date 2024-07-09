import { int, text, varchar, mysqlTable } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  userId: int("user_id").primaryKey().autoincrement(),
  firstName: varchar("first_name", { length: 25 }),
  lastName: varchar("last_name", { length: 25 }),
  email: varchar("email", { length: 40 }).notNull().unique(),
  account: varchar("account", { length: 11 }).notNull(),
});

export type NewUser = typeof users.$inferInsert;
export type User = typeof users.$inferSelect;

// export const books = mysqlTable("books", {
//   bookId: int("book_id").primaryKey().autoincrement(),
//   title: varchar("title", { length: 40 }),
//   description: text("description"),
//   edition: int("edition"),
//   year: int("year"),
//   publisher: varchar("publisher", { length: 30 }),
//   language: varchar("language", { length: 15 }),
//   isbn: varchar("isbn", { length: 13 }).unique().notNull(),
//   amount: int("amount")
// });

// export type NewBook = typeof books.$inferInsert;
// export type Book = typeof books.$inferSelect;

// export const authors = mysqlTable("authors", {
//   authorId: int("author_id").primaryKey().autoincrement(),
//   firstName: text("first_name"),
//   lastName: text("last_name"),
// });

// Reputación
// Tipo de Usuario???

// export type NewAuthor = typeof authors.$inferInsert;
// export type Author = typeof authors.$inferSelect;

// There can be more than one author per book
// 
// export const authorsPerBook = mysqlTable("authors_per_book", {
  
// });

// export const reserves = mysqlTable("reserves", {
//   bookId: int("book_id").references(() => books.bookId),
//   userId: int("user_id").references(() => users.userId),
// });
