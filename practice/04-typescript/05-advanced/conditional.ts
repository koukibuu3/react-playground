type User2 = { id: unknown }
type NewUser = User2 & { id: string }
type OldUser = User2 & { id: number }
type Book = { isbn: string }

type IdOf<T> = T extends User2 ? T['id'] : never

type NewUserId = IdOf<NewUser>
type OldUserId = IdOf<OldUser>
type BookId = IdOf<Book>
